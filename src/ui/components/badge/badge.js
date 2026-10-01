const VALID_TONES = new Set(['neutral', 'accent', 'success', 'error', 'warning']);
const VALID_SHAPES = new Set(['rounded', 'pill']);
const VALID_SIZES = new Set(['small', 'medium']);

function applyBadgeState(badge, {
  label = 'Badge',
  tone = 'neutral',
  shape = 'rounded',
  size = 'small',
  role = '',
} = {}) {
  const safeTone = VALID_TONES.has(tone) ? tone : 'neutral';
  const safeShape = VALID_SHAPES.has(shape) ? shape : 'rounded';
  const safeSize = VALID_SIZES.has(size) ? size : 'small';

  badge.className = [
    'ui-badge',
    `ui-badge--${safeTone}`,
    `ui-badge--${safeShape}`,
    `ui-badge--${safeSize}`,
  ].join(' ');
  badge.textContent = label;

  if (role) badge.setAttribute('role', role);
  else badge.removeAttribute('role');

  return badge;
}

export function createBadge(options = {}) {
  return applyBadgeState(document.createElement('span'), options);
}

/** Upgrade an existing badge-like span while preserving its ID. */
export function updateBadge(badge, options = {}) {
  if (!(badge instanceof HTMLElement)) return null;
  return applyBadgeState(badge, options);
}
