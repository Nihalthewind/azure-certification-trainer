import { createNavigationItem } from '../../components/navigation-item/navigation-item.js';
import { createIcon } from '../../icons/icons.js';

export const APP_SHELL_DENSITIES = Object.freeze({
  balanced: Object.freeze({ id: 'balanced', label: 'Équilibré', railWidth: 220, topbarHeight: 72, contentGutter: 28 }),
  compact: Object.freeze({ id: 'compact', label: 'Compact', railWidth: 204, topbarHeight: 64, contentGutter: 22 }),
  spacious: Object.freeze({ id: 'spacious', label: 'Aéré', railWidth: 236, topbarHeight: 76, contentGutter: 36 }),
});

export function getAppShellDensity(name = 'balanced') {
  return APP_SHELL_DENSITIES[name] || APP_SHELL_DENSITIES.balanced;
}

function createBrand(trainingCode) {
  const brand = document.createElement('div');
  brand.className = 'ui-app-shell__brand';

  const mark = document.createElement('span');
  mark.className = 'ui-app-shell__brand-mark';
  mark.textContent = 'A';
  mark.setAttribute('aria-hidden', 'true');

  const copy = document.createElement('span');
  copy.className = 'ui-app-shell__brand-copy';
  copy.innerHTML = `<strong>Azure Trainer</strong><small>${trainingCode}</small>`;

  brand.append(mark, copy);
  return brand;
}

function createSearch() {
  const label = document.createElement('label');
  label.className = 'ui-app-shell__search';
  label.append(createIcon('search', { size: 17 }));

  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Rechercher un sujet, une notion, une question…';
  input.setAttribute('aria-label', 'Rechercher');

  const shortcut = document.createElement('span');
  shortcut.className = 'ui-app-shell__shortcut';
  shortcut.textContent = '⌘ K';

  label.append(input, shortcut);
  return label;
}

function createProfile(onNavigate) {
  const actions = document.createElement('div');
  actions.className = 'ui-app-shell__profile';

  const notification = document.createElement('button');
  notification.type = 'button';
  notification.className = 'ui-app-shell__notification';
  notification.setAttribute('aria-label', 'Paramètres');notification.addEventListener('click',()=>onNavigate?.('settings'));
  notification.append(createIcon('settings', { size: 18 }));

  const avatar = document.createElement('span');
  avatar.className = 'ui-app-shell__avatar';
  avatar.textContent = 'AZ';

  const copy = document.createElement('span');
  copy.className = 'ui-app-shell__profile-copy';
  copy.innerHTML = '<strong>Mon espace</strong><small>Progression locale</small>';

  actions.append(notification, avatar, copy);
  return actions;
}

export function createAppShell({
  density = 'balanced',
  activeMode = 'study',
  trainingCode = 'AZ-104',
  pageTitle = 'Entraînement',
  pageSubtitle = 'Une question à la fois. Progresse, comprends, continue.',
  content,
  onNavigate,
} = {}) {
  const metrics = getAppShellDensity(density);
  const root = document.createElement('div');
  root.className = 'ui-app-shell ui-app-shell--v2';
  root.dataset.density = metrics.id;
  root.style.setProperty('--ui-shell-rail-width', `${metrics.railWidth}px`);
  root.style.setProperty('--ui-shell-topbar-height', `${metrics.topbarHeight}px`);
  root.style.setProperty('--ui-shell-gutter', `${metrics.contentGutter}px`);

  const rail = document.createElement('aside');
  rail.className = 'ui-app-shell__rail';
  rail.setAttribute('aria-label', 'Navigation principale');
  rail.append(createBrand(trainingCode));

  const nav = document.createElement('nav');
  nav.className = 'ui-app-shell__nav';
  const items = [
    ['dashboard', 'Accueil', 'dashboard'],
    ['path', 'Parcours', 'layers'],
    ['study', 'Entraînement', 'knowledge'],
    ['exam', 'Examen blanc', 'exam'],
    ['mistakes', 'Révisions', 'review'],
  ];
  items.forEach(([id, label, icon]) => {
    nav.append(createNavigationItem({
      label,
      ariaLabel: label,
      icon,
      active: activeMode === id,
      size: density === 'compact' ? 'compact' : 'medium',
      onClick: () => onNavigate?.(id),
    }));
  });

  const railFooter = document.createElement('div');
  railFooter.className = 'ui-app-shell__rail-footer';
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.setAttribute('aria-label', 'Paramètres');
  settings.className = `ui-app-shell__settings${activeMode === 'settings' ? ' is-active' : ''}`;
  if (activeMode === 'settings') settings.setAttribute('aria-current', 'page');
  settings.addEventListener('click', () => onNavigate?.('settings'));
  settings.append(createIcon('settings', { size: 17 }));
  const settingsLabel = document.createElement('span');
  settingsLabel.textContent = 'Paramètres';
  settings.append(settingsLabel);
  railFooter.append(settings);
  rail.append(nav, railFooter);

  const contentRoot = document.createElement('div');
  contentRoot.className = 'ui-app-shell__content';

  const topbar = document.createElement('header');
  topbar.className = 'ui-app-shell__topbar';
  topbar.append(createSearch(), createProfile(onNavigate));

  const main = document.createElement('main');
  main.className = 'ui-app-shell__main';

  const context = document.createElement('header');
  context.className = 'ui-app-shell__context';
  const contextCopy = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = pageTitle;
  const p = document.createElement('p');
  p.textContent = pageSubtitle;
  contextCopy.append(h1, p);
  context.append(contextCopy);

  if (activeMode === 'study') {
    const session = document.createElement('span');
    session.className = 'ui-app-shell__session-badge';
    session.textContent = 'Session libre';
    context.append(session);
  }

  const slot = document.createElement('div');
  slot.className = 'ui-app-shell__slot';
  if (content instanceof Node) slot.append(content);
  else if (typeof content === 'string') slot.textContent = content;

  main.append(context, slot);
  contentRoot.append(topbar, main);
  root.append(rail, contentRoot);
  return root;
}
