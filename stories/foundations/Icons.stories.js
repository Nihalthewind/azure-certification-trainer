import { createBrandMark, createIcon, iconNames } from '../../src/ui/icons/icons.js';

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

export const BrandAssets = {
  render: () => {
    const grid = document.createElement('div');
    grid.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-6);padding:var(--space-6);background:var(--color-background);color:var(--color-text-primary)';
    const mark = createBrandMark();
    mark.style.cssText = 'width:var(--space-16);height:var(--space-16)';
    grid.append(mark);
    for (const size of [16, 32, 48, 192]) {
      const item = document.createElement('figure');
      item.style.cssText = 'display:grid;justify-items:center;gap:var(--space-2);margin:0';
      const image = document.createElement('img');
      image.src = new URL(`../../assets/${size < 100 ? 'favicon-' : 'app-icon-'}${size}.png`, import.meta.url).href;
      image.width = image.height = size < 100 ? size : 64;
      image.alt = `Azure Trainer ${size}px`;
      const caption = document.createElement('figcaption');
      caption.textContent = `${size < 100 ? 'Favicon' : 'PWA'} ${size}px`;
      item.append(image, caption);
      grid.append(item);
    }
    return grid;
  },
};
export const BrandAssetsDark = { ...BrandAssets, globals: { theme: 'dark' } };
