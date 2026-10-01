import { createIcon, iconNames } from '../../icons/icons.js';

const VALID_SIZES = new Set(['small', 'medium']);
const VALID_TONES = new Set(['accent', 'danger', 'warning']);
const VALID_ICONS = new Set(iconNames);

function applyIconButtonState(button, {
  icon = 'star',
  label = 'Action',
  size = 'medium',
  active = false,
  pressed = null,
  activeTone = 'accent',
  disabled = false,
} = {}) {
  const safeSize = VALID_SIZES.has(size) ? size : 'medium';
  const safeTone = VALID_TONES.has(activeTone) ? activeTone : 'accent';
  const safeIcon = VALID_ICONS.has(icon) ? icon : 'star';

  button.type = 'button';
  button.className = [
    'ui-icon-button',
    `ui-icon-button--${safeSize}`,
    active ? 'is-active' : '',
    active ? `is-${safeTone}` : '',
  ].filter(Boolean).join(' ');

  button.disabled = Boolean(disabled);
  button.setAttribute('aria-label', label);
  button.title = label;

  if (typeof pressed === 'boolean') {
    button.setAttribute('aria-pressed', String(pressed));
  } else {
    button.removeAttribute('aria-pressed');
  }

  button.replaceChildren(createIcon(safeIcon, { filled: safeIcon === 'star' && active }));
  return button;
}

/**
 * Icon-only action button.
 * `label` is mandatory for accessibility because the visual icon has no text.
 * `pressed` is optional: use it only for true toggle actions.
 */
export function createIconButton(options = {}) {
  const button = document.createElement('button');
  applyIconButtonState(button, options);

  if (typeof options.onClick === 'function') {
    button.addEventListener('click', options.onClick);
  }

  return button;
}

/**
 * Upgrades an existing application button without replacing its DOM node.
 * This preserves IDs and event handlers while the legacy app is migrated.
 */
export function updateIconButton(button, options = {}) {
  if (!(button instanceof HTMLElement)) return null;
  return applyIconButtonState(button, options);
}
