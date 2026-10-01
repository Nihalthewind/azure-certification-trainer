const VALID_TONES = new Set(['success', 'error', 'reference']);
let feedbackSequence = 0;

function appendExternalLink(parent, { label = '', url = '' } = {}) {
  if (!url) return;
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = label || url;
  const mark = document.createElement('span');
  mark.setAttribute('aria-hidden', 'true');
  mark.textContent = ' ↗';
  link.append(mark);
  parent.append(link);
}

function createActionButton(label, onClick, { variant = 'secondary' } = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `ui-button ui-button--${variant} ui-button--small`;
  button.textContent = label;
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
}

export function createFeedbackPanel({
  tone = 'success',
  kicker = '',
  title = '',
  context = '',
  sourceDetail = '',
  provenanceNotes = [],
  images = [],
  sources = [],
  pdfSource = null,
  selfGrade = false,
  onGradeGood,
  onGradeBad,
  onRetry,
} = {}) {
  feedbackSequence += 1;
  const safeTone = VALID_TONES.has(tone) ? tone : 'reference';
  const titleId = `ui-feedback-title-${feedbackSequence}`;

  const root = document.createElement('section');
  root.className = `ui-feedback-panel ui-feedback-panel--${safeTone}`;
  root.setAttribute('role', 'region');
  root.setAttribute('aria-labelledby', titleId);

  const header = document.createElement('div');
  header.className = 'ui-feedback-panel__header';

  const kickerEl = document.createElement('div');
  kickerEl.className = 'ui-feedback-panel__kicker';
  kickerEl.textContent = kicker || (safeTone === 'success' ? 'Bonne réponse' : safeTone === 'error' ? 'Réponse incorrecte' : 'Auto-évaluation');

  const titleEl = document.createElement('h3');
  titleEl.className = 'ui-feedback-panel__title';
  titleEl.id = titleId;
  titleEl.textContent = title || 'Consultez la correction.';
  header.append(kickerEl, titleEl);
  root.append(header);

  if (context) {
    const block = document.createElement('div');
    block.className = 'ui-feedback-panel__context';
    const label = document.createElement('div');
    label.className = 'ui-feedback-panel__section-label';
    label.textContent = 'Contexte pédagogique';
    const p = document.createElement('p');
    p.textContent = context;
    block.append(label, p);
    root.append(block);
  }

  if (sourceDetail) {
    const details = document.createElement('details');
    details.className = 'ui-feedback-panel__details';
    const summary = document.createElement('summary');
    summary.textContent = 'Détail du support source';
    const p = document.createElement('p');
    p.textContent = sourceDetail;
    details.append(summary, p);
    root.append(details);
  }

  for (const noteText of provenanceNotes.filter(Boolean)) {
    const note = document.createElement('p');
    note.className = 'ui-feedback-panel__provenance';
    note.textContent = noteText;
    root.append(note);
  }

  if (images.length) {
    const media = document.createElement('div');
    media.className = 'ui-feedback-panel__media';
    const label = document.createElement('div');
    label.className = 'ui-feedback-panel__section-label';
    label.textContent = 'Illustration de correction';
    const grid = document.createElement('div');
    grid.className = 'ui-feedback-panel__media-grid';
    images.forEach((src, index) => {
      const link = document.createElement('a');
      link.href = src;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Illustration de correction ${index + 1}`;
      img.loading = 'lazy';
      link.append(img);
      grid.append(link);
    });
    media.append(label, grid);
    root.append(media);
  }

  if (sources.length || pdfSource?.url) {
    const sourceBlock = document.createElement('div');
    sourceBlock.className = 'ui-feedback-panel__sources';
    const label = document.createElement('div');
    label.className = 'ui-feedback-panel__section-label';
    label.textContent = 'Documentation / source';
    sourceBlock.append(label);
    sources.forEach((source) => appendExternalLink(sourceBlock, source));
    if (pdfSource?.url) appendExternalLink(sourceBlock, pdfSource);
    root.append(sourceBlock);
  }

  if (selfGrade) {
    const grade = document.createElement('div');
    grade.className = 'ui-feedback-panel__self-grade';
    const prompt = document.createElement('span');
    prompt.textContent = 'Votre réponse correspond-elle à la correction ?';
    const actions = document.createElement('div');
    actions.append(
      createActionButton('✓ Oui, juste', onGradeGood),
      createActionButton('✕ Non, à revoir', onGradeBad, { variant: 'danger' }),
    );
    grade.append(prompt, actions);
    root.append(grade);
  }

  if (typeof onRetry === 'function') {
    const footer = document.createElement('div');
    footer.className = 'ui-feedback-panel__footer';
    footer.append(createActionButton('Refaire cette question', onRetry));
    root.append(footer);
  }

  return root;
}
