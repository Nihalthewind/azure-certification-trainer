import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {createServer} from 'vite';
import {chromium} from 'playwright';

const scope={window:{}};
for(const file of ['questions.js','az305_questions.js'])vm.runInNewContext(await fs.readFile(file,'utf8'),scope);
const banks=[scope.window.AZ104_QUESTIONS,scope.window.AZ305_QUESTIONS],all=banks.flat();
assert.deepEqual(banks.map(b=>b.length),[568,286]);
assert.equal(new Set(all.map(q=>q.id)).size,854);
for(const q of all){
 assert.notEqual(q.autoScorable,false,q.id+' must be automatically scored');
 assert.notEqual(q.visualSpec?.kind,'self',q.id+' still requires self grading');
 if(q.visualSpec?.kind==='rows')for(const row of q.visualSpec.rows){assert(row.choices.length>=2,q.id);assert(row.choices.includes(row.expected),q.id+' expected choice missing');}
 if(q.visualSpec?.kind==='yn'){assert.equal(q.visualSpec.labels.length,q.visualSpec.expected.length,q.id);assert(q.visualSpec.labels.every(l=>!/^Ligne \d|^Statement \d|^Proposition \d/i.test(l)),q.id+' generic statement');}
 for(const [url,crop]of Object.entries(q.assetCrops||{})){assert(q.assets.includes(url));assert(crop.x>=0&&crop.y>=0&&crop.width>0&&crop.height>0&&crop.x+crop.width<=crop.sourceWidth&&crop.y+crop.height<=crop.sourceHeight,q.id+' crop outside original');await fs.access(url);}
 assert((q.answerAreaAssets||[]).every(url=>q.assets.includes(url)),q.id);
}
const get=id=>all.find(q=>q.id===id);
assert.match(get('T2-Q26').explanation,/Load Balancer interne/);
assert.deepEqual(Array.from(get('T4-Q41').answerIndices),[1,3]);
assert.equal(get('T4-Q83').visualSpec.rows[1].expected,'--max-surge 2');
assert.deepEqual(Array.from(get('T2-Q95').visualSpec.expected),[false,false,false]);
assert.equal(get('T5-Q20').visualSpec.rows[1].expected,'add a subnet');
assert.equal(get('AZ305-T2-Q28').visualSpec.rows[1].expected,'Avro');
assert.equal(get('AZ305-T1-Q12').visualSpec.rows.length,3);
console.log('854 questions: native choices, statement labels and crop bounds OK');

const key='azure-cert-trainer-2026-v3',server=await createServer({server:{host:'127.0.0.1',port:0}});let browser;
try{
 await server.listen();browser=await chromium.launch();await fs.mkdir('test-results',{recursive:true});
 for(const theme of ['light','dark'])for(const width of [390,768,1440]){
  const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme,hasTouch:true});
  await context.addInitScript(({key,theme})=>{localStorage.setItem(key,JSON.stringify({theme,activeTraining:'az104',states:{az104:{notes:{sentinel:'Preserved'},favorites:{sentinel:true},answers:{},examHistory:[]},az305:{notes:{sentinel:'Other course'}}}}));localStorage.setItem(key+'-onboarding-v1','1');},{key,theme});
  const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(server.resolvedUrls.local[0]);await p.locator('[data-mode=study]').first().click();
  async function jump(id){await p.locator('#questionNavigatorButton').click();await p.locator('#questionNavigatorSearch').fill(id);await p.locator('[data-jump-id="'+id+'"]').click();await p.locator('#questionId').filter({hasText:id}).waitFor();}
  await jump('T2-Q31');assert.equal(await p.locator('#choices select[data-row]').count(),2);assert.equal(await p.locator('#choices input[type=text]').count(),0);
  const q=get('T2-Q31');for(let i=0;i<q.visualSpec.rows.length;i++)await p.locator('#choices select[data-row="'+i+'"]').selectOption(q.visualSpec.rows[i].expected);
  await p.locator(width<=920?'#mobileSubmitButton':'#submit').click();await p.locator('#feedback').waitFor({state:'visible'});
  assert(await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.answers['T2-Q31'].correct,key),'Native choice scoring');
  assert.equal(await p.locator('#feedback img').count(),0,'Marked correction illustration is hidden');
  await jump('T2-Q88');let popups=0;p.on('popup',()=>popups++);if(!await p.locator('#figures details').evaluate(n=>n.open))await p.locator('#figures summary').click();await p.locator('#figures a').first().click();
  const body=p.locator('.ui-document-reader__body'),reader=p.locator('.ui-document-reader');await reader.waitFor({state:'visible'});await body.locator('img').evaluate(im=>im.decode());
  assert.equal(await reader.locator('[data-reader-action=hand]').getAttribute('aria-pressed'),'true');assert.equal(await body.locator('.ui-source-illustration').count(),1);
  const handButton=reader.locator('[data-reader-action=hand]');
  assert.equal(await handButton.evaluate(n=>getComputedStyle(n).borderTopColor),await body.evaluate(n=>{const probe=document.createElement('span');probe.style.color='var(--color-accent)';n.append(probe);const color=getComputedStyle(probe).color;probe.remove();return color;}),'Active hand uses the accent token');
  for(let i=0;i<8;i++)await reader.locator('[data-reader-action=zoom-in]').click();
  await body.evaluate(n=>{n.scrollLeft=100;n.scrollTop=20;});const old=await body.evaluate(n=>({x:n.scrollLeft,y:n.scrollTop})),box=await body.boundingBox();
  await p.mouse.move(box.x+box.width*.7,box.y+70);await p.mouse.down();await p.mouse.move(box.x+box.width*.7-45,box.y+40,{steps:4});await p.mouse.up();
  const moved=await body.evaluate(n=>({x:n.scrollLeft,y:n.scrollTop}));assert(moved.x>old.x+30,'Horizontal hand pan');assert(moved.y>=old.y,'Vertical hand pan');
  await handButton.click();assert.equal(await handButton.getAttribute('aria-pressed'),'false');
  const disabledX=await body.evaluate(n=>n.scrollLeft);await p.mouse.move(box.x+box.width*.7,box.y+70);await p.mouse.down();await p.mouse.move(box.x+box.width*.7-30,box.y+70);await p.mouse.up();assert.equal(await body.evaluate(n=>n.scrollLeft),disabledX,'Inactive hand leaves the document in place');await handButton.click();
  const cdp=await context.newCDPSession(p),touchX=box.x+box.width*.7,touchY=box.y+70;
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:touchX,y:touchY}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:touchX-30,y:touchY-20}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  assert((await body.evaluate(n=>n.scrollLeft))>moved.x+20,'Touch hand pan');await cdp.detach();
  await body.focus();const id=await p.locator('#questionId').innerText(),before=await body.evaluate(n=>n.scrollLeft);await p.keyboard.press('ArrowRight');assert((await body.evaluate(n=>n.scrollLeft))>before);assert.equal(await p.locator('#questionId').innerText(),id,'Reader arrows do not navigate questions');
  await reader.locator('[data-reader-action=fit]').click();assert.deepEqual(await body.evaluate(n=>[n.scrollLeft,n.scrollTop,n.dataset.zoom]),[0,0,'1']);
  assert.equal(popups,0);assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal page overflow');
  await p.screenshot({path:`test-results/source-reader-${theme}-${width}.png`});await p.keyboard.press('Escape');assert(await reader.isHidden());
  const state=await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states,key);assert.equal(state.az104.notes.sentinel,'Preserved');assert.equal(state.az305.notes.sentinel,'Other course');assert(state.az104.favorites.sentinel);assert.deepEqual(errors,[]);
  await jump('T2-Q95');assert.equal(await p.locator('#choices .statement').count(),3);for(let i=0;i<3;i++)await p.locator('#choices button[data-row="'+i+'"][data-val=false]').click();await p.locator(width<=920?'#mobileSubmitButton':'#submit').click();assert(await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.answers['T2-Q95'].correct,key),'Expanded ARM question scoring');
  await context.close();console.log('Source choices and reader OK',theme,width);
 }
}finally{await browser?.close();await server.close();}
