import { createButton } from '../../components/button/button.js';

function normalizeSteps(steps = []) {
  return steps.filter(Boolean).map((step, index) => ({
    eyebrow: step.eyebrow || `ÉTAPE ${index + 1}`,
    title: step.title || 'Azure Certification Trainer',
    description: step.description || '',
    content: Array.isArray(step.content) ? step.content : [],
    accent: step.accent || '',
  }));
}

function focusableElements(root) {
  return [...root.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
}

export function defaultFirstRunSteps({
  trainingCode = 'AZ-104',
  trainingName = 'Azure',
  description = '',
} = {}) {
  return [
    {
      eyebrow: 'BIENVENUE',
      title: 'Azure Certification Trainer',
      description: description || `Préparez ${trainingCode} avec un espace de travail conçu pour réviser, pratiquer et mesurer votre progression.`,
      accent: `${trainingCode} · ${trainingName}`,
      content: [
        { icon: '◈', title: 'Réviser par domaine', text: 'Travaillez la banque complète ou ciblez un domaine précis.' },
        { icon: '◷', title: 'Simuler l’examen', text: 'Entraînez-vous dans des conditions proches d’une session réelle.' },
        { icon: '▦', title: 'Suivre votre progression', text: 'Retrouvez vos erreurs, votre maîtrise et l’historique de vos examens.' },
      ],
    },
    {
      eyebrow: 'VOTRE ESPACE DE TRAVAIL',
      title: 'Gardez le contexte utile',
      description: 'Les actions personnelles restent disponibles pendant votre révision et sont incluses dans votre export de progression.',
      content: [
        { icon: '★', title: 'Favoris', text: 'Conservez les questions importantes pour les retrouver rapidement.' },
        { icon: '✎', title: 'Notes', text: 'Ajoutez vos propres mémos, commandes ou pièges à retenir.' },
        { icon: '⚑', title: 'Signalements', text: 'Marquez une question à vérifier sans interrompre votre session.' },
      ],
    },
    {
      eyebrow: 'MODE FOCUS',
      title: 'Besoin de vous concentrer ?',
      description: 'Le mode Focus masque la navigation, la recherche et les informations secondaires pour donner toute la place à la question.',
      accent: 'Accessible en un clic · raccourci F',
      content: [
        { icon: '⛶', title: 'Entrer en Focus', text: 'Le bouton Mode Focus reste visible directement dans l’espace de question.' },
        { icon: '←', title: 'Naviguer normalement', text: 'Précédent, Suivant et les réponses restent disponibles.' },
        { icon: '×', title: 'Quitter facilement', text: 'Utilisez Quitter Focus ou la touche Échap pour revenir à l’interface complète.' },
      ],
    },
  ];
}

export function createFirstRunExperience({
  steps,
  trainingCode = 'AZ-104',
  trainingName = 'Azure',
  description = '',
  initialStep = 0,
  embedded = false,
  onComplete,
  onSkip,
} = {}) {
  const items = normalizeSteps(steps?.length ? steps : defaultFirstRunSteps({
    trainingCode,
    trainingName,
    description,
  }));

  let stepIndex = Math.max(0, Math.min(items.length - 1, Number(initialStep) || 0));
  let destroyed = false;

  const root = document.createElement('section');
  root.className = `ui-first-run${embedded ? ' ui-first-run--embedded' : ''}`;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', embedded ? 'false' : 'true');
  root.setAttribute('aria-labelledby', 'uiFirstRunTitle');
  root.setAttribute('aria-describedby', 'uiFirstRunDescription');

  const panel = document.createElement('div');
  panel.className = 'ui-first-run__panel';

  const top = document.createElement('div');
  top.className = 'ui-first-run__top';

  const brand = document.createElement('div');
  brand.className = 'ui-first-run__brand';
  brand.innerHTML = '<span class="ui-first-run__brand-mark" aria-hidden="true">AZ</span><span>Azure Trainer</span>';

  const stepCounter = document.createElement('span');
  stepCounter.className = 'ui-first-run__counter';
  top.append(brand, stepCounter);

  const body = document.createElement('div');
  body.className = 'ui-first-run__body';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'ui-first-run__eyebrow';

  const title = document.createElement('h1');
  title.id = 'uiFirstRunTitle';

  const descriptionElement = document.createElement('p');
  descriptionElement.id = 'uiFirstRunDescription';
  descriptionElement.className = 'ui-first-run__description';

  const accent = document.createElement('div');
  accent.className = 'ui-first-run__accent';

  const featureGrid = document.createElement('div');
  featureGrid.className = 'ui-first-run__features';

  body.append(eyebrow, title, descriptionElement, accent, featureGrid);

  const progress = document.createElement('div');
  progress.className = 'ui-first-run__progress';
  progress.setAttribute('aria-label', 'Progression de l’introduction');

  const footer = document.createElement('div');
  footer.className = 'ui-first-run__footer';

  const secondaryActions = document.createElement('div');
  secondaryActions.className = 'ui-first-run__secondary-actions';

  const skip = createButton({
    label: 'Passer l’introduction',
    variant: 'ghost',
    size: 'small',
    onClick: () => finish(true),
  });

  const previous = createButton({
    label: '← Précédent',
    variant: 'secondary',
    size: 'medium',
    onClick: () => setStep(stepIndex - 1),
  });

  const next = createButton({
    label: 'Continuer →',
    variant: 'primary',
    size: 'medium',
    onClick: () => {
      if (stepIndex >= items.length - 1) finish(false);
      else setStep(stepIndex + 1);
    },
  });

  secondaryActions.append(skip);
  footer.append(secondaryActions, previous, next);
  panel.append(top, body, progress, footer);
  root.append(panel);

  function renderProgress() {
    progress.replaceChildren();
    items.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = `ui-first-run__progress-dot${index === stepIndex ? ' is-active' : ''}`;
      dot.setAttribute('aria-hidden', 'true');
      progress.append(dot);
    });
  }

  function renderFeatures(content = []) {
    featureGrid.replaceChildren();
    content.forEach((item) => {
      const article = document.createElement('article');
      article.className = 'ui-first-run__feature';

      const icon = document.createElement('span');
      icon.className = 'ui-first-run__feature-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = item.icon || '•';

      const copy = document.createElement('div');
      const h2 = document.createElement('h2');
      h2.textContent = item.title || '';
      const p = document.createElement('p');
      p.textContent = item.text || '';
      copy.append(h2, p);

      article.append(icon, copy);
      featureGrid.append(article);
    });
  }

  function setStep(index) {
    stepIndex = Math.max(0, Math.min(items.length - 1, Number(index) || 0));
    const step = items[stepIndex];
    eyebrow.textContent = step.eyebrow;
    title.textContent = step.title;
    descriptionElement.textContent = step.description;
    accent.textContent = step.accent;
    accent.hidden = !step.accent;
    stepCounter.textContent = `${stepIndex + 1} / ${items.length}`;
    previous.hidden = stepIndex === 0;
    next.querySelector('.ui-button__label').textContent = stepIndex === items.length - 1 ? 'Commencer' : 'Continuer →';
    next.setAttribute('aria-label', stepIndex === items.length - 1 ? 'Terminer l’introduction et commencer' : 'Continuer l’introduction');
    renderFeatures(step.content);
    renderProgress();
    root.dataset.step = String(stepIndex + 1);
    queueMicrotask(() => next.focus({ preventScroll: true }));
  }

  function finish(skipped) {
    if (destroyed) return;
    if (skipped) onSkip?.();
    else onComplete?.();
  }

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    root.removeEventListener('keydown', trapFocus);
    root.remove();
  }

  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const focusables = focusableElements(root);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  root.addEventListener('keydown', trapFocus);
  setStep(stepIndex);

  return {
    element: root,
    destroy,
    focus: () => next.focus({ preventScroll: true }),
    next: () => setStep(stepIndex + 1),
    previous: () => setStep(stepIndex - 1),
    setStep,
    get stepIndex() { return stepIndex; },
  };
}
