'use strict';
(async () => {
  const APP_KEY='azure-cert-trainer-2026-v3';
  const APP_VERSION='3.2.0';
  const LEGACY_AZ104_KEY='az104-atelier-2026-progress-v1';
  const ONBOARDING_KEY=APP_KEY+'-onboarding-v1';
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const {enhanceSearchBar}=await import('./src/ui/components/search-bar/search-bar.js');
  const {questionTransition,reveal,focusTransition}=await import('./src/ui/integration/motion.js');
  const {installDocumentReader}=await import('./src/ui/patterns/document-reader/document-reader.js');
  const documentReader=installDocumentReader();
  const clean=x=>String(x??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const norm=x=>String(x??'').toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim();
  const normAnswer=x=>norm(x).replace(/[.,;:()\[\]{}'"`]/g,'').replace(/\s+/g,' ').trim();
  const now=()=>Date.now();
  let root={activeTraining:'az104',theme:'',states:{}};
  try{root={...root,...JSON.parse(localStorage.getItem(APP_KEY)||'{}')}}catch{}
  if(!root.states)root.states={};
  if(!root.states.az104){try{const legacy=JSON.parse(localStorage.getItem(LEGACY_AZ104_KEY)||'null');if(legacy)root.states.az104=legacy}catch{}}
  const staticCatalog=(window.TRAINING_CATALOG||[]).map(x=>({...x,questions:[...(x.questions||[])]}));
  let catalog=[],cfg=null,bank=[],byId=new Map(),autoQuestions=[],DOMAINS=[],state=null;
  let mode='study',domain='all',pathDomain='',list=[],cursor=0,search='',timer=null,modalCallback=null,sourceUrl='',modalReturnFocus=null,modalEscapeClosable=true;
  let UI={};
  let onboardingController=null, onboardingReturnFocus=null, onboardingReplay=false, courseHub=null, domainSelector=null, reviewFilter='errors', reviewDomain='all', reviewPageIndex=0, installationConfirmed=false;
  const mobileLayout=window.matchMedia('(max-width: 920px)');
  let filtersOpen=false, examStarting=false, reviewSessionIds=[], renderedQuestionId=null;

  async function loadDesignSystem(){
    try{
      const [answerOption,badge,iconButton,feedbackPanel,answerState,questionViewport,workspaceToolbar,firstRunExperience,icons,modalSurface,settingsNavigation,courseHubModule,domainSelectorModule,reviewListModule,activitiesMenu,pageLayout,examIntroduction]=await Promise.all([
        import('./src/ui/components/answer-option/answer-option.js'),
        import('./src/ui/components/badge/badge.js'),
        import('./src/ui/components/icon-button/icon-button.js'),
        import('./src/ui/components/feedback-panel/feedback-panel.js'),
        import('./src/ui/integration/answer-state.js'),
        import('./src/ui/patterns/question-viewport/question-viewport.js'),
        import('./src/ui/patterns/workspace-toolbar/workspace-toolbar.js'),
        import('./src/ui/patterns/first-run-experience/first-run-experience.js'),
        import('./src/ui/icons/icons.js'),
        import('./src/ui/components/modal-surface/modal-surface.js'),
        import('./src/ui/patterns/settings-navigation/settings-navigation.js'),
        import('./src/ui/patterns/course-hub/course-hub.js'),
        import('./src/ui/components/domain-selector/domain-selector.js'),
        import('./src/ui/patterns/review-list/review-list.js'),
        import('./src/ui/patterns/activities-menu/activities-menu.js'),
        import('./src/ui/patterns/app-shell/page-layout.js'),
        import('./src/ui/patterns/exam-introduction/exam-introduction.js'),
      ]);
      UI={
        createAnswerOption:answerOption.createAnswerOption,
        updateBadge:badge.updateBadge,
        updateIconButton:iconButton.updateIconButton,
        createFeedbackPanel:feedbackPanel.createFeedbackPanel,
        getAnswerOptionResultState:answerState.getAnswerOptionResultState,
        setQuestionSessionActive:questionViewport.setQuestionSessionActive,
        scrollQuestionIntoView:questionViewport.scrollQuestionIntoView,
        scrollQuestionAfterRender:questionViewport.scrollQuestionAfterRender,
        scrollFeedbackIntoView:questionViewport.scrollFeedbackIntoView,
        scrollFeedbackAfterRender:questionViewport.scrollFeedbackAfterRender,
        updateFocusToggle:workspaceToolbar.updateFocusToggle,
        createFirstRunExperience:firstRunExperience.createFirstRunExperience,
        createIcon:icons.createIcon,createBrandMark:icons.createBrandMark,
        applyModalSurface:modalSurface.applyModalSurface,
        trapModalTab:modalSurface.trapModalTab,
        bindSettingsNavigation:settingsNavigation.bindSettingsNavigation,
        createCourseHub:courseHubModule.createCourseHub,courseModules:courseHubModule.courseModules,
        ...reviewListModule,...activitiesMenu,...pageLayout,...examIntroduction,mergeLearningNotes:feedbackPanel.mergeLearningNotes,createDomainSelector:domainSelectorModule.createDomainSelector,
      };
      document.documentElement.dataset.uiSystem='sprint13';
      return true;
    }catch(error){
      console.warn('Azure Trainer Design System indisponible : retour au rendu historique.',error);
      UI={};
      return false;
    }
  }

  function freshState(){return{answers:{},drafts:{},lastId:'',exam:null,examHistory:[],examCompact:false,examFocus:false,favorites:{},notes:{},reports:[],lastVersion:''}}
  function currentState(id){if(!root.states[id])root.states[id]=freshState();return root.states[id]}
  function save(){try{if(cfg)root.states[cfg.id]=state;localStorage.setItem(APP_KEY,JSON.stringify(root))}catch{toast('Le stockage du navigateur est indisponible. Exportez vos résultats.')}}

  function updateFilterControls(){
    const focus=document.body.classList.contains('focus-mode');
    const panel=$('#studyFilters'),toggle=$('#filterToggleButton');
    if(panel)panel.hidden=true;
    if(toggle){toggle.hidden=true;toggle.setAttribute('aria-expanded',String(!panel?.hidden));toggle.textContent=(domain!=='all'||search)?'Filtres actifs':'Filtrer';}
  }
  function savedStudySession(){
    const session=state.studySession;
    if(session&&!session.completed&&byId.has(session.questionId))return session;
    const hasProgress=Object.keys(state.answers||{}).length||Object.keys(state.drafts||{}).length;
    if(!session&&hasProgress&&byId.has(state.lastId))return{mode:'study',domain:'all',search:'',questionId:state.lastId};
    return null;
  }
  function rememberStudyPosition(q){
    if(mode==='exam')return;
    const ids=mode==='quick'?state.studySession?.ids:null;
    state.lastId=q.id;
    state.seen=state.seen||{};state.seen[q.id]=true;
    state.studySession={mode:mode==='quick'?'quick':'study',domain,search,questionId:q.id,updatedAt:now(),completed:false,...(ids?{ids}:{} )};
    save();
  }
  function startOrResumeStudy(){
    if(state.exam?.ids?.length){startOrResumeExam();return;}
    const session=savedStudySession();
    if(session){
      mode=session.mode==='quick'&&session.ids?.some(id=>byId.has(id))?'quick':'study';
      domain=DOMAINS.some(d=>d[0]===session.domain)?session.domain:'all';
      search=String(session.search||'');$('#search').value=search;cursor=0;list=[];
      refresh(session.questionId);focusCurrentQuestion();return;
    }
    const untouched=autoQuestions.filter(q=>!state.answers[q.id]?.done);
    const questions=[...untouched,...autoQuestions.filter(q=>state.answers[q.id]?.done)].slice(0,10);
    if(!questions.length){toast('Cette formation ne contient pas de questions évaluables automatiquement.');selectMode('study');return;}
    state.retrying=state.retrying||{};
    questions.forEach(q=>{if(state.answers[q.id])state.retrying[q.id]=true;});
    state.studySession={mode:'quick',ids:questions.map(q=>q.id),domain:'all',search:'',questionId:questions[0].id,completed:false};
    mode='quick';domain='all';search='';$('#search').value='';cursor=0;list=[];save();refresh(questions[0].id);focusCurrentQuestion();
  }
  function finishQuickSession(){
    const ids=state.studySession?.ids||[],results=ids.map(id=>state.answers[id]).filter(r=>typeof r?.correct==='boolean');
    if(state.studySession)state.studySession.completed=true;
    save();mode='dashboard';list=[];refresh();$('#mainContent').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
    toast(`Session terminée : ${results.filter(r=>r.correct).length} bonnes réponses sur ${ids.length} questions. Votre progression est sauvegardée.`);
  }
  function nextQuestion(){if(mode==='quick'&&cursor===list.length-1)finishQuickSession();else move(1);}
  function updateMobileActions(){
    const q=list[cursor],r=q?record(q):null,active=mobileLayout.matches&&!!q&&!['dashboard','path','settings','mistakes','exam-home'].includes(mode);
    $('#mobileActionBar').hidden=!active;
    $('#mobileQuestionPosition').textContent=q?`Question ${cursor+1} / ${list.length}`:'';
    $('#mobilePreviousButton').disabled=cursor===0;$('#mobilePreviousButton').hidden=!r&&mode!=='exam';
    $('#mobileSubmitButton').hidden=!!r;$('#mobileSubmitButton').disabled=!q||!answerComplete(q,draft(q));
    $('#mobileSubmitButton').textContent=mode==='exam'?'Enregistrer et avancer':'Valider ma réponse';
    $('#mobileNextButton').hidden=!r;
    $('#mobileNextButton').disabled=mode!=='quick'&&cursor===list.length-1;
    $('#mobileNextButton').textContent=mode==='quick'&&cursor===list.length-1?'Terminer la session':'Question suivante';
  }

  function onboardingCompleted(){try{return localStorage.getItem(ONBOARDING_KEY)==='1'}catch{return false}}
  function markOnboardingCompleted(){try{localStorage.setItem(ONBOARDING_KEY,'1')}catch{}}
  function closeOnboarding({remember=true}={}){
    if(remember)markOnboardingCompleted();
    onboardingController?.destroy?.();
    onboardingController=null;
    document.body.classList.remove('ui-first-run-open');
    $('#app').inert=false;
    if(!onboardingReplay)selectMode('dashboard');else onboardingReturnFocus?.focus?.({preventScroll:true});
  }
  function openOnboarding({force=false}={}){
    if(!force&&(onboardingCompleted()||state.exam?.ids?.length))return false;
    if(!UI.createFirstRunExperience||!cfg)return false;
    onboardingController?.destroy?.();
    onboardingReplay=force;onboardingReturnFocus=document.activeElement;
    if(!force)selectMode('dashboard');
    const description=cfg.description||cfg.tagline||`Préparez ${cfg.code} avec votre banque de questions et vos outils de progression.`;
    onboardingController=UI.createFirstRunExperience({
      trainingCode:cfg.code,
      installState:isAppInstalled()?'installed':deferredInstall?'available':'browser',
      ios:/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),
      onInstall:installApp,
      trainingName:cfg.name,
      description,
      onComplete:()=>closeOnboarding({remember:true}),
      onSkip:()=>closeOnboarding({remember:true}),
    });
    document.body.append(onboardingController.element);
    $('#app').inert=true;
    document.body.classList.add('ui-first-run-open');
    requestAnimationFrame(()=>onboardingController?.focus?.());
    return true;
  }

  function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>el.classList.remove('show'),4500)}
  const LANGUAGE_KEY=APP_KEY+'-language';
  let interfaceLanguage=localStorage.getItem(LANGUAGE_KEY)==='en'?'en':'fr',localization=null,stopLocalization=null;
  function updateLanguageToggle(){const b=$('#languageToggle');if(!b)return;b.setAttribute('aria-pressed',String(interfaceLanguage==='fr'));b.textContent=interfaceLanguage==='fr'?'FR ⇄ EN':'EN ⇄ FR';b.setAttribute('aria-label',interfaceLanguage==='fr'?'Afficher l’interface en anglais':'Afficher l’interface en français');b.title=b.getAttribute('aria-label');document.documentElement.lang=interfaceLanguage;}
  async function applyInterfaceLanguage(target,{silent=false}={}){interfaceLanguage=target==='en'?'en':'fr';localStorage.setItem(LANGUAGE_KEY,interfaceLanguage);updateLanguageToggle();stopLocalization?.();if(!localization)localization=await import('./src/ui/integration/localization.js');if(['study','quick','exam','weakness','mistakes-session'].includes(mode))render();stopLocalization=localization.observeInterfaceLanguage(document.body,()=>interfaceLanguage);updateContentLanguageNotice();if(!silent)toast(interfaceLanguage==='fr'?'Interface française activée.':'English interface enabled.');}
  async function toggleInterfaceLanguage(){await applyInterfaceLanguage(interfaceLanguage==='fr'?'en':'fr');}
  function updateContentLanguageNotice(){let notice=$('#contentLanguageNotice');if(!notice){notice=document.createElement('p');notice.id='contentLanguageNotice';notice.className='ui-content-language-notice';$('#questionPrompt').after(notice);}const q=list[cursor];notice.textContent=interfaceLanguage==='fr'?'Contenu pédagogique conservé dans sa langue d’origine.':'Learning content is shown in its original language.';notice.hidden=!!q&&!!localization&&localization.questionPresentation(q,interfaceLanguage)!==q;}
  function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  function record(q){if(mode!=='exam'&&state.retrying?.[q.id])return null;const r=mode==='exam'?state.exam?.answers?.[q.id]||null:state.answers[q.id]||null;return q.format==='knowledge'&&r?.read&&typeof r.correct!=='boolean'?null:r}
  function draft(q){return mode==='exam'?state.exam?.drafts?.[q.id]||{}:state.drafts[q.id]||{}}
  function setDraft(q,value){if(mode==='exam')state.exam.drafts[q.id]=value;else state.drafts[q.id]=value;save()}
  function domainTuple(id){return DOMAINS.find(d=>d[0]===id)}
  function sourceLink(q,solution=false){
    if(solution&&q.solutionAssets?.length)return'';
    if(!solution&&q.autoScorable===false)return'';
    if(cfg?._sourceUrl&&q.sourcePage)return`<a data-reader class="source-pdf-link" href="${clean(cfg._sourceUrl)}#page=${Number(q.sourcePage)}" target="_blank" rel="noopener noreferrer">Ouvrir le PDF source · page ${Number(q.sourcePage)} ↗</a>`;
    return'';
  }
  function imageGrid(paths,title){if(!paths?.length)return'';return`<div class="solution-figures"><div class="source-heading">${clean(title)}</div><div class="figure-grid">${paths.map((path,i)=>`<a href="${clean(path)}" data-reader><img src="${clean(path)}" alt="${clean(title)} ${i+1}" loading="lazy"></a>`).join('')}</div></div>`}

  async function reloadCatalog(){
    const merged=staticCatalog.map(x=>({...x,questions:[...(x.questions||[])],imported:false}));
    try{
      const imported=await window.TrainingStore?.list?.()||[];
      for(const imp of imported){const i=merged.findIndex(x=>x.id===imp.id);if(i>=0)merged[i]={...merged[i],...imp,imported:true};else merged.push({...imp,imported:true})}
    }catch(e){console.warn(e)}
    catalog=merged.filter(x=>Array.isArray(x.questions)&&x.questions.length);
    $('#trainingSelect').innerHTML=catalog.map(t=>`<option value="${clean(t.id)}">${clean(t.code)} · ${clean(t.name)}${t.imported?' · import':''}</option>`).join('');
  }
  function dynamicMetadata(){
    document.title=`${cfg.code} · Azure Certification Trainer`;
    $('#brandTitle').textContent='Azure Trainer';$('#brandSubtitle').textContent=cfg.code;$('#brandIcon').replaceChildren(UI.createBrandMark());
    $('#topEyebrow').textContent=`PRÉPARATION INDÉPENDANTE · ${cfg.code}`;$('#editionLabel').textContent=`ÉDITION ${cfg.edition||'2026'}`;
    $('#heroKicker').textContent='AZURE CERTIFICATION TRAINER';
    $('#heroTitle').textContent=`${cfg.code} · ${cfg.name}`;
    $('#heroDescription').textContent=cfg.description||cfg.tagline||'';
    $('#examCount').textContent=Math.min(cfg.exam?.total||48,autoQuestions.length);
    const source=cfg.source?.url?` Référentiel : <a href="${clean(cfg.source.url)}" target="_blank" rel="noopener noreferrer">${clean(cfg.source.label||cfg.source.url)}</a>.`:` Source : ${clean(cfg.source?.label||'banque importée')}.`;
    $('#footerText').innerHTML=`${bank.length} questions disponibles pour ${clean(cfg.code)}. Les corrections sont conservées selon le document ou les données importées ; les questions visuelles sans correction textuelle utilisent une auto-évaluation après révélation de la correction.${source}`;
    $('#trainingSelect').value=cfg.id;
  }
  function releaseSourceUrl(){if(sourceUrl){URL.revokeObjectURL(sourceUrl);sourceUrl=''}}

  function shellMode(){
    if(mode==='mistakes-session')return'mistakes';
    if(mode==='quick'||mode==='weakness')return'study';
    if(mode==='exam-home')return'exam';
    return mode;
  }

  function updateShellContext(){
    const current=shellMode();
    const meta={
      dashboard:['ACCUEIL','Accueil'],
      path:['PARCOURS','Parcours'],
      study:['ENTRAÎNEMENT','Entraînement'],
      weakness:['RÉVISION','Session ciblée'],
      mistakes:['RÉVISIONS','Révisions'],
      exam:['SIMULATION',mode==='exam'?'Examen en cours':'Examen blanc'],
      settings:['APPLICATION','Paramètres'],
    }[current]||['PRÉPARATION','Azure Trainer'];
    const eyebrow=$('#topEyebrow'),title=$('#topPageTitle');
    if(eyebrow)eyebrow.textContent=meta[0];
    if(title)title.textContent=meta[1];
  }

  function enhanceNavigationIcons(){
    if(!UI.createIcon)return;
    $$('[data-nav-icon]').forEach(button=>{
      const label=button.querySelector('.rail-link-label,.settings-label')?.textContent;
      if(label){button.setAttribute('aria-label',label);button.title=label}
      const slot=button.querySelector('.rail-link-icon,.settings-icon');
      if(!slot||slot.dataset.iconReady==='1')return;
      slot.replaceChildren(UI.createIcon(button.dataset.navIcon,{size:button.id==='settingsButton'?17:18}));
      slot.dataset.iconReady='1';
    });
  }

  function renderPathPage(){
    if(!['path','dashboard'].includes(mode))return;
    if(!pathDomain||!DOMAINS.some(([id])=>id===pathDomain))pathDomain=DOMAINS[0]?.[0]||'';
    const stats=domainStatsData();
    const selected=stats.find(item=>item.id===pathDomain)||stats[0];
    const modules=$('#pathModules');
    if(modules){
      modules.innerHTML=stats.map((item,index)=>{
        const status=!item.answered?'À commencer':item.bad?'À renforcer':item.answered===item.total?'Évalué':'En cours';
        return `<button class="v2-path-module${item.id===selected?.id?' is-active':''}" type="button" data-path-domain="${clean(item.id)}"><span><b>${index+1}. ${clean(item.label)}</b><span>${clean(status)} · ${item.total} questions</span></span><strong>${item.answered?`${item.rate}%`:'—'}</strong></button>`;
      }).join('');
      $$('[data-path-domain]').forEach(button=>button.onclick=()=>{pathDomain=button.dataset.pathDomain;renderPathPage()});
    }
    if(!selected)return;
    $('#pathPage .production-page-head h2').textContent='Parcours '+cfg.code;$('#pathPage').setAttribute('aria-label','Parcours '+cfg.code);
    $('#pathSubtitle').textContent=`${cfg.code} · ${stats.length} modules · ${bank.length} questions`;
    $('#pathDetailTitle').textContent=selected.label;
    $('#pathDetailDescription').textContent=selected.answered?`${selected.answered} question(s) évaluée(s), ${selected.good} correcte(s) et ${selected.bad} à reprendre.`:`Commencez ce domaine pour mesurer votre progression et identifier les notions à renforcer.`;
    $('#pathDetailProgress').style.width=`${selected.total?Math.round(selected.answered/selected.total*100):0}%`;
    $('#pathDetailProgressLabel').textContent=selected.answered?`${selected.answered} / ${selected.total} évaluées · ${selected.rate} % de réussite`:'À découvrir';
    const qs=bank.filter(q=>q.domain===selected.id);
    const categories=[...new Set(qs.map(q=>q.category||'Notion'))];
    $('#pathTopics').innerHTML=categories.map(title=>{const questions=qs.filter(q=>(q.category||'Notion')===title),answered=questions.filter(q=>typeof state.answers[q.id]?.correct==='boolean').length;return `<div class="v2-path-topic"><span><b>${clean(title)}</b><span>${questions.length} questions</span></span><strong>${answered?`${answered} / ${questions.length} évaluées`:'À faire'}</strong></div>`}).join('');
  }

  function renderSettingsPage(){
    if(mode!=='settings')return;
    const theme=document.documentElement.dataset.theme||'dark';
    const description=$('#themeSettingDescription');
    if(description)description.textContent=theme==='dark'?'Thème sombre actif. Passez en clair pour les environnements lumineux.':'Thème clair actif. Passez en sombre pour réduire la luminance.';
    const themeButton=$('#themeButton');
    if(themeButton){
      const label=themeButton.querySelector('.ui-button__label');
      if(label)label.textContent=theme==='dark'?'Passer en clair':'Passer en sombre';
      else themeButton.textContent=theme==='dark'?'Passer en clair':'Passer en sombre';
    }
    const training=$('#settingsTrainingSelect');if(training){training.innerHTML=$('#trainingSelect').innerHTML;training.value=cfg.id;}
    updateInstallUi();
  }

  function flaggedQuestionIds(){return new Set([...(state.examHistory||[]).flatMap(h=>h.flaggedIds||[]),...Object.keys(state.exam?.flagged||{}).filter(id=>state.exam.flagged[id]),...(state.reports||[]).filter(r=>!r.resolved).map(r=>r.questionId)])}
  function reviewQuestions(){const flagged=flaggedQuestionIds();return bank.filter(q=>(reviewDomain==='all'||q.domain===reviewDomain)).filter(q=>reviewFilter==='errors'?state.answers[q.id]?.correct===false:reviewFilter==='favorites'?state.favorites?.[q.id]:reviewFilter==='flagged'?flagged.has(q.id):state.answers[q.id]?.correct===false||state.favorites?.[q.id]||flagged.has(q.id))}
  function renderMistakesPage(){
    if(mode!=='mistakes')return;
    const queue=reviewQuestions();
    $('#mistakesSubtitle').textContent='Choisissez ce que vous souhaitez retravailler.';
    const target=$('#mistakesQueue');
    target.replaceChildren(UI.createReviewSession({source:reviewFilter,count:queue.length,domains:DOMAINS.map(([id,label])=>[id,label]),domain:reviewDomain,production:true,
      startButton:$('#startMistakesSessionButton'),onStart:startMistakesSession,
      onSource:id=>{reviewFilter=id;renderMistakesPage();$('#reviewFilters [data-review-filter="'+id+'"]')?.focus();},
      onDomain:id=>{reviewDomain=id;renderMistakesPage();$('#reviewDomainFilter')?.focus();}}));
  }

  function renderExamLanding(status='ready',error=''){
    if(mode!=='exam-home')return;
    const ec=examConfig(),active=!!state.exam?.ids?.length;
    $('#examPage').hidden=true;$('#dashboard').hidden=false;renderCourseHub();
    let backdrop=$('#examIntroductionBackdrop');
    if(!backdrop){backdrop=document.createElement('div');backdrop.id='examIntroductionBackdrop';backdrop.className='ui-exam-introduction-backdrop';document.body.append(backdrop);}
    const view=UI.createExamIntroduction({code:cfg.code,total:active?state.exam.ids.length:Math.min(ec.total,autoQuestions.length),durationMinutes:active?state.exam.duration/60000:ec.durationMinutes,
      resume:active,status,error,startButton:$('#startExamButton'),onStart:startOrResumeExam,onBack:()=>{closeExamIntroduction();selectMode('dashboard');}});
    backdrop.replaceChildren(view.element);$('#app').inert=true;document.body.classList.add('ui-modal-open');
    backdrop.onkeydown=e=>{UI.trapModalTab?.(e,view.element);if(e.key==='Escape'&&!examStarting){e.preventDefault();e.stopPropagation();closeExamIntroduction();selectMode('dashboard');}};
    requestAnimationFrame(()=>{if(status==='ready')view.start.focus({preventScroll:true});else view.element.focus({preventScroll:true});});
  }
  function closeExamIntroduction(){
    const start=$('#startExamButton');if(start)$('#examPage').append(start);
    $('#examIntroductionBackdrop')?.remove();$('#app').inert=false;document.body.classList.remove('ui-modal-open');
  }
  function quitExam(){
    if(mode!=='exam')return;
    $('#modalEyebrow').textContent=cfg.code;$('#modalTitle').textContent='Quitter l’examen ?';
    $('#modalBody').textContent='Votre session reste sauvegardée. Le chronomètre continue pendant votre absence.';
    setModalAction('Quitter et sauvegarder',{variant:'secondary'});
    modalCallback=()=>{save();selectMode('dashboard');};showModal({kind:'default',size:'medium'});
  }

  function startMistakesSession(){
    const questions=reviewQuestions();if(!questions.length){toast('Aucune question dans cette sélection.');return;}
    reviewSessionIds=questions.map(q=>q.id);state.retrying=state.retrying||{};
    questions.forEach(q=>{state.retrying[q.id]=true;delete state.drafts[q.id];});
    mode='mistakes-session';domain='all';search='';$('#search').value='';cursor=0;list=[];save();refresh(questions[0].id);focusCurrentQuestion({smooth:false});
  }

  async function startOrResumeExam(){
    if(examStarting)return;
    examStarting=true;const previousExam=state.exam;
    try{
      if(mode==='exam-home')renderExamLanding('loading');
      await new Promise(requestAnimationFrame);
      if(!state.exam&&!buildExam())throw new Error('Préparation impossible. Vérifiez les questions disponibles puis réessayez.');
      if(!state.exam.ids.length||state.exam.ids.some(id=>!byId.has(id)))throw new Error('Certaines questions de la session sont indisponibles. Vos réponses restent sauvegardées.');
      mode='exam';domain='all';search='';$('#search').value='';cursor=Math.min(state.exam.index||0,state.exam.ids.length-1);list=[];
      refresh();await new Promise(requestAnimationFrame);
      if(!list[cursor]||$('#questionCard').hidden)throw new Error('La première question ne peut pas être affichée.');
      closeExamIntroduction();
      if(!Number.isFinite(state.exam.start)){state.exam.start=now();save();}
      if(!timer)timer=setInterval(updateClock,1000);
      $('.workspace').classList.remove('ui-exam-enter');void $('.workspace').offsetWidth;$('.workspace').classList.add('ui-exam-enter');
      updateClock();focusCurrentQuestion({smooth:false});
    }catch(error){
      // A failed preparation must never overwrite a resumable session.
      if(!previousExam&&state.exam&&!Number.isFinite(state.exam.start))state.exam=null;
      mode='exam-home';save();refresh();renderExamLanding('error',error.message);
    }finally{examStarting=false;}
  }

  function startFocusFromSettings(){
    mode='study';domain='all';search='';$('#search').value='';cursor=0;list=[];refresh();
    requestAnimationFrame(()=>setFocusMode(true,{recenter:true}));
  }

  function activateTraining(id,{resumeExam=false}={}){
    const next=catalog.find(t=>t.id===id)||catalog[0];if(!next)return;
    releaseSourceUrl();cfg=next;bank=Object.freeze([...(cfg.questions||[])]);byId=new Map(bank.map(q=>[q.id,q]));autoQuestions=bank.filter(q=>q.autoScorable!==false);DOMAINS=cfg.domains?.length?cfg.domains:[...new Set(bank.map(q=>q.domain||'Import'))].map((d,i)=>[d,d,String(i+1).padStart(2,'0')]);
    state=currentState(cfg.id);pathDomain=DOMAINS[0]?.[0]||'';state.answers=state.answers||{};state.drafts=state.drafts||{};state.examHistory=Array.isArray(state.examHistory)?state.examHistory:[];state.favorites=state.favorites||{};state.notes=state.notes||{};state.reports=Array.isArray(state.reports)?state.reports:[];
    if(cfg.sourceFile){try{sourceUrl=URL.createObjectURL(new Blob([cfg.sourceFile],{type:'application/pdf'}));cfg._sourceUrl=sourceUrl}catch{}}
    root.activeTraining=cfg.id;mode=resumeExam&&state.exam?.ids?.length?'exam':'dashboard';domain='all';search='';cursor=mode==='exam'?Math.min(state.exam.index||0,Math.max(0,state.exam.ids.length-1)):0;list=[];$('#search').value='';
    // Preparation validates saved questions; never erase a session during activation.
    dynamicMetadata();save();refresh();
  }

  function updateRail(){
    const wrongN=bank.filter(q=>state.answers[q.id]?.correct===false).length;$('#studyCount').textContent=bank.length;$('#wrongCount').textContent=wrongN;const weakCountEl=$('#weakCount');if(weakCountEl)weakCountEl.textContent=weaknessQuestions().length;$('#dueMetric').textContent=wrongN;$('#dashboardBadge').textContent=wrongN||'';
    const answered=bank.filter(q=>state.answers[q.id]?.done&&typeof state.answers[q.id]?.correct==='boolean');$('#mastery').textContent=answered.length?Math.round(answered.filter(q=>state.answers[q.id].correct).length/answered.length*100)+' %':'—';
    $('#exerciseCount').textContent=autoQuestions.length;$('#knowledgeCount').textContent=bank.length-autoQuestions.length;
    const activeMode=shellMode();
    $$('.rail-link[data-mode]').forEach(b=>{const active=b.dataset.mode===activeMode;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
    const settingsButton=$('#settingsButton');if(settingsButton){const active=activeMode==='settings';settingsButton.classList.toggle('is-active',active);if(active)settingsButton.setAttribute('aria-current','page');else settingsButton.removeAttribute('aria-current')}
    $('#domainNav').innerHTML=`<span class="rail-heading">DOMAINES ${clean(cfg.code)}</span>`+DOMAINS.map(([id,label,n])=>{const count=bank.filter(q=>q.domain===id).length;return`<button class="rail-link ui-navigation-item domain-link ${domain===id&&activeMode==='study'?'active':''}" data-domain="${clean(id)}"><span>${clean(n)}</span><span class="rail-link-label">${clean(label)}</span><b>${count}</b></button>`}).join('');
    $$('.domain-link').forEach(b=>b.onclick=()=>{domain=b.dataset.domain;mode='study';search='';$('#search').value='';cursor=0;refresh()});
    $('#domainPills').innerHTML=`<button class="${domain==='all'?'active':''}" data-filter="all">Tous</button>`+DOMAINS.map(([id,label])=>`<button class="${domain===id?'active':''}" data-filter="${clean(id)}">${clean(label)}</button>`).join('');
    $$('#domainPills button').forEach(b=>b.onclick=()=>{domain=b.dataset.filter;mode='study';cursor=0;list=[];refresh()});$('#domainPills').hidden=mode==='exam';
    if(UI.createDomainSelector){
      const options=[{value:'all',label:'Tous les domaines'},...DOMAINS.map(([id,label])=>({value:id,label}))];
      if(!domainSelector){domainSelector=UI.createDomainSelector({options,value:domain,onChange:value=>{domain=value;mode='study';cursor=0;list=[];refresh();}});const host=document.createElement('div');host.className='v3-domain-control ui-training-toolbar';host.setAttribute('aria-label','Filtres de l’entraînement');host.append(domainSelector.element,$('#questionNavigatorButton'),$('#resetFilter'));host.querySelector('#resetFilter').className='ui-button ui-button--ghost ui-button--medium';host.querySelector('#questionNavigatorButton').className='ui-button ui-button--secondary ui-button--medium';$('.v2-course-summary').before(host);}
      else domainSelector.update({options,value:domain});
      domainSelector.element.parentElement.hidden=mode==='exam'||!['study','quick','weakness','mistakes-session'].includes(mode);
    }
    enhanceNavigationIcons();updateShellContext();
  }
  function examConfig(){return{version:1,total:48,durationMinutes:100,allocation:null,caseStudyIds:[],caseRelatedIds:[],multiContext:false,subtitle:'Examen blanc généré depuis la banque',...(cfg.exam||{})}}
  function formatDuration(ms){ms=Math.max(0,Number(ms)||0);const total=Math.floor(ms/1000),h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60;return h?`${h} h ${String(m).padStart(2,'0')} min`:`${m} min ${String(s).padStart(2,'0')} s`}
  function formatDate(ts){try{return new Intl.DateTimeFormat('fr-FR',{dateStyle:'medium',timeStyle:'short'}).format(new Date(ts))}catch{return new Date(ts).toLocaleString()}}
  function domainStatsData(){return DOMAINS.map(([id,label])=>{const qs=bank.filter(q=>q.domain===id),answered=qs.filter(q=>typeof state.answers[q.id]?.correct==='boolean'),good=answered.filter(q=>state.answers[q.id].correct===true).length,bad=answered.length-good,rate=answered.length?Math.round(good/answered.length*100):0;return{id,label,total:qs.length,answered:answered.length,good,bad,rate}})}
  function weaknessQuestions(){const stats=domainStatsData().filter(x=>x.answered);stats.sort((a,b)=>a.rate-b.rate||b.bad-a.bad);const weakIds=new Set(stats.slice(0,Math.min(2,stats.length)).map(x=>x.id));let qs=bank.filter(q=>state.answers[q.id]?.correct===false||(weakIds.has(q.domain)&&state.answers[q.id]?.done));if(!qs.length&&weakIds.size)qs=bank.filter(q=>weakIds.has(q.domain));return qs}
  function masteredCount(){return bank.filter(q=>(state.answers[q.id]?.streak||0)>=2&&state.answers[q.id]?.correct===true).length}
  function renderDashboard(){
    if(mode!=='dashboard')return;
    renderCourseHub();
    const answered=bank.filter(q=>typeof state.answers[q.id]?.correct==='boolean');
    const good=answered.filter(q=>state.answers[q.id].correct).length;
    const explored=bank.filter(q=>state.seen?.[q.id]||state.answers[q.id]?.done||state.answers[q.id]?.read||state.drafts[q.id]).length;
    const rate=answered.length?Math.round(good/answered.length*100):null,mastered=masteredCount();
    const wrong=answered.length-good,favs=bank.filter(q=>state.favorites?.[q.id]).length;
    const hist=[...(state.examHistory||[])].slice(0,5).reverse(),session=savedStudySession(),exam=state.exam?.ids?.length;
    $('#dashboardSubtitle').textContent=`${cfg.code} · ${explored} questions explorées sur ${bank.length}`;
    const start=$('#startWeaknessButton');
    start.textContent=exam?'Reprendre l’examen':session?'Reprendre ma session':'Commencer une session de 10 questions';
    const last=exam?byId.get(state.exam.ids[state.exam.index||0]):session?byId.get(session.questionId):null;
    $('#dashboardSessionSummary').textContent=last?`${domainTuple(last.domain)?.[1]||last.domain} · ${last.id} · position et réponses sauvegardées`:answered.length?'Prêt pour une nouvelle session courte ? Vos résultats sont sauvegardés.':'Vos premiers résultats apparaîtront après votre première session.';
    $('#dashboardWelcome').hidden=!!session||!!exam||answered.length>0;
    $('#dashboardWeaknessButton').hidden=true;
    $('#dashboardCards').innerHTML=[
      ['Réussite',rate===null?'—':`${rate}%`,answered.length?`${good} bonnes réponses sur ${answered.length} questions évaluées`:'Répondez à une question pour commencer',false],
      ['Questions maîtrisées',mastered,'Réussies au moins deux fois de suite',false],
      ['Erreurs actives',wrong,wrong?'À retravailler à votre rythme':'Aucune erreur active',false],
    ].map(([label,value,detail,history])=>`<article class="dash-card${history?' dash-card-action':''}" ${history?'data-dashboard-history role="button" tabindex="0" aria-label="Ouvrir l’historique des examens"':''}><span>${clean(label)}</span><strong>${clean(value)}</strong><small>${clean(detail)}</small></article>`).join('');
    const stats=domainStatsData().sort((a,b)=>{if(!a.answered&&b.answered)return 1;if(a.answered&&!b.answered)return -1;return a.rate-b.rate||b.bad-a.bad;});
    $('#weakDomainLabel').textContent=stats.some(x=>x.answered)?'Réussite sur les questions évaluées':'Choisissez un domaine pour commencer';
    $('#domainStats').previousElementSibling.querySelector('h3').textContent='Vos domaines';
    $('#dashboardCards').hidden=!answered.length;
    $('#domainStats').innerHTML=stats.map(s=>{
      const status=!s.answered?'À découvrir':s.rate<60?'À renforcer':s.rate<80?'À consolider':'Solide';
      return `<div class="domain-stat domain-stat-action"><div class="domain-stat-copy"><strong>${clean(s.label)}</strong><small>${clean(status)} · ${s.answered?`${s.rate} % de réussite · ${s.answered} évaluées`:`${s.total} questions`}</small></div><button class="domain-train-button ui-button ui-button--secondary ui-button--small" type="button" data-train-domain="${clean(s.id)}">${s.answered?'Travailler':'Découvrir'}</button></div>`;
    }).join('');
    $$('[data-train-domain]').forEach(b=>b.onclick=()=>{mode='study';domain=b.dataset.trainDomain;search='';$('#search').value='';cursor=0;list=[];refresh();focusCurrentQuestion({smooth:true});});
    $('#examHistoryPanel').hidden=!hist.length;
    $('#examTrend').innerHTML=hist.map(h=>`<div class="trend-item"><div class="trend-bar"><i style="height:${Math.max(8,h.percent)}%"></i></div><b>${h.percent}%</b><span>${clean(new Date(h.completedAt).toLocaleDateString('fr-FR',{day:'2-digit',month:'2-digit'}))}</span></div>`).join('');
    const queue=bank.filter(q=>state.answers[q.id]?.correct===false).sort((a,b)=>(state.answers[b.id]?.ts||0)-(state.answers[a.id]?.ts||0)).slice(0,6);
    $('#reviewQueue').closest('.dashboard-panel').hidden=!queue.length;
    $('#reviewQueue').innerHTML=queue.map(q=>`<button class="review-item" data-dashboard-q="${clean(q.id)}"><span>${clean(q.id)}</span><b>${clean(domainTuple(q.domain)?.[1]||q.domain)}</b><small>Dernière réponse incorrecte</small></button>`).join('');
    const favorites=bank.filter(q=>state.favorites?.[q.id]||state.notes?.[q.id]).slice(0,6);
    $('#favoritePreview').closest('.dashboard-panel').hidden=!favorites.length;$('#favoriteCount').textContent=`${favs} favoris`;
    $('#favoritePreview').innerHTML=favorites.map(q=>`<button class="favorite-item" data-dashboard-q="${clean(q.id)}"><span>${state.favorites?.[q.id]?'★':'✎'}</span><div><b>${clean(q.id)}</b><small>${clean((state.notes?.[q.id]||q.prompt||'').slice(0,95))}</small></div></button>`).join('');
    $('#dashboardDetails').hidden=true;
    $$('[data-dashboard-q]').forEach(b=>b.onclick=()=>openQuestionById(b.dataset.dashboardQ));
    $$('[data-dashboard-history]').forEach(el=>{el.onclick=openExamHistory;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openExamHistory();}};});
  }
  function renderCourseHub(){
    if(!UI.createCourseHub)return;
    const modules=UI.courseModules({domains:DOMAINS,questions:bank,state}),session=savedStudySession(),exam=state.exam?.ids?.length;
    const last=exam?byId.get(state.exam.ids[state.exam.index||0]):byId.get(session?.questionId);
    if(!pathDomain||!modules.some(m=>m.id===pathDomain))pathDomain=last?.domain||modules[0]?.id;
    if(!courseHub){
      const heading=document.createElement('h2');heading.id='courseHubHeading';
      const header=document.createElement('header');header.className='ui-page-header';
      const activities=UI.createActivitiesMenu({onHistory:openExamHistory,onFavorites:()=>{reviewFilter='favorites';reviewDomain='all';selectMode('mistakes');}});
      activities.trigger.id='activitiesButton';header.append(heading,activities.element);
      courseHub=UI.createCourseHub({resumeButton:$('#startWeaknessButton'),onSelect:id=>{pathDomain=id;},onStart:id=>{pathDomain=id;$('#startPathButton').click();},onContinue:startOrResumeStudy});
      $('#dashboard').prepend(header,courseHub.element);UI.mountPageLayout($('#dashboard'),header);
    }
    $('#courseHubHeading').textContent='Votre préparation '+cfg.code;
    courseHub.update({code:cfg.code,name:cfg.id==='az104'?'Microsoft Azure Administrator':cfg.name,modules,selected:pathDomain,resumeLabel:exam?'Reprendre l’examen':session?'Reprendre l’entraînement':'Commencer une session de 10 questions'});
  }
  function openQuestionById(id){mode='study';domain='all';search='';$('#search').value='';list=[];refresh(id);focusCurrentQuestion({smooth:true})}
  function questionNavStatus(q,examMode){if(examMode){const r=state.exam?.answers?.[q.id];return r?'answered':'pending'}const r=state.answers[q.id];if(r?.correct===true)return'good';if(r?.correct===false)return'bad';if(r?.done)return'answered';return'pending'}
  function setModalAction(label,{variant='primary'}={}){
    const action=$('#modalAction');if(!action)return;
    const safe=['primary','secondary','ghost','danger'].includes(variant)?variant:'primary';
    action.className=`ui-button ui-button--${safe} ui-button--medium`;
    const text=action.querySelector('.ui-button__label');if(text)text.textContent=label;else action.textContent=label;
  }
  function showModal({kind='default',size='medium',escapeClosable=true,initialFocus=null}={}){
    const backdrop=$('#modal'),surface=backdrop?.querySelector('.modal');if(!backdrop||!surface)return;
    modalReturnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null;
    modalEscapeClosable=escapeClosable;
    UI.applyModalSurface?.(surface,{kind,size});
    document.body.classList.add('ui-modal-open');
    backdrop.hidden=false;
    requestAnimationFrame(()=>{
      const target=typeof initialFocus==='string'?$(initialFocus):initialFocus;
      (target instanceof HTMLElement?target:surface).focus({preventScroll:true});
    });
  }
  function openQuestionNavigator(){
    const examMode=mode==='exam'&&state.exam?.ids?.length,quickMode=mode==='quick'||mode==='mistakes-session';const items=examMode?(state.exam.ids||[]).map(id=>byId.get(id)).filter(Boolean):quickMode?list:bank;
    const currentId=list[cursor]?.id;$('#modalEyebrow').textContent=examMode?'NAVIGATION EXAMEN':`${cfg.code} · BANQUE COMPLÈTE`;$('#modalTitle').textContent=examMode?`Naviguer dans les ${items.length} questions`:`Toutes les questions · ${items.length}`;
    const buttons=items.map((q,i)=>{const status=questionNavStatus(q,examMode),current=q.id===currentId?' current':'',caseCls=examMode&&(state.exam.caseStudyIds||[]).includes(q.id)?' case-question':'',examFlagCls=examMode&&state.exam?.flagged?.[q.id]?' flagged':'',favorite=!!state.favorites?.[q.id],reported=(state.reports||[]).some(x=>x.questionId===q.id&&!x.resolved),markers=`${favorite?'<i class="question-marker favorite-marker" data-marker-icon="star" aria-label="Favori" title="Favori"></i>':''}${reported?'<i class="question-marker report-marker" data-marker-icon="report" aria-label="Signalée" title="Signalée"></i>':''}`,searchText=clean([q.id,q.category,domainTuple(q.domain)?.[1],status].filter(Boolean).join(' '));return`<button class="question-jump ${status}${current}${caseCls}${examFlagCls}" data-jump-id="${clean(q.id)}" data-nav-search="${searchText}" title="${clean(q.id)} · ${clean(q.category||domainTuple(q.domain)?.[1]||q.domain||'Question')}"><span class="question-markers">${markers}</span><b>${i+1}</b><span>${clean(q.id)}</span></button>`}).join('');
    $('#modalBody').innerHTML=`<p class="navigator-intro">${examMode?'Accès direct à toutes les questions de cette session. Les réponses déjà enregistrées sont indiquées sans révéler leur correction.':'Accès direct aux questions de cette sélection. Recherchez par numéro, identifiant, catégorie ou domaine.'}</p><div class="navigator-toolbar"><label class="navigator-search"><span aria-hidden="true">⌕</span><input id="questionNavigatorSearch" type="search" autocomplete="off" placeholder="Numéro, ID, domaine…" aria-label="Filtrer les questions"></label><span id="questionNavigatorSummary" class="navigator-summary">${items.length} / ${items.length}</span></div><div class="navigator-legend"><span><i class="nav-dot current"></i>Actuelle</span><span><i class="nav-dot answered"></i>Répondue</span>${examMode?'':`<span><i class="nav-dot good"></i>Réussie</span><span><i class="nav-dot bad"></i>À reprendre</span>`}<span><i class="nav-dot pending"></i>Non répondue</span>${examMode?'<span><i class="nav-dot case-question"></i>Étude de cas</span>':''}</div><div class="question-nav-grid">${buttons}<p id="questionNavigatorEmpty" class="navigator-empty" hidden>Aucune question ne correspond à cette recherche.</p></div>`;
    setModalAction('Fermer',{variant:'secondary'});modalCallback=null;showModal({kind:'navigator',size:'wide',escapeClosable:true,initialFocus:'#questionNavigatorSearch'});
    const filter=()=>{const query=norm($('#questionNavigatorSearch')?.value||'');let visible=0;$$('[data-jump-id]').forEach(button=>{const match=!query||norm(button.dataset.navSearch||'').includes(query);button.hidden=!match;if(match)visible++});$('#questionNavigatorSummary').textContent=`${visible} / ${items.length}`;$('#questionNavigatorEmpty').hidden=visible>0};
    $('#questionNavigatorSearch').oninput=filter;
    $$('[data-marker-icon]').forEach(marker=>{if(UI.createIcon)marker.replaceChildren(UI.createIcon(marker.dataset.markerIcon,{size:11,filled:marker.dataset.markerIcon==='star'}))});
    setTimeout(()=>$('#modalBody .question-jump.current')?.scrollIntoView({block:'center',inline:'nearest'}),0);
    $$('[data-jump-id]').forEach(b=>b.onclick=()=>{const id=b.dataset.jumpId;closeModal();if(examMode){const idx=(state.exam.ids||[]).indexOf(id);if(idx>=0){cursor=idx;state.exam.index=idx;save();render()}}else if(quickMode){cursor=items.findIndex(q=>q.id===id);render()}else{mode='study';domain='all';search='';$('#search').value='';cursor=0;list=[];refresh(id)}focusCurrentQuestion({smooth:true})});
  }

  function openExamHistory(){
    const history=[...(state.examHistory||[])].sort((a,b)=>(b.completedAt||0)-(a.completedAt||0));$('#modalEyebrow').textContent=`${cfg.code} · EXAMENS`;$('#modalTitle').textContent='Historique des examens';
    if(!history.length){$('#modalBody').innerHTML='<div class="history-empty"><strong>Aucun examen terminé enregistré.</strong><p>Les prochains examens terminés apparaîtront ici avec le score, la durée et le détail par domaine.</p></div>';setModalAction('Fermer',{variant:'secondary'});modalCallback=null;showModal({kind:'default',size:'wide'});return}
    $('#modalBody').innerHTML=`<div class="history-list">${history.map((h,i)=>`<article class="history-card"><div class="history-main"><div><span class="history-date">${clean(formatDate(h.completedAt))}</span><strong>${h.correct} / ${h.total} · ${h.percent}%</strong></div><div class="history-meta"><span>Durée ${clean(formatDuration(h.elapsedMs))}</span><span>Moy. ${clean(formatDuration(h.avgMs||0))}</span><span>${h.answered||0} répondues</span><span>${h.flagged||0} marquées</span><span>${h.skipped||0} non répondues / passées</span></div></div><details><summary>Détail par domaine</summary><div class="history-domains">${(h.domains||[]).filter(d=>d.total).map(d=>`<div><span>${clean(d.label)}</span><b>${d.passed} / ${d.total}</b></div>`).join('')}</div></details></article>`).join('')}</div><button id="clearExamHistory" class="soft-button history-clear" type="button">Effacer l’historique</button>`;
    setModalAction('Fermer',{variant:'secondary'});modalCallback=null;showModal({kind:'default',size:'wide'});const clear=$('#clearExamHistory');if(clear)clear.onclick=()=>{if(window.confirm&&!window.confirm(`Effacer l’historique des examens ${cfg.code} ?`))return;state.examHistory=[];save();updateRail();openExamHistory();toast('Historique des examens effacé.')};
  }

  function buildExam(){
    const ec=examConfig(),total=Math.min(ec.total,autoQuestions.length);if(total<1){toast('Aucune question évaluée automatiquement n’est disponible pour cet examen.');return false}
    const caseIds=(ec.caseStudyIds||[]).filter(id=>byId.get(id)?.autoScorable!==false),caseStudy=caseIds.map(id=>byId.get(id)).filter(Boolean);if((ec.caseStudyIds||[]).length&&caseStudy.length!==ec.caseStudyIds.length){toast('Certaines questions de l’étude de cas sont incomplètes.');return false}
    const taken=new Set(caseStudy.map(q=>q.id)),general=[];let multiContext=null;
    if(ec.multiContext){const excluded=new Set([...(ec.caseRelatedIds||[]),...taken]);const pool=autoQuestions.filter(q=>!excluded.has(q.id)&&!q.options?.length&&['yn','rows'].includes(q.visualSpec?.kind));multiContext=shuffle(pool)[0]||null;if(multiContext){general.push(multiContext);taken.add(multiContext.id)}}
    if(Array.isArray(ec.allocation)&&ec.allocation.length===DOMAINS.length){DOMAINS.forEach(([id],i)=>{const already=[...caseStudy,...general].filter(q=>q.domain===id).length,needed=Math.max(0,(ec.allocation[i]||0)-already),pool=autoQuestions.filter(q=>q.domain===id&&!taken.has(q.id));for(const q of shuffle(pool).slice(0,needed)){general.push(q);taken.add(q.id)}})}
    for(const q of shuffle(autoQuestions)){if(general.length+caseStudy.length>=total)break;if(!taken.has(q.id)){general.push(q);taken.add(q.id)}}
    if(general.length+caseStudy.length<total){toast('Le corpus ne contient pas assez de questions évaluables pour cet examen.');return false}
    const ids=[...shuffle(general).slice(0,total-caseStudy.length).map(q=>q.id),...caseStudy.map(q=>q.id)];
    state.exam={version:ec.version,ids,caseStudyIds:caseStudy.map(q=>q.id),multiContextId:multiContext?.id||null,answers:{},drafts:{},flagged:{},index:0,start:null,duration:ec.durationMinutes*60000};save();return true;
  }
  function applyExamView(){const active=mode==='exam',focusAvailable=['study','quick','weakness','mistakes-session','exam'].includes(mode)&&!!list.length,focusActive=active||(focusAvailable&&!!state.examFocus);document.body.classList.toggle('exam-compact',active&&state.examCompact);document.body.classList.toggle('focus-mode',focusActive);document.body.classList.toggle('exam-focus',active);const controls=$('#examControls'),clock=$('#sessionClock');if(active){$('.workbar').append(controls);$('.workbar').append(clock);}else{$('.v2-study-main').append(controls);$('.after-card').append(clock);}const navigator=$('#questionNavigatorButton');if(navigator){(active?$('#examControls'):$('.v3-domain-control')||$('.workbar-controls')).append(navigator);if(!active&&$('#resetFilter')?.parentElement===navigator.parentElement)navigator.parentElement.insertBefore(navigator,$('#resetFilter'));navigator.textContent=active?'Questions':'Toutes les questions';}$('#examControls').hidden=!active;$('#compactButton').classList.toggle('is-active',active&&state.examCompact);$('#compactButton').setAttribute('aria-pressed',String(active&&state.examCompact));const fm=$('#focusMenuButton');if(fm){const fromSettings=mode==='settings';fm.disabled=!focusAvailable&&!fromSettings;fm.classList.toggle('is-active',focusActive);fm.setAttribute('aria-pressed',String(focusActive));const label=fm.querySelector('.ui-button__label');const text=fromSettings?'Ouvrir en Focus':focusActive?'Quitter Focus':'Mode Focus';if(label)label.textContent=text;else fm.textContent=text}const direct=$('#focusToggleButton');if(direct){direct.hidden=active||!focusAvailable;if(UI.updateFocusToggle)UI.updateFocusToggle(direct,focusActive);else{direct.classList.toggle('is-active',focusActive);direct.setAttribute('aria-pressed',String(focusActive));const label=direct.querySelector('.ui-button__label');if(label)label.textContent=focusActive?'Quitter Focus':'Mode Focus'}}}
  function setFocusMode(active,{recenter=true}={}){if(mode==='exam')return;if(!['study','quick','weakness','mistakes-session','exam'].includes(mode)||!list.length)return;focusTransition([$('.rail'),$('.topbar'),$('.v3-domain-control')],active,()=>{state.examFocus=!!active;applyExamView();});reveal($('#questionCard'));updateFilterControls();save();if(recenter)UI.scrollQuestionAfterRender?.({smooth:false})}
  function toggleFocus(){setFocusMode(!state.examFocus)}
  function resetExam(){if(mode!=='exam'||!state.exam)return;if(window.confirm&&!window.confirm('Recommencer cet examen depuis la question 1 ? Toutes les réponses de cette session seront effacées.'))return;state.exam.answers={};state.exam.drafts={};state.exam.index=0;state.exam.start=now();cursor=0;save();render();const ec=examConfig();toast(`Examen réinitialisé : ${state.exam.ids.length} questions et ${ec.durationMinutes} minutes.`);focusCurrentQuestion({smooth:true})}
  function selectMode(next){
    documentReader.close();
    if(next==='path')next='dashboard';
    if(next!=='exam'&&$('#examIntroductionBackdrop'))closeExamIntroduction();
    if(next==='study'){
      const session=savedStudySession();
      mode=session?.mode==='quick'?'quick':'study';domain=session?.domain||'all';search=session?.search||'';
      $('#search').value=search;cursor=0;list=[];refresh(session?.questionId);
    }else{
      if(next==='exam')mode='exam-home';else if(next==='mistakes')mode='mistakes';else mode=next;
      domain='all';search='';$('#search').value='';cursor=0;list=[];refresh();
    }
    $('#mainContent').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});
  }
  function visible(){
    if(['dashboard','path','settings','mistakes','exam-home'].includes(mode))return[];
    if(mode==='exam')return(state.exam?.ids||[]).map(id=>byId.get(id)).filter(Boolean);
    if(mode==='quick')return(state.studySession?.ids||[]).map(id=>byId.get(id)).filter(Boolean);
    let questions=bank.filter(q=>domain==='all'||q.domain===domain);
    if(mode==='weakness')questions=weaknessQuestions();
    if(mode==='mistakes-session'){const ids=new Set(reviewSessionIds);questions=questions.filter(q=>ids.has(q.id));}
    if(search)questions=questions.filter(q=>norm([q.id,q.category,q.prompt,q.solutionAnswer,q.pedagogicalContext,q.sourceExplanation,...(q.options||[])].join(' ')).includes(norm(search)));
    return questions;
  }
  function refresh(keepId){
    const id=keepId||list[cursor]?.id,pageMode=['dashboard','path','settings','mistakes','exam-home'].includes(mode);
    $('#dashboard').hidden=mode!=='dashboard';$('#pathPage').hidden=mode!=='path';$('#mistakesPage').hidden=mode!=='mistakes';$('#examPage').hidden=mode!=='exam-home';$('#settingsPage').hidden=mode!=='settings';
    $('.workspace').hidden=pageMode;$('.hero').hidden=true;$('.strip').hidden=true;
    if(pageMode){
      $('#globalSearch').disabled=false;
      UI.setQuestionSessionActive?.(false);document.body.classList.remove('question-session-active');list=[];updateRail();applyExamView();updateFilterControls();updateMobileActions();
      if(mode==='dashboard')renderDashboard();else if(mode==='path')renderPathPage();else if(mode==='mistakes')renderMistakesPage();else if(mode==='exam-home')renderExamLanding();else renderSettingsPage();return;
    }
    list=visible();UI.setQuestionSessionActive?.(!!list.length);document.body.classList.toggle('question-session-active',!!list.length);
    if(id&&list.some(q=>q.id===id))cursor=list.findIndex(q=>q.id===id);
    else if(mode==='study'&&state.lastId&&list.some(q=>q.id===state.lastId))cursor=list.findIndex(q=>q.id===state.lastId);
    else cursor=Math.min(cursor,Math.max(0,list.length-1));
    const ec=examConfig();
    $('#workTitle').textContent=mode==='quick'?'Entraînement':mode==='exam'?'Examen blanc '+cfg.code:mode==='weakness'?'Travailler mes faiblesses':mode==='mistakes-session'?'Session de rattrapage':'Entraînement';
    $('#workSubtitle').textContent=['study','quick'].includes(mode)?'Une question à la fois. Votre session est sauvegardée automatiquement.':mode==='exam'?ec.subtitle:mode==='weakness'?'Priorité aux domaines les moins maîtrisés et aux erreurs actives.':mode==='mistakes-session'?'Une session ciblée sur votre sélection de révision.':`${bank.length} questions disponibles pour ${cfg.code}.`;
    $('#modeLabel').textContent={study:'Base complète',quick:'Session courte',weakness:'Faiblesses','mistakes-session':'Erreurs',exam:'Examen blanc'}[mode]||'Base complète';
    $('#search').disabled=mode==='exam'||mode==='quick';$('#resetFilter').hidden=mode==='exam'||mode==='quick';
    $('#empty').hidden=!!list.length;$('#questionCard').hidden=!list.length;
    updateRail();if(mode==='quick')$('#domainPills').hidden=true;$('#globalSearch').disabled=mode==='exam'||mode==='quick';$('#globalSearch').value=search;applyExamView();updateFilterControls();render();
  }
  function answerComplete(q,d){if(q.options?.length)return Array.isArray(d.selected)&&d.selected.length>0;const s=q.visualSpec||{};if(s.kind==='yn')return(s.expected||[]).every((_,i)=>typeof d.values?.[i]==='boolean');if(s.kind==='rows')return(s.rows||[]).every((_,i)=>!!String(d.values?.[i]??'').trim());if(s.kind==='self')return!!String(d.text||'').trim();return false}
  function score(q,d){if(q.autoScorable===false)return null;if(q.options?.length){const sel=(d.selected||[]).map(Number),ans=(q.answerIndices||[]).map(Number);return sel.length===ans.length&&sel.every(i=>ans.includes(i))}const s=q.visualSpec||{};if(s.kind==='yn')return(s.expected||[]).every((v,i)=>d.values?.[i]===v);if(s.kind==='rows')return(s.rows||[]).every((r,i)=>normAnswer(d.values?.[i])===normAnswer(r.expected));return null}
  function answerChoices(q,r,d){
    if(q.options?.length){
      $('#answerNote').textContent=q.multi?'Plusieurs réponses · sélectionnez toutes les réponses correctes':'Une réponse attendue';
      const choices=$('#choices');
      const selected=new Set((d.selected||[]).map(Number));

      if(UI.createAnswerOption){
        choices.replaceChildren();
        const safeId=String(q.id||'question').replace(/[^a-z0-9_-]/gi,'-');
        q.options.forEach((o,i)=>{
          const reveal=!!r&&mode!=='exam'&&typeof r.correct==='boolean'&&q.autoScorable!==false;
          const optionState=UI.getAnswerOptionResultState
            ?UI.getAnswerOptionResultState({answerIndices:q.answerIndices,selectedIndices:r?.selected,optionIndex:i,reveal})
            :(!reveal?'default':new Set((q.answerIndices||[]).map(Number)).has(i)?'correct':new Set((r?.selected||[]).map(Number)).has(i)?'incorrect':'default');

          const option=UI.createAnswerOption({
            id:`app-answer-${safeId}-${i}`,
            name:`app-answer-${safeId}`,
            value:String(i),
            index:i,
            label:String(o),
            type:q.multi?'multiple':'single',
            selected:selected.has(i),
            state:optionState,
            locked:!!r,
            onChange:({checked})=>{
              if(r)return;
              const next=new Set((d.selected||[]).map(Number));
              if(q.multi){
                if(checked)next.add(i);else next.delete(i);
              }else{
                next.clear();
                if(checked)next.add(i);
              }
              setDraft(q,{selected:[...next]});
              render();
              requestAnimationFrame(()=>$(`#app-answer-${safeId}-${i}`)?.focus({preventScroll:true}));
            },
          });
          option.dataset.choice=String(i);
          choices.append(option);
        });
        return;
      }

      const fallbackCorrect=new Set((q.answerIndices||[]).map(Number)),fallbackSelected=new Set((r?.selected||[]).map(Number));
      choices.innerHTML=q.options.map((o,i)=>{let cls='choice';if(selected.has(i))cls+=' selected';if(r&&mode!=='exam'&&typeof r.correct==='boolean'&&q.autoScorable!==false){if(fallbackCorrect.has(i))cls+=' correct';else if(fallbackSelected.has(i))cls+=' incorrect'}return`<button class="${cls}" data-choice="${i}" aria-pressed="${selected.has(i)}" ${r?'disabled':''}><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${clean(o)}</span><span class="choice-check">${r&&mode!=='exam'&&fallbackCorrect.has(i)?'✓':r&&mode!=='exam'&&fallbackSelected.has(i)?'×':selected.has(i)?'●':''}</span></button>`}).join('');
      $$('#choices [data-choice]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.choice),set=new Set((d.selected||[]).map(Number));if(q.multi){set.has(i)?set.delete(i):set.add(i)}else{set.clear();set.add(i)}setDraft(q,{selected:[...set]});render()});
      return;
    }

    const s=q.visualSpec||{kind:'self'};
    if(s.kind==='self'){$('#answerNote').textContent='Réponse libre · auto-évaluation après révélation de la correction';$('#choices').innerHTML=`<label class="free-answer"><span>Votre réponse</span><textarea id="selfAnswer" rows="4" placeholder="Saisissez votre réponse avant d’afficher la correction" ${r?'disabled':''}>${clean(d.text||'')}</textarea></label>`;const el=$('#selfAnswer');if(el)el.oninput=e=>{setDraft(q,{text:e.target.value});const submit=$("#submit");if(submit)submit.disabled=!e.target.value.trim()};return}
    $('#answerNote').textContent=s.kind==='yn'?'Décidez pour chaque proposition':'Une réponse par ligne';$('#choices').innerHTML=s.kind==='yn'?(s.labels||[]).map((label,i)=>{const value=d.values?.[i],revealed=!!r&&mode!=='exam',expected=!!s.expected[i];const yesClass=`${value===true?'selected':''} ${revealed&&expected?'correct':''} ${revealed&&value===true&&!expected?'incorrect':''}`;const noClass=`${value===false?'selected':''} ${revealed&&!expected?'correct':''} ${revealed&&value===false&&expected?'incorrect':''}`;return`<div class="statement"><div>${clean(label)}</div><div class="binary"><button data-row="${i}" data-val="true" class="${yesClass}" ${r?'disabled':''}>Oui</button><button data-row="${i}" data-val="false" class="${noClass}" ${r?'disabled':''}>Non</button></div></div>`}).join(''):(s.rows||[]).map((row,i)=>{const choices=Array.isArray(row.choices)?row.choices:[],control=choices.length>=2?`<select data-row="${i}" ${r?'disabled':''}><option value="">Choisir…</option>${choices.map(c=>`<option value="${clean(c)}" ${d.values?.[i]===c?'selected':''}>${clean(c)}</option>`).join('')}</select>`:`<input data-row="${i}" type="text" value="${clean(d.values?.[i]||'')}" placeholder="Saisir votre réponse" ${r?'disabled':''}>`;return`<label class="statement"><span>${clean(row.label)}</span>${control}</label>`}).join('');
    $$('#choices button[data-row]').forEach(b=>b.onclick=()=>{const values={...(d.values||{}),[b.dataset.row]:b.dataset.val==='true'};setDraft(q,{values});render()});$$('#choices select[data-row]').forEach(b=>b.onchange=()=>{const values={...(d.values||{}),[b.dataset.row]:b.value};setDraft(q,{values});render()});$$('#choices input[data-row]').forEach(b=>b.onchange=()=>{const values={...(d.values||{}),[b.dataset.row]:b.value.trim()};setDraft(q,{values});render()});
  }
  function scheduleRecord(q,result,correct){const old=state.answers[q.id]||{},streak=correct?(old.streak||0)+1:0;result.correct=correct;result.pendingSelfGrade=false;result.streak=streak;delete result.due;state.answers[q.id]=result;delete state.drafts[q.id];if(state.retrying)delete state.retrying[q.id];save()}
  function feedback(q,r){
    const el=$('#feedback');
    el.hidden=!r||mode==='exam';
    if(el.hidden)return;

    const retry=()=>{state.retrying=state.retrying||{};state.retrying[q.id]=true;state.drafts[q.id]={};save();refresh(q.id);focusCurrentQuestion();};

    if(UI.createFeedbackPanel){
      const docs=(q.sources||[]).map(source=>({label:source.title||source.url,url:source.url})).filter(source=>source.url);
      const pdfSource=(!q.solutionAssets?.length&&cfg?._sourceUrl&&q.sourcePage)
        ?{label:`Ouvrir le PDF source · page ${Number(q.sourcePage)}`,url:`${cfg._sourceUrl}#page=${Number(q.sourcePage)}`}
        :null;
      const context=q.pedagogicalContext||q.explanation||'';
      const card=q.format==='knowledge';
      const origin=card?(q.answerRevision?'Réponse actualisée':'Réponse du document'):'';
      const provenanceNotes=[];
      if(q.answerRevision)provenanceNotes.push(`Dans le document d’origine : ${q.originalAnswer||''}`);
      // Source conflict metadata is retained in the question bank, not shown to learners.

      const reference=typeof r.correct!=='boolean';
      const tone=reference?'reference':r.correct?'success':'error';
      const baseKicker=reference?'◎ Auto-évaluation':r.correct?'✓ Bonne réponse':'✕ Réponse incorrecte';
      const kicker=origin?`${baseKicker} · ${origin}`:baseKicker;
      const panel=UI.createFeedbackPanel({
        tone,
        kicker,
        title:q.solutionAnswer||'Comparez avec la correction source.',
        context,
        takeaway:q.takeaway||q.keyPoint||'',
        sourceDetail:q.sourceExplanation||'',
        provenanceNotes,
        images:q.solutionAssets||[],
        sources:docs,
        pdfSource,
        selfGrade:reference,
        onGradeGood:reference?()=>{scheduleRecord(q,r,true);render()}:null,
        onGradeBad:reference?()=>{scheduleRecord(q,r,false);render()}:null,
        onRetry:retry,
      });
      el.className='feedback feedback--design-system';
      el.replaceChildren(panel);
      return;
    }

    const docs=(q.sources||[]).map(s=>`<a href="${clean(s.url)}" target="_blank" rel="noopener noreferrer">${clean(s.title||s.url)} <span>↗</span></a>`).join('');const solutionPics=imageGrid(q.solutionAssets,'ILLUSTRATION DE CORRECTION');const pdfLink=sourceLink(q,true);const sourceBlock=(docs||pdfLink)?`<div class="source-list"><div class="source-heading">DOCUMENTATION / SOURCE</div>${docs}${pdfLink}</div>`:'';const context=q.pedagogicalContext||q.explanation||'';const notes=UI.mergeLearningNotes?UI.mergeLearningNotes(context,q.takeaway||q.keyPoint||''):[context,q.takeaway||q.keyPoint||''].filter(Boolean);const contextBlock=notes.length?`<div class="answer-context"><div class="answer-context-title">Pourquoi</div>${notes.map(value=>'<p>'+clean(value)+'</p>').join('')}</div>`:'';const sourceDetail=q.sourceExplanation?`<details class="source-detail"><summary>Détail du support source</summary><p>${clean(q.sourceExplanation)}</p></details>`:'';
    if(typeof r.correct!=='boolean'){
      el.className='feedback is-reference';el.innerHTML=`<div class="feedback-kicker">◎ AUTO-ÉVALUATION</div><h3>${clean(q.solutionAnswer||'Comparez avec la correction source.')}</h3>${contextBlock}${sourceDetail}${solutionPics}${sourceBlock}<div class="self-grade"><span>Votre réponse correspond-elle à la correction ?</span><div><button id="gradeGood" class="soft-button">✓ Oui, juste</button><button id="gradeBad" class="soft-button">✕ Non, à revoir</button></div></div><button id="tryAgain" class="soft-button">Refaire cette question</button>`;
      $('#gradeGood').onclick=()=>{scheduleRecord(q,r,true);render()};$('#gradeBad').onclick=()=>{scheduleRecord(q,r,false);render()};$('#tryAgain').onclick=retry;return;
    }
    const card=q.format==='knowledge',notice='',historical=q.answerRevision?`<p class="provenance-note"><strong>Dans le document d’origine :</strong> ${clean(q.originalAnswer)}</p>`:'',origin=card?(q.answerRevision?'RÉPONSE ACTUALISÉE':'RÉPONSE DU DOCUMENT'):'';el.className='feedback '+(r.correct?'is-good':'is-bad');el.innerHTML=`<div class="feedback-kicker">${r.correct?'✓ BONNE RÉPONSE':'✕ RÉPONSE INCORRECTE'}${origin?' · '+origin:''}</div><h3>${clean(q.solutionAnswer)}</h3>${contextBlock}${sourceDetail}${historical}${notice}${solutionPics}${sourceBlock}<button id="tryAgain" class="soft-button">Refaire cette question</button>`;$('#tryAgain').onclick=retry
  }

  function questionStatusMeta(q,r){
    if(mode==='exam')return{label:r?'R\u00e9ponse enregistr\u00e9e':'En cours',tone:r?'accent':'neutral'};
    if(r){
      if(typeof r.correct!=='boolean')return{label:'\u00c0 \u00e9valuer',tone:'warning'};
      return r.correct?{label:(r.streak||0)>=2?'Maîtrisée':'Réussie une fois',tone:'success'}:{label:'\u00c0 reprendre',tone:'error'};
    }
    return q.format==='knowledge'?{label:'Fiche Q/R',tone:'accent'}:{label:'\u00c0 d\u00e9couvrir',tone:'neutral'};
  }

  function renderQuestionHeader(q,r,{isCase=false,isMultiContext=false}={}){
    const topicLabel=isCase?'\u00c9TUDE DE CAS':isMultiContext?'CONTEXTES MULTIPLES':domainTuple(q.domain)?.[1]||q.domain||'AZURE';
    const status=questionStatusMeta(q,r);
    const favorite=!!state.favorites?.[q.id];
    const hasNote=!!state.notes?.[q.id];
    const hasReport=(state.reports||[]).some(x=>x.questionId===q.id&&!x.resolved);
    const topicEl=$('#topicPill'),statusEl=$('#statusPill');

    if(UI.updateBadge){
      UI.updateBadge(topicEl,{label:topicLabel,tone:'accent',shape:'rounded',size:'small'});
      UI.updateBadge(statusEl,{label:status.label,tone:status.tone,shape:'pill',size:'small'});
    }else{
      topicEl.textContent=topicLabel;
      topicEl.className='topic-pill';
      statusEl.textContent=status.label;
      statusEl.className='status-pill '+(status.tone==='success'?'status-good':status.tone==='error'?'status-bad':'');
    }

    $('#questionId').textContent=q.id;
    if(UI.updateIconButton){
      UI.updateIconButton($('#favoriteButton'),{icon:'star',label:favorite?'Retirer des favoris':'Ajouter aux favoris',size:'small',active:favorite,pressed:favorite,activeTone:'accent'});
      UI.updateIconButton($('#noteButton'),{icon:'note',label:hasNote?'Modifier ma note':'Ajouter une note',size:'small',active:hasNote,pressed:null,activeTone:'accent'});
      UI.updateIconButton($('#reportButton'),{icon:'report',label:hasReport?'À revoir : modifier le signalement':'À revoir : signaler un problème',size:'small',active:hasReport,pressed:null,activeTone:'danger'});
    }else{
      $('#favoriteButton').textContent=favorite?'\u2605':'\u2606';
      $('#favoriteButton').className='icon-action'+(favorite?' is-active':'');
      $('#favoriteButton').setAttribute('aria-pressed',String(favorite));
      $('#noteButton').textContent='\u270e';
      $('#noteButton').className='icon-action'+(hasNote?' is-active':'');
      $('#reportButton').textContent='\u2691';
      $('#reportButton').className='icon-action'+(hasReport?' is-active':'');
    }

    if(mode==='exam'&&state.exam){
      state.exam.flagged=state.exam.flagged||{};
      $('#flagQuestionButton').classList.toggle('is-active',!!state.exam.flagged[q.id]);
      $('#flagQuestionButton').setAttribute('aria-pressed',String(!!state.exam.flagged[q.id]));
      $('#flagQuestionButton').textContent=state.exam.flagged[q.id]?'\u2605 Marqu\u00e9e':'\u2606 \u00c0 revoir';
    }
  }

  function focusCurrentQuestion({smooth=false}={}){
    if(UI.scrollQuestionAfterRender){UI.scrollQuestionAfterRender({smooth});return}
    const card=$('#questionCard');if(!card||card.hidden)return;const top=Math.max(0,window.scrollY+card.getBoundingClientRect().top-12);window.scrollTo({top,behavior:smooth?'smooth':'auto'});
  }

  function updateV2StudyTools(q){
    const evaluated=bank.filter(item=>state.seen?.[item.id]||state.answers[item.id]?.done||state.answers[item.id]?.read||state.drafts?.[item.id]);
    const percent=bank.length?Math.round(evaluated.length/bank.length*100):0;
    $('#v2CourseCode').textContent=cfg.code+' ·';$('#v2CourseName').textContent=cfg.name;
    $('#v2CourseDetail').textContent=evaluated.length+' / '+bank.length+' questions explorées';
    $('#v2ProgressDetail').textContent=$('#v2CourseDetail').textContent;
    ['#v2CoursePercent','#v2ProgressPercent'].forEach(id=>$(id).textContent=percent+' %');
    ['#v2CourseProgress','#v2ProgressBar'].forEach(id=>$(id).style.width=percent+'%');
    const note=$('#quickNote');if(document.activeElement!==note)note.value=state.notes?.[q.id]||'';
    const domainIndex=DOMAINS.findIndex(([id])=>id===q.domain),nextDomain=DOMAINS[domainIndex+1]||DOMAINS[domainIndex];
    $('#v2NextModule').textContent=nextDomain?.[1]||'Poursuivre le parcours';
    $('.v2-study-aside').hidden=mode==='exam';
  }
  function render(){
    const original=list[cursor],q=localization?.questionPresentation(original,interfaceLanguage)||original,n=list.length;$('#bankCount').textContent=bank.length;$('#position').textContent=n?`${cursor+1} / ${n}`:'—';$('#progress').style.width=(n?((cursor+1)/n*100):0)+'%';$('.progress-track').setAttribute('aria-valuenow',String(n?Math.round((cursor+1)/n*100):0));if(!q){$('#sessionClock').textContent='';updateMobileActions();return}rememberStudyPosition(q);updateV2StudyTools(q);
    if(renderedQuestionId!==q.id)documentReader.close();renderedQuestionId=q.id;
    const r=record(q),d=r?(q.options?.length?{selected:r.selected||[]}:(q.visualSpec?.kind==='self'?{text:r.text||''}:{values:r.values||{}})):draft(q),caseIndex=mode==='exam'?(state.exam?.caseStudyIds||[]).indexOf(q.id):-1,isCase=caseIndex>=0,isMultiContext=mode==='exam'&&state.exam?.multiContextId===q.id;
    renderQuestionHeader(q,r,{isCase,isMultiContext});
    $('#questionIndex').textContent=`Question ${cursor+1} / ${n} · `+(isCase?`ÉTUDE DE CAS ${caseIndex+1}/${state.exam.caseStudyIds.length}`:isMultiContext?'CONTEXTES MULTIPLES':(q.category||'QUESTION'));
    $('#questionTitle').textContent=q.options?.length?(q.multi?'Choisissez les bonnes réponses':'Choisissez la bonne réponse'):(q.visualSpec?.kind==='yn'?'Évaluez les propositions':q.visualSpec?.kind==='self'?'Formulez votre réponse':'Complétez les sélections');
    $('#caseContext').innerHTML=q.caseContext?`<details class="case-context" ${isCase?'open':''}><summary>Contexte de l’étude de cas</summary><div>${clean(q.caseContext)}</div></details>`:'';$('#questionPrompt').textContent=q.prompt;updateContentLanguageNotice();
    const hasAssets=q.assets?.length,openAsset=hasAssets&&(!q.options?.length||['HOTSPOT','DRAG DROP'].includes(q.category));$('#figures').innerHTML=hasAssets?`<details class="exhibit" ${openAsset?'open':''}><summary>Voir l’illustration source (${q.assets.length})</summary><div class="figure-grid">${q.assets.map((path,i)=>`<a href="${clean(path)}" data-reader><img src="${clean(path)}" alt="Illustration ${i+1} de ${clean(q.id)}" loading="lazy"></a>`).join('')}</div></details>`:sourceLink(q,false);
    answerChoices(q,r,d);feedback(q,r);$('#submit').disabled=!!r||!answerComplete(q,d);$('#submit').textContent=mode==='exam'?'Enregistrer et avancer':'Valider ma réponse';$('#prev').disabled=cursor===0;$('#next').disabled=cursor===n-1&&(mode!=='quick'||!r);$('#next').textContent=mode==='quick'&&cursor===n-1?'Terminer la session':'Question suivante';$('#submit').hidden=!!r;$('#prev').hidden=!r&&mode!=='exam';$('#next').hidden=!r&&mode!=='exam';$('#next').classList.toggle('ui-button--primary',!!r);$('#next').classList.toggle('ui-button--secondary',!r);$('#questionCard').dataset.phase=r?'validated':'answering';updateMobileActions();if(mode==='exam'){state.exam.index=cursor;save();updateClock()}else $('#sessionClock').textContent='';
  }
  function submit(skipped=false){const q=list[cursor];if(!q||record(q))return;const d=skipped?{}:draft(q);if(!skipped&&!answerComplete(q,d))return;const scored=skipped?false:score(q,d),result={done:true,correct:scored,selected:d.selected||[],values:d.values||{},text:d.text||'',skipped,ts:now(),pendingSelfGrade:scored===null};if(mode==='exam'){state.exam.answers[q.id]=result;save();if(cursor<list.length-1){cursor++;render();focusCurrentQuestion()}else finishExam();return}if(scored===null){state.answers[q.id]=result;delete state.drafts[q.id];if(state.retrying)delete state.retrying[q.id];save();render();UI.scrollFeedbackAfterRender?.();toast('Comparez maintenant votre réponse avec la correction puis auto-évaluez-vous.')}else{scheduleRecord(q,result,scored);render();UI.scrollFeedbackAfterRender?.();if(skipped)toast('La réponse et sa documentation sont affichées sous la question.')}}
  function move(delta){documentReader.close();if(!list.length)return;const next=Math.max(0,Math.min(list.length-1,cursor+delta));if(next===cursor)return;cursor=next;questionTransition($('.question-main'),render);focusCurrentQuestion()}
  function updateClock(){if(mode!=='exam'||!state.exam||!Number.isFinite(state.exam.start))return;const ms=Math.max(0,state.exam.start+state.exam.duration-now()),m=Math.floor(ms/60000),s=Math.floor(ms%60000/1000);$('#sessionClock').classList.toggle('is-urgent',ms<=300000);$('#sessionClock').textContent=`Temps restant ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;if(ms===0)finishExam()}
  function finishExam(){if(!state.exam||mode!=='exam')return;const exam=state.exam,ids=exam.ids,finishedAt=now();let correct=0;const data=DOMAINS.map(([id,label])=>{const qs=ids.map(i=>byId.get(i)).filter(q=>q?.domain===id),passed=qs.filter(q=>exam.answers[q.id]?.correct===true).length;correct+=passed;return{label,passed,total:qs.length}}),answered=ids.filter(id=>!!exam.answers[id]).length,skipped=ids.filter(id=>!exam.answers[id]||exam.answers[id]?.skipped).length,percent=ids.length?Math.round(correct/ids.length*100):0;state.examHistory=Array.isArray(state.examHistory)?state.examHistory:[];const elapsedMs=Math.max(0,finishedAt-exam.start),avgMs=answered?Math.round(elapsedMs/answered):0,flaggedIds=Object.keys(exam.flagged||{}).filter(id=>exam.flagged[id]);state.examHistory.unshift({completedAt:finishedAt,startedAt:exam.start,elapsedMs,avgMs,correct,total:ids.length,percent,answered,skipped,flagged:flaggedIds.length,flaggedIds,domains:data.map(d=>({...d})),wrongIds:ids.filter(id=>exam.answers[id]?.correct!==true)});state.examHistory=state.examHistory.slice(0,100);ids.forEach(id=>{const r=exam.answers[id]||{done:true,correct:false,skipped:true};state.answers[id]={...r,streak:r.correct?1:0,due:now()+(r.correct?86400000:0)}});state.exam=null;state.examFocus=false;save();mode='study';domain='all';search='';$('#search').value='';cursor=0;refresh();$('#modalEyebrow').textContent=cfg.code;$('#modalTitle').textContent='Examen terminé';$('#modalBody').innerHTML=`<div class="result-score">${correct}<small> / ${ids.length}</small></div><p>${percent} % de bonnes réponses · temps moyen ${clean(formatDuration(avgMs))} par réponse · ${flaggedIds.length} question(s) marquée(s). Cet examen est maintenant enregistré dans Historique examens.</p><div class="result-rows">${data.filter(d=>d.total).map(d=>`<div><span>${clean(d.label)}</span><b>${d.passed} / ${d.total}</b></div>`).join('')}</div>`;setModalAction('Revoir les erreurs',{variant:'primary'});modalCallback=()=>selectMode('mistakes');showModal({kind:'result',size:'medium'});}
  function closeModal(){const backdrop=$('#modal'),surface=backdrop?.querySelector('.modal');if(backdrop)backdrop.hidden=true;if(surface){surface.classList.remove('modal-wide');surface.dataset.kind='default';surface.dataset.size='medium'}document.body.classList.remove('ui-modal-open');modalCallback=null;modalEscapeClosable=true;const returnFocus=modalReturnFocus;modalReturnFocus=null;if(returnFocus?.isConnected)requestAnimationFrame(()=>returnFocus.focus({preventScroll:true}))}
  function toggleTheme(){root.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme();save();if(mode==='settings')renderSettingsPage();updateThemeToggle();}
  function updateThemeToggle(){const dark=document.documentElement.dataset.theme==='dark';UI.updateIconButton?.($('#topbarThemeButton'),{icon:dark?'sun':'moon',label:dark?'Activer le mode clair':'Activer le mode sombre'});}
  function applyTheme(){const t=root.theme||((window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark');document.documentElement.dataset.theme=t;const meta=$('#themeColorMeta')||document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',t==='dark'?'#0b1120':'#f4f6fa');updateThemeToggle();}
  function exportProgress(){save();const text=JSON.stringify({schema:'azure-cert-trainer-backup-v2',appVersion:APP_VERSION,exportedAt:new Date().toISOString(),activeTraining:root.activeTraining,theme:root.theme,states:root.states},null,2),href=URL.createObjectURL(new Blob([text],{type:'application/json'})),a=document.createElement('a');a.href=href;a.download=`Azure_Trainer_sauvegarde_${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(href),1000);toast('Sauvegarde complète exportée : AZ-104, AZ-305, historique, favoris et notes.')}

  function toggleFavorite(){const q=list[cursor];if(!q)return;state.favorites=state.favorites||{};state.favorites[q.id]=!state.favorites[q.id];if(!state.favorites[q.id])delete state.favorites[q.id];save();render();toast(state.favorites[q.id]?'Ajoutée aux favoris.':'Retirée des favoris.')}
  function openNote(){const q=list[cursor];if(!q)return;const saved=state.notes?.[q.id]||'';$('#modalEyebrow').textContent=`${cfg.code} · ${q.id}`;$('#modalTitle').textContent='Ma note';$('#modalBody').innerHTML=`<label class="note-editor"><span>Note personnelle</span><textarea id="questionNote" rows="8" maxlength="2000" placeholder="Mémo, piège à retenir, commande, différence entre deux services…">${clean(saved)}</textarea></label><div class="modal-form-meta"><p>Cette note reste uniquement dans votre navigateur et est incluse dans l’export de progression.</p><span id="noteCharacterCount">${saved.length} / 2000</span></div>`;setModalAction('Enregistrer',{variant:'primary'});modalCallback=()=>{state.notes=state.notes||{};const v=$('#questionNote').value.trim();if(v)state.notes[q.id]=v;else delete state.notes[q.id];save();render();toast(v?'Note enregistrée.':'Note supprimée.')};showModal({kind:'form',size:'medium',escapeClosable:false,initialFocus:'#questionNote'});const field=$('#questionNote'),count=$('#noteCharacterCount');if(field&&count)field.oninput=()=>count.textContent=`${field.value.length} / 2000`}

  function openReport(){const q=list[cursor];if(!q)return;state.reports=state.reports||[];const existing=state.reports.find(x=>x.questionId===q.id&&!x.resolved);$('#modalEyebrow').textContent=`${cfg.code} · ${q.id}`;$('#modalTitle').textContent=existing?'Drapeau / signalement':'Mettre un drapeau';$('#modalBody').innerHTML=`<div class="modal-form-callout modal-form-callout--danger"><strong>${existing?'Signalement actif':'Vérifier cette question'}</strong><p>Utilisez le drapeau pour retrouver un problème de contenu sans interrompre votre session.</p></div><label class="modal-field"><span>Type</span><select id="reportType"><option>Mauvaise réponse</option><option>Question obsolète</option><option>Explication incorrecte</option><option>Image manquante</option><option>Mauvais domaine</option><option>Autre</option></select></label><label class="note-editor"><span>Commentaire</span><textarea id="reportComment" rows="5" maxlength="1200" placeholder="Décrivez le problème observé…">${clean(existing?.comment||'')}</textarea></label><div class="modal-form-meta"><p>Le drapeau est visible dans « Toutes les questions » et inclus dans votre export JSON.</p><span id="reportCharacterCount">${(existing?.comment||'').length} / 1200</span></div>${existing?'<button id="removeReportButton" class="ui-button ui-button--ghost ui-button--small report-remove-button" type="button"><span class="ui-button__label">Retirer le drapeau</span></button>':''}`;if(existing){$('#reportType').value=existing.type||'Autre'}setModalAction(existing?'Mettre à jour':'Enregistrer',{variant:'danger'});modalCallback=()=>{const type=$('#reportType').value,comment=$('#reportComment').value.trim();if(existing){existing.type=type;existing.comment=comment;existing.updatedAt=now()}else state.reports.push({questionId:q.id,type,comment,createdAt:now(),resolved:false});save();render();toast(existing?'Drapeau mis à jour.':'Drapeau ajouté.')};showModal({kind:'danger',size:'medium',escapeClosable:false,initialFocus:'#reportType'});const field=$('#reportComment'),count=$('#reportCharacterCount');if(field&&count)field.oninput=()=>count.textContent=`${field.value.length} / 1200`;const remove=$('#removeReportButton');if(remove)remove.onclick=()=>{existing.resolved=true;existing.resolvedAt=now();save();render();closeModal();toast('Drapeau retiré.')}}

  function toggleExamFlag(){if(mode!=='exam'||!state.exam||!list[cursor])return;const id=list[cursor].id;state.exam.flagged=state.exam.flagged||{};state.exam.flagged[id]=!state.exam.flagged[id];if(!state.exam.flagged[id])delete state.exam.flagged[id];save();render()}
  function normalizeImportedState(imported){return{...freshState(),...imported,answers:imported?.answers||{},drafts:imported?.drafts||{},favorites:imported?.favorites||{},notes:imported?.notes||{},reports:Array.isArray(imported?.reports)?imported.reports:[],examHistory:Array.isArray(imported?.examHistory)?imported.examHistory:[]}}
  function importProgress(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(String(reader.result||''));if(data.states&&typeof data.states==='object'){if(window.confirm&&!window.confirm('Restaurer cette sauvegarde complète ? Les progressions locales AZ-104/AZ-305 seront remplacées par celles du fichier.'))return;const restored={};for(const [id,s] of Object.entries(data.states))restored[id]=normalizeImportedState(s);root.states=restored;root.theme=data.theme||root.theme;root.activeTraining=data.activeTraining||root.activeTraining;localStorage.setItem(APP_KEY,JSON.stringify(root));applyTheme();activateTraining(catalog.some(t=>t.id===root.activeTraining)?root.activeTraining:cfg.id);toast('Sauvegarde complète restaurée.');return}const imported=data.state;if(!imported||typeof imported!=='object')throw new Error('Fichier de sauvegarde incompatible.');if(window.confirm&&!window.confirm(`Importer cette ancienne sauvegarde dans ${cfg.code} ?`))return;root.states[cfg.id]=normalizeImportedState(imported);state=root.states[cfg.id];save();refresh();toast('Progression importée avec succès.')}catch(e){console.error(e);toast(e.message||'Import de sauvegarde impossible.')}};reader.readAsText(file)}
  function checkVersion(){const previous=localStorage.getItem(APP_KEY+'-version');if(previous&&previous!==APP_VERSION)toast(`Application mise à jour : v${previous} → v${APP_VERSION}. Votre progression est conservée.`);localStorage.setItem(APP_KEY+'-version',APP_VERSION);$('#versionLabel').textContent=`v${APP_VERSION}`}
  let deferredInstall=null;
  function isAppInstalled(){return !!(installationConfirmed||window.matchMedia?.('(display-mode: standalone)').matches||window.navigator.standalone)}
  function setInstallButtonLabel(button,text){const label=button?.querySelector('.ui-button__label');if(label)label.textContent=text;else if(button)button.textContent=text}
  function updateInstallUi(){
    onboardingController?.setInstallState?.(isAppInstalled()?'installed':deferredInstall?'available':'browser');
    const button=$('#installAppButton'),description=$('#installSettingDescription'),status=$('#installStatus');if(!button)return;
    button.hidden=false;
    if(isAppInstalled()){
      button.disabled=true;setInstallButtonLabel(button,'Installée');
      if(description)description.textContent='Azure Trainer est installée sur cet appareil et peut être ouverte comme une application.';
      if(status){status.textContent='Application installée';status.dataset.state='installed'}
      return;
    }
    button.disabled=false;setInstallButtonLabel(button,'Installer');
    if(deferredInstall){
      if(description)description.textContent='Installez Azure Trainer pour l’ouvrir dans sa propre fenêtre et la garder accessible hors navigateur.';
      if(status){status.textContent='Prête à installer';status.dataset.state='ready'}
    }else{
      if(description)description.textContent='Le bouton reste disponible. Si le navigateur ne propose pas encore l’installation, il vous indiquera la marche à suivre.';
      if(status){status.textContent='Installation via le navigateur';status.dataset.state='manual'}
    }
  }
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;updateInstallUi()});
  window.addEventListener('appinstalled',()=>{installationConfirmed=true;deferredInstall=null;updateInstallUi();toast('Azure Trainer est installée sur cet appareil.')});
  let installBusy=false;
  function showInstallHelp(message=''){
    const ua=navigator.userAgent,ios=/iPad|iPhone|iPod/.test(ua)||navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1;
    const safari=/Safari/.test(ua)&&!/Chrome|Chromium|CriOS|FxiOS|Edg|OPR/.test(ua);
    const en=interfaceLanguage==='en';let instructions;
    if(ios)instructions=safari?(en?'In Safari, open Share, then Add to Home Screen.':'Dans Safari, ouvrez Partager puis « Sur l’écran d’accueil ».'):(en?'Open this address in Safari, then Share → Add to Home Screen. You can also continue here.':'Ouvrez cette adresse dans Safari, puis Partager → Sur l’écran d’accueil. Vous pouvez aussi continuer ici.');
    else if(/Edg/.test(ua))instructions=en?'In Edge, open Settings and more → More tools → Apps → Install this site as an app. If unavailable, continue in the browser.':'Dans Edge, ouvrez Paramètres et plus → Autres outils → Applications → Installer ce site en tant qu’application. Si cette option est absente, continuez dans le navigateur.';
    else if(/Chrome|Chromium/.test(ua)&&!/OPR/.test(ua))instructions=en?'In Chrome, open the menu → Cast, save and share → Install page as app. If unavailable, continue in the browser.':'Dans Chrome, ouvrez le menu → Caster, enregistrer et partager → Installer la page en tant qu’application. Si cette option est absente, continuez dans le navigateur.';
    else instructions=en?'Continue here, or open this address in Chrome or Edge to install the app. Your current session stays available in this browser.':'Continuez ici, ou ouvrez cette adresse dans Chrome ou Edge pour installer l’application. Votre session reste accessible dans ce navigateur.';
    $('#modalEyebrow').textContent='APPLICATION';$('#modalTitle').textContent='Installer Azure Trainer';$('#modalBody').innerHTML='<p>'+clean(message||'Le navigateur ne propose pas de prompt d’installation pour le moment.')+'</p><p>'+clean(instructions)+'</p><p>Vos notes et votre progression restent enregistrées sur cet appareil.</p>';setModalAction('Continuer dans le navigateur',{variant:'secondary'});modalCallback=null;showModal({kind:'default',size:'medium'});
  }
  async function installApp(){
    if(isAppInstalled()){toast('Azure Trainer est déjà installée.');updateInstallUi();return 'installed';}
    if(installBusy)return;
    if(!deferredInstall){showInstallHelp();return 'unavailable';}
    const prompt=deferredInstall;deferredInstall=null;installBusy=true;$('#installAppButton').disabled=true;
    try{await prompt.prompt();const choice=await prompt.userChoice;if(choice?.outcome==='accepted')toast('Demande acceptée. En attente de confirmation du navigateur.');else toast('Installation refusée. Vous pouvez continuer dans le navigateur.');return choice?.outcome;}catch(error){if(document.body.classList.contains('ui-first-run-open'))toast('Installation indisponible. Vous pouvez continuer dans le navigateur.');else showInstallHelp('L’installation n’a pas abouti. Vous pouvez réessayer depuis le menu du navigateur.');return 'failed';}finally{installBusy=false;updateInstallUi();}
  }
  function importModal(parsed){
    const t=parsed.training,s=parsed.stats;$('#modalEyebrow').textContent='IMPORTATION';$('#modalTitle').textContent='Ajouter une banque';$('#modalBody').innerHTML=`<p><strong>${s.questions}</strong> questions détectées · ${s.auto} évaluables automatiquement · ${s.self} en auto-évaluation · ${s.domains} domaines.</p><label class="modal-field"><span>Destination</span><select id="importTarget"><option value="__new__">Créer une nouvelle formation</option>${catalog.map(x=>`<option value="${clean(x.id)}" ${x.id===t.id?'selected':''}>Ajouter / mettre à jour ${clean(x.code)} · ${clean(x.name)}</option>`).join('')}</select></label><label class="modal-field"><span>Code</span><input id="importCode" value="${clean(t.code)}"></label><label class="modal-field"><span>Nom</span><input id="importName" value="${clean(t.name)}"></label><p class="import-note">PDF : les QCM et corrections textuelles sont générés automatiquement. Les formats visuels non lisibles en texte restent répondables via auto-évaluation.</p>`;setModalAction('Importer',{variant:'primary'});modalCallback=async()=>{
      const target=$('#importTarget').value,code=($('#importCode').value||t.code).trim().toUpperCase(),name=($('#importName').value||t.name).trim();let out={...t,code,name,id:window.TrainingImporter.cleanId(code),imported:true};
      if(target!=='__new__'){
        const base=catalog.find(x=>x.id===target);if(!base)throw new Error('Formation cible introuvable.');const prefix=(base.code||'').replace(/[^A-Z0-9]/gi,'').toUpperCase(),prefixed=base.questions.some(q=>String(q.id).toUpperCase().startsWith(prefix+'-'));const incoming=out.questions.map(q=>({...q,id:prefixed&&!String(q.id).toUpperCase().startsWith(prefix+'-')?`${prefix}-${q.id}`:q.id}));const map=new Map(base.questions.map(q=>[q.id,q]));incoming.forEach(q=>map.set(q.id,q));const domains=[...base.domains];for(const d of out.domains||[])if(!domains.some(x=>x[0]===d[0]))domains.push(d);out={...base,questions:[...map.values()],domains,imported:true,importedAt:new Date().toISOString(),sourceFile:out.sourceFile||base.sourceFile||null,sourceFileName:out.sourceFileName||base.sourceFileName||'',source:out.source||base.source};
      }
      await window.TrainingStore.save(out);await reloadCatalog();activateTraining(out.id);toast(`${out.code} importée : ${out.questions.length} questions disponibles.`);
    };showModal({kind:'form',size:'medium',escapeClosable:true});
  }
  async function importFile(file){if(!file)return;toast(`Analyse de ${file.name}…`);try{const parsed=await window.TrainingImporter.parseFile(file);importModal(parsed)}catch(e){console.error(e);toast(e.message||'Import impossible.')}}
  async function manageTrainings(){let imported=[];try{imported=await window.TrainingStore.list()}catch{}$('#modalEyebrow').textContent='FORMATIONS';$('#modalTitle').textContent='Gérer les formations';$('#modalBody').innerHTML=`<div class="manage-list">${catalog.map(t=>`<div class="manage-row"><div><strong>${clean(t.code)}</strong><span>${clean(t.name)} · ${t.questions.length} questions${t.imported?' · importée':' · intégrée'}</span></div>${t.imported?`<button class="soft-button" data-delete-training="${clean(t.id)}">Supprimer l’import</button>`:''}</div>`).join('')}</div><p class="import-note">Supprimer un import restaure la version intégrée si cette formation existe dans le client. La progression locale reste conservée.</p>`;setModalAction('Fermer',{variant:'secondary'});modalCallback=null;showModal({kind:'default',size:'wide'});$$('[data-delete-training]').forEach(b=>b.onclick=async()=>{const id=b.dataset.deleteTraining;if(!window.confirm||window.confirm('Supprimer cette banque importée ?')){await window.TrainingStore.remove(id);await reloadCatalog();activateTraining(catalog.some(t=>t.id===root.activeTraining)?root.activeTraining:'az104');closeModal();toast('Import supprimé.')}})}

  async function boot(){
    await loadDesignSystem();
    enhanceSearchBar($('#globalSearch').closest('label'));
    $('.v2-course-summary__score > small').textContent='explorés';
    $('#focusToggleButton').classList.replace('ui-button--secondary','ui-button--ghost');
    $('.card-footer .footer-right').append($('#prev'),$('#next'));
    $('.card-header .footer-left').replaceChildren($('#focusToggleButton'));
    $('#questionCard').append($('#feedback'));
    await reloadCatalog();if(!catalog.length){document.body.innerHTML='<p>Aucune formation disponible.</p>';return}$('#app').hidden=false;applyTheme();enhanceNavigationIcons();
    $$('.rail-link[data-mode]').forEach(b=>b.onclick=()=>selectMode(b.dataset.mode));$('#showAll').onclick=()=>selectMode('study');$('#resetFilter').onclick=()=>{domain='all';search='';$('#search').value='';$('#globalSearch').value='';cursor=0;list=[];refresh()};$('#search').oninput=e=>{search=e.target.value.trim();cursor=0;refresh()};$('#prev').onclick=()=>move(-1);$('#next').onclick=nextQuestion;$('#submit').onclick=()=>submit(false);
    const bind=(selector,event,handler)=>{const el=$(selector);if(el)el[event]=handler;return el};
    updateLanguageToggle();bind('#languageToggle','onclick',toggleInterfaceLanguage);
    bind('#mobileSettingsButton','onclick',()=>selectMode('settings'));
    bind('#settingsTrainingSelect','onchange',e=>{activateTraining(e.target.value);selectMode('settings');});
    bind('#filterToggleButton','onclick',()=>{filtersOpen=!filtersOpen;updateFilterControls();});
    bind('#mobilePreviousButton','onclick',()=>move(-1));bind('#mobileSubmitButton','onclick',()=>submit(false));bind('#mobileNextButton','onclick',nextQuestion);
    mobileLayout.addEventListener('change',()=>{filtersOpen=false;updateFilterControls();updateMobileActions();});
    bind('#themeButton','onclick',toggleTheme);bind('#topbarThemeButton','onclick',toggleTheme);bind('#exportButton','onclick',exportProgress);bind('#importProgressButton','onclick',()=>$('#progressFileInput')?.click());bind('#progressFileInput','onchange',e=>{const f=e.target.files?.[0];e.target.value='';importProgress(f)});bind('#installAppButton','onclick',installApp);updateInstallUi();bind('#compactButton','onclick',()=>{state.examCompact=!state.examCompact;applyExamView();save()});bind('#focusMenuButton','onclick',()=>mode==='settings'?startFocusFromSettings():toggleFocus());bind('#focusToggleButton','onclick',toggleFocus);bind('#replayOnboardingButton','onclick',()=>openOnboarding({force:true}));bind('#resetExamButton','onclick',resetExam);bind('#settingsButton','onclick',()=>selectMode('settings'));bind('#startMistakesSessionButton','onclick',startMistakesSession);bind('#startExamButton','onclick',startOrResumeExam);
    bind('#trainingSelect','onchange',e=>activateTraining(e.target.value));bind('#favoriteButton','onclick',toggleFavorite);bind('#noteButton','onclick',openNote);bind('#reportButton','onclick',openReport);bind('#flagQuestionButton','onclick',toggleExamFlag);bind('#startWeaknessButton','onclick',startOrResumeStudy);bind('#dashboardWeaknessButton','onclick',()=>selectMode('weakness'));bind('#questionNavigatorButton','onclick',openQuestionNavigator);bind('#importTrainingButton','onclick',()=>$('#importFileInput')?.click());bind('#importFileInput','onchange',e=>{const f=e.target.files?.[0];e.target.value='';importFile(f)});bind('#manageTrainingButton','onclick',manageTrainings);

    bind('#startPathButton','onclick',()=>{if(!pathDomain)return;mode='study';domain=pathDomain;search='';$('#search').value='';cursor=0;list=[];refresh();focusCurrentQuestion()});
    bind('#continuePathButton','onclick',()=>{const index=DOMAINS.findIndex(([id])=>id===list[cursor]?.domain);pathDomain=(DOMAINS[index+1]||DOMAINS[index])?.[0]||'';selectMode('path')});
    bind('#quickNote','oninput',e=>{const q=list[cursor];if(!q||mode==='exam')return;state.notes=state.notes||{};const value=e.target.value.trim();if(value)state.notes[q.id]=value;else delete state.notes[q.id];save()});
    $('#globalSearch').oninput=e=>{if(['study','weakness','mistakes-session'].includes(mode)){search=e.target.value.trim();$('#search').value=e.target.value;cursor=0;refresh()}};
    $('#globalSearch').onkeydown=e=>{if(e.key==='Enter'&&!['quick','exam'].includes(mode)){e.preventDefault();if(!['study','weakness','mistakes-session'].includes(mode)){mode='study';domain='all'}search=e.target.value.trim();$('#search').value=e.target.value;cursor=0;list=[];const exact=bank.find(q=>norm(q.id)===norm(search));refresh(exact?.id);focusCurrentQuestion()}};
    document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'&&!document.body.classList.contains('ui-modal-open')&&!document.body.classList.contains('ui-first-run-open')&&!document.body.classList.contains('focus-mode')){e.preventDefault();$('#globalSearch').focus()}});
    for(const id of ['mistakesPage','settingsPage'])UI.mountPageLayout?.($('#'+id),$('#'+id+' .production-page-head'));
    UI.mountPageLayout?.($('.workspace'),$('.workbar'),{contentClass:'ui-page-content--learning'});
    const finish=document.createElement('button'),quit=document.createElement('button');finish.id='finishExamButton';quit.id='quitExamButton';for(const b of [finish,quit]){b.type='button';b.className='ui-button ui-button--secondary ui-button--small';}finish.textContent='Terminer l’examen';quit.textContent='Quitter';finish.onclick=()=>{if(window.confirm('Terminer l’examen et afficher le bilan ?'))finishExam();};quit.onclick=quitExam;$('#examControls').append(finish,quit);
    UI.bindSettingsNavigation?.($('#settingsPage'));
    $('#modalClose').onclick=closeModal;$('#modalAction').onclick=async()=>{const fn=modalCallback;if(!fn){closeModal();return}try{await fn();closeModal()}catch(e){console.error(e);toast(e.message||'Opération impossible.')}};$('#modal').onclick=e=>{if(e.target.id==='modal')e.stopPropagation()};$('#modal').addEventListener('keydown',e=>UI.trapModalTab?.(e,$('#modal').querySelector('.modal')));
    document.addEventListener('keydown',e=>{if(document.body.classList.contains('ui-first-run-open'))return;if(e.key==='Escape'){const modal=$('#modal');if(modal&&!modal.hidden){if(modalEscapeClosable)closeModal();return}if(state.examFocus&&mode!=='exam'){e.preventDefault();setFocusMode(false);return}if(filtersOpen){e.preventDefault();filtersOpen=false;updateFilterControls();$('#filterToggleButton').focus();return}}if(document.body.classList.contains('ui-modal-open'))return;if(e.target.closest('input,select,textarea,button'))return;if((e.key==='f'||e.key==='F')&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&['study','quick','weakness','mistakes-session','exam'].includes(mode)&&list.length){e.preventDefault();toggleFocus();return}if(e.key==='ArrowRight'){e.preventDefault();move(1)}else if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}else if(e.key==='Enter'&&!$('#submit').disabled){e.preventDefault();submit()}else if(/^[1-9]$/.test(e.key)&&list[cursor]?.options?.length){$(`#choices [data-choice="${Number(e.key)-1}"]`)?.click()}});
    const startId=catalog.some(t=>t.id===root.activeTraining)?root.activeTraining:'az104',startState=currentState(startId),resume=!!startState.exam?.ids?.length;activateTraining(startId,{resumeExam:false});if(resume)selectMode('exam');if(!resume&&['#parcours','#path'].includes(location.hash))selectMode('dashboard');
    window.addEventListener('hashchange',()=>{if(['#parcours','#path'].includes(location.hash))selectMode('dashboard')});
    updateThemeToggle();checkVersion();setTimeout(()=>openOnboarding(),120);await applyInterfaceLanguage(interfaceLanguage,{silent:true});if('serviceWorker'in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./service-worker.js').then(()=>updateInstallUi()).catch(console.warn);timer=setInterval(updateClock,1000);
  }
  await boot();
})();
