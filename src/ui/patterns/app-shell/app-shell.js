import { createNavigationItem } from '../../components/navigation-item/navigation-item.js';
import { createIcon } from '../../icons/icons.js';

export const APP_SHELL_DENSITIES = Object.freeze({
  balanced: Object.freeze({
    id: 'balanced',
    label: 'Équilibré',
    railWidth: 248,
    topbarHeight: 60,
    contentGutter: 32,
  }),
  compact: Object.freeze({
    id: 'compact',
    label: 'Compact',
    railWidth: 220,
    topbarHeight: 52,
    contentGutter: 24,
  }),
  spacious: Object.freeze({
    id: 'spacious',
    label: 'Aéré',
    railWidth: 272,
    topbarHeight: 64,
    contentGutter: 44,
  }),
});

export function getAppShellDensity(name = 'balanced') {
  return APP_SHELL_DENSITIES[name] || APP_SHELL_DENSITIES.balanced;
}

function createSectionLabel(text) {
  const label = document.createElement('div');
  label.className = 'ui-app-shell__section-label';
  label.textContent = text;
  return label;
}

function createBrand() {
  const brand = document.createElement('div');
  brand.className = 'ui-app-shell__brand';

  const mark = document.createElement('span');
  mark.className = 'ui-app-shell__brand-mark';
  mark.textContent = 'AZ';
  mark.setAttribute('aria-hidden', 'true');

  const copy = document.createElement('span');
  copy.className = 'ui-app-shell__brand-copy';
  copy.innerHTML = '<strong>Azure Trainer</strong><small>Certifications Azure</small>';

  brand.append(mark, copy);
  return brand;
}

function createTrainingCard(trainingCode, trainingName) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'ui-app-shell__training';
  card.setAttribute('aria-label', `Formation active : ${trainingCode} ${trainingName}`);

  const copy = document.createElement('span');
  copy.innerHTML = `<small>FORMATION</small><strong>${trainingCode}</strong><span>${trainingName}</span>`;

  const chevron = document.createElement('span');
  chevron.className = 'ui-app-shell__training-chevron';
  chevron.textContent = '⌄';
  chevron.setAttribute('aria-hidden', 'true');

  card.append(copy, chevron);
  return card;
}

export function createAppShell({
  density = 'balanced',
  activeMode = 'study',
  trainingCode = 'AZ-104',
  trainingName = 'Azure Administrator',
  pageEyebrow = 'PRÉPARATION',
  pageTitle = 'Base de connaissances',
  pageSubtitle = 'Travaillez la banque complète ou ciblez un domaine.',
  counts = {},
  content,
  onNavigate,
} = {}) {
  const metrics = getAppShellDensity(density);
  const root = document.createElement('div');
  root.className = 'ui-app-shell';
  root.dataset.density = metrics.id;
  root.style.setProperty('--ui-shell-rail-width', `${metrics.railWidth}px`);
  root.style.setProperty('--ui-shell-topbar-height', `${metrics.topbarHeight}px`);
  root.style.setProperty('--ui-shell-gutter', `${metrics.contentGutter}px`);

  const rail = document.createElement('aside');
  rail.className = 'ui-app-shell__rail';
  rail.setAttribute('aria-label', 'Navigation principale');

  rail.append(createBrand(), createTrainingCard(trainingCode, trainingName));

  const nav = document.createElement('nav');
  nav.className = 'ui-app-shell__nav';
  nav.append(createSectionLabel('PARCOURS'));

  const items = [
    ['dashboard', 'Tableau de bord', 'dashboard', counts.dashboard ?? ''],
    ['study', 'Base de connaissances', 'knowledge', counts.study ?? 568],
    ['mistakes', 'Erreurs', 'error', counts.mistakes ?? 18],
    ['exam', 'Examen blanc', 'exam', counts.exam ?? ''],
  ];

  items.forEach(([id, label, icon, count]) => {
    nav.append(createNavigationItem({
      label,
      icon,
      count,
      active: activeMode === id,
      size: density === 'compact' ? 'compact' : 'medium',
      onClick: () => onNavigate?.(id),
    }));
  });

  const domains = document.createElement('div');
  domains.className = 'ui-app-shell__domains';
  domains.append(createSectionLabel('DOMAINES'));
  [
    ['1', 'Identités et gouvernance'],
    ['2', 'Stockage'],
    ['3', 'Compute'],
    ['4', 'Réseaux'],
    ['5', 'Monitoring'],
  ].forEach(([number, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ui-app-shell__domain';
    button.innerHTML = `<span>${number}</span><b>${label}</b>`;
    domains.append(button);
  });

  const railFooter = document.createElement('div');
  railFooter.className = 'ui-app-shell__rail-footer';
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'ui-app-shell__settings';
  settings.append(createIcon('settings', { size: 17 }));
  const settingsLabel = document.createElement('span');
  settingsLabel.textContent = 'Paramètres';
  settings.append(settingsLabel);
  railFooter.append(settings);

  rail.append(nav, domains, railFooter);

  const contentRoot = document.createElement('div');
  contentRoot.className = 'ui-app-shell__content';

  const topbar = document.createElement('header');
  topbar.className = 'ui-app-shell__topbar';

  const heading = document.createElement('div');
  heading.className = 'ui-app-shell__page-heading';
  const eyebrow = document.createElement('span');
  eyebrow.textContent = pageEyebrow;
  const title = document.createElement('strong');
  title.textContent = pageTitle;
  heading.append(eyebrow, title);

  const actions = document.createElement('div');
  actions.className = 'ui-app-shell__top-actions';
  const edition = document.createElement('span');
  edition.className = 'ui-app-shell__edition';
  edition.textContent = 'ÉDITION 2026';
  const language = document.createElement('button');
  language.type = 'button';
  language.className = 'ui-app-shell__language';
  language.textContent = 'EN ⇄ FR';
  actions.append(edition, language);

  topbar.append(heading, actions);

  const main = document.createElement('main');
  main.className = 'ui-app-shell__main';

  const context = document.createElement('header');
  context.className = 'ui-app-shell__context';
  const h1 = document.createElement('h1');
  h1.textContent = pageTitle;
  const p = document.createElement('p');
  p.textContent = pageSubtitle;
  context.append(h1, p);

  const slot = document.createElement('div');
  slot.className = 'ui-app-shell__slot';
  if (content instanceof Node) slot.append(content);
  else if (typeof content === 'string') slot.textContent = content;

  main.append(context, slot);
  contentRoot.append(topbar, main);
  root.append(rail, contentRoot);

  return root;
}
