import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { createServer } from 'vite';
import { chromium } from 'playwright';

const key='azure-cert-trainer-2026-v3';
const server=await createServer({server:{host:'127.0.0.1',port:0}});
const storyRoot=path.resolve('storybook-static');
const storyServer=http.createServer(async(req,res)=>{const file=path.resolve(storyRoot,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(storyRoot+path.sep)){res.writeHead(403).end();return;}try{res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png'})[path.extname(file)]||'application/octet-stream');res.end(await fs.readFile(file));}catch{res.writeHead(404).end();}});
let browser;
try{
  await server.listen();await new Promise(resolve=>storyServer.listen(0,'127.0.0.1',resolve));browser=await chromium.launch();
  const url=server.resolvedUrls.local[0];
  for(const theme of ['light','dark'])for(const width of [390,768,1440]){
    const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});
    await context.addInitScript(({key,theme})=>{localStorage.setItem(key,JSON.stringify({theme,states:{az104:{notes:{sentinel:'Preserved'},favorites:{sentinel:true},answers:{},examHistory:[]},az305:{notes:{sentinel:'Other course'}}}}));localStorage.setItem(key+'-onboarding-v1','1');},{key,theme});
    const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(url);await p.locator('[data-mode=study]').click();
    const submit=width<=920?'#mobileSubmitButton':'#submit',next=width<=920?'#mobileNextButton':'#next',prev=width<=920?'#mobilePreviousButton':'#prev';
    assert(await p.locator(submit).isVisible());assert(await p.locator(next).isHidden());assert(await p.locator(prev).isHidden());assert(await p.locator('#search').isHidden());
    const labels=await p.locator('.ui-training-toolbar>button').allTextContents();assert.deepEqual(labels,['Toutes les questions','Réinitialiser']);
    assert(await p.locator('.card-header #focusToggleButton').isVisible());
    assert((await p.locator('#questionPrompt').evaluate(n=>getComputedStyle(n).fontFamily)).includes('Manrope'),'Native question must use the approved display typeface');
    await p.locator('#choices [data-choice="2"]').click();await p.locator('#focusToggleButton').click();assert(await p.locator('#choices [data-choice="2"] input').isChecked());assert(await p.locator('#focusToggleButton').isVisible());await p.keyboard.press('Escape');assert(!await p.locator('body').evaluate(n=>n.classList.contains('focus-mode')));
    await p.locator(submit).click();await p.locator('#feedback').waitFor({state:'visible'});assert(await p.locator(submit).isHidden());assert(await p.locator(next).isVisible());assert(await p.locator(prev).isDisabled());
    assert.equal(await p.locator('#next').getAttribute('class').then(s=>s.includes('ui-button--primary')),true);
    const saved=await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states,key);await p.locator(next).click();await p.locator('#questionId').filter({hasText:'T1-Q2'}).waitFor();assert(await p.evaluate(()=>document.getAnimations().some(a=>a.effect.getComputedTiming().duration===180)),'Next question uses the Normal motion token');await p.keyboard.press('ArrowLeft');assert.equal(await p.locator('#questionId').innerText(),'T1-Q1');
    await p.locator('.ui-domain-selector>button').click();await p.locator('.ui-domain-selector [role=option]').nth(2).click();await p.locator('#resetFilter').click();assert.equal(await p.locator('.ui-domain-selector>button').innerText().then(s=>s.replace('▾','').trim()),'Tous les domaines');
    assert.deepEqual(await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.answers,key),saved.az104.answers);
    assert.deepEqual(await p.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az305,key),saved.az305);
    if(theme==='light'&&width===1440){
      const last=await p.evaluate(()=>{const q=window.AZ104_QUESTIONS.at(-1);return{id:q.id,indices:q.answerIndices}});
      await p.locator('#questionNavigatorButton').click();await p.locator('#questionNavigatorSearch').fill(last.id);await p.locator(`[data-jump-id="${last.id}"]`).click();
      assert(await p.locator('#next').isDisabled(),'Last question must not advance outside the selection');
      for(const index of last.indices)await p.locator(`#choices [data-choice="${index}"]`).click();await p.locator('#submit').click();
      assert(await p.locator('#next').isVisible());assert(await p.locator('#next').isDisabled());await p.keyboard.press('ArrowRight');assert.equal(await p.locator('#questionId').innerText(),last.id);
    }
    for(const language of ['fr','en']){
      if(language==='en')await p.locator('#languageToggle').click();
      await p.locator('#globalSearch').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'globalSearch');assert.equal(await p.locator('#globalSearch').evaluate(n=>getComputedStyle(n).outlineWidth),'0px');
      assert.notEqual(await p.locator('.ui-search-bar').evaluate(n=>getComputedStyle(n).boxShadow),'none');
      await p.keyboard.press('Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'languageToggle');await p.keyboard.press('Shift+Tab');assert.equal(await p.evaluate(()=>document.activeElement.id),'globalSearch');
      await p.locator('#languageToggle').focus();await p.keyboard.press('Control+k');assert.equal(await p.evaluate(()=>document.activeElement.id),'globalSearch');await p.keyboard.press('Meta+k');assert.equal(await p.evaluate(()=>document.activeElement.id),'globalSearch');
      await p.locator('#globalSearch').fill('T1-Q1');await p.keyboard.press('Escape');assert.equal(await p.locator('#globalSearch').inputValue(),'');
    }
    await p.locator('#languageToggle').click();await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:`test-results/training-flow-${theme}-${width}.png`});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Horizontal overflow');
    assert.deepEqual(errors,[]);await context.close();console.log('Training flow OK',theme,width,'FR/EN');
  }
  const p=await browser.newPage({reducedMotion:'reduce',viewport:{width:1440,height:900}});await p.addInitScript(key=>{localStorage.setItem(key+'-onboarding-v1','1')},key);await p.goto(url);await p.locator('[data-mode=study]').click();await p.locator('#choices [data-choice="2"]').click();await p.locator('#submit').click();await p.locator('#next').click();assert.equal(await p.locator('#questionId').innerText(),'T1-Q2');assert.equal(await p.evaluate(()=>document.getAnimations().length),0,'Reduced motion must be immediate');await p.close();
  const stories=['components-searchbar--focus','patterns-questionworkspace--validated-correct','patterns-questionworkspace--validated-incorrect','patterns-questionworkspace--focus-mode','patterns-trainingtoolbar--filters-open','components-progress--updating'];
  for(const id of stories){const p=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(`http://127.0.0.1:${storyServer.address().port}/iframe.html?id=${id}&globals=theme:light`);await p.locator('#storybook-root>*').waitFor();await p.waitForTimeout(200);assert.deepEqual(errors,[],id);if(id.includes('validated')){assert(await p.locator('.ui-question-card__submit').isHidden());assert(await p.locator('.ui-question-card__footer-nav .ui-button--primary').isVisible());}if(id.endsWith('focus-mode'))assert(await p.locator('.ui-question-card__focus').isVisible());await p.close();}
  for(const theme of ['light','dark']){
    const p=await browser.newPage({viewport:{width:390,height:900}});await p.goto(`http://127.0.0.1:${storyServer.address().port}/iframe.html?id=patterns-questionworkspace--selected&globals=theme:${theme}`);await p.locator('.ui-question-card__submit').waitFor();
    const caption=await p.locator('.ui-question-card__position').boundingBox(),cta=await p.locator('.ui-question-card__submit').boundingBox();assert(cta.y>=caption.y+caption.height,'Mobile CTA must be below its position caption');assert(cta.y+cta.height<=828,'Mobile CTA must remain above navigation');
    await p.locator('.ui-question-card__submit').click();assert(await p.locator('.ui-question-card__submit').isHidden());await p.locator('.ui-question-card__footer-nav .ui-button--primary').click();assert.match(await p.locator('.ui-question-card__eyebrow').innerText(),/Question 13/);await p.close();
  }
  const manifest=JSON.parse(await fs.readFile('manifest.webmanifest','utf8'));for(const icon of manifest.icons){const data=await fs.readFile(icon.src);assert.equal(data.readUInt32BE(16),Number(icon.sizes.split('x')[0]));}for(const size of [16,32,48]){const data=await fs.readFile(`assets/favicon-${size}.png`);assert.equal(data.readUInt32BE(16),size);}console.log('Stories, reduced motion and favicon/PWA assets OK');
}finally{await browser?.close();await server.close();await new Promise(resolve=>storyServer.close(resolve));}
