import { createIconButton } from '../../src/ui/components/icon-button/icon-button.js';

const meta = {
  title: 'Components/IconButton',
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ['star', 'note', 'report', 'flag', 'review', 'close'] },
    label: { control: 'text' },
    size: { control: 'radio', options: ['small', 'medium'] },
    active: { control: 'boolean' },
    activeTone: { control: 'select', options: ['accent', 'danger', 'warning'] },
    pressed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: 'star',
    label: 'Ajouter aux favoris',
    size: 'medium',
    active: false,
    activeTone: 'accent',
    pressed: false,
    disabled: false,
  },
  render: (args) => createIconButton(args),
  parameters: { layout: 'centered', a11y: { test: 'error' } },
};

export default meta;
export const Playground = {};
export const Favorite = { args: { icon: 'star', label: 'Ajouter aux favoris', pressed: false } };
export const FavoriteActive = { args: { icon: 'star', label: 'Retirer des favoris', active: true, pressed: true } };
export const Note = { args: { icon: 'note', label: 'Ajouter une note', pressed: null } };
export const NoteSaved = { args: { icon: 'note', label: 'Modifier ma note', active: true, pressed: null } };
export const Report = { args: { icon: 'report', label: 'Signaler un probleme', pressed: null } };
export const ReportActive = { args: { icon: 'report', label: 'Modifier le signalement', active: true, activeTone: 'danger', pressed: null } };
export const Review = { args: { icon: 'review', label: 'Marquer a revoir', pressed: false } };
export const ReviewActive = { args: { icon: 'review', label: 'Retirer de la liste a revoir', active: true, activeTone: 'warning', pressed: true } };
export const Disabled = { args: { icon: 'star', label: 'Favoris indisponibles', disabled: true } };

export const Overview = {
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:grid;gap:22px;min-width:min(680px,90vw);padding:8px';

    const rows = [
      ['Actions', [
        { icon: 'star', label: 'Ajouter aux favoris', pressed: false },
        { icon: 'note', label: 'Ajouter une note', pressed: null },
        { icon: 'report', label: 'Signaler un probleme', pressed: null },
        { icon: 'review', label: 'Marquer a revoir', pressed: false },
      ]],
      ['Actifs', [
        { icon: 'star', label: 'Retirer des favoris', active: true, pressed: true },
        { icon: 'note', label: 'Modifier ma note', active: true, pressed: null },
        { icon: 'report', label: 'Modifier le signalement', active: true, activeTone: 'danger', pressed: null },
        { icon: 'review', label: 'Retirer de la liste a revoir', active: true, activeTone: 'warning', pressed: true },
      ]],
      ['Tailles', [
        { icon: 'star', label: 'Small', size: 'small', pressed: null },
        { icon: 'star', label: 'Medium', size: 'medium', pressed: null },
      ]],
    ];

    for (const [title, buttons] of rows) {
      const section = document.createElement('section');
      section.style.cssText = 'display:grid;gap:10px';
      const heading = document.createElement('h3');
      heading.textContent = title;
      heading.style.cssText = 'margin:0;color:var(--color-text-secondary);font:800 12px var(--font-family-body);letter-spacing:.08em;text-transform:uppercase';
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;align-items:center';
      buttons.forEach((args) => row.append(createIconButton(args)));
      section.append(heading, row);
      wrapper.append(section);
    }

    return wrapper;
  },
  parameters: { controls: { disable: true }, layout: 'centered' },
};

export const IconAndLabel = {args:{icon:'note',label:'Ajouter une note',showLabel:true}};
export const LongEnglishLabel = {args:{icon:'note',label:'Add a personal note about this question',showLabel:true}};
export const ThemeToggle = {args:{icon:'moon',label:'Activer le mode sombre'}};
export const KeyboardTooltip = {args:{icon:'note',label:'Modifier ma note'},play:async({canvasElement})=>canvasElement.querySelector('button').focus()};
