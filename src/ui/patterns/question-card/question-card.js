import './question-card.css';
import { createBadge } from '../../components/badge/badge.js';
import { createButton } from '../../components/button/button.js';
import { createIconButton } from '../../components/icon-button/icon-button.js';

let questionCardSequence = 0;

const STATUS = {
  discovery: { label: 'À découvrir', tone: 'neutral' },
  mastered: { label: 'Maîtrisée', tone: 'success' },
  retry: { label: 'À reprendre', tone: 'error' },
  review: { label: 'À revoir', tone: 'warning' },
  exam: { label: 'En cours', tone: 'accent' },
  answered: { label: 'Réponse enregistrée', tone: 'accent' },
};

function normalizeIndexes(value) {
  return Array.isArray(value)
    ? value.map(Number).filter(Number.isInteger)
    : [];
}

function createAnswerOption({
  index,
  label,
  selected,
  correct,
  incorrect,
  disabled,
  onClick,
}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = [
    'ui-question-card__choice',
    selected ? 'is-selected' : '',
    correct ? 'is-correct' : '',
    incorrect ? 'is-incorrect' : '',
  ].filter(Boolean).join(' ');
  button.disabled = Boolean(disabled);
  button.setAttribute('aria-pressed', String(Boolean(selected)));

  const letter = document.createElement('span');
  letter.className = 'ui-question-card__choice-letter';
  letter.setAttribute('aria-hidden', 'true');
  letter.textContent = String.fromCharCode(65 + index);

  const text = document.createElement('span');
  text.className = 'ui-question-card__choice-label';
  text.textContent = label;

  const marker = document.createElement('span');
  marker.className = 'ui-question-card__choice-marker';
  marker.setAttribute('aria-hidden', 'true');
  marker.textContent = correct ? '✓' : incorrect ? '×' : selected ? '●' : '';

  button.append(letter, text, marker);
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
}

export function createQuestionCard({
  questionId = 'AZ104-DEMO-01',
  topic = 'IDENTITÉ',
  status = 'discovery',
  statusLabel = '',
  questionNumber = 1,
  totalQuestions = 48,
  category = 'QCM',
  title = 'Choisissez la bonne réponse',
  prompt = 'Vous devez sélectionner la réponse qui répond le mieux au besoin décrit.',
  answers = [
    'Première proposition',
    'Deuxième proposition',
    'Troisième proposition',
    'Quatrième proposition',
  ],
  answerNote = 'Une réponse attendue',
  selectedIndexes = [],
  correctIndexes = [],
  incorrectIndexes = [],
  multi = false,
  locked = false,
  favorite = false,
  hasNote = false,
  reported = false,
  markedForReview = false,
  showReviewAction = false,
  submitLabel = 'Valider la réponse',
  previousDisabled = false,
  nextDisabled = false,
  feedbackTone = '',
  feedbackTitle = '',
  feedbackText = '',
  onFavorite,
  onNote,
  onReport,
  onReview,
  onSelect,
  onSubmit,
  onPrevious,
  onNext,
} = {}) {
  questionCardSequence += 1;
  const headingId = `ui-question-card-title-${questionCardSequence}`;
  const statusConfig = STATUS[status] || STATUS.discovery;

  const article = document.createElement('article');
  article.className = 'ui-question-card';
  article.setAttribute('aria-labelledby', headingId);

  const header = document.createElement('header');
  header.className = 'ui-question-card__header';

  const meta = document.createElement('div');
  meta.className = 'ui-question-card__meta';
  meta.append(createBadge({ label: topic, tone: 'accent', shape: 'rounded', size: 'small' }));

  const id = document.createElement('span');
  id.className = 'ui-question-card__id';
  id.textContent = questionId;
  meta.append(id);

  const headerActions = document.createElement('div');
  headerActions.className = 'ui-question-card__header-actions';
  headerActions.setAttribute('aria-label', 'Actions de la question');

  headerActions.append(
    createIconButton({
      icon: 'star',
      label: favorite ? 'Retirer des favoris' : 'Ajouter aux favoris',
      active: favorite,
      pressed: favorite,
      onClick: onFavorite,
    }),
    createIconButton({
      icon: 'note',
      label: hasNote ? 'Modifier ma note' : 'Ajouter une note',
      active: hasNote,
      pressed: null,
      onClick: onNote,
    }),
    createIconButton({
      icon: 'flag',
      label: reported ? 'Modifier le signalement' : 'Signaler un problème',
      active: reported,
      activeTone: 'danger',
      pressed: null,
      onClick: onReport,
    }),
  );

  if (showReviewAction) {
    headerActions.append(createIconButton({
      icon: 'review',
      label: markedForReview ? 'Retirer de la liste à revoir' : 'Marquer à revoir',
      active: markedForReview,
      activeTone: 'warning',
      pressed: markedForReview,
      onClick: onReview,
    }));
  }

  headerActions.append(createBadge({
    label: statusLabel || statusConfig.label,
    tone: statusConfig.tone,
    shape: 'pill',
    size: 'small',
    role: 'status',
  }));

  header.append(meta, headerActions);

  const main = document.createElement('div');
  main.className = 'ui-question-card__main';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'ui-question-card__eyebrow';
  const totalPart = totalQuestions ? ` / ${totalQuestions}` : '';
  eyebrow.textContent = `QUESTION ${String(questionNumber).padStart(2, '0')}${totalPart} · ${category}`;

  const heading = document.createElement('h2');
  heading.id = headingId;
  heading.className = 'ui-question-card__title';
  heading.textContent = title;

  const promptEl = document.createElement('p');
  promptEl.className = 'ui-question-card__prompt';
  promptEl.textContent = prompt;

  const note = document.createElement('div');
  note.className = 'ui-question-card__answer-note';
  note.textContent = multi ? 'Plusieurs réponses · sélectionnez toutes les réponses correctes' : answerNote;

  const choices = document.createElement('div');
  choices.className = 'ui-question-card__choices';
  choices.setAttribute('aria-label', multi ? 'Réponses possibles, choix multiple' : 'Réponses possibles');

  let currentSelected = new Set(normalizeIndexes(selectedIndexes));
  const correct = new Set(normalizeIndexes(correctIndexes));
  const incorrect = new Set(normalizeIndexes(incorrectIndexes));
  const optionButtons = [];

  const syncSelection = () => {
    optionButtons.forEach((button, index) => {
      const selected = currentSelected.has(index);
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
      if (!correct.has(index) && !incorrect.has(index)) {
        const marker = button.querySelector('.ui-question-card__choice-marker');
        if (marker) marker.textContent = selected ? '●' : '';
      }
    });
    submit.disabled = Boolean(locked || currentSelected.size === 0);
    if (typeof onSelect === 'function') onSelect([...currentSelected]);
  };

  answers.forEach((answer, index) => {
    const button = createAnswerOption({
      index,
      label: String(answer),
      selected: currentSelected.has(index),
      correct: correct.has(index),
      incorrect: incorrect.has(index),
      disabled: locked,
      onClick: () => {
        if (locked) return;
        if (multi) {
          if (currentSelected.has(index)) currentSelected.delete(index);
          else currentSelected.add(index);
        } else {
          currentSelected = new Set([index]);
        }
        syncSelection();
      },
    });
    optionButtons.push(button);
    choices.append(button);
  });

  main.append(eyebrow, heading, promptEl, note, choices);

  if (feedbackTone && feedbackTitle) {
    const feedback = document.createElement('section');
    feedback.className = `ui-question-card__feedback is-${feedbackTone}`;
    feedback.setAttribute('aria-live', 'polite');

    const kicker = document.createElement('div');
    kicker.className = 'ui-question-card__feedback-kicker';
    kicker.textContent = feedbackTone === 'success'
      ? '✓ BONNE RÉPONSE'
      : feedbackTone === 'error'
        ? '↻ À REVOIR'
        : '◎ CORRECTION';

    const feedbackHeading = document.createElement('h3');
    feedbackHeading.textContent = feedbackTitle;

    feedback.append(kicker, feedbackHeading);

    if (feedbackText) {
      const feedbackParagraph = document.createElement('p');
      feedbackParagraph.textContent = feedbackText;
      feedback.append(feedbackParagraph);
    }

    main.append(feedback);
  }

  const footer = document.createElement('footer');
  footer.className = 'ui-question-card__footer';

  const footerNavigation = document.createElement('div');
  footerNavigation.className = 'ui-question-card__footer-nav';

  footerNavigation.append(
    createButton({
      label: 'Précédent',
      variant: 'secondary',
      leadingIcon: '←',
      disabled: previousDisabled,
      onClick: onPrevious,
    }),
    createButton({
      label: 'Suivant',
      variant: 'secondary',
      trailingIcon: '→',
      disabled: nextDisabled,
      onClick: onNext,
    }),
  );

  const submit = createButton({
    label: submitLabel,
    variant: 'primary',
    disabled: locked || currentSelected.size === 0,
    onClick: onSubmit,
  });

  footer.append(footerNavigation, submit);
  article.append(header, main, footer);

  return article;
}
