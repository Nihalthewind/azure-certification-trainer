import { createIcon } from '../../icons/icons.js';
let shortcutBound = false;

// Upgrade the existing input without replacing its ID or business handlers.
export function enhanceSearchBar(wrapper) {
  wrapper.classList.add('ui-search-bar');
  const input = wrapper.querySelector('input');
  for (const decoration of wrapper.querySelectorAll('svg, .v2-search-icon, .v2-topbar-search__shortcut, .ui-app-shell__shortcut')) {
    decoration.setAttribute('aria-hidden', 'true');
    decoration.removeAttribute('tabindex');
  }
  input.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
  return wrapper;
}

export function createSearchBar({ value = '', placeholder = 'Rechercher un sujet, une notion, une question…', onInput } = {}) {
  if (!shortcutBound) {
    document.addEventListener('keydown', event => {
      if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return;
      const input = [...document.querySelectorAll('.ui-search-bar input:not(:disabled)')].find(node => node.getClientRects().length);
      if (input) { event.preventDefault(); input.focus(); }
    });
    shortcutBound = true;
  }
  const wrapper = document.createElement('label');
  wrapper.className = 'ui-search-bar ui-app-shell__search';
  const input = document.createElement('input');
  input.type = 'search'; input.value = value; input.placeholder = placeholder;
  input.setAttribute('aria-label', 'Recherche globale');
  if (onInput) input.addEventListener('input', () => onInput(input.value));
  const shortcut = document.createElement('span');
  shortcut.className = 'ui-app-shell__shortcut'; shortcut.textContent = 'Ctrl K';
  wrapper.append(createIcon('search', { size: 17 }), input, shortcut);
  return enhanceSearchBar(wrapper);
}
