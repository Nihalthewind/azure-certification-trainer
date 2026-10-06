const ICONS = {
  search: {
    viewBox: '0 0 24 24',
    path: 'M21 21 16.65 16.65M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z',
  },
  bell: {
    viewBox: '0 0 24 24',
    path: 'M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4',
  },
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
    path: 'M12 3.75 14.55 8.9l5.7.83-4.12 4.02.97 5.67L12 16.74l-5.1 2.68.97-5.67-4.12-4.02 5.7-.83L12 3.75Z',
    strokeWidth: 1.95,
  },
  note: {
    viewBox: '0 0 24 24',
    path: 'M6.5 4.5h8.1l2.9 2.9v12.1h-11v-15Zm8 0v3h3M9 11h6M9 14.5h4.5',
    strokeWidth: 1.9,
  },
  report: {
    viewBox: '0 0 24 24',
    path: 'M12 3.8 21 19.5H3L12 3.8Zm0 5.3v4.7m0 2.8h.01',
    strokeWidth: 1.95,
  },
  flag: {
    viewBox: '0 0 24 24',
    path: 'M6.5 20.5v-16m0 .8h8.8l-1 3 2.7 3H6.5',
    strokeWidth: 1.95,
  },
  review: {
    viewBox: '0 0 24 24',
    path: 'M7 4.5h10v15L12 16.7 7 19.5v-15Zm2.4 6 1.5 1.5 3-3',
    strokeWidth: 1.9,
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
  path.setAttribute('stroke-width', String(definition.strokeWidth || 1.9));
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.append(path);

  return svg;
}

export const iconNames = Object.freeze(Object.keys(ICONS));
