import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const root=path.resolve('dist-pages'), base='/azure-certification-trainer/';
const key='azure-cert-trainer-2026-v3';
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg'};
const version=JSON.parse(await fs.readFile(path.join(root,'version.json'),'utf8'));
assert.match(version.commitSHA,/^[a-f0-9]{40}$/);
const worker=await fs.readFile(path.join(root,'service-worker.js'),'utf8');
assert(worker.includes(`azure-trainer-${version.commitSHA}`));
assert(worker.includes("new Request(url,{cache:'reload'})"),'Precache must bypass stale HTTP resources');
assert(worker.includes("fetch(e.request,{cache:'no-cache'})"),'Runtime must revalidate stale HTTP resources');
const core=JSON.parse(worker.match(/const CORE=(\[[^;]+\])/)[1].replaceAll("'",'"'));
for(const relative of core) if(relative!=='./') await fs.access(path.join(root,relative));
for(const privateFile of ['package.json','AGENTS.md','scripts','figma','.git','storybook-static']) {
  await assert.rejects(fs.access(path.join(root,privateFile)));
}
let oldWorker=false;
const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(!url.pathname.startsWith(base)){res.writeHead(404).end();return;}
  const relative=decodeURIComponent(url.pathname.slice(base.length))||'index.html';
  const file=path.resolve(root,relative);
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  try {
    let data=await fs.readFile(file);
    if(oldWorker&&relative==='service-worker.js') data=Buffer.from(worker.replace(`azure-trainer-${version.commitSHA}`,'azure-trainer-deployment-test-old'));
    res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
    res.setHeader('Cache-Control','no-store');res.end(data);
  } catch {res.writeHead(404).end();}
});
let browser;
try {
  await fs.mkdir('test-results',{recursive:true});
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  // *.localhost is a secure loopback origin; unlike LOCAL_DEV, it exercises real caching.
  const url=process.env.PAGES_TEST_URL||`http://app.localhost:${server.address().port}${base}`;
  browser=await chromium.launch({headless:true});
  for(const theme of ['light','dark'])for(const width of [390,768,1440]){
    const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});
    await context.addInitScript(({key,theme})=>{
      if(localStorage.getItem(key))return;
      localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme,states:{}}));
      localStorage.setItem(key+'-onboarding-v1','1');
    },{key,theme});
    const page=await context.newPage();page.setDefaultTimeout(12000);
    const errors=[],missing=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('response',r=>{if(r.url().startsWith(url)&&r.status()>=400)missing.push(`${r.status()} ${r.url()}`);});
    await page.goto(url);
    await page.locator('#dashboard').waitFor({state:'visible'});
    assert.equal(await page.locator('.ui-course-hub__module').count(),5);
    assert.equal(await page.locator('#dashboardCards:visible').count(),0);
    assert.equal(await page.locator('#dashboardDetails').getAttribute('open'),null);
    assert(await page.locator('#languageToggle').isVisible());
    assert.equal(await page.locator('#mobileSettingsButton:visible').count(),0);
    assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),theme);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await page.screenshot({path:`test-results/pages-home-${theme}-${width}.png`,fullPage:true,animations:'disabled'});
    await page.locator('#startWeaknessButton').click();
    await page.locator('#questionCard').waitFor({state:'visible'});
    await page.locator('#choices [data-choice="2"]').click();
    await page.locator(width<=920?'#mobileSubmitButton':'#submit').click();
    await page.locator('#feedback').waitFor({state:'visible'});
    assert.equal(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.answers['T1-Q1'].correct,key),true);
    await page.screenshot({path:`test-results/pages-training-${theme}-${width}.png`,fullPage:true,animations:'disabled'});
    await page.evaluate(()=>{location.hash='parcours'});
    await page.locator('#dashboard').waitFor({state:'visible'});
    await page.locator('[data-mode="mistakes"]').click();
    await page.locator('#mistakesPage').waitFor({state:'visible'});
    await page.locator('[data-mode="exam"]').click();
    await page.locator('#startExamButton').click();
    await page.waitForFunction(()=>!!document.querySelector('#sessionClock').textContent&&!document.querySelector('#examIntroductionBackdrop'));
    await page.locator('#questionCard').waitFor({state:'visible'});
    const state=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104,key);
    assert.equal(state.exam.ids.length,48);
    await page.reload();
    await page.locator('#startExamButton').click();
    await page.waitForFunction(()=>!document.querySelector('#examIntroductionBackdrop'));
    await page.locator('#questionCard').waitFor({state:'visible'});
    assert.deepEqual(await page.evaluate(key=>JSON.parse(localStorage.getItem(key)).states.az104.exam.ids,key),state.exam.ids);
    assert.deepEqual(errors,[]);assert.deepEqual(missing,[]);
    console.log(`Pages ${theme} ${width}: home, training, revisions, exam, persistence, no 404/errors OK`);
    await context.close();
  }
  if(!process.env.PAGES_TEST_URL){
    oldWorker=true;
    const context=await browser.newContext();
    await context.addInitScript(key=>{
      if(localStorage.getItem(key))return;
      localStorage.setItem(key,JSON.stringify({activeTraining:'az104',theme:'light',states:{az104:{notes:{'T1-Q1':'Keep this note'},favorites:{'T1-Q1':true}}}}));
      localStorage.setItem(key+'-onboarding-v1','1');
    },key);
    const page=await context.newPage();
    await page.goto(url);
    await page.locator('#dashboard').waitFor({state:'visible'});
    await page.evaluate(async()=>{await navigator.serviceWorker.ready;await caches.open('unrelated-application-cache');});
    await page.reload();
    await page.evaluate(async({key})=>{
      const db=await new Promise((resolve,reject)=>{const request=indexedDB.open('pages-progress-test',1);request.onupgradeneeded=()=>request.result.createObjectStore('data');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});
      await new Promise(resolve=>{const tx=db.transaction('data','readwrite');tx.objectStore('data').put('saved','progress');tx.oncomplete=resolve;});db.close();
    },{key});
    await page.locator('[data-mode="exam"]').click();
    await page.locator('#startExamButton').click();
    await page.locator('#questionCard').waitFor({state:'visible'});
    const before=await page.evaluate(key=>localStorage.getItem(key),key);
    let navigations=0;page.on('framenavigated',frame=>{if(frame===page.mainFrame())navigations++;});
    oldWorker=false;
    await page.evaluate(async()=>{const reg=await navigator.serviceWorker.ready;await reg.update();});
    await page.waitForFunction(async name=>(await caches.keys()).includes(name),`azure-trainer-${version.commitSHA}`);
    await page.waitForFunction(async()=>!(await caches.keys()).includes('azure-trainer-deployment-test-old'));
    assert.equal(navigations,0,'Worker update must not reload an active page');
    assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),before);
    assert(await page.evaluate(async()=> (await caches.keys()).includes('unrelated-application-cache')));
    assert.equal(await page.evaluate(async()=>{const db=await new Promise(resolve=>{const r=indexedDB.open('pages-progress-test');r.onsuccess=()=>resolve(r.result);});return await new Promise(resolve=>{const r=db.transaction('data').objectStore('data').get('progress');r.onsuccess=()=>{db.close();resolve(r.result);};});}),'saved');
    await context.setOffline(true);
    assert(await page.evaluate(async()=> (await fetch('./index.html')).ok),'Offline application unavailable');
    assert(await page.evaluate(async()=> (await fetch('./src/ui/integration/account-clarity.css')).ok),'Offline styles unavailable');
    await context.close();console.log('PWA update: isolated cache cleanup, no reload, localStorage/IndexedDB preserved, offline OK');
  }
} finally {await browser?.close();await new Promise(resolve=>server.close(resolve));}
