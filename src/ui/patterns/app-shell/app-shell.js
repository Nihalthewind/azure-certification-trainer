import { createNavigationItem } from '../../components/navigation-item/navigation-item.js';
import {observeInterfaceLanguage} from '../../integration/localization.js';
import { createIconButton, updateIconButton } from '../../components/icon-button/icon-button.js';
import { createIcon, createBrandMark } from '../../icons/icons.js';
import { createSearchBar } from '../../components/search-bar/search-bar.js';
import {mountPageLayout} from './page-layout.js';

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
  mark.append(createBrandMark());
  mark.setAttribute('aria-hidden', 'true');

  const copy = document.createElement('span');
  copy.className = 'ui-app-shell__brand-copy';
  copy.innerHTML = `<strong>Azure Trainer</strong><small>${trainingCode}</small>`;

  brand.append(mark, copy);
  return brand;
}

function createSearch() { return createSearchBar(); }

function createProfile(onLanguage) {
  const actions = document.createElement('div');
  actions.className = 'ui-app-shell__profile';

  const language = document.createElement('button');
  language.type = 'button';
  language.className = 'language-toggle';
  language.translate = false;
  language.textContent = 'FR ⇄ EN';
  language.setAttribute('aria-label', 'Afficher l’interface en anglais');
  language.setAttribute('aria-pressed', 'true');
  language.addEventListener('click', () => {
    const translated = language.getAttribute('aria-pressed') !== 'true';onLanguage?.(translated?'fr':'en');
    language.setAttribute('aria-pressed', String(translated));
    language.textContent = translated ? 'FR ⇄ EN' : 'EN ⇄ FR';
    language.setAttribute('aria-label', translated ? 'Afficher l’interface en anglais' : 'Afficher l’interface en français');
  });

  const avatar = document.createElement('span');
  avatar.className = 'ui-app-shell__avatar';
  avatar.textContent = 'AZ';

  const copy = document.createElement('span');
  copy.className = 'ui-app-shell__profile-copy';
  copy.innerHTML = '<strong>Mon espace</strong><small>Progression locale</small>';

  const theme = createIconButton({icon:'moon',label:'Activer le mode sombre',onClick:()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';syncTheme();}});
  function syncTheme(){const dark=document.documentElement.dataset.theme==='dark';updateIconButton(theme,{icon:dark?'sun':'moon',label:dark?'Activer le mode clair':'Activer le mode sombre'});} syncTheme();
  actions.append(language, theme, avatar, copy);
  return actions;
}

export function createAppShell({
  language = 'fr',
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
  root.className = `ui-app-shell ui-app-shell--v2${activeMode === 'study' ? ' ui-app-shell--learning' : ''}`;
  root.dataset.density = metrics.id;
  root.style.setProperty('--ui-shell-rail-width', 'var(--v3-rail)');
  root.style.setProperty('--ui-shell-topbar-height', 'var(--v3-topbar)');
  root.style.setProperty('--ui-shell-gutter', 'var(--space-6)');

  const rail = document.createElement('aside');
  rail.className = 'ui-app-shell__rail';
  rail.setAttribute('aria-label', 'Navigation principale');
  rail.append(createBrand(trainingCode));

  const nav = document.createElement('nav');
  nav.className = 'ui-app-shell__nav';
  const items = [
    ['dashboard', 'Accueil', 'dashboard'],
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
  let shellLanguage=language;topbar.append(createSearch(), createProfile(value=>{shellLanguage=value;document.documentElement.lang=value;}));

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
  if(content?.headerActions)context.append(content.headerActions);

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
  mountPageLayout(main,context);
  contentRoot.append(topbar, main);
  root.append(rail, contentRoot);
  if(content?.examState==='focus')root.classList.add('ui-exam-preview');
  if(content?.examState&&content.examState!=='focus'&&content.examState!=='finished'){
    rail.inert=true;topbar.inert=true;context.inert=true;
  }
  observeInterfaceLanguage(root,()=>shellLanguage);
  return root;
}
