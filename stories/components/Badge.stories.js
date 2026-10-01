import { createBadge } from '../../src/ui/components/badge/badge.js';

const meta = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    tone: { control: 'select', options: ['neutral', 'accent', 'success', 'error', 'warning'] },
    shape: { control: 'radio', options: ['rounded', 'pill'] },
    size: { control: 'radio', options: ['small', 'medium'] },
  },
  args: {
    label: 'Domaine',
    tone: 'accent',
    shape: 'rounded',
    size: 'small',
  },
  render: (args) => createBadge(args),
  parameters: { layout: 'centered', a11y: { test: 'error' } },
};

export default meta;
export const Playground = {};
export const Topic = { args: { label: 'IDENTITE', tone: 'accent', shape: 'rounded' } };
export const Status = { args: { label: 'A decouvrir', tone: 'neutral', shape: 'pill' } };
export const Success = { args: { label: 'Maitrisee', tone: 'success', shape: 'pill' } };
export const Error = { args: { label: 'A reprendre', tone: 'error', shape: 'pill' } };
export const Warning = { args: { label: 'A revoir', tone: 'warning', shape: 'pill' } };

export const Overview = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;gap:22px;min-width:min(680px,90vw);padding:8px';
    const groups = [
      ['Tons', [
        { label: 'Neutre', tone: 'neutral', shape: 'pill' },
        { label: 'Accent', tone: 'accent', shape: 'pill' },
        { label: 'Succes', tone: 'success', shape: 'pill' },
        { label: 'Erreur', tone: 'error', shape: 'pill' },
        { label: 'Attention', tone: 'warning', shape: 'pill' },
      ]],
      ['Usage QuestionCard', [
        { label: 'IDENTITE', tone: 'accent', shape: 'rounded' },
        { label: 'A decouvrir', tone: 'neutral', shape: 'pill' },
        { label: 'Maitrisee', tone: 'success', shape: 'pill' },
        { label: 'A reprendre', tone: 'error', shape: 'pill' },
        { label: 'A revoir', tone: 'warning', shape: 'pill' },
      ]],
    ];

    for (const [title, badges] of groups) {
      const section = document.createElement('section');
      section.style.cssText = 'display:grid;gap:10px';
      const heading = document.createElement('h3');
      heading.textContent = title;
      heading.style.cssText = 'margin:0;color:var(--color-text-secondary);font:800 12px var(--font-family-body);letter-spacing:.08em;text-transform:uppercase';
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;align-items:center';
      badges.forEach((args) => row.append(createBadge(args)));
      section.append(heading, row);
      wrapper.append(section);
    }

    return wrapper;
  },
  parameters: { controls: { disable: true }, layout: 'centered' },
};
