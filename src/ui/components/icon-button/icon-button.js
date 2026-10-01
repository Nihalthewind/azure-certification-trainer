import './icon-button.css';
import { createIcon, iconNames } from '../../icons/icons.js';

const VALID_SIZES = new Set(['small', 'medium']);
const VALID_TONES = new Set(['accent', 'danger', 'warning']);
const VALID_ICONS = new Set(iconNames);

/**
 * Icon-only action button.
 * `label` is mandatory for accessibility because the visual icon has no text.
 * `pressed` is optional: use it only for true toggle actions.
 */
export function createIconButton({
  icon = 'star',
  label = 'Action',
  size = 'medium',
  active = false,
  pressed = null,
  activeTone = 'accent',
  disabled = false,
  onClick,
} = {}) {
  const safeSize = VALID_SIZES.has(size) ? size : 'medium';
  const safeTone = VALID_TONES.has(activeTone) ? activeTone : 'accent';
  const safeIcon = VALID_ICONS.has(icon) ? icon : 'star';

  const button = document.createElement('button');
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
  }

  button.append(createIcon(safeIcon, { filled: safeIcon === 'star' && active }));

  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }

  return button;
}
