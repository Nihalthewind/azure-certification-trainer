const ICONS = {
  dashboard: {
    viewBox: '0 0 24 24',
    path: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z',
  },
  knowledge: {
    viewBox: '0 0 24 24',
    path: 'M5 4.5h5.4c1 0 1.6.3 1.6 1.3v13.7c0-1-.6-1.5-1.6-1.5H5V4.5Zm14 0h-5.4c-1 0-1.6.3-1.6 1.3v13.7c0-1 .6-1.5 1.6-1.5H19V4.5Z',
  },
  error: {
    viewBox: '0 0 24 24',
    path: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.7 8.7l6.6 6.6m0-6.6-6.6 6.6',
  },
  exam: {
    viewBox: '0 0 24 24',
    path: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2',
  },
  layers: {
    viewBox: '0 0 24 24',
    path: 'M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  },
  settings: {
    viewBox: '0 0 24 24',
    path: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0-5v2m0 13v2M3.5 12h2m13 0h2M6 6l1.4 1.4m9.2 9.2L18 18M18 6l-1.4 1.4m-9.2 9.2L6 18',
  },
  star: {
    viewBox: '0 0 24 24',
    path: 'M12 3.2l2.75 5.57 6.15.9-4.45 4.34 1.05 6.13L12 18.24 6.5 21.14l1.05-6.13L3.1 10.67l6.15-.9L12 3.2Z',
  },
  note: {
    viewBox: '0 0 24 24',
    path: 'M5 3.5h9.5L19 8v12.5H5V3.5Zm9 1.5v3.5h3.5M8 12h8M8 15.5h6',
  },
  flag: {
    viewBox: '0 0 24 24',
    path: 'M6 21V4m0 1h9.2l-.8 3 2.6 3H6',
  },
  review: {
    viewBox: '0 0 24 24',
    path: 'M6.5 3.5h11v17l-5.5-3.2-5.5 3.2v-17Z',
  },
  check: {
    viewBox: '0 0 24 24',
    path: 'M5 12.5l4.2 4.2L19 7',
  },
  close: {
    viewBox: '0 0 24 24',
    path: 'M6 6l12 12M18 6 6 18',
  },
};

export function createIcon(name, { size = 18, filled = false } = {}) {
  const definition = ICONS[name] || ICONS.star;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', definition.viewBox);
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.classList.add('ui-icon', `ui-icon--${name}`);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', definition.path);
  path.setAttribute('fill', filled ? 'currentColor' : 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '1.8');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.append(path);

  return svg;
}

export const iconNames = Object.freeze(Object.keys(ICONS));
