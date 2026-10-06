import { createIconButton } from '../../src/ui/components/icon-button/icon-button.js';

function action(icon, label, options = {}) {
  const wrap = document.createElement('div');
  wrap.style.cssText = 'display:grid;justify-items:center;gap:8px;min-width:110px';
  wrap.append(createIconButton({ icon, label, size: 'medium', ...options }));
  const caption = document.createElement('span');
  caption.textContent = label;
  caption.style.cssText = 'color:var(--color-text-secondary);font-size:10px;font-weight:750;text-align:center';
  wrap.append(caption);
  return wrap;
}

function render(active = false) {
  const root = document.createElement('div');
  root.style.cssText = 'min-height:100vh;padding:48px;background:var(--color-background);color:var(--color-text-primary)';
  const panel = document.createElement('section');
  panel.style.cssText = 'max-width:720px;margin:auto;padding:28px;border:1px solid var(--color-border);border-radius:22px;background:var(--color-panel);box-shadow:var(--shadow)';
  const title = document.createElement('h2');
  title.textContent = active ? 'Actions actives' : 'Actions question';
  title.style.cssText = 'margin:0 0 6px;font:800 24px var(--font-family-display)';
  const intro = document.createElement('p');
  intro.textContent = 'Icônes plus grandes, sémantiques et lisibles en clair comme en sombre.';
  intro.style.cssText = 'margin:0 0 24px;color:var(--color-text-secondary);font-size:12px';
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;flex-wrap:wrap;gap:18px;align-items:start';
  row.append(
    action('star', active ? 'Favori actif' : 'Ajouter aux favoris', { active, pressed: active }),
    action('note', active ? 'Note enregistrée' : 'Ajouter une note', { active }),
    action('report', active ? 'Signalement actif' : 'Signaler un problème', { active, activeTone: 'danger' }),
    action('review', active ? 'À revoir' : 'Marquer à revoir', { active, activeTone: 'warning', pressed: active }),
  );
  panel.append(title, intro, row);
  root.append(panel);
  return root;
}

export default {
  title: 'Quality/Action Icons',
  parameters: { layout: 'fullscreen', a11y: { test: 'error' } },
};

export const Light = { render: () => render(false), globals: { theme: 'light' } };
export const LightActive = { render: () => render(true), globals: { theme: 'light' } };
export const Dark = { render: () => render(false), globals: { theme: 'dark' } };
export const DarkActive = { render: () => render(true), globals: { theme: 'dark' } };
