'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=__dirname;
const ctx={window:{}};ctx.window.window=ctx.window;
function load(name){vm.runInNewContext(fs.readFileSync(path.join(root,name),'utf8'),ctx,{filename:name});}
load('questions.js');load('az305_questions.js');load('formations.js');
const az104=ctx.window.AZ104_QUESTIONS||[];
const az305=ctx.window.AZ305_QUESTIONS||[];
const catalog=ctx.window.TRAINING_CATALOG||[];
let failures=[];
function ok(cond,msg){if(!cond)failures.push(msg);}
function validateBank(code,bank){
  const ids=new Set();
  ok(bank.length>0,`${code}: banque vide`);
  for(const q of bank){
    ok(q&&q.id,`${code}: question sans id`);
    if(!q?.id)continue;
    ok(!ids.has(q.id),`${code}: doublon ${q.id}`);ids.add(q.id);
    ok(String(q.prompt||'').trim(),`${q.id}: énoncé vide`);
    ok(String(q.domain||'').trim(),`${q.id}: domaine vide`);
    if(Array.isArray(q.options)&&q.options.length){
      ok(Array.isArray(q.answerIndices)&&q.answerIndices.length>0,`${q.id}: QCM sans réponse`);
      for(const a of q.answerIndices||[])ok(Number.isInteger(a)&&a>=0&&a<q.options.length,`${q.id}: index réponse invalide ${a}`);
    } else if(q.visualSpec){
      ok(['yn','rows','self'].includes(q.visualSpec.kind),`${q.id}: visualSpec.kind inconnu ${q.visualSpec.kind}`);
      if(q.visualSpec.kind==='yn')ok(Array.isArray(q.visualSpec.expected)&&q.visualSpec.expected.length>0,`${q.id}: oui/non sans correction`);
      if(q.visualSpec.kind==='rows')ok(Array.isArray(q.visualSpec.rows)&&q.visualSpec.rows.length>0,`${q.id}: lignes sans correction`);
      if(q.visualSpec.kind==='self')ok(q.autoScorable===false,`${q.id}: auto-évaluation marquée autoScorable`);
    } else {
      ok(false,`${q.id}: aucun mécanisme de réponse`);
    }
    for(const rel of [...(q.assets||[]),...(q.solutionAssets||[])]){
      ok(fs.existsSync(path.join(root,rel)),`${q.id}: asset absent ${rel}`);
    }
    if(q.autoScorable===false)ok((q.solutionAssets||[]).length>0||q.sourcePage,`${q.id}: auto-évaluation sans correction/source`);
  }
  return ids;
}
const ids104=validateBank('AZ-104',az104);
const ids305=validateBank('AZ-305',az305);
ok(az104.length===568,`AZ-104: ${az104.length} != 568`);
ok(az305.length===286,`AZ-305: ${az305.length} != 286`);
ok(az305.filter(q=>q.autoScorable!==false).length===225,`AZ-305: nombre auto-scorable inattendu`);
ok(az305.filter(q=>q.autoScorable===false).length===61,`AZ-305: nombre auto-évaluation inattendu`);
ok(catalog.length>=2,'Catalogue: moins de 2 formations');
const cfg104=catalog.find(x=>x.id==='az104'),cfg305=catalog.find(x=>x.id==='az305');
ok(cfg104&&cfg104.questions.length===568,'Catalogue AZ-104 invalide');
ok(cfg305&&cfg305.questions.length===286,'Catalogue AZ-305 invalide');
for(const cfg of [cfg104,cfg305].filter(Boolean)){
  ok(cfg.exam?.total===48,`${cfg.code}: examen != 48`);
  ok(cfg.exam?.durationMinutes===100,`${cfg.code}: durée != 100`);
  const expectedCase=cfg.id==='az104'?4:cfg.id==='az305'?5:(cfg.exam?.caseStudyIds||[]).length; ok((cfg.exam?.caseStudyIds||[]).length===expectedCase,`${cfg.code}: étude de cas inattendue`);
  const bankIds=cfg.id==='az104'?ids104:ids305;
  for(const id of cfg.exam.caseStudyIds||[])ok(bankIds.has(id),`${cfg.code}: case id absent ${id}`);
}
const html=fs.readFileSync(path.join(root,'OUVRIR_FORMATIONS.html'),'utf8');
for(const id of ['trainingSelect','importTrainingButton','manageTrainingButton','focusMenuButton','settingsButton','settingsPanel','caseContext','compactButton','resetExamButton','questionNavigatorButton','examHistoryPanel'])ok(html.includes(`id="${id}"`),`HTML: #${id} absent`);
ok(/<html\s+lang="en"/.test(html),'HTML: langue source non déclarée en anglais');
ok(!/notranslate/i.test(html),'HTML: traduction navigateur bloquée');
for(const script of ['questions.js','az305_questions.js','formations.js','importer.js','atelier.js'])ok(html.includes(`src="${script}"`),`HTML: script ${script} absent`);
const importer=fs.readFileSync(path.join(root,'importer.js'),'utf8');
ok(["pdf","csv","json","txt"].every(ext=>importer.includes(`ext==='${ext}'`)),'Importeur: formats attendus absents');
ok(/indexedDB/.test(importer),'Importeur: IndexedDB absent');
const app=fs.readFileSync(path.join(root,'atelier.js'),'utf8');
ok(/azure-cert-trainer-2026-v3/.test(app),'Progression multi-formations absente');
ok(/root\.states/.test(app),'Progression par formation absente');
ok(/autoScorable!==false/.test(app),'Examen: exclusion auto-évaluation absente');
ok(/state\.examFocus/.test(app),'Focus global absent');
ok(/examHistory/.test(app),'Historique des examens absent');
ok(!html.includes('id="examHistoryButton"'),'Historique examens encore présent dans le menu latéral');
ok(/data-dashboard-history/.test(html),'Accès historique depuis le dashboard absent');
ok(/openQuestionNavigator/.test(app),'Navigation libre des questions absente');
ok(/state\.examHistory\.unshift/.test(app),'Enregistrement des examens terminés absent');
if(failures.length){console.error(`ECHEC: ${failures.length} anomalie(s)`);for(const f of failures)console.error(' - '+f);process.exit(1);} 
console.log('OK - contrôle qualité multi-formations');
console.log(`AZ-104: ${az104.length} questions`);
console.log(`AZ-305: ${az305.length} questions (${az305.filter(q=>q.autoScorable!==false).length} auto / ${az305.filter(q=>q.autoScorable===false).length} auto-évaluation)`);
console.log('Examens: 48 questions / 100 min ; étude de cas AZ-104=4, AZ-305=5');
console.log('Import: PDF, JSON, CSV, TXT + stockage IndexedDB');
