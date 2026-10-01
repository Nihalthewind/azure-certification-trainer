import { createIcon, iconNames } from '../../src/ui/icons/icons.js';

const meta = {
  title: 'Foundations/Icons',
  parameters: { layout: 'padded', controls: { disable: true } },
};

export default meta;

export const Library = {
  render: () => {
    const page = document.createElement('div');
    page.style.cssText = 'padding:32px;color:var(--color-text-primary);font-family:var(--font-family-body)';
    const heading = document.createElement('h1');
    heading.textContent = 'Icons';
    heading.style.cssText = 'font:800 28px var(--font-family-display);margin:0 0 8px';
    const intro = document.createElement('p');
    intro.textContent = 'SVG icons replace platform-dependent Unicode glyphs in interactive controls.';
    intro.style.cssText = 'margin:0 0 24px;color:var(--color-text-secondary)';
    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px';

    for (const name of iconNames) {
      const card = document.createElement('div');
      card.style.cssText = 'display:grid;place-items:center;gap:10px;min-height:120px;padding:16px;border:1px solid var(--color-border);border-radius:var(--radius-md);background:var(--color-panel)';
      card.append(createIcon(name, { size: 24 }));
      const label = document.createElement('code');
      label.textContent = name;
      label.style.cssText = 'color:var(--color-text-secondary);font-size:12px';
      card.append(label);
      grid.append(card);
    }

    page.append(heading, intro, grid);
    return page;
  },
};
