import './button.css';

const VALID_VARIANTS = new Set(['primary', 'secondary', 'ghost', 'danger']);
const VALID_SIZES = new Set(['small', 'medium']);

export function createButton({
  label = 'Action',
  variant = 'secondary',
  size = 'medium',
  leadingIcon = '',
  trailingIcon = '',
  disabled = false,
  loading = false,
  loadingLabel = 'Chargement...',
  fullWidth = false,
  type = 'button',
  ariaLabel = '',
  onClick,
} = {}) {
  const safeVariant = VALID_VARIANTS.has(variant) ? variant : 'secondary';
  const safeSize = VALID_SIZES.has(size) ? size : 'medium';

  const button = document.createElement('button');
  button.type = type;
  button.className = [
    'ui-button',
    `ui-button--${safeVariant}`,
    `ui-button--${safeSize}`,
    fullWidth ? 'ui-button--full' : '',
    loading ? 'is-loading' : '',
  ].filter(Boolean).join(' ');

  button.disabled = Boolean(disabled || loading);
  button.setAttribute('aria-busy', loading ? 'true' : 'false');

  if (ariaLabel) {
    button.setAttribute('aria-label', ariaLabel);
  }

  if (leadingIcon && !loading) {
    const icon = document.createElement('span');
    icon.className = 'ui-button__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = leadingIcon;
    button.append(icon);
  }

  if (loading) {
    const spinner = document.createElement('span');
    spinner.className = 'ui-button__spinner';
    spinner.setAttribute('aria-hidden', 'true');
    button.append(spinner);
  }

  const text = document.createElement('span');
  text.className = 'ui-button__label';
  text.textContent = loading ? loadingLabel : label;
  button.append(text);

  if (trailingIcon && !loading) {
    const icon = document.createElement('span');
    icon.className = 'ui-button__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = trailingIcon;
    button.append(icon);
  }

  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }

  return button;
}
