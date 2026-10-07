import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import path from 'node:path';
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
 const bounds=()=>page.evaluate(()=>Object.fromEntries(['.rail','.topbar','.v2-topbar-search','.v2-profile','.ui-page-container:not([hidden]) .ui-page-header'].map(s=>{const n=document.querySelector(s),r=n.getBoundingClientRect();return[s,{x:r.x,y:r.y,width:r.width}]})));
 const shellOrigin=await bounds();
 for(const route of ['study','mistakes','settings','dashboard','study','mistakes','settings','dashboard']){
   await page.locator(route==='settings'?'#settingsButton':'[data-mode="'+route+'"]').first().click();
   assert.equal(await page.locator('.ui-page-container:visible .ui-page-header').count(),1,'Only one normal page active');
   const actual=await bounds();for(const selector of Object.keys(shellOrigin))for(const field of ['x','y','width']){
     if(selector.includes('ui-page-header')&&field==='width')continue;
     assert(Math.abs(actual[selector][field]-shellOrigin[selector][field])<=2,route+' '+selector+' '+field+' moved');
   }
   await page.screenshot({path:'test-results/polish-after-'+route+'-'+theme+'-'+language+'-'+width+'.png',fullPage:true});
 }
 const activity=page.locator('.ui-activities-menu>button');await activity.focus();await page.keyboard.press('ArrowDown');assert.equal(await activity.getAttribute('aria-expanded'),'true');assert.equal(await page.locator('.ui-activities-menu [role=menuitem]:focus').count(),1);
 await page.keyboard.press('Escape');assert(await activity.evaluate(n=>n===document.activeElement));await activity.click();await page.locator('#courseHubHeading').click();assert.equal(await activity.getAttribute('aria-expanded'),'false');
 await activity.click();await page.locator('.ui-activities-menu [role=menuitem]').last().click();assert.equal(await page.locator('[data-review-filter="favorites"]').getAttribute('aria-pressed'),'true');await page.locator('[data-mode="dashboard"]').first().click();
 await activity.focus();await page.keyboard.press('ArrowDown');await page.keyboard.press('Enter');assert(await page.locator('#modal').isVisible());await page.locator('#modalClose').click();
 assert.equal(await page.locator('#dashboardWeaknessButton:visible').count(),0);
 assert.equal(await page.locator('.ui-course-hub__module[aria-expanded="true"]').count(),0);
 for(const trigger of await page.locator('.ui-course-hub__module').all()){const track=trigger.locator('[role=progressbar]'),percent=Number(await track.getAttribute('aria-valuenow'));const t=await track.boundingBox(),f=await track.locator('.ui-course-hub__fill').boundingBox();assert(Math.abs(f.width-t.width*percent/100)<=1);assert((await trigger.innerText()).includes(percent+' %'));}
 const domainTrigger=page.locator('[data-path-domain]').nth(1),chosenDomain=await domainTrigger.getAttribute('data-path-domain');
 await domainTrigger.click();assert.equal(await page.locator('.ui-course-hub__panel:visible').count(),1);await domainTrigger.click();assert.equal(await page.locator('.ui-course-hub__panel:visible').count(),0);
 await page.locator('[data-path-domain]').first().click();await domainTrigger.click();assert.equal(await page.locator('.ui-course-hub__panel:visible').count(),1);
 await page.locator('.ui-course-hub__panel:not([hidden]) .ui-button').click();
 assert.equal(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.studySession.domain,key),chosenDomain);
 await page.locator('[data-mode="dashboard"]').first().click();assert.equal(await domainTrigger.getAttribute('aria-expanded'),'true');
 // Select the seed domain through the same accessible launcher on every viewport.
 await page.locator('[data-path-domain]').first().click();await page.locator('.ui-course-hub__panel:not([hidden]) .ui-button').click();
 await page.locator('#choices [data-choice="2"]').click();
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
 await page.waitForFunction(language=>document.querySelector('#toast').textContent===(language==='en'?'Review mark added.':'Drapeau ajouté.'),language);
 await page.locator('[data-mode="mistakes"]').first().click();
 assert.equal(await page.locator('#mistakesQueue [data-mistake-q]').count(),0,'Reviews contains no question titles');
 await page.locator('[data-review-filter="favorites"]').click();
 assert.match(await page.locator('[data-review-count]').innerText(),new RegExp('^'+ids.length+' '));
 await page.locator('#reviewDomainFilter').selectOption(targetDomain);
 const expectedIds=ids.map(id=>bank.find(q=>q.id===id)).filter(q=>q.domain===targetDomain).map(q=>q.id);
 assert.match(await page.locator('[data-review-count]').innerText(),new RegExp('^'+expectedIds.length+' '));
 await page.locator('#startMistakesSessionButton').click();if(!(await page.locator('#questionNavigatorButton').isVisible()))await page.locator('#filterToggleButton').click();await page.locator('#questionNavigatorButton').click();
 assert.deepEqual(await page.locator('[data-jump-id]').evaluateAll(nodes=>nodes.map(n=>n.dataset.jumpId)),expectedIds);
 await page.locator('#modalClose').click();await page.locator('[data-mode="mistakes"]').first().click();
 await page.locator('[data-review-filter="errors"]').click();await page.locator('#reviewDomainFilter').selectOption(bank.find(q=>q.id.startsWith('T5-')).domain);
 assert.match(await page.locator('[data-review-count]').innerText(),/^0 /);assert(await page.locator('#startMistakesSessionButton').isDisabled());
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
await examPage.goto(server.resolvedUrls.local[0]);assert(await examPage.locator('#app').evaluate(n=>n.inert));await examPage.locator('#startExamButton').click();await examPage.waitForFunction(()=>!!document.querySelector('#sessionClock').textContent&&!document.querySelector('#examIntroductionBackdrop'));
await examPage.locator('#choices [data-choice="1"]').click();
const examBefore=await examPage.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key),examQuestion=await examPage.locator('#questionPrompt').innerText();
assert(await examPage.locator('.rail').isHidden());assert(await examPage.locator('.topbar').isHidden());assert(await examPage.locator('#sessionClock').isVisible());assert(await examPage.locator('#finishExamButton').isVisible());assert(await examPage.locator('#quitExamButton').isVisible());
await examPage.locator('#quitExamButton').click();await examPage.locator('#modalAction').click();await examPage.locator('#languageToggle').click();await examPage.locator('#languageToggle').click();await examPage.locator('#topbarThemeButton').click();await examPage.locator('#topbarThemeButton').click();
await examPage.locator('[data-mode="exam"]').first().click();await examPage.locator('#startExamButton').click();await examPage.waitForFunction(()=>!document.querySelector('#examIntroductionBackdrop'));
const examAfter=await examPage.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key);assert.deepEqual(examAfter,examBefore);assert.equal(await examPage.locator('#questionPrompt').innerText(),examQuestion);assert(await examPage.locator('#choices [data-choice="1"] input').isChecked());
await examPage.reload();await examPage.locator('#startExamButton').click();await examPage.waitForFunction(()=>!document.querySelector('#examIntroductionBackdrop'));assert(await examPage.locator('#choices [data-choice="1"] input').isChecked());
examPage.on('dialog',dialog=>dialog.accept());await examPage.locator('#finishExamButton').click();assert(await examPage.locator('.rail').isVisible());assert(await examPage.locator('.topbar').isVisible());assert(await examPage.locator('#modal').isVisible());await examPage.close();console.log('Active exam: focus, quit/resume, answers, clock, reload and restored shell verified.');
// Hold rendering frames to prove preparation cannot consume exam time.
const preparation=await browser.newPage();await preparation.addInitScript(key=>localStorage.setItem(key+'-onboarding-v1','1'),key);await preparation.goto(server.resolvedUrls.local[0]);await preparation.locator('[data-mode="exam"]').first().click();await preparation.locator('#startExamButton').waitFor();
await preparation.evaluate(()=>{window.__nativeRaf=requestAnimationFrame;window.__frames=[];window.requestAnimationFrame=callback=>(window.__frames.push(callback),window.__frames.length);document.querySelector('#startExamButton').click();document.querySelector('#startExamButton').click();});
assert(await preparation.locator('#startExamButton').isDisabled());assert(await preparation.locator('.ui-exam-introduction').evaluate(n=>n.getAttribute('aria-busy')==='true'));
await preparation.evaluate(()=>window.__frames.splice(0).forEach(callback=>callback(performance.now())));await preparation.waitForFunction(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam?.ids?.length,key);
const prepared=await preparation.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key);assert.equal(prepared.start,null);assert.equal(prepared.ids.length,48);await preparation.waitForTimeout(200);assert.equal(await preparation.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam.start,key),null);
const readyAt=Date.now();await preparation.evaluate(()=>{window.requestAnimationFrame=window.__nativeRaf;window.__frames.splice(0).forEach(callback=>requestAnimationFrame(callback));});await preparation.waitForFunction(()=>!!document.querySelector('#sessionClock').textContent&&!document.querySelector('#examIntroductionBackdrop'));
const running=await preparation.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam,key);assert(running.start>=readyAt);assert.deepEqual(running.ids,prepared.ids);await preparation.close();
const unavailable=await browser.newPage();await unavailable.addInitScript(key=>{localStorage.setItem(key+'-onboarding-v1','1');localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme:'light',states:{az104:{notes:{sentinel:'Keep me'},exam:{version:3,ids:['UNAVAILABLE-ID'],index:0,start:Date.now(),duration:600000,answers:{},drafts:{},flagged:{}}}}}));},key);await unavailable.goto(server.resolvedUrls.local[0]);await unavailable.locator('#startExamButton').click();await unavailable.locator('.ui-exam-introduction [role=alert]').waitFor();assert(!(await unavailable.locator('#startExamButton').isDisabled()));await unavailable.locator('[data-exam-back]').click();assert(await unavailable.locator('.rail').isVisible());assert.equal(await unavailable.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.notes.sentinel,key),'Keep me');await unavailable.close();console.log('Exam preparation: no timer before usable question, double-start guarded, recoverable failure preserves data.');
// Real browser zoom via an extension installed only in disposable Chromium contexts.
const extension=path.resolve('test-results/zoom-extension');await fs.mkdir(extension,{recursive:true});
await fs.writeFile(path.join(extension,'manifest.json'),JSON.stringify({manifest_version:3,name:'Azure Trainer isolated zoom check',version:'1.0',permissions:['tabs'],background:{service_worker:'background.js'}}));
await fs.writeFile(path.join(extension,'background.js'),'chrome.runtime.onInstalled.addListener(()=>{});');
for(const theme of ['light','dark'])for(const language of ['fr','en']){
 const zoomContext=await chromium.launchPersistentContext('',{channel:'chromium',headless:true,viewport:null,colorScheme:theme,args:['--disable-extensions-except='+extension,'--load-extension='+extension,'--window-size=1366,768']});
 try{await zoomContext.addInitScript(({key,theme,language})=>{if(!localStorage.getItem(key)){localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme,states:{az104:{notes:{'T1-Q1':'Zoom preserved'},favorites:{'T1-Q1':true}}}}));localStorage.setItem(key+'-onboarding-v1','1');localStorage.setItem(key+'-language',language);}},{key,theme,language});
 const worker=zoomContext.serviceWorkers().find(w=>w.url().startsWith('chrome-extension:'))||await zoomContext.waitForEvent('serviceworker');
 const page=zoomContext.pages()[0];await page.goto(server.resolvedUrls.local[0]);await page.locator('#courseHubHeading').waitFor();const initialWidth=await page.evaluate(()=>innerWidth);
 const factor=await worker.evaluate(async url=>{const tab=(await chrome.tabs.query({})).find(t=>t.url?.startsWith(url));await chrome.tabs.setZoom(tab.id,2);return await chrome.tabs.getZoom(tab.id);},server.resolvedUrls.local[0]);assert.equal(factor,2);await page.waitForFunction(width=>Math.abs(innerWidth-width/2)<=1,initialWidth);
 for(const route of ['dashboard','study','mistakes','settings']){await page.locator(route==='settings'?'#settingsButton':'[data-mode="'+route+'"]').first().click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route+' native zoom overflow');await page.screenshot({path:'test-results/native-zoom-'+route+'-'+theme+'-'+language+'.png',fullPage:true});}
 await page.locator('[data-mode="exam"]').first().click();assert((await page.locator('.ui-exam-introduction h2').boundingBox()).y>=0,'Exam title remains reachable at zoom 200%');await page.locator('[data-exam-back]').click();
 const stored=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104,key);assert.equal(stored.notes['T1-Q1'],'Zoom preserved');assert(stored.favorites['T1-Q1']);console.log('Native browser zoom 200% OK',theme,language);
 }finally{await zoomContext.close();}
}
console.log('PWA: prompt events simulated; native installation not performed in headless Chromium.');
}finally{await browser?.close();await server.close();}
