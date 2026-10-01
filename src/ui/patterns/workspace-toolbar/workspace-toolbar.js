import { createButton } from '../../components/button/button.js';

export function getFocusToggleState(active = false) {
  return active
    ? {
        label: 'Quitter Focus',
        title: 'Quitter le mode Focus (Échap)',
        icon: '×',
        pressed: true,
      }
    : {
        label: 'Mode Focus',
        title: 'Activer le mode Focus (F)',
        icon: '⛶',
        pressed: false,
      };
}

export function updateFocusToggle(button, active = false) {
  if (!(button instanceof HTMLElement)) return null;
  const state = getFocusToggleState(active);
  button.setAttribute('aria-pressed', String(state.pressed));
  button.setAttribute('title', state.title);
  button.classList.toggle('is-active', Boolean(active));

  const label = button.querySelector('.ui-button__label');
  if (label) label.textContent = state.label;
  else button.textContent = state.label;

  const icon = button.querySelector('.workspace-focus-toggle__icon, .ui-button__icon');
  if (icon) icon.textContent = state.icon;

  return button;
}

export function createWorkspaceToolbar({
  title = 'Votre parcours',
  subtitle = 'Choisissez un domaine ou poursuivez votre progression.',
  searchValue = '',
  searchDisabled = false,
  focusActive = false,
  examMode = false,
  compactActive = false,
  flagged = false,
  onSearch,
  onResetDomain,
  onOpenNavigator,
  onToggleFocus,
  onToggleCompact,
  onToggleFlag,
  onResetExam,
} = {}) {
  const toolbar = document.createElement('section');
  toolbar.className = 'ui-workspace-toolbar';
  toolbar.setAttribute('aria-label', 'Outils de la session');

  const heading = document.createElement('div');
  heading.className = 'ui-workspace-toolbar__heading';

  const headingCopy = document.createElement('div');
  headingCopy.className = 'ui-workspace-toolbar__heading-copy';
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const p = document.createElement('p');
  p.textContent = subtitle;
  headingCopy.append(h2, p);

  const focusState = getFocusToggleState(focusActive);
  const focusButton = createButton({
    label: focusState.label,
    leadingIcon: focusState.icon,
    variant: 'secondary',
    size: 'medium',
    onClick: onToggleFocus,
  });
  focusButton.classList.add('ui-workspace-toolbar__focus');
  updateFocusToggle(focusButton, focusActive);

  heading.append(headingCopy, focusButton);

  const controls = document.createElement('div');
  controls.className = 'ui-workspace-toolbar__controls';

  const search = document.createElement('label');
  search.className = 'ui-workspace-toolbar__search';
  const searchLabel = document.createElement('span');
  searchLabel.className = 'ui-workspace-toolbar__search-icon';
  searchLabel.setAttribute('aria-hidden', 'true');
  searchLabel.textContent = '⌕';
  const input = document.createElement('input');
  input.type = 'search';
  input.value = searchValue;
  input.disabled = Boolean(searchDisabled || examMode);
  input.placeholder = 'Service, mot clé, numéro…';
  input.setAttribute('aria-label', 'Rechercher une question');
  if (typeof onSearch === 'function') input.addEventListener('input', (event) => onSearch(event.target.value));
  search.append(searchLabel, input);
  controls.append(search);

  controls.append(createButton({
    label: 'Tous les domaines',
    variant: 'secondary',
    size: 'small',
    disabled: examMode,
    onClick: onResetDomain,
  }));

  controls.append(createButton({
    label: 'Toutes les questions',
    variant: 'secondary',
    size: 'small',
    onClick: onOpenNavigator,
  }));

  if (examMode) {
    const examControls = document.createElement('div');
    examControls.className = 'ui-workspace-toolbar__exam';

    const compact = createButton({
      label: compactActive ? 'Compact actif' : 'Compact',
      variant: compactActive ? 'secondary' : 'ghost',
      size: 'small',
      onClick: onToggleCompact,
    });
    compact.setAttribute('aria-pressed', String(Boolean(compactActive)));

    const flag = createButton({
      label: flagged ? 'À revoir ✓' : 'À revoir',
      variant: flagged ? 'secondary' : 'ghost',
      size: 'small',
      onClick: onToggleFlag,
    });
    flag.setAttribute('aria-pressed', String(Boolean(flagged)));

    examControls.append(compact, flag, createButton({
      label: 'Reset examen',
      variant: 'ghost',
      size: 'small',
      onClick: onResetExam,
    }));
    controls.append(examControls);
  }

  toolbar.append(heading, controls);
  return toolbar;
}
