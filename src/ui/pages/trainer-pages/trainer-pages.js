import { createButton } from '../../components/button/button.js';
import { createBadge } from '../../components/badge/badge.js';

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function sectionHeader(kicker, title, description, actions = []) {
  const header = el('div', 'ui-page-section__head');
  const copy = el('div', 'ui-page-section__copy');
  copy.append(
    el('span', 'ui-page-section__kicker', kicker),
    el('h2', '', title),
    el('p', '', description),
  );
  const actionRow = el('div', 'ui-page-section__actions');
  actions.forEach((action) => actionRow.append(action));
  header.append(copy, actionRow);
  return header;
}

function statCard(label, value, detail, tone = 'neutral') {
  const card = el('article', `ui-page-stat ui-page-stat--${tone}`);
  card.append(
    el('span', 'ui-page-stat__label', label),
    el('strong', 'ui-page-stat__value', value),
    el('small', 'ui-page-stat__detail', detail),
  );
  return card;
}

function progressRow(label, value, detail = '') {
  const row = el('div', 'ui-page-progress-row');
  const head = el('div', 'ui-page-progress-row__head');
  head.append(el('strong', '', label), el('span', '', detail || `${value}%`));
  const track = el('div', 'ui-page-progress-row__track');
  const fill = el('span', 'ui-page-progress-row__fill');
  fill.style.width = `${Math.max(0, Math.min(100, Number(value) || 0))}%`;
  track.append(fill);
  row.append(head, track);
  return row;
}

function listItem({ title, detail, meta = '', tone = 'neutral', badge = '' }) {
  const row = el('article', 'ui-page-list-item');
  const marker = el('span', `ui-page-list-item__marker ui-page-list-item__marker--${tone}`);
  marker.textContent = tone === 'error' ? '!' : tone === 'success' ? '✓' : '•';
  const copy = el('div', 'ui-page-list-item__copy');
  copy.append(el('strong', '', title), el('p', '', detail));
  if (meta) copy.append(el('small', '', meta));
  row.append(marker, copy);
  if (badge) row.append(createBadge({ label: badge, tone, size: 'small', shape: 'pill' }));
  return row;
}

function panel(title, subtitle = '') {
  const root = el('section', 'ui-page-panel');
  const head = el('div', 'ui-page-panel__head');
  const copy = el('div');
  copy.append(el('h3', '', title));
  if (subtitle) copy.append(el('span', '', subtitle));
  head.append(copy);
  root.append(head);
  return root;
}

export function createDashboardPage() {
  const root = el('div', 'ui-page ui-page--dashboard');

  root.append(sectionHeader(
    'PILOTAGE',
    'Votre progression',
    'Une vue synthétique pour savoir immédiatement où reprendre.',
    [createButton({ label: 'Travailler mes faiblesses', variant: 'primary', size: 'medium' })],
  ));

  const stats = el('div', 'ui-page-stats');
  stats.append(
    statCard('Questions maîtrisées', '184', '32 % de la banque', 'success'),
    statCard('Réussite récente', '78 %', '+6 pts sur 7 jours', 'accent'),
    statCard('À reprendre', '18', 'dont 6 prioritaires', 'error'),
    statCard('Examens blancs', '4', 'dernier score : 82 %', 'neutral'),
  );

  const grid = el('div', 'ui-page-grid ui-page-grid--dashboard');

  const mastery = panel('Maîtrise par domaine', 'AZ-104');
  const masteryBody = el('div', 'ui-page-panel__body ui-page-progress-list');
  masteryBody.append(
    progressRow('Identités et gouvernance', 82, '82 %'),
    progressRow('Stockage', 64, '64 %'),
    progressRow('Compute', 73, '73 %'),
    progressRow('Réseaux', 56, '56 %'),
    progressRow('Monitoring', 69, '69 %'),
  );
  mastery.append(masteryBody);

  const review = panel('Questions à reprendre', 'priorité');
  const reviewBody = el('div', 'ui-page-panel__body ui-page-list');
  reviewBody.append(
    listItem({ title: 'AZ104-042 · RBAC', detail: 'Confusion entre rôle Entra et rôle Azure.', meta: '2 erreurs · aujourd’hui', tone: 'error', badge: 'Prioritaire' }),
    listItem({ title: 'AZ104-118 · NSG', detail: 'Ordre de traitement des règles entrantes.', meta: '1 erreur · hier', tone: 'warning', badge: 'À revoir' }),
    listItem({ title: 'AZ104-205 · Storage', detail: 'Réplication GRS vs GZRS.', meta: '1 erreur · il y a 3 jours', tone: 'neutral' }),
  );
  review.append(reviewBody);

  const history = panel('Historique examens', '5 derniers');
  const historyBody = el('div', 'ui-page-panel__body');
  const bars = el('div', 'ui-page-history');
  [68, 74, 71, 79, 82].forEach((score, index) => {
    const item = el('div', 'ui-page-history__item');
    const bar = el('span', 'ui-page-history__bar');
    bar.style.height = `${score}%`;
    item.append(el('strong', '', `${score}%`), bar, el('small', '', `#${index + 1}`));
    bars.append(item);
  });
  historyBody.append(bars);
  history.append(historyBody);

  const personal = panel('Favoris et notes', '12 éléments');
  const personalBody = el('div', 'ui-page-panel__body ui-page-list');
  personalBody.append(
    listItem({ title: '7 favoris', detail: 'Questions conservées pour une révision rapide.', tone: 'accent' }),
    listItem({ title: '5 notes', detail: 'Mémos personnels liés à vos questions.', tone: 'neutral' }),
  );
  personal.append(personalBody);

  grid.append(mastery, review, history, personal);
  root.append(stats, grid);
  return root;
}

export function createKnowledgePage() {
  const root = el('div', 'ui-page ui-page--knowledge');

  root.append(sectionHeader(
    'ENTRAÎNEMENT',
    'Base de connaissances',
    'Travaillez toute la banque ou ciblez un domaine sans perdre votre contexte.',
    [createButton({ label: '⛶ Mode Focus', variant: 'secondary', size: 'medium' })],
  ));

  const toolbar = el('div', 'ui-page-toolbar');
  const search = el('label', 'ui-page-search');
  search.innerHTML = '<span aria-hidden="true">⌕</span><input type="search" placeholder="Rechercher une question…" aria-label="Rechercher une question">';
  const filters = el('div', 'ui-page-toolbar__actions');
  filters.append(
    createButton({ label: 'Tous les domaines', variant: 'ghost', size: 'small' }),
    createButton({ label: '☷ Toutes les questions', variant: 'secondary', size: 'small' }),
  );
  toolbar.append(search, filters);

  const domains = el('div', 'ui-page-domain-tabs');
  ['Tous', 'Identités', 'Stockage', 'Compute', 'Réseaux', 'Monitoring'].forEach((label, index) => {
    const button = el('button', `ui-page-domain-tab${index === 1 ? ' is-active' : ''}`, label);
    button.type = 'button';
    domains.append(button);
  });

  const progress = el('div', 'ui-page-linear-progress');
  const progressFill = el('span');
  progressFill.style.width = '42%';
  progress.append(progressFill);

  const card = el('article', 'ui-page-question');
  const cardHead = el('div', 'ui-page-question__head');
  const meta = el('div', 'ui-page-question__meta');
  meta.append(
    createBadge({ label: 'GOUVERNANCE', tone: 'accent', size: 'small' }),
    el('span', '', 'AZ104-042'),
  );
  const personal = el('div', 'ui-page-question__personal');
  personal.innerHTML = '<button type="button" aria-label="Favori">☆</button><button type="button" aria-label="Note">✎</button><button type="button" aria-label="Signaler">⚑</button>';
  personal.append(createBadge({ label: 'À découvrir', tone: 'neutral', size: 'small' }));
  cardHead.append(meta, personal);

  const question = el('div', 'ui-page-question__body');
  question.append(
    el('span', 'ui-page-question__index', 'QUESTION 42'),
    el('h2', '', 'Vous devez permettre à une équipe d’administrer uniquement les machines virtuelles d’un groupe de ressources. Quelle approche respecte le principe du moindre privilège ?'),
  );
  const answers = el('div', 'ui-page-answer-list');
  [
    ['A', 'Attribuer le rôle Owner au niveau de l’abonnement'],
    ['B', 'Attribuer Virtual Machine Contributor sur le groupe de ressources'],
    ['C', 'Créer un nouvel abonnement dédié'],
    ['D', 'Attribuer Global Administrator dans Microsoft Entra ID'],
  ].forEach(([letter, label]) => {
    const option = el('button', 'ui-page-answer');
    option.type = 'button';
    option.append(el('span', '', letter), el('b', '', label));
    answers.append(option);
  });
  question.append(answers);

  const foot = el('div', 'ui-page-question__foot');
  foot.append(
    createButton({ label: '← Précédent', variant: 'secondary', size: 'medium' }),
    createButton({ label: 'Valider la réponse', variant: 'primary', size: 'medium' }),
  );

  card.append(cardHead, question, foot);
  root.append(toolbar, domains, progress, card);
  return root;
}

export function createMistakesPage() {
  const root = el('div', 'ui-page ui-page--mistakes');

  root.append(sectionHeader(
    'RÉVISION CIBLÉE',
    'Erreurs',
    'Priorisez les notions qui vous coûtent réellement des points.',
    [createButton({ label: 'Lancer une session de rattrapage', variant: 'primary', size: 'medium' })],
  ));

  const stats = el('div', 'ui-page-stats ui-page-stats--three');
  stats.append(
    statCard('Erreurs actives', '18', '6 prioritaires', 'error'),
    statCard('Corrigées cette semaine', '11', '61 % revalidées', 'success'),
    statCard('Domaine le plus faible', 'Réseaux', '56 % de maîtrise', 'warning'),
  );

  const layout = el('div', 'ui-page-grid ui-page-grid--mistakes');

  const queue = panel('File de reprise', 'triée par priorité');
  const queueBody = el('div', 'ui-page-panel__body ui-page-list ui-page-list--large');
  queueBody.append(
    listItem({ title: 'RBAC · Portée et rôle', detail: 'Vous avez choisi un rôle Microsoft Entra alors que la permission devait être appliquée sur un groupe de ressources.', meta: 'AZ104-042 · 2 erreurs · prochaine reprise : maintenant', tone: 'error', badge: '2×' }),
    listItem({ title: 'NSG · Priorité des règles', detail: 'La règle avec le plus petit numéro de priorité est évaluée en premier.', meta: 'AZ104-118 · 1 erreur · prochaine reprise : maintenant', tone: 'error', badge: '1×' }),
    listItem({ title: 'Storage · Réplication', detail: 'Revoir la différence entre GRS, RA-GRS, ZRS et GZRS.', meta: 'AZ104-205 · 1 erreur · prochaine reprise : demain', tone: 'warning', badge: 'Demain' }),
    listItem({ title: 'Azure Monitor · Alertes', detail: 'Confusion entre action group et règle d’alerte.', meta: 'AZ104-311 · 1 erreur · prochaine reprise : dans 3 jours', tone: 'neutral' }),
  );
  queue.append(queueBody);

  const weak = panel('Répartition des erreurs', 'par domaine');
  const weakBody = el('div', 'ui-page-panel__body ui-page-progress-list');
  weakBody.append(
    progressRow('Réseaux', 44, '8 erreurs'),
    progressRow('Stockage', 28, '5 erreurs'),
    progressRow('Identités', 17, '3 erreurs'),
    progressRow('Compute', 11, '2 erreurs'),
  );
  weak.append(weakBody);

  layout.append(queue, weak);
  root.append(stats, layout);
  return root;
}

export function createExamPage() {
  const root = el('div', 'ui-page ui-page--exam');

  root.append(sectionHeader(
    'SIMULATION',
    'Examen blanc',
    'Un environnement plus calme, chronométré et sans correction immédiate.',
    [createButton({ label: 'Démarrer un examen', variant: 'primary', size: 'medium' })],
  ));

  const intro = el('section', 'ui-page-exam-hero');
  const copy = el('div', 'ui-page-exam-hero__copy');
  copy.append(
    createBadge({ label: 'AZ-104', tone: 'accent', size: 'medium', shape: 'pill' }),
    el('h2', '', '50 questions · 100 minutes'),
    el('p', '', 'Les réponses sont enregistrées pendant la session. La correction complète est disponible à la fin de l’examen.'),
  );
  const score = el('div', 'ui-page-exam-score');
  score.append(el('span', '', 'DERNIER SCORE'), el('strong', '', '82 %'), el('small', '', 'objectif personnel : 85 %'));
  intro.append(copy, score);

  const grid = el('div', 'ui-page-grid ui-page-grid--exam');

  const setup = panel('Configuration', 'avant de commencer');
  const setupBody = el('div', 'ui-page-panel__body ui-page-settings-list');
  [
    ['Nombre de questions', '50'],
    ['Durée', '100 min'],
    ['Correction', 'À la fin'],
    ['Mode compact', 'Disponible pendant la session'],
    ['Questions à revoir', 'Marquage autorisé'],
  ].forEach(([label, value]) => {
    const row = el('div', 'ui-page-setting-row');
    row.append(el('span', '', label), el('strong', '', value));
    setupBody.append(row);
  });
  setup.append(setupBody);

  const distribution = panel('Répartition', 'domaines');
  const distributionBody = el('div', 'ui-page-panel__body ui-page-progress-list');
  distributionBody.append(
    progressRow('Identités et gouvernance', 30, '15 questions'),
    progressRow('Stockage', 20, '10 questions'),
    progressRow('Compute', 20, '10 questions'),
    progressRow('Réseaux', 20, '10 questions'),
    progressRow('Monitoring', 10, '5 questions'),
  );
  distribution.append(distributionBody);

  const history = panel('Historique', 'sessions récentes');
  const historyBody = el('div', 'ui-page-panel__body ui-page-table');
  [
    ['Aujourd’hui', '82 %', '41 / 50', '1 h 19'],
    ['28 sept.', '79 %', '39 / 50', '1 h 31'],
    ['24 sept.', '71 %', '35 / 50', '1 h 27'],
  ].forEach((values) => {
    const row = el('div', 'ui-page-table__row');
    values.forEach((value, index) => row.append(el(index === 1 ? 'strong' : 'span', '', value)));
    historyBody.append(row);
  });
  history.append(historyBody);

  grid.append(setup, distribution, history);
  root.append(intro, grid);
  return root;
}

function settingsGroup(title, description) {
  const group = el('section', 'ui-page-settings-group');
  const header = el('div', 'ui-page-settings-group__head');
  header.append(el('h3', '', title), el('p', '', description));
  const body = el('div', 'ui-page-settings-group__body');
  group.append(header, body);
  return { group, body };
}

function settingsAction(label, detail, actionLabel, tone = 'neutral') {
  const row = el('div', 'ui-page-settings-action');
  const copy = el('div');
  copy.append(el('strong', '', label), el('p', '', detail));
  const button = createButton({
    label: actionLabel,
    variant: tone === 'danger' ? 'danger' : 'secondary',
    size: 'small',
  });
  row.append(copy, button);
  return row;
}

export function createSettingsPage() {
  const root = el('div', 'ui-page ui-page--settings');

  root.append(sectionHeader(
    'APPLICATION',
    'Paramètres',
    'Les réglages sont regroupés par intention au lieu d’être empilés dans un petit sous-menu.',
  ));

  const grid = el('div', 'ui-page-settings-grid');

  const appearance = settingsGroup('Apparence', 'Adaptez la lecture à votre environnement.');
  appearance.body.append(
    settingsAction('Thème', 'Basculez entre les thèmes sombre et clair.', 'Sombre / Clair'),
    settingsAction('Mode Focus', 'Masquez les éléments secondaires pendant une session.', 'Activer Focus'),
    settingsAction('Introduction', 'Revoyez les trois étapes d’onboarding.', 'Revoir'),
  );

  const trainings = settingsGroup('Formations', 'Gérez les banques disponibles dans l’application.');
  trainings.body.append(
    settingsAction('Importer une formation', 'Ajoutez une banque compatible depuis un fichier.', 'Importer'),
    settingsAction('Gérer les formations', 'Consultez les formations installées et leur version.', 'Gérer'),
  );

  const data = settingsGroup('Données', 'Votre progression reste sous votre contrôle.');
  data.body.append(
    settingsAction('Exporter mes données', 'Créez une sauvegarde de votre progression, favoris et notes.', 'Exporter'),
    settingsAction('Importer mes données', 'Restaurez une sauvegarde précédemment exportée.', 'Importer'),
  );

  const app = settingsGroup('Application', 'Informations et installation.');
  app.body.append(
    settingsAction('Installer l’application', 'Ajoutez Azure Trainer comme application sur cet appareil.', 'Installer'),
    settingsAction('Version', 'Azure Certification Trainer v2.0.7', 'À jour'),
  );

  grid.append(appearance.group, trainings.group, data.group, app.group);
  root.append(grid);
  return root;
}

export const trainerPageFactories = Object.freeze({
  dashboard: createDashboardPage,
  study: createKnowledgePage,
  mistakes: createMistakesPage,
  exam: createExamPage,
  settings: createSettingsPage,
});

export function createTrainerPage(mode = 'study') {
  const factory = trainerPageFactories[mode] || trainerPageFactories.study;
  return factory();
}
