import {
  createAnswerOption,
  setAnswerOptionSelected,
} from '../../src/ui/components/answer-option/answer-option.js';

const meta = {
  title: 'Components/AnswerOption',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'radio', options: ['single', 'multiple'] },
    selected: { control: 'boolean' },
    state: { control: 'select', options: ['default', 'correct', 'incorrect'] },
    disabled: { control: 'boolean' },
    locked: { control: 'boolean' },
  },
  args: {
    index: 0,
    label: 'Attribuer le rôle Contributor au niveau du groupe de ressources concerné.',
    type: 'single',
    selected: false,
    state: 'default',
    disabled: false,
    locked: false,
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'width:min(720px,90vw)';
    wrapper.append(createAnswerOption({ ...args, name: 'storybook-answer-option' }));
    return wrapper;
  },
  parameters: { layout: 'centered', a11y: { test: 'error' } },
};

export default meta;

export const Playground = {};
export const Default = {};
export const Selected = { args: { selected: true } };
export const Hover = {
  render: (args) => {
    const wrapper = meta.render(args);
    wrapper.querySelector('.ui-answer-option').classList.add('is-preview-hover');
    return wrapper;
  },
};
export const SelectedLight = { args: { selected: true }, globals: { theme: 'light' } };
export const SelectedDark = { args: { selected: true }, globals: { theme: 'dark' } };
export const Correct = { args: { selected: true, state: 'correct', locked: true } };
export const Incorrect = { args: { selected: true, state: 'incorrect', locked: true } };
export const Disabled = { args: { disabled: true } };
export const MultipleChoice = { args: { type: 'multiple', selected: true } };

export const SingleChoiceGroup = {
  render: () => {
    const labels = [
      'Créer un groupe de ressources et lui attribuer le rôle Contributor.',
      'Attribuer le rôle Reader à l’abonnement.',
      'Créer une Azure Policy qui ajoute automatiquement le rôle requis.',
      'Attribuer le rôle Contributor au niveau du groupe de ressources concerné.',
    ];

    const fieldset = document.createElement('fieldset');
    fieldset.style.cssText = 'display:grid;gap:9px;width:min(720px,90vw);margin:0;padding:0;border:0';
    const legend = document.createElement('legend');
    legend.textContent = 'Une réponse attendue';
    legend.style.cssText = 'margin:0 0 10px;color:var(--color-text-subtle);font:800 10px var(--font-family-body);letter-spacing:.1em;text-transform:uppercase';
    fieldset.append(legend);

    const roots = [];
    labels.forEach((label, index) => {
      const root = createAnswerOption({
        name: 'storybook-single-choice',
        index,
        label,
        type: 'single',
        selected: index === 3,
        onChange: ({ checked }) => {
          if (!checked) return;
          roots.forEach((option, optionIndex) => setAnswerOptionSelected(option, optionIndex === index));
        },
      });
      roots.push(root);
      fieldset.append(root);
    });

    return fieldset;
  },
  parameters: { controls: { disable: true } },
};

export const ResultStates = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;gap:10px;width:min(720px,90vw)';
    wrapper.append(
      createAnswerOption({ index: 0, label: 'Réponse choisie mais incorrecte', selected: true, state: 'incorrect', locked: true }),
      createAnswerOption({ index: 3, label: 'Bonne réponse attendue', selected: false, state: 'correct', locked: true }),
    );
    return wrapper;
  },
  parameters: { controls: { disable: true } },
};

export const MultipleResultStates = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;gap:10px;width:min(720px,90vw)';
    wrapper.append(
      createAnswerOption({ index: 0, label: 'Bonne reponse selectionnee', type: 'multiple', selected: true, state: 'correct', locked: true }),
      createAnswerOption({ index: 1, label: 'Mauvaise reponse selectionnee', type: 'multiple', selected: true, state: 'incorrect', locked: true }),
      createAnswerOption({ index: 2, label: 'Distracteur non selectionne', type: 'multiple', selected: false, state: 'default', locked: true }),
      createAnswerOption({ index: 3, label: 'Bonne reponse non selectionnee', type: 'multiple', selected: false, state: 'correct', locked: true }),
    );
    return wrapper;
  },
  parameters: { controls: { disable: true } },
};
