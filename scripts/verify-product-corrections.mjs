import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {createServer} from 'vite';
import {chromium} from 'playwright';
const key='azure-cert-trainer-2026-v3', context={window:{}};
vm.runInNewContext(await fs.readFile('questions.js','utf8'),context);
const bank=context.window.AZ104_QUESTIONS, ids=[...new Set(Array.from({length:42},(_,i)=>bank[Math.min(i*13,bank.length-1)].id))];
const targetDomain=bank.find(q=>q.id.startsWith('T2-')).domain;
const server=await createServer({server:{host:'127.0.0.1',port:0}});let browser;
try{await server.listen();browser=await chromium.launch();await fs.mkdir('test-results',{recursive:true});
for(const theme of ['light','dark'])for(const language of ['fr','en'])for(const [width,height] of [[1366,768],[1440,900],[768,1024],[390,844]]){
 const browserContext=await browser.newContext({viewport:{width,height},colorScheme:theme});
 await browserContext.addInitScript(({key,theme,language,ids})=>{if(localStorage.getItem(key))return;localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme,states:{az104:{lastId:'T1-Q1',seen:{'T1-Q2':true},answers:{'T1-Q3':{done:true,correct:false}},favorites:Object.fromEntries(ids.map(id=>[id,true])),notes:{'T1-Q2':'Preserved note'},examHistory:[]},az305:{notes:{sentinel:'Other course preserved'}}}}));localStorage.setItem(key+'-language',language);localStorage.setItem(key+'-onboarding-v1','1');},{key,theme,language,ids});
 const page=await browserContext.newPage(), errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(server.resolvedUrls.local[0]);await page.locator('#courseHubHeading').waitFor();await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(80);
 if(width>1000&&await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight+1)){await page.screenshot({path:'test-results/corrections-home-fit-failure.png',fullPage:true});console.log(await page.evaluate(()=>({height:document.documentElement.scrollHeight,children:[...document.querySelector('#dashboard').children].map(x=>({id:x.id,c:x.className,h:x.getBoundingClientRect().height,y:x.getBoundingClientRect().y}))})));}
 if(width>1000)assert(await page.evaluate(()=>document.documentElement.scrollHeight<=innerHeight+1),'Home must fit '+width+' '+theme+' '+language);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Home horizontal overflow');
 const frame=await page.locator('#mainContent').boundingBox();await page.screenshot({path:'test-results/corrections-home-'+theme+'-'+language+'-'+width+'.png',fullPage:true});
 await page.locator('[data-mode="study"]').first().click();await page.locator('#choices [data-choice="2"]').click();
 const question=await page.locator('#questionPrompt').innerText(), selection=await page.locator('#choices [data-choice="2"] input').isChecked();assert.equal(selection,true);
 await page.locator('#languageToggle').click();await page.locator('#languageToggle').click();await page.waitForTimeout(80);await page.locator('#topbarThemeButton').click();await page.locator('#topbarThemeButton').click();
 assert.equal(await page.locator('#questionPrompt').innerText(),question);assert.equal(await page.locator('#choices [data-choice="2"] input').isChecked(),true);
 assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),theme);assert.equal(await page.evaluate(()=>document.documentElement.lang),language);
 const studyFrame=await page.locator('#mainContent').boundingBox();assert.equal(studyFrame.x,frame.x);assert.equal(studyFrame.width,frame.width);
 if(width>1000){await page.locator('.v2-topbar-search__shortcut').click({force:true});assert.equal(await page.evaluate(()=>document.activeElement.id),'globalSearch');await page.keyboard.press('Control+k');assert.equal(await page.evaluate(()=>document.activeElement.id),'globalSearch');assert.equal(await page.locator('#globalSearch').evaluate(n=>getComputedStyle(n).outlineWidth),'0px');}
 await page.locator('#noteButton').focus();await page.locator('#ui-action-tooltip').waitFor();const tooltip=await page.locator('#ui-action-tooltip').boundingBox();assert(tooltip.x>=0&&tooltip.x+tooltip.width<=width,'tooltip constrained');await page.keyboard.press('Escape');assert(await page.locator('#ui-action-tooltip').isHidden());
 await page.locator(width<=920?'#mobileSubmitButton':'#submit').click();assert(await page.locator('#feedback').isVisible());assert(!(await page.locator('#feedback').innerText()).includes('Le support contient des variantes'));
 await page.locator('#noteButton').click();await page.locator('#questionNote').fill('New note preserved');await page.locator('#modalAction').click();
 await page.locator('#reportButton').click();await page.locator('#reportComment').fill('Review this explanation');await page.locator('#modalAction').click();
 await page.locator('[data-mode="mistakes"]').first().click();assert.equal(await page.locator('#mistakesQueue [data-mistake-q]').count(),8);await page.locator('#reviewPagination button').last().click();assert.match(await page.locator('#reviewPagination .ui-pagination__count').innerText(),/^9–16/);
 const first=await page.locator('#mistakesQueue [data-mistake-q]').first().getAttribute('data-mistake-q');await page.locator('#mistakesQueue [data-mistake-q]').first().click();await page.locator('[data-mode="mistakes"]').first().click();assert.equal(await page.locator('#mistakesQueue [data-mistake-q]').first().getAttribute('data-mistake-q'),first);
 await page.locator('#reviewDomainFilter').selectOption(targetDomain);const expected=ids.map(id=>bank.find(q=>q.id===id)).filter(q=>q.domain===targetDomain).length;assert.equal(await page.locator('#mistakesQueue [data-mistake-q]').count(),Math.min(8,expected));
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Reviews horizontal overflow');await page.screenshot({path:'test-results/corrections-reviews-'+theme+'-'+language+'-'+width+'.png',fullPage:true});
 await page.reload();await page.locator('#courseHubHeading').waitFor();const stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key);assert.equal(stored.states.az104.notes['T1-Q1'],'New note preserved');assert.equal(stored.states.az104.notes['T1-Q2'],'Preserved note');assert.equal(stored.states.az305.notes.sentinel,'Other course preserved');assert(stored.states.az104.reports.some(r=>r.questionId==='T1-Q1'));assert.equal(stored.theme,theme);
 await page.locator('#settingsButton').click();await page.locator('[data-settings-target="#appSettings"]').click();await page.locator('#installAppButton').click();assert(await page.locator('#modal').isVisible(),'Unavailable install has explicit help');await page.locator('#modalClose').click();
 await page.evaluate(()=>{const event=new Event('beforeinstallprompt');event.prompt=async()=>{window.__installCalls=(window.__installCalls||0)+1};event.userChoice=Promise.resolve({outcome:'dismissed'});window.dispatchEvent(event)});await page.locator('#installAppButton').click();assert.equal(await page.evaluate(()=>window.__installCalls),1);assert.equal(await page.locator('#installStatus').getAttribute('data-state'),'manual');await page.locator('#installAppButton').click();assert.equal(await page.evaluate(()=>window.__installCalls),1);await page.locator('#modalClose').click();
 await page.evaluate(()=>window.dispatchEvent(new Event('appinstalled')));assert.equal(await page.locator('#installStatus').getAttribute('data-state'),'installed');assert(await page.locator('#installAppButton').isDisabled());
 assert.deepEqual(errors,[]);console.log('Corrections OK',theme,language,width,height);await browserContext.close();
}
// An active exam keeps its identity, drafts, clock origin and answers through presentation changes.
const examPage=await browser.newPage({viewport:{width:1440,height:900}});
await examPage.addInitScript(({key,ids})=>{if(localStorage.getItem(key))return;localStorage.setItem(key+'-onboarding-v1','1');localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme:'light',states:{az104:{exam:{version:3,ids,index:0,start:Date.now(),duration:600000,answers:{},drafts:{},flagged:{}}}}}));},{key,ids:bank.slice(0,3).map(q=>q.id)});
await examPage.goto(server.resolvedUrls.local[0]);await examPage.locator('#choices [data-choice="1"]').click();
const examBefore=await examPage.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key),examQuestion=await examPage.locator('#questionPrompt').innerText();
await examPage.locator('#languageToggle').click();await examPage.locator('#languageToggle').click();await examPage.locator('#topbarThemeButton').click();await examPage.locator('#topbarThemeButton').click();
const examAfter=await examPage.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key);assert.deepEqual(examAfter,examBefore);assert.equal(await examPage.locator('#questionPrompt').innerText(),examQuestion);assert(await examPage.locator('#choices [data-choice="1"] input').isChecked());assert(await examPage.locator('#sessionClock').isVisible());await examPage.reload();assert(await examPage.locator('#choices [data-choice="1"] input').isChecked());await examPage.close();console.log('Active exam: identity, answers, drafts, clock origin and reload preserved across FR/EN and theme changes.');
// 200% CSS viewport equivalent: content must remain reachable through normal scroll.
const page=await browser.newPage({viewport:{width:683,height:384}});await page.addInitScript(key=>localStorage.setItem(key+'-onboarding-v1','1'),key);await page.goto(server.resolvedUrls.local[0]);await page.locator('#courseHubHeading').waitFor();assert(await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight&&document.documentElement.scrollWidth<=innerWidth+1));await page.screenshot({path:'test-results/corrections-zoom-200-equivalent.png',fullPage:true});
console.log('PWA: prompt events simulated; native installation not performed in headless Chromium.');
}finally{await browser?.close();await server.close();}
