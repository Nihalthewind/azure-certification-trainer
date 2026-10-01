const VALID_KINDS = new Set(['default', 'form', 'danger', 'result', 'navigator']);
const VALID_SIZES = new Set(['small', 'medium', 'wide']);

function normalizeKind(kind) {
  return VALID_KINDS.has(kind) ? kind : 'default';
}

function normalizeSize(size) {
  return VALID_SIZES.has(size) ? size : 'medium';
}

export function applyModalSurface(modal, {
  kind = 'default',
  size = 'medium',
} = {}) {
  if (!(modal instanceof HTMLElement)) return null;
  const safeKind = normalizeKind(kind);
  const safeSize = normalizeSize(size);
  modal.classList.add('ui-modal');
  modal.dataset.kind = safeKind;
  modal.dataset.size = safeSize;
  modal.classList.toggle('modal-wide', safeSize === 'wide');
  return modal;
}

export function getModalFocusables(root) {
  if (!(root instanceof HTMLElement)) return [];
  return [...root.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
}

export function trapModalTab(event, root) {
  if (event.key !== 'Tab') return false;
  const focusables = getModalFocusables(root);
  if (!focusables.length) return false;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
    return true;
  }
  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
    return true;
  }
  return false;
}

export function createModalSurface({
  eyebrow = 'AZURE TRAINER',
  title = 'Dialogue',
  description = '',
  kind = 'default',
  size = 'medium',
  actionLabel = 'Continuer',
} = {}) {
  const backdrop = document.createElement('div');
  backdrop.className = 'ui-modal-backdrop ui-modal-backdrop--story';

  const modal = document.createElement('section');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  applyModalSurface(modal, { kind, size });

  const header = document.createElement('header');
  header.className = 'ui-modal__header';
  const copy = document.createElement('div');
  copy.className = 'ui-modal__header-copy';
  const overline = document.createElement('span');
  overline.className = 'ui-modal__eyebrow';
  overline.textContent = eyebrow;
  const heading = document.createElement('h2');
  heading.textContent = title;
  copy.append(overline, heading);
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'ui-modal__close';
  close.setAttribute('aria-label', 'Fermer');
  close.textContent = '×';
  header.append(copy, close);

  const body = document.createElement('div');
  body.className = 'ui-modal__body';
  if (description) {
    const p = document.createElement('p');
    p.textContent = description;
    body.append(p);
  }

  if (kind === 'form' || kind === 'danger') {
    const label = document.createElement('label');
    label.className = 'ui-modal-demo-field';
    const caption = document.createElement('span');
    caption.textContent = kind === 'danger' ? 'Commentaire' : 'Note personnelle';
    const textarea = document.createElement('textarea');
    textarea.rows = 5;
    textarea.placeholder = kind === 'danger' ? 'Décrivez le problème observé…' : 'Mémo, commande ou piège à retenir…';
    label.append(caption, textarea);
    body.append(label);
  }

  if (kind === 'result') {
    const score = document.createElement('div');
    score.className = 'ui-modal-demo-score';
    score.innerHTML = '<strong>41</strong><span>/ 50</span><small>82 % de bonnes réponses</small>';
    body.append(score);
  }

  const footer = document.createElement('footer');
  footer.className = 'ui-modal__footer';
  const action = document.createElement('button');
  action.type = 'button';
  action.className = `ui-button ui-button--${kind === 'danger' ? 'danger' : 'primary'} ui-button--medium`;
  action.innerHTML = `<span class="ui-button__label">${actionLabel}</span>`;
  footer.append(action);

  modal.append(header, body, footer);
  backdrop.append(modal);
  return backdrop;
}
