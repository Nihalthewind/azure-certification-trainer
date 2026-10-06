import { createReviewRow, createPagination, reviewPage } from '../../patterns/review-list/review-list.js';
import { createCourseHub } from '../../patterns/course-hub/course-hub.js';
import { createDomainSelector } from '../../components/domain-selector/domain-selector.js';
import { createButton } from '../../components/button/button.js';
import { createBadge } from '../../components/badge/badge.js';
import { bindSettingsNavigation } from '../../patterns/settings-navigation/settings-navigation.js';
import { createQuestionCard } from '../../patterns/question-card/question-card.js';

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function card(className = '') {
  return el('section', `ui-v2-card${className ? ` ${className}` : ''}`);
}

function badge(label, tone = 'neutral') {
  return createBadge({ label, tone, shape: 'pill', size: 'small' });
}

function progress(value) {
  const root = el('div', 'ui-v2-progress');
  const fill = el('span');
  fill.style.width = `${Math.max(0, Math.min(100, Number(value) || 0))}%`;
  root.append(fill);
  return root;
}

function pageRoot(kind) {
  return el('div', `ui-v2-page ui-v2-page--${kind}`);
}

function courseSummary() {
  const root = card('ui-v2-course');
  const copy = el('div', 'ui-v2-course__copy');
  const heading = el('div', 'ui-v2-inline');
  heading.append(badge('AZ-104', 'accent'), el('h2', '', 'Microsoft Azure Administrator'));
  const line = el('div', 'ui-v2-course__progress');
  line.append(el('span', '', '124 questions explorées sur 568'));
  copy.append(heading, line);
  const score = el('div', 'ui-v2-course__score');
  score.append(el('strong', '', '22 %'), el('small', '', 'explorés'));
  root.append(copy, score);
  return root;
}

function statCard(label, value, detail) {
  const root = card('ui-v2-stat');
  root.append(el('span', '', label), el('strong', '', value), el('small', '', detail));
  return root;
}

function moduleRow(index, title, status, value, active = false) {
  const root = el('article', `ui-v2-module${active ? ' is-active' : ''}`);
  const left = el('div', 'ui-v2-module__left');
  left.append(el('span', 'ui-v2-module__index', String(index)));
  const copy = el('div', 'ui-v2-module__copy');
  copy.append(el('strong', '', title), el('small', '', status));
  left.append(copy);
  root.append(left, el('b', '', value));
  return root;
}

export const courseHubFixture = [
 ['T1','Identités et gouvernance',126,28],['T2','Stockage',89,25],['T3','Calcul et applications',210,22],['T4','Réseaux',109,31],['T5','Supervision et reprise',34,18]
].map(([id,label,total,explored],i)=>({id,label,total,explored,percent:Math.round(explored/total*100),status:i===2||i===3?'À renforcer':'En cours',topics:['Gouvernance et tags','Identités et accès','Rôles et autorisations']}));
export function createDashboardPage({ firstRun = false, highProgress = false, selected = 'T1', manyModules = false, onStart, onResume } = {}) {
 const root=pageRoot('dashboard');const fixture=manyModules?Array.from({length:15},(_,i)=>({...courseHubFixture[i%5],id:'module-'+i,label:'Module '+(i+1)+' · '+courseHubFixture[i%5].label})):courseHubFixture;const modules=fixture.map(m=>({...m,...(firstRun?{explored:0,percent:0,status:'À commencer'}:highProgress?{explored:m.total,percent:100,status:'Terminé'}:{})}));
 root.append(createCourseHub({code:'AZ-104',name:'Microsoft Azure Administrator',modules,selected,nextLabel:firstRun?'Commencer une première session':'Reprendre la question T1-Q12',resumeLabel:firstRun?'Commencer une session de 10 questions':'Reprendre l’entraînement',onStart,onContinue:onResume}).element);
 root.append(el('small','ui-v2-muted','› Historique, favoris et questions à reprendre'));return root;
}

export function createPathPage(options) { return createDashboardPage(options); }

export function createKnowledgePage() {
  const root = pageRoot('study');
  const layout = el('div', 'ui-v2-study-layout');
  const main = el('div', 'ui-v2-study-main');
  const question = createQuestionCard({
    questionNumber: 12, totalQuestions: 568, questionId: 'T1-Q12',
    topic: 'Identités & accès', category: 'QCM',
    title: 'Gestion des identités et des accès · Difficulté moyenne',
    prompt: 'Vous devez permettre à une application d’accéder à des ressources Azure sans utiliser de compte utilisateur. Quelle solution est la plus appropriée ?',
    answers: [
      'Utiliser un compte Microsoft personnel.',
      'Créer un groupe de sécurité Azure AD et y ajouter l’application.',
      'Utiliser une identité managée pour l’application.',
      'Créer un utilisateur Azure AD et stocker ses informations d’identification dans l’application.',
    ],
    selectedIndexes: [2], submitLabel: 'Valider ma réponse',
  });
  question.classList.add('ui-v2-question-workspace');
  const meta = question.querySelector('.ui-question-card__meta');
  const eyebrow = question.querySelector('.ui-question-card__eyebrow');
  eyebrow.textContent = 'Question 12 / 568 · QCM';
  meta.prepend(eyebrow);
  const actions = question.querySelector('.ui-question-card__header-actions');
  meta.append(actions.querySelector('.ui-badge'));
  const navigation = question.querySelector('.ui-question-card__footer-nav');
  navigation.dataset.position = 'Question 12 / 568';
  question.querySelector('.ui-question-card__header').append(navigation);
  question.querySelector('.ui-question-card__footer').append(actions);
  const review = actions.querySelector('[data-icon="report"]') || actions.querySelector('button:last-child');
  review.setAttribute('aria-label', 'À revoir : signaler un problème');
  review.title = 'À revoir : signaler un problème';
  main.append(question, el('small', 'ui-learning-shortcuts', '1–4 choisir · Entrée valider'));

  const aside = el('aside', 'ui-v2-aside-stack');
  const note = card();
  const field = el('textarea', 'ui-v2-note');
  field.setAttribute('aria-label', 'Note rapide');
  field.placeholder = 'Écris une note sur cette question…';
  note.append(el('h3', '', 'Ma note rapide'), el('p', '', 'Garde uniquement ce qui t’aide à retenir.'), field, el('small', 'ui-v2-muted', 'Enregistrement automatique'));
  const next = card();
  next.append(el('h3', '', '→  Prochaine étape'), el('small', 'ui-v2-muted', 'Module suivant'), el('p', 'ui-v2-next-title', 'Stockage'), createButton({ label: 'Continuer le parcours', variant: 'secondary' }));
  aside.append(note, next);
  layout.append(main, aside);
  root.append(createDomainSelector({ options: [{value:'all',label:'Tous les domaines'},...courseHubFixture.map(m=>({value:m.id,label:m.label}))] }).element, courseSummary(), layout);
  return root;
}

export function createMistakesPage({ reviewCount=24, initialFilter='all' }={}) {
 const root=pageRoot('review'),filters=el('div','v3-review-filters'),queue=el('div','ui-review-list'),summary=el('p','ui-v2-muted'),pagination=el('div'),detail=el('section');let filter=initialFilter,page=0;
 const entries=Array.from({length:reviewCount},(_,i)=>({id:'DEMO-Q'+(i+1),title:i===0?'Une question avec un aperçu volontairement long pour vérifier la lisibilité et la troncature dans une collection paginée.':'Comment configurer les rôles et accès aux ressources Azure ?',domainLabel:'Identités et gouvernance',status:['Erreur','À revoir','Favori'][i%3],filter:['errors','flagged','favorites'][i%3]}));
 function open(id){const item=entries.find(x=>x.id===id);queue.hidden=true;pagination.hidden=true;detail.hidden=false;detail.replaceChildren(el('h3','',item.id),el('p','',item.title),createButton({label:'Retour aux révisions',onClick:()=>{detail.hidden=true;queue.hidden=false;pagination.hidden=false;}}));}
 function render(){const selected=entries.filter(e=>filter==='all'||e.filter===filter),model=reviewPage(selected,page);page=model.page;summary.textContent=selected.length+' questions à reprendre';queue.replaceChildren(...model.items.map(item=>createReviewRow(item,open)));if(!selected.length)queue.append(el('p','','Aucune question dans cette sélection. Continuez votre formation à votre rythme.'));pagination.replaceChildren(createPagination(model,index=>{page=index;render();}));filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));}
 [['all','Toutes'],['errors','Erreurs'],['flagged','À revoir'],['favorites','Favoris']].forEach(([id,label])=>{const b=createButton({label,onClick:()=>{filter=id;page=0;render();}});b.dataset.filter=id;filters.append(b);});detail.hidden=true;render();root.append(summary,createButton({label:'Commencer la révision',variant:'primary',disabled:!entries.length,onClick:()=>entries.length&&open(entries[0].id)}),filters,queue,pagination,detail);return root;
}

export function createExamPage() {
 const root=pageRoot('exam'),setup=card();setup.append(el('h2','','AZ-104 · Microsoft Azure Administrator'),el('p','ui-v2-muted','48 questions · 100 minutes'));
 ['Navigation libre entre les questions','Marquage « À revoir » disponible','Correction détaillée uniquement à la fin','Reprise et réponses sauvegardées'].forEach(label=>setup.append(el('p','',label)));
 setup.append(createButton({label:'Démarrer un examen',variant:'primary'}));const last=card();last.append(el('h3','','Dernier résultat'),el('p','','75 % · 36 / 48 réponses correctes'),createButton({label:'Historique examens'}));root.append(setup,last);return root;
}

export function createSettingsPage({ category = 'appearance' } = {}) {
  const root = pageRoot('settings');
  const layout = el('div', 'production-settings-grid');
  const nav = el('nav', 'v2-settings-menu');
  nav.setAttribute('role', 'tablist');nav.setAttribute('aria-label', 'Catégories des paramètres');
  const groups = [
    ['appearance', 'Apparence', 'Adaptez l’interface à votre façon de travailler.', [
      ['Thème', document.documentElement.dataset.theme === 'dark' ? 'Thème sombre actif. Passez en clair pour les environnements lumineux.' : 'Thème clair actif. Passez en sombre pour réduire la luminance.', document.documentElement.dataset.theme === 'dark' ? 'Passer en clair' : 'Passer en sombre'],
      ['Mode Focus', 'Ouvrez directement l’Entraînement sans éléments secondaires.', 'Ouvrir en Focus'],
      ['Introduction', 'Revoyez le parcours d’accueil et les fonctions principales.', 'Revoir'],
    ]],
    ['training', 'Formations', 'Gérez les banques disponibles sur cet appareil.', [
      ['Importer une formation', 'Ajoutez une banque compatible depuis un fichier.', 'Importer'],
      ['Gérer les formations', 'Consultez les formations installées et leur version.', 'Gérer'],
    ]],
    ['data', 'Données', 'Votre progression reste sous votre contrôle.', [
      ['Exporter mes données', 'Sauvegardez progression, favoris, notes et historique.', 'Exporter'],
      ['Importer mes données', 'Restaurez une sauvegarde précédemment exportée.', 'Importer'],
    ]],
    ['app', 'Application', 'Installation et informations de version.', [
      ['Installer l’application', 'Ajoutez Azure Trainer comme application sur cet appareil.', 'Installer'],
      ['Version', 'Version actuellement chargée.', 'v3.0.1'],
    ]],
  ];
  groups.forEach(([id, label, description, rows]) => {
    const panel = el('section', 'production-settings-group');panel.id = 'storySettings-' + id;
    const tab = el('button', 'v2-settings-menu__item', label);tab.type = 'button';tab.dataset.settingsTarget = '#' + panel.id;nav.append(tab);
    const head = el('div', 'production-settings-group-head');head.append(el('h3', '', label), el('p', '', description));panel.append(head);
    if (id === 'training') {
      const field = el('label', 'settings-training-field', 'Formation active');
      const select = el('select');select.setAttribute('aria-label', 'Formation active');
      for (const code of ['AZ-104', 'AZ-305']) select.append(el('option', '', code));field.append(select);panel.append(field);
    }
    const body = el('div', 'production-settings-group-body');
    rows.forEach(([title, detail, action]) => {
      const row = el('div', 'production-setting-row');const copy = el('div');copy.append(el('strong', '', title), el('p', '', detail));row.append(copy);
      if (title === 'Version') row.append(el('small', '', action));
      else {
        const button = createButton({ label: action, variant: 'secondary', size: 'small' });
        if (title === 'Thème') button.addEventListener('click', () => {
          const dark = document.documentElement.dataset.theme !== 'dark';
          document.documentElement.dataset.theme = dark ? 'dark' : 'light';
          button.querySelector('.ui-button__label').textContent = dark ? 'Passer en clair' : 'Passer en sombre';
          copy.querySelector('p').textContent = dark ? 'Thème sombre actif. Passez en clair pour les environnements lumineux.' : 'Thème clair actif. Passez en sombre pour réduire la luminance.';
        });
        row.append(button);
      }
      body.append(row);
    });
    panel.append(body);layout.append(panel);
  });
  layout.prepend(nav);root.append(layout);
  bindSettingsNavigation(root, { initialTarget: '#storySettings-' + category });
  return root;
}

export const trainerPageFactories = Object.freeze({
  dashboard: createDashboardPage,
  path: createPathPage,
  study: createKnowledgePage,
  mistakes: createMistakesPage,
  exam: createExamPage,
  settings: createSettingsPage,
});

export function createTrainerPage(mode = 'study', options = {}) {
  return (trainerPageFactories[mode] || createKnowledgePage)(options);
}
