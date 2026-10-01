import { createIcon } from '../../icons/icons.js';

const VALID_TYPES = new Set(['single', 'multiple']);
const VALID_STATES = new Set(['default', 'correct', 'incorrect']);
let answerOptionSequence = 0;

function getInput(root) {
  return root?.querySelector?.('.ui-answer-option__input') || null;
}

function updateVisualSelection(root, selected) {
  if (!root) return;
  root.classList.toggle('is-selected', Boolean(selected));

  const input = getInput(root);
  if (input) input.checked = Boolean(selected);

  const marker = root.querySelector('.ui-answer-option__marker');
  if (marker && root.dataset.state === 'default') {
    marker.classList.toggle('is-visible', Boolean(selected));
  }
}

/**
 * Accessible answer control for single-choice (radio) and multiple-choice
 * (checkbox) questions. Visual result states are independent from selection.
 */
export function createAnswerOption({
  id = '',
  name = 'answer',
  value = '',
  index = 0,
  label = 'Réponse',
  type = 'single',
  selected = false,
  state = 'default',
  disabled = false,
  locked = false,
  onChange,
} = {}) {
  answerOptionSequence += 1;
  const safeType = VALID_TYPES.has(type) ? type : 'single';
  const safeState = VALID_STATES.has(state) ? state : 'default';
  const inputId = id || `ui-answer-option-${answerOptionSequence}`;
  const statusId = `${inputId}-status`;

  const root = document.createElement('label');
  root.className = [
    'ui-answer-option',
    selected ? 'is-selected' : '',
    safeState === 'correct' ? 'is-correct' : '',
    safeState === 'incorrect' ? 'is-incorrect' : '',
    disabled ? 'is-disabled' : '',
    locked ? 'is-locked' : '',
  ].filter(Boolean).join(' ');
  root.dataset.state = safeState;
  root.htmlFor = inputId;

  const input = document.createElement('input');
  input.className = 'ui-answer-option__input';
  input.id = inputId;
  input.name = name;
  input.type = safeType === 'multiple' ? 'checkbox' : 'radio';
  input.value = value || String(index);
  input.checked = Boolean(selected);
  input.disabled = Boolean(disabled || locked);

  if (safeState !== 'default') {
    input.setAttribute('aria-describedby', statusId);
  }

  const letter = document.createElement('span');
  letter.className = 'ui-answer-option__letter';
  letter.setAttribute('aria-hidden', 'true');
  letter.textContent = String.fromCharCode(65 + index);

  const text = document.createElement('span');
  text.className = 'ui-answer-option__label';
  text.textContent = label;

  const marker = document.createElement('span');
  marker.className = 'ui-answer-option__marker';
  marker.setAttribute('aria-hidden', 'true');

  if (safeState === 'correct') {
    marker.append(createIcon('check', { size: 18 }));
  } else if (safeState === 'incorrect') {
    marker.append(createIcon('close', { size: 18 }));
  } else {
    marker.classList.add('is-dot');
    marker.classList.toggle('is-visible', Boolean(selected));
  }

  root.append(input, letter, text, marker);

  if (safeState !== 'default') {
    const status = document.createElement('span');
    status.id = statusId;
    status.className = 'ui-answer-option__sr-only';
    status.textContent = safeState === 'correct' ? 'Bonne réponse' : 'Réponse incorrecte';
    root.append(status);
  }

  input.addEventListener('change', () => {
    updateVisualSelection(root, input.checked);
    if (typeof onChange === 'function') {
      onChange({ checked: input.checked, index, value: input.value, input, root });
    }
  });

  return root;
}

export function setAnswerOptionSelected(root, selected) {
  updateVisualSelection(root, selected);
}

export function getAnswerOptionInput(root) {
  return getInput(root);
}
