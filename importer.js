'use strict';
(() => {
  const DB_NAME='azure-cert-trainer-db',STORE='trainings',DB_VERSION=1;
  const openDb=()=>new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){reject(new Error('IndexedDB indisponible'));return}
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'})};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||new Error('Ouverture IndexedDB impossible'));
  });
  async function storeList(){const db=await openDb();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readonly').objectStore(STORE).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)})}
  async function storeSave(training){const db=await openDb();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).put(training);r.onsuccess=()=>resolve(training);r.onerror=()=>reject(r.error)})}
  async function storeRemove(id){const db=await openDb();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).delete(id);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error)})}

  const cleanId=x=>String(x||'formation').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'formation';
  const inferCode=name=>((String(name||'').toUpperCase().match(/\b(?:AZ|SC|AI|DP|MS|PL|MD)-?\d{2,4}\b/)||[])[0]||'IMPORT').replace(/([A-Z]+)(\d)/,'$1-$2');
  const norm=x=>String(x??'').trim();
  const lineClean=s=>String(s||'').replace(/\r/g,'');

  function parseCsv(text){
    const rows=[];let row=[],cell='',quoted=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i],n=text[i+1];
      if(ch==='"'){if(quoted&&n==='"'){cell+='"';i++}else quoted=!quoted}
      else if(ch===','&&!quoted){row.push(cell);cell=''}
      else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&n==='\n')i++;row.push(cell);if(row.some(x=>x.trim()))rows.push(row);row=[];cell=''}
      else cell+=ch;
    }
    row.push(cell);if(row.some(x=>x.trim()))rows.push(row);
    if(rows.length<2)throw new Error('CSV vide ou sans en-tête.');
    const headers=rows[0].map(h=>h.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''));
    const get=(r,names)=>{for(const name of names){const i=headers.indexOf(name);if(i>=0)return norm(r[i])}return''};
    const questions=[];
    for(let ri=1;ri<rows.length;ri++){
      const r=rows[ri],prompt=get(r,['question','prompt','enonce','énoncé']);if(!prompt)continue;
      const options=[];for(const l of ['a','b','c','d','e','f','g','h']){const v=get(r,[l,'option '+l,'option_'+l]);if(v)options.push(v)}
      const ans=get(r,['answer','correct','reponse','réponse','bonne reponse','bonne réponse']).toUpperCase().replace(/[^A-H]/g,'');
      const answerIndices=[...ans].map(c=>c.charCodeAt(0)-65).filter(i=>i>=0&&i<options.length);
      const domain=get(r,['domain','domaine','topic','theme','thème'])||'Import';
      const explanation=get(r,['explanation','explication','correction'])||'Correction importée depuis le fichier source.';
      questions.push(makeQuestion({id:`IMP-Q${questions.length+1}`,prompt,options,answerIndices,domain,explanation,solution:answerIndices.map(i=>options[i]).join('; ')}));
    }
    if(!questions.length)throw new Error('Aucune question exploitable détectée dans le CSV.');
    return questions;
  }

  function reflow(s){
    const lines=lineClean(s).replace(/\f/g,'\n').split('\n'),out=[];let p=[];
    const flush=()=>{if(p.length){out.push(p.join(' ').replace(/\s+/g,' ').trim());p=[]}};
    for(const ln of lines){const t=ln.trim();if(!t){flush();continue}if(/^(?:HOTSPOT|DRAG DROP|NOTE:|Case Study|Introductory Info|Overview|Requirements|Existing Environment|Business Requirements|✑|•)/i.test(t)){flush();out.push(t)}else p.push(t)}flush();return out.filter(Boolean).join('\n\n').trim();
  }
  function parseRows(post){const rows=[];for(const ln of lineClean(post).split('\n')){const m=ln.trim().match(/^(Box|Step)\s*(\d+)\s*:\s*(.+?)\s*(?:-\s*)?$/i);if(m){let v=m[3].replace(/\s+-\s*$/,'').trim();if(v&&!/^(Reference|Answer Area)$/i.test(v))rows.push({kind:m[1],n:+m[2],value:v})}}const seen=new Set();return rows.filter(x=>{const k=x.kind+x.n;if(seen.has(k))return false;seen.add(k);return true})}
  function parseOptions(pre){
    const lines=lineClean(pre).replace(/\f/g,'\n').split('\n');const hits=[];
    lines.forEach((ln,i)=>{const m=ln.match(/^\s*([A-H])\.\s+(.+?)\s*$/);if(m)hits.push([i,m[1],m[2]])});if(hits.length<2)return{options:[],prompt:pre};
    let runs=[],run=[],prev='';for(const h of hits){if(!run.length||h[1].charCodeAt(0)===prev.charCodeAt(0)+1)run.push(h);else{if(run.length>=2)runs.push(run);run=[h]}prev=h[1]}if(run.length>=2)runs.push(run);if(!runs.length)return{options:[],prompt:pre};
    run=runs.sort((a,b)=>b.length-a.length)[0];const indices=run.map(x=>x[0]),options=[];
    run.forEach((h,k)=>{const end=k+1<run.length?indices[k+1]:lines.length,parts=[h[2]];for(let j=h[0]+1;j<end;j++){const t=lines[j].trim();if(!t)continue;if(/^(?:Correct Answer|Community vote distribution|Hot Area|Select and Place|Answer Area)/i.test(t))break;parts.push(t)}options.push(parts.join(' ').replace(/\s+/g,' ').trim())});
    return{options,prompt:lines.slice(0,indices[0]).join('\n')};
  }
  function makeQuestion({id,prompt,options=[],answerIndices=[],domain='Import',explanation='',solution='',topic=1,number=1,visualSpec=null,category='Choix multiple',sourcePage=null}){
    return{id,topic,number,category,domain,prompt:reflow(prompt),solutionAnswer:solution||'Voir la correction du document source.',explanation:explanation||'Correction importée depuis le fichier source.',options,answerIndices,multi:answerIndices.length>1,visualSpec,assets:[],solutionAssets:[],sources:[],sourceScope:'source',format:'exercise',originalAnswer:solution||'',answerRevision:false,sourceConflict:false,reviewedAt:null,autoScorable:options.length?answerIndices.length>0:visualSpec?.kind!=='self',sourcePage,caseStudyId:null,caseContext:null};
  }
  function parseExamTopicsText(text){
    text=lineClean(text);const header=/Question\s+#(\d+)\s+Topic\s+(\d+)/ig,ms=[...text.matchAll(header)];if(!ms.length)throw new Error('Format de questions non reconnu. Utilisez un PDF/TXT de type ExamTopics, un CSV ou un JSON structuré.');
    const questions=[];
    for(let i=0;i<ms.length;i++){
      const num=+ms[i][1],topic=+ms[i][2],start=ms[i].index+ms[i][0].length,end=i+1<ms.length?ms[i+1].index:text.length,b=text.slice(start,end),parts=b.split(/Correct Answer\s*:/i),pre=parts[0],post=parts.slice(1).join('Correct Answer:');
      const parsed=parseOptions(pre),options=parsed.options;let ans='';for(const ln of post.split('\n')){if(ln.trim()){ans=ln.trim();break}}
      const answerIndices=options&&/^[A-H]+$/.test(ans)?[...ans].map(c=>c.charCodeAt(0)-65).filter(x=>x<options.length):[];
      const rows=!options.length?parseRows(post):[];let visual=null,solution='';
      if(options.length)solution=answerIndices.map(x=>options[x]).join('; ');
      else if(rows.length){const vals=rows.map(x=>x.value);if(vals.every(v=>/^(yes|no)$/i.test(v)))visual={kind:'yn',labels:vals.map((_,j)=>`Proposition ${j+1}`),expected:vals.map(v=>/^yes$/i.test(v))};else visual={kind:'rows',rows:rows.map((x,j)=>({label:(/^step$/i.test(x.kind)?'Étape':'Sélection')+` ${j+1}`,choices:[],expected:x.value}))};solution=vals.join('; ')}
      else visual={kind:'self',label:'Votre réponse'};
      const pageMark=[...text.slice(0,ms[i].index).matchAll(/<<<PAGE:(\d+)>>>/g)].pop();const sourcePage=pageMark?+pageMark[1]:null;
      let prompt=parsed.prompt.replace(/<<<PAGE:\d+>>>/g,'');
      const type=/HOTSPOT/i.test(pre)?'HOTSPOT':/DRAG DROP/i.test(pre)?'DRAG DROP':/Case Study/i.test(pre)?'Étude de cas':'Choix multiple';
      questions.push(makeQuestion({id:`T${topic}-Q${num}`,topic,number:num,prompt,options,answerIndices,domain:`Topic ${topic}`,solution,visualSpec:visual,category:type,sourcePage}));
    }
    return questions;
  }
  async function loadScript(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Impossible de charger le moteur PDF. Vérifiez la connexion Internet.'));document.head.appendChild(s)})}
  async function pdfToQuestions(file){
    if(!window.pdfjsLib){await loadScript('https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js')}
    if(!window.pdfjsLib)throw new Error('Moteur PDF indisponible.');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
    const data=await file.arrayBuffer(),pdf=await window.pdfjsLib.getDocument({data}).promise,pages=[];
    for(let p=1;p<=pdf.numPages;p++){
      const page=await pdf.getPage(p),content=await page.getTextContent();let t=`\n<<<PAGE:${p}>>>\n`;
      for(const item of content.items){t+=item.str+(item.hasEOL?'\n':' ')}pages.push(t);
    }
    const questions=parseExamTopicsText(pages.join('\n'));
    return{questions,sourceFile:data,pages:pdf.numPages};
  }
  function jsonQuestions(obj){
    if(Array.isArray(obj))return{questions:obj};
    if(obj&&Array.isArray(obj.questions))return{questions:obj.questions,training:obj.training||obj.config||null};
    throw new Error('JSON non reconnu : tableau de questions ou objet {training, questions} attendu.');
  }
  function normalizeImportedQuestion(q,i,defaultDomain='Import'){
    const options=Array.isArray(q.options)?q.options.map(String):[];let answerIndices=Array.isArray(q.answerIndices)?q.answerIndices.map(Number).filter(n=>Number.isInteger(n)&&n>=0&&n<options.length):[];
    if(!answerIndices.length&&q.answer&&options.length){const s=String(q.answer).toUpperCase().replace(/[^A-H]/g,'');answerIndices=[...s].map(c=>c.charCodeAt(0)-65).filter(n=>n<options.length)}
    const visual=q.visualSpec||(!options.length?{kind:'self',label:'Votre réponse'}:null);return{...makeQuestion({id:q.id||`IMP-Q${i+1}`,topic:q.topic||1,number:q.number||i+1,category:q.category||'Import',domain:q.domain||defaultDomain,prompt:q.prompt||q.question||'',options,answerIndices,visualSpec:visual,solution:q.solutionAnswer||q.solution||'',explanation:q.explanation||'',sourcePage:q.sourcePage||null}),...q,options,answerIndices,visualSpec:visual,assets:Array.isArray(q.assets)?q.assets:[],solutionAssets:Array.isArray(q.solutionAssets)?q.solutionAssets:[],sources:Array.isArray(q.sources)?q.sources:[],autoScorable:q.autoScorable!==undefined?!!q.autoScorable:(options.length?answerIndices.length>0:visual?.kind!=='self')};
  }
  async function parseFile(file){
    const ext=(file.name.split('.').pop()||'').toLowerCase();let result={questions:[]},meta=null;
    if(ext==='json'){result=jsonQuestions(JSON.parse(await file.text()));meta=result.training}
    else if(ext==='csv')result.questions=parseCsv(await file.text());
    else if(ext==='txt')result.questions=parseExamTopicsText(await file.text());
    else if(ext==='pdf')result=await pdfToQuestions(file);
    else throw new Error('Format non pris en charge. Utilisez PDF, JSON, CSV ou TXT.');
    const code=(meta?.code||inferCode(file.name)).toUpperCase(),id=cleanId(meta?.id||code),name=meta?.name||code;
    const questions=result.questions.map((q,i)=>normalizeImportedQuestion(q,i));
    const domainNames=[...new Set(questions.map(q=>q.domain||'Import'))];const domains=domainNames.map((d,i)=>[d,d,String(i+1).padStart(2,'0')]);
    const training={id,code,name,edition:meta?.edition||new Date().getFullYear().toString(),tagline:meta?.tagline||'Formation importée',description:meta?.description||`Banque importée depuis ${file.name}.`,domains,exam:meta?.exam||{version:1,total:Math.min(48,Math.max(10,questions.filter(q=>q.autoScorable).length)),durationMinutes:100,allocation:null,caseStudyIds:[],multiContext:false,subtitle:'Examen blanc généré depuis la banque importée'},questions,source:{label:file.name,url:''},imported:true,importedAt:new Date().toISOString(),sourceFileName:file.name,sourceFile:result.sourceFile||null};
    const visualSelf=questions.filter(q=>q.visualSpec?.kind==='self').length;
    return{training,stats:{questions:questions.length,auto:questions.filter(q=>q.autoScorable).length,self:visualSelf,domains:domains.length,pages:result.pages||null}};
  }
  window.TrainingStore={list:storeList,save:storeSave,remove:storeRemove};
  window.TrainingImporter={parseFile,cleanId};
})();
