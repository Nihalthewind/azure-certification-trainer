import './question-card.css';
import { createBadge } from '../../components/badge/badge.js';
import { createButton } from '../../components/button/button.js';
import { createIconButton } from '../../components/icon-button/icon-button.js';
import {
  createAnswerOption,
  setAnswerOptionSelected,
} from '../../components/answer-option/answer-option.js';

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

export function createQuestionCard({
  questionId = 'AZ104-DEMO-01',
  topic = 'IDENTITÉ',
  status = 'discovery',
  statusLabel = '',
  questionNumber = 1,
  totalQuestions = 48,
  category = 'QCM',
  title = '',
  prompt = 'Vous devez sélectionner la réponse qui répond le mieux au besoin décrit.',
  answers = [
    'Première proposition',
    'Deuxième proposition',
    'Troisième proposition',
    'Quatrième proposition',
  ],
  answerNote = '1 réponse attendue',
  selectedIndexes = [],
  correctIndexes = [],
  incorrectIndexes = [],
  multi = false,
  locked = false,
  mode = 'training',
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
  const instanceId = questionCardSequence;
  const headingId = `ui-question-card-question-${instanceId}`;
  const answerGroupName = `ui-question-card-answer-${instanceId}`;
  const statusConfig = STATUS[status] || STATUS.discovery;
  const isExam = mode === 'exam';

  const article = document.createElement('article');
  article.className = ['ui-question-card', isExam ? 'is-exam' : ''].filter(Boolean).join(' ');
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
  headerActions.setAttribute('role', 'group');
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
  main.append(eyebrow);

  if (title) {
    const instruction = document.createElement('p');
    instruction.className = 'ui-question-card__instruction';
    instruction.textContent = title;
    main.append(instruction);
  }

  const question = document.createElement('h2');
  question.id = headingId;
  question.className = 'ui-question-card__question';
  question.textContent = prompt;
  main.append(question);

  const choices = document.createElement('fieldset');
  choices.className = 'ui-question-card__choices';

  const legend = document.createElement('legend');
  legend.className = 'ui-question-card__answer-note';
  legend.textContent = multi
    ? 'Plusieurs réponses · sélectionnez toutes les réponses correctes'
    : answerNote;
  choices.append(legend);

  let currentSelected = new Set(normalizeIndexes(selectedIndexes));
  const correct = new Set(normalizeIndexes(correctIndexes));
  const incorrect = new Set(normalizeIndexes(incorrectIndexes));
  const optionRoots = [];
  let submit = null;

  const syncSelection = () => {
    optionRoots.forEach((root, index) => {
      setAnswerOptionSelected(root, currentSelected.has(index));
    });

    if (submit) {
      submit.disabled = Boolean(locked || currentSelected.size === 0);
    }

    if (typeof onSelect === 'function') onSelect([...currentSelected]);
  };

  answers.forEach((answer, index) => {
    const optionState = correct.has(index)
      ? 'correct'
      : incorrect.has(index)
        ? 'incorrect'
        : 'default';

    const option = createAnswerOption({
      id: `${answerGroupName}-${index}`,
      name: answerGroupName,
      value: String(index),
      index,
      label: String(answer),
      type: multi ? 'multiple' : 'single',
      selected: currentSelected.has(index),
      state: optionState,
      locked,
      onChange: ({ checked }) => {
        if (locked) return;

        if (multi) {
          if (checked) currentSelected.add(index);
          else currentSelected.delete(index);
        } else {
          currentSelected = checked ? new Set([index]) : new Set();
        }

        syncSelection();
      },
    });

    optionRoots.push(option);
    choices.append(option);
  });

  main.append(choices);

  if (feedbackTone && feedbackTitle) {
    const feedback = document.createElement('section');
    feedback.className = `ui-question-card__feedback is-${feedbackTone}`;
    feedback.setAttribute('role', 'status');

    const kicker = document.createElement('div');
    kicker.className = 'ui-question-card__feedback-kicker';
    kicker.textContent = feedbackTone === 'success'
      ? 'BONNE RÉPONSE'
      : feedbackTone === 'error'
        ? 'RÉPONSE INCORRECTE'
        : 'EXPLICATION';

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
  footerNavigation.setAttribute('aria-label', 'Navigation entre les questions');

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

  footer.append(footerNavigation);

  if (!isExam) {
    submit = createButton({
      label: submitLabel,
      variant: 'primary',
      disabled: locked || currentSelected.size === 0,
      onClick: onSubmit,
    });
    submit.classList.add('ui-question-card__submit');
    footer.append(submit);
  }

  article.append(header, main, footer);
  return article;
}
