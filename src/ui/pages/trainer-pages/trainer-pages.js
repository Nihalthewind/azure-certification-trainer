import { createButton } from '../../components/button/button.js';
import { createBadge } from '../../components/badge/badge.js';
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
  line.append(progress(68), el('span', '', '5 / 8 modules'));
  copy.append(heading, line);
  const score = el('div', 'ui-v2-course__score');
  score.append(el('strong', '', '68 %'), el('small', '', 'progression'));
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

export function createDashboardPage({ firstRun = false, onStart, onResume } = {}) {
  const root = pageRoot('dashboard');
  const hero = card('ui-v2-resume');
  const left = el('div', 'ui-v2-stack');
  const meta = el('div', 'ui-v2-inline');
  meta.append(badge('AZ-104', 'accent'), badge(firstRun ? 'Première session' : 'Session sauvegardée'));
  left.append(meta, el('h2', '', 'Gestion des identités et des accès'), el('p', '', firstRun ? 'Commencez par 10 questions. Vos résultats et votre position sont sauvegardés sur cet appareil.' : 'Vous étiez sur la question 12. Continuez votre session sans perdre le fil.'));
  const action = el('div', 'ui-v2-resume__action');
  action.append(el('strong', '', firstRun ? '0 %' : '68 %'), createButton({ label: firstRun ? 'Commencer une session de 10 questions' : 'Reprendre ma session', variant: 'primary', onClick: firstRun ? onStart : onResume }));
  hero.append(left, action);

  const stats = el('div', 'ui-v2-stats');
  stats.append(
    statCard('Questions explorées', firstRun ? '0' : '124', 'sur 568 questions'),
    statCard('Réussite', firstRun ? '—' : '83 %', firstRun ? 'Répondez à une question pour commencer' : 'sur les questions évaluées'),
    statCard('Questions maîtrisées', firstRun ? '0' : '42', 'Réussies au moins deux fois de suite'),
    statCard('Erreurs actives', firstRun ? '0' : '6', 'À reprendre'),
    statCard('Examens', firstRun ? '0' : '2', 'Examens terminés'),
  );

  const lower = el('div', 'ui-v2-two-col');
  const modules = card('ui-v2-panel');
  const mh = el('div', 'ui-v2-panel__head');
  mh.append(el('h2', '', 'Parcours AZ-104'), el('button', 'ui-v2-link', 'Voir le parcours →'));
  modules.append(mh,
    moduleRow(1, 'Identités et gouvernance', 'En cours', '82 %', true),
    moduleRow(2, 'Stockage', 'Consolidé', '76 %'),
    moduleRow(3, 'Calcul Azure', 'À renforcer', '64 %'),
    moduleRow(4, 'Réseaux virtuels', 'À renforcer', '58 %'),
  );

  const aside = el('div', 'ui-v2-aside-stack');
  const objective = card();
  objective.append(el('h3', '', 'Objectif de la semaine'), el('strong', 'ui-v2-big', '60 questions'), el('p', '', '38 terminées · encore 22'), progress(63));
  const next = card();
  next.append(el('h3', '', 'Prochaine étape'), badge('Module 6', 'accent'), el('h2', '', 'Configurer et gérer les réseaux virtuels'), el('p', '', '12 questions ciblées pour consolider le prochain domaine.'), createButton({ label: 'Commencer', variant: 'secondary' }));
  aside.append(objective, next);
  lower.append(modules, aside);
  root.append(hero, stats);if(!firstRun)root.append(lower);
  return root;
}

export function createPathPage() {
  const root = pageRoot('path');
  const layout = el('div', 'ui-v2-path');
  const list = card('ui-v2-path__list');
  list.append(el('h2', '', 'Modules'));
  [
    ['Identités et gouvernance', 'En cours', '82 %'],
    ['Stockage', 'Consolidé', '76 %'],
    ['Calcul Azure', 'À renforcer', '64 %'],
    ['Réseaux virtuels', 'À renforcer', '58 %'],
    ['Surveillance', 'À commencer', '44 %'],
    ['Sauvegarde', 'À commencer', '—'],
    ['Automatisation', 'À commencer', '—'],
    ['Révision finale', 'Verrouillé', '—'],
  ].forEach(([title, status, value], index) => list.append(moduleRow(index + 1, title, status, value, index === 0)));

  const detail = card('ui-v2-path__detail');
  const meta = el('div', 'ui-v2-inline');
  meta.append(badge('Module 1', 'accent'), badge('En cours', 'success'));
  detail.append(meta, el('h1', '', 'Identités et gouvernance'), el('p', '', 'Maîtrise les rôles Azure, les identités, les groupes et les politiques de gouvernance.'));
  const ph = el('div', 'ui-v2-panel__head');
  ph.append(el('span', '', 'Progression'), el('b', '', '82 %'));
  detail.append(ph, progress(82), el('h3', '', 'Ce que tu vas travailler'));
  [
    ['RBAC et scopes', '18 questions', 'Terminé', 'success'],
    ['Microsoft Entra ID', '14 questions', 'Terminé', 'success'],
    ['Managed identities', '12 questions', 'En cours', 'accent'],
    ['Azure Policy', '16 questions', 'À faire', 'neutral'],
  ].forEach(([title, count, state, tone]) => {
    const row = el('article', `ui-v2-topic${state === 'En cours' ? ' is-active' : ''}`);
    const copy = el('div');
    copy.append(el('strong', '', title), el('small', '', count));
    row.append(copy, badge(state, tone));
    detail.append(row);
  });
  const actions = el('div', 'ui-v2-actions');
  actions.append(createButton({ label: 'Continuer le module', variant: 'primary' }), createButton({ label: 'Voir les notions', variant: 'secondary' }));
  detail.append(actions);
  layout.append(list, detail);
  root.append(layout);
  return root;
}

export function createKnowledgePage() {
  const root = pageRoot('study');
  const layout = el('div', 'ui-v2-study-layout');
  const main = el('div', 'ui-v2-study-main');
  const question = createQuestionCard({
    questionNumber: 12, totalQuestions: 50, questionId: 'T1-Q12',
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
  eyebrow.textContent = 'Question 12 / 50 · QCM';
  meta.prepend(eyebrow);
  const actions = question.querySelector('.ui-question-card__header-actions');
  meta.append(actions.querySelector('.ui-badge'));
  const navigation = question.querySelector('.ui-question-card__footer-nav');
  navigation.dataset.position = 'Question 12 / 50';
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
  next.append(el('h3', '', '→  Prochaine étape'), el('small', 'ui-v2-muted', 'Module suivant'), el('p', 'ui-v2-next-title', 'Gestion des accès conditionnels'), createButton({ label: 'Continuer le parcours', variant: 'secondary' }));
  aside.append(note, next);
  layout.append(main, aside);
  root.append(courseSummary(), layout);
  return root;
}

export function createMistakesPage() {
  const root = pageRoot('review');
  const filters = el('div', 'ui-v2-inline');
  filters.append(badge('Toutes', 'accent'), badge('Erreurs', 'error'), badge('À revoir', 'warning'), badge('Favoris'));
  root.append(filters);
  const layout = el('div', 'ui-v2-review-layout');
  const queue = card('ui-v2-review-queue');
  const head = el('div', 'ui-v2-panel__head');
  head.append(el('h2', '', 'Questions à reprendre'), badge('6 restantes', 'warning'));
  queue.append(head);
  [
    ['RBAC et scopes', 'Tu confonds encore le scope abonnement et groupe de ressources.', 'Erreur', 'error'],
    ['Réseaux virtuels', 'Revoir le peering et les routes définies par l’utilisateur.', 'À revoir', 'warning'],
    ['Managed identities', 'Bonne progression, une dernière question ciblée.', 'À revoir', 'warning'],
    ['Azure Backup', 'Rétention et coffres Recovery Services à consolider.', 'Erreur', 'error'],
    ['Storage accounts', 'Vérifier les options de réplication.', 'Favori', 'accent'],
  ].forEach(([title, detail, label, tone]) => {
    const item = el('article', 'ui-v2-review-item');
    const copy = el('div');
    copy.append(el('strong', '', title), el('p', '', detail));
    item.append(copy, badge(label, tone));
    queue.append(item);
  });
  queue.append(createButton({ label: 'Lancer une session de révision', variant: 'primary' }));

  const aside = el('div', 'ui-v2-aside-stack');
  const weak = card();
  weak.append(el('h3', '', 'Domaines fragiles'));
  [['Réseaux', '58 %'], ['Sauvegarde', '61 %'], ['Gouvernance', '67 %']].forEach(([name, score]) => {
    const row = el('div', 'ui-v2-panel__head');
    row.append(el('span', '', name), el('b', 'ui-v2-error', score));
    weak.append(row);
  });
  const rhythm = card();
  rhythm.append(el('h3', '', 'Rythme recommandé'), el('strong', 'ui-v2-big', '10 questions'), el('p', '', 'Une session courte ciblée sur tes erreurs récentes.'), createButton({ label: 'Démarrer', variant: 'secondary' }));
  aside.append(weak, rhythm);
  layout.append(queue, aside);
  root.append(layout);
  return root;
}

export function createExamPage() {
  const root = pageRoot('exam');
  const layout = el('div', 'ui-v2-exam-layout');
  const setup = card('ui-v2-exam-setup');
  setup.append(badge('Simulation AZ-104', 'accent'), el('h1', '', 'Prêt pour un examen blanc ?'), el('p', '', 'Une session complète pour vérifier ton niveau sans distraction.'));
  const facts = el('div', 'ui-v2-stats');
  facts.append(statCard('questions', '50', ''), statCard('durée', '100 min', ''), statCard('objectif', '70 %', ''));
  setup.append(facts, el('h3', '', 'Avant de commencer'));
  ['Navigation libre entre les questions', 'Marquage « À revoir » disponible', 'Correction détaillée uniquement à la fin', 'Progression sauvegardée pendant la session'].forEach((text) => {
    const row = el('div', 'ui-v2-check');
    row.append(el('b', '', '✓'), el('span', '', text));
    setup.append(row);
  });
  const actions = el('div', 'ui-v2-actions');
  actions.append(createButton({ label: 'Commencer l’examen', variant: 'primary' }), createButton({ label: 'Configurer', variant: 'secondary' }));
  setup.append(actions);

  const aside = el('div', 'ui-v2-aside-stack');
  const last = card();
  last.append(el('h3', '', 'Dernier résultat'), el('strong', 'ui-v2-percent', '76 %'), el('p', '', '38 bonnes réponses sur 50'), badge('Réussi', 'success'));
  const weak = card();
  weak.append(el('h3', '', 'À renforcer avant l’examen'));
  [['Réseaux virtuels', '58 %'], ['Sauvegarde Azure', '61 %'], ['RBAC avancé', '66 %']].forEach(([name, score]) => {
    const row = el('div', 'ui-v2-panel__head');
    row.append(el('span', '', name), el('b', 'ui-v2-error', score));
    weak.append(row);
  });
  weak.append(createButton({ label: 'Réviser ces notions', variant: 'secondary' }));
  const history = card();
  history.append(el('h3', '', 'Historique'));
  [['03 oct.', '76 %'], ['29 sept.', '72 %'], ['21 sept.', '68 %']].forEach(([date, score]) => {
    const row = el('div', 'ui-v2-panel__head');
    row.append(el('span', 'ui-v2-muted', date), el('b', '', score));
    history.append(row);
  });
  aside.append(last, weak, history);
  layout.append(setup, aside);
  root.append(layout);
  return root;
}

export function createSettingsPage() {
  const root = pageRoot('settings');
  const layout = el('div', 'ui-v2-settings');
  const nav = card('ui-v2-settings__nav');
  ['Apparence', 'Apprentissage', 'Notifications', 'Données', 'Compte'].forEach((label, index) => {
    nav.append(el('button', `ui-v2-settings__tab${index === 0 ? ' is-active' : ''}`, label));
  });

  const main = el('div', 'ui-v2-settings__main');
  const appearance = card();
  appearance.append(el('h2', '', 'Apparence'), el('span', 'ui-v2-muted', 'Thème'));
  const themes = el('div', 'ui-v2-inline');
  ['Clair', 'Sombre', 'Système'].forEach((label, index) => themes.append(el('button', `ui-v2-theme${index === 0 ? ' is-active' : ''}`, label)));
  appearance.append(themes, el('p', '', 'L’interface respecte automatiquement les contrastes et les préférences de mouvement réduit.'));

  const learning = card();
  learning.append(el('h2', '', 'Préférences d’apprentissage'));
  [
    ['Raccourcis clavier', 'Utiliser 1–4 pour répondre et Entrée pour valider.', true],
    ['Afficher les explications après validation', 'Voir immédiatement le raisonnement pédagogique.', true],
    ['Mode focus', 'Masquer les informations secondaires pendant une session.', false],
  ].forEach(([title, detail, enabled]) => {
    const row = el('div', 'ui-v2-setting-row');
    const copy = el('div');
    copy.append(el('strong', '', title), el('p', '', detail));
    row.append(copy, el('button', `ui-v2-switch${enabled ? ' is-on' : ''}`, enabled ? '●' : '○'));
    learning.append(row);
  });

  const data = card();
  data.append(el('h2', '', 'Données et progression'), el('p', '', 'Ta progression reste stockée localement dans le navigateur.'));
  const actions = el('div', 'ui-v2-actions');
  actions.append(createButton({ label: 'Exporter mes données', variant: 'secondary' }), createButton({ label: 'Réinitialiser la progression', variant: 'danger' }));
  data.append(actions);
  main.append(appearance, learning, data);
  layout.append(nav, main);
  root.append(layout);
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

export function createTrainerPage(mode = 'study') {
  return (trainerPageFactories[mode] || createKnowledgePage)();
}
