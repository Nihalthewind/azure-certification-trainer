import '../../src/ui/foundations/foundations.css';

const colorTokens = [
  ['Background', '--color-background'],
  ['Rail', '--color-rail'],
  ['Panel', '--color-panel'],
  ['Card', '--color-card'],
  ['Surface', '--color-surface'],
  ['Border', '--color-border'],
  ['Text primary', '--color-text-primary'],
  ['Text secondary', '--color-text-secondary'],
  ['Text subtle', '--color-text-subtle'],
  ['Accent', '--color-accent'],
  ['Success', '--color-success'],
  ['Warning', '--color-warning'],
  ['Error', '--color-error'],
];

const spacingTokens = [
  ['4', '--space-1'],
  ['8', '--space-2'],
  ['12', '--space-3'],
  ['16', '--space-4'],
  ['24', '--space-6'],
  ['32', '--space-8'],
  ['48', '--space-12'],
  ['64', '--space-16'],
];

const radiusTokens = [
  ['Small', '--radius-sm'],
  ['Medium', '--radius-md'],
  ['Large', '--radius-lg'],
  ['Pill', '--radius-pill'],
];

function shell(title, description, content) {
  const page = document.createElement('main');
  page.className = 'foundation-page';
  page.innerHTML = `
    <header class="foundation-page__header">
      <div class="foundation-page__eyebrow">Azure Trainer · Design System</div>
      <h1>${title}</h1>
      <p class="foundation-page__intro">${description}</p>
    </header>
  `;
  page.append(content);
  return page;
}

function section(title) {
  const el = document.createElement('section');
  el.className = 'foundation-section';
  const heading = document.createElement('h2');
  heading.textContent = title;
  el.append(heading);
  return el;
}

function colorsStory() {
  const content = section('Couleurs sémantiques');
  const grid = document.createElement('div');
  grid.className = 'foundation-grid';

  colorTokens.forEach(([label, token]) => {
    const card = document.createElement('article');
    card.className = 'token-card';
    card.innerHTML = `
      <div class="token-card__swatch" style="--token-value: var(${token})"></div>
      <div class="token-card__body">
        <strong>${label}</strong>
        <code>${token}</code>
      </div>
    `;
    grid.append(card);
  });

  content.append(grid);
  return shell(
    'Foundations',
    'Première couche du système UI. Les composants migrés utiliseront progressivement ces tokens à la place des valeurs dispersées.',
    content,
  );
}

function typographyStory() {
  const content = section('Typographie');
  const stack = document.createElement('div');
  stack.className = 'type-stack';
  stack.innerHTML = `
    <div class="type-sample">
      <small>Display · Manrope</small>
      <div style="font:800 36px/1.08 var(--font-family-display);letter-spacing:-.04em">Azure Certification Trainer</div>
    </div>
    <div class="type-sample">
      <small>Heading · Manrope</small>
      <div style="font:800 24px/1.2 var(--font-family-display)">Maîtrise par domaine</div>
    </div>
    <div class="type-sample">
      <small>Body · DM Sans</small>
      <div style="font:500 var(--font-size-md)/1.55 var(--font-family-body)">Préparez vos certifications Azure avec des questions, examens blancs et indicateurs de progression.</div>
    </div>
    <div class="type-sample">
      <small>Label · DM Sans</small>
      <div style="font:800 var(--font-size-xs)/1.4 var(--font-family-body);letter-spacing:.12em;text-transform:uppercase;color:var(--color-text-subtle)">Progression globale</div>
    </div>
  `;
  content.append(stack);
  return shell('Typographie', 'Deux familles sont conservées : Manrope pour la hiérarchie et DM Sans pour le contenu et les contrôles.', content);
}

function spacingStory() {
  const content = section('Espacements');
  const stack = document.createElement('div');
  stack.className = 'spacing-stack';

  spacingTokens.forEach(([label, token]) => {
    const row = document.createElement('div');
    row.className = 'spacing-sample';
    row.innerHTML = `
      <div class="spacing-sample__bar" style="--token-value: var(${token})"></div>
      <div class="token-meta"><strong>${label} px</strong><code>${token}</code></div>
    `;
    stack.append(row);
  });

  content.append(stack);
  return shell('Spacing', 'Échelle basée sur 4 px pour réduire les valeurs arbitraires et créer un rythme cohérent.', content);
}

function radiusStory() {
  const content = section('Rayons');
  const stack = document.createElement('div');
  stack.className = 'radius-stack';

  radiusTokens.forEach(([label, token]) => {
    const row = document.createElement('div');
    row.className = 'radius-sample';
    row.innerHTML = `
      <div class="radius-sample__shape" style="--token-value: var(${token})"></div>
      <div class="token-meta"><strong>${label}</strong><code>${token}</code></div>
    `;
    stack.append(row);
  });

  content.append(stack);
  return shell('Radius', 'Quatre niveaux suffisent pour couvrir contrôles, cartes, panneaux et éléments de type pill.', content);
}

export default {
  title: 'Foundations',
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
};

export const Colors = { render: colorsStory };
export const Typography = { render: typographyStory };
export const Spacing = { render: spacingStory };
export const Radius = { render: radiusStory };
