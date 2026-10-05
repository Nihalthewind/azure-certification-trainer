import { createButton } from '../../src/ui/components/button/button.js';
import { createAnswerOption } from '../../src/ui/components/answer-option/answer-option.js';

function panel(title) {
  const root = document.createElement('section');
  root.className = 'contrast-review__panel';
  const h2 = document.createElement('h2');
  h2.textContent = title;
  root.append(h2);
  return root;
}

function createReviewBoard() {
  const page = document.createElement('main');
  page.className = 'contrast-review';
  const inner = document.createElement('div');
  inner.className = 'contrast-review__inner';
  inner.innerHTML = `
    <header class="contrast-review__header">
      <h1>Contrast & semantic states</h1>
      <p>Light and dark themes must preserve strong control boundaries. Correct and incorrect answers use the entire answer surface, not a small icon or border alone.</p>
    </header>
  `;

  const actions = panel('Buttons & controls');
  const row = document.createElement('div');
  row.className = 'contrast-review__row';
  row.append(
    createButton({ label: 'Valider', variant: 'primary', size: 'medium' }),
    createButton({ label: 'Secondaire', variant: 'secondary', size: 'medium' }),
    createButton({ label: 'Fantôme', variant: 'ghost', size: 'medium' }),
    createButton({ label: 'Danger', variant: 'danger', size: 'medium' }),
    createButton({ label: 'Désactivé', variant: 'secondary', size: 'medium', disabled: true }),
  );
  actions.append(row);

  const fields = panel('Fields');
  const fieldsRow = document.createElement('div');
  fieldsRow.className = 'contrast-review__fields';
  fieldsRow.innerHTML = `
    <label class="contrast-review__field">Recherche<input type="search" placeholder="AZ104-042"></label>
    <label class="contrast-review__field">Domaine<select><option>Réseaux virtuels</option></select></label>
  `;
  fields.append(fieldsRow);

  const answers = panel('Answer states');
  const answerList = document.createElement('div');
  answerList.className = 'contrast-review__answers';
  answerList.append(
    createAnswerOption({ index: 0, label: 'Réponse neutre avant sélection', state: 'default' }),
    createAnswerOption({ index: 1, label: 'Réponse actuellement sélectionnée', selected: true, state: 'default' }),
    createAnswerOption({ index: 2, label: 'Bonne réponse : toute la ligne devient verte', state: 'correct', locked: true }),
    createAnswerOption({ index: 3, label: 'Mauvaise réponse sélectionnée : toute la ligne devient rouge', selected: true, state: 'incorrect', locked: true }),
  );
  answers.append(answerList);

  inner.append(actions, fields, answers);
  page.append(inner);
  return page;
}

export default {
  title: 'Quality/Visual Contrast',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    a11y: { test: 'error' },
  },
};

export const Light = {
  render: createReviewBoard,
  globals: { theme: 'light' },
};

export const Dark = {
  render: createReviewBoard,
  globals: { theme: 'dark' },
};

export const MobileLight = {
  render: createReviewBoard,
  globals: {
    theme: 'light',
    viewport: { value: 'mobile', isRotated: false },
  },
};
