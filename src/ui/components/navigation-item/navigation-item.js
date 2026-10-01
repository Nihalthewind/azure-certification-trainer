import { createIcon } from '../../icons/icons.js';

const VALID_SIZES = new Set(['medium', 'compact']);

function normalizeCount(count) {
  if (count === null || count === undefined || count === '') return '';
  const number = Number(count);
  return Number.isFinite(number) ? String(number) : String(count);
}

export function createNavigationItem({
  label = 'Navigation',
  icon = 'dashboard',
  count = '',
  active = false,
  disabled = false,
  size = 'medium',
  ariaLabel = '',
  onClick,
} = {}) {
  const safeSize = VALID_SIZES.has(size) ? size : 'medium';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = [
    'ui-navigation-item',
    `ui-navigation-item--${safeSize}`,
    active ? 'is-active' : '',
  ].filter(Boolean).join(' ');
  button.disabled = Boolean(disabled);

  if (active) button.setAttribute('aria-current', 'page');
  if (ariaLabel) button.setAttribute('aria-label', ariaLabel);

  const iconSlot = document.createElement('span');
  iconSlot.className = 'ui-navigation-item__icon';
  iconSlot.append(createIcon(icon, { size: safeSize === 'compact' ? 16 : 18 }));

  const labelSlot = document.createElement('span');
  labelSlot.className = 'ui-navigation-item__label';
  labelSlot.textContent = label;

  button.append(iconSlot, labelSlot);

  const normalizedCount = normalizeCount(count);
  if (normalizedCount) {
    const countSlot = document.createElement('span');
    countSlot.className = 'ui-navigation-item__count';
    countSlot.textContent = normalizedCount;
    countSlot.setAttribute('aria-label', `${normalizedCount} éléments`);
    button.append(countSlot);
  }

  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }

  return button;
}
