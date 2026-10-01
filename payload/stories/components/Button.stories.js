import { createButton } from '../../src/ui/components/button/button.js';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
    leadingIcon: { control: 'text' },
    trailingIcon: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Valider la réponse',
    variant: 'primary',
    size: 'medium',
    leadingIcon: '',
    trailingIcon: '',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  render: (args) => createButton(args),
  parameters: {
    layout: 'centered',
    a11y: { test: 'error' },
  },
};

export default meta;

export const Playground = {};

export const Primary = {
  args: {
    label: 'Valider la réponse',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Question suivante',
    variant: 'secondary',
    trailingIcon: '→',
  },
};

export const Ghost = {
  args: {
    label: 'Mode Focus',
    variant: 'ghost',
  },
};

export const Danger = {
  args: {
    label: 'Effacer l’historique',
    variant: 'danger',
  },
};

export const Disabled = {
  args: {
    label: 'Valider la réponse',
    variant: 'primary',
    disabled: true,
  },
};

export const Loading = {
  args: {
    label: 'Enregistrer',
    variant: 'primary',
    loading: true,
  },
};

export const Small = {
  args: {
    label: 'Travailler',
    variant: 'secondary',
    size: 'small',
  },
};

export const FullWidth = {
  args: {
    label: 'Continuer',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Overview = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;gap:24px;min-width:min(760px,90vw);padding:8px';

    const groups = [
      ['Variants', [
        { label: 'Action principale', variant: 'primary' },
        { label: 'Action secondaire', variant: 'secondary' },
        { label: 'Action discrète', variant: 'ghost' },
        { label: 'Action destructive', variant: 'danger' },
      ]],
      ['États', [
        { label: 'Disponible', variant: 'primary' },
        { label: 'Indisponible', variant: 'primary', disabled: true },
        { label: 'Enregistrer', variant: 'primary', loading: true },
      ]],
      ['Tailles', [
        { label: 'Small', variant: 'secondary', size: 'small' },
        { label: 'Medium', variant: 'secondary', size: 'medium' },
      ]],
    ];

    groups.forEach(([title, buttons]) => {
      const section = document.createElement('section');
      section.style.cssText = 'display:grid;gap:10px';
      const heading = document.createElement('h3');
      heading.textContent = title;
      heading.style.cssText = 'margin:0;color:var(--color-text-secondary);font:800 12px var(--font-family-body);letter-spacing:.08em;text-transform:uppercase';
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;align-items:center';
      buttons.forEach((buttonArgs) => row.append(createButton(buttonArgs)));
      section.append(heading, row);
      wrapper.append(section);
    });

    return wrapper;
  },
  parameters: {
    controls: { disable: true },
    layout: 'centered',
  },
};
