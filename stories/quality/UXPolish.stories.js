import { createButton } from '../../src/ui/components/button/button.js';
import { createNavigationItem } from '../../src/ui/components/navigation-item/navigation-item.js';

function createPanel(title) {
  const panel = document.createElement('section');
  panel.className = 'ux-review-board__panel';
  const heading = document.createElement('h2');
  heading.textContent = title;
  panel.append(heading);
  return panel;
}

function interactionBoard({ focusDemo = false } = {}) {
  const page = document.createElement('main');
  page.className = 'ux-review-board';

  const inner = document.createElement('div');
  inner.className = 'ux-review-board__inner';
  inner.innerHTML = `
    <header class="ux-review-board__header">
      <span>SPRINT 14 · QUALITY GATE</span>
      <h1>Interaction & accessibility polish</h1>
      <p>Review keyboard focus, CTA hierarchy, touch targets and semantic contrast in both themes. Switch the Storybook theme and viewport rather than maintaining separate markup.</p>
    </header>
  `;

  const actions = createPanel('CTA hierarchy');
  const actionRow = document.createElement('div');
  actionRow.className = 'ux-review-board__row';
  actionRow.append(
    createButton({ label: 'Valider la réponse', variant: 'primary', size: 'medium' }),
    createButton({ label: 'Question suivante', variant: 'secondary', size: 'medium' }),
    createButton({ label: 'Mode Focus', variant: 'ghost', size: 'medium' }),
    createButton({ label: 'Supprimer', variant: 'danger', size: 'medium' }),
    createButton({ label: 'Indisponible', variant: 'secondary', size: 'medium', disabled: true }),
  );
  actions.append(actionRow);

  const navigation = createPanel('Navigation states');
  const nav = document.createElement('div');
  nav.style.cssText = 'display:grid;gap:6px;width:min(320px,100%)';
  nav.append(
    createNavigationItem({ label: 'Tableau de bord', icon: 'dashboard', count: '51' }),
    createNavigationItem({ label: 'Base de connaissances', icon: 'knowledge', count: '568', active: true }),
    createNavigationItem({ label: 'Erreurs', icon: 'error', count: '18' }),
  );
  navigation.append(nav);

  const forms = createPanel('Keyboard focus');
  const formRow = document.createElement('div');
  formRow.className = 'ux-review-board__row';
  const field = document.createElement('label');
  field.className = 'ux-review-board__field';
  field.innerHTML = '<span>Rechercher une question</span><input type="search" placeholder="AZ104-042 ou Réseaux">';
  const focusButton = createButton({ label: 'Cible de focus', variant: 'secondary', size: 'medium' });
  focusButton.dataset.focusDemo = 'true';
  formRow.append(field, focusButton);
  forms.append(formRow);

  inner.append(actions, navigation, forms);
  page.append(inner);

  if (focusDemo) {
    requestAnimationFrame(() => focusButton.focus());
  }

  return page;
}

export default {
  title: 'Quality/UX Polish',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    a11y: { test: 'error' },
  },
};

export const Overview = { render: () => interactionBoard() };

export const KeyboardFocus = {
  render: () => interactionBoard({ focusDemo: true }),
};

export const Mobile = {
  render: () => interactionBoard(),
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
