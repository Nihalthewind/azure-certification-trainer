import { createQuestionCard } from '../../src/ui/patterns/question-card/question-card.js';

const answers = [
  'Créer un groupe de ressources et lui attribuer le rôle Contributor.',
  'Attribuer le rôle Reader à l’abonnement.',
  'Créer une Azure Policy qui ajoute automatiquement le rôle requis.',
  'Attribuer le rôle Contributor au niveau du groupe de ressources concerné.',
];

const baseArgs = {
  questionId: 'AZ104-RBAC-042',
  topic: 'IDENTITÉ ET GOUVERNANCE',
  status: 'discovery',
  questionNumber: 12,
  totalQuestions: 48,
  category: 'QCM',
  title: '',
  prompt: 'Vous devez permettre à un administrateur de gérer toutes les ressources d’un groupe de ressources sans lui donner de droits sur les autres groupes. Quelle solution répond au besoin ?',
  answers,
  answerNote: '1 réponse attendue',
  selectedIndexes: [],
  correctIndexes: [],
  incorrectIndexes: [],
  multi: false,
  locked: false,
  mode: 'training',
  favorite: false,
  hasNote: false,
  reported: false,
  markedForReview: false,
  showReviewAction: false,
  submitLabel: 'Valider la réponse',
  previousDisabled: false,
  nextDisabled: false,
  feedbackTone: '',
  feedbackTitle: '',
  feedbackText: '',
};

const meta = {
  title: 'Patterns/QuestionCard',
  tags: ['autodocs'],
  args: baseArgs,
  argTypes: {
    status: {
      control: 'select',
      options: ['discovery', 'mastered', 'retry', 'review', 'exam', 'answered'],
    },
    mode: { control: 'radio', options: ['training', 'exam'] },
    category: { control: 'text' },
    topic: { control: 'text' },
    title: { control: 'text' },
    favorite: { control: 'boolean' },
    hasNote: { control: 'boolean' },
    reported: { control: 'boolean' },
    markedForReview: { control: 'boolean' },
    showReviewAction: { control: 'boolean' },
    multi: { control: 'boolean' },
    locked: { control: 'boolean' },
  },
  render: (args) => createQuestionCard(args),
  parameters: {
    layout: 'centered',
    a11y: { test: 'error' },
  },
};

export default meta;

export const Playground = {};

export const Default = {
  args: { status: 'discovery' },
};

export const Selected = {
  args: { selectedIndexes: [3] },
};

export const Correct = {
  args: {
    status: 'mastered',
    selectedIndexes: [3],
    correctIndexes: [3],
    locked: true,
    favorite: true,
    feedbackTone: 'success',
    feedbackTitle: 'Contributor sur le groupe de ressources',
    feedbackText: 'Le scope du rôle est limité au groupe de ressources : l’administrateur peut gérer les ressources de ce groupe sans obtenir de droits sur les autres groupes.',
  },
};

export const Incorrect = {
  args: {
    status: 'retry',
    selectedIndexes: [0],
    correctIndexes: [3],
    incorrectIndexes: [0],
    locked: true,
    reported: true,
    feedbackTone: 'error',
    feedbackTitle: 'Le rôle doit être attribué au bon scope',
    feedbackText: 'Le rôle Contributor doit être appliqué directement au groupe de ressources concerné. Le mécanisme de Policy ne remplace pas une attribution RBAC.',
  },
};

export const Personalised = {
  name: 'Favori + note + signalement',
  args: {
    favorite: true,
    hasNote: true,
    reported: true,
    selectedIndexes: [3],
  },
};

export const Exam = {
  args: {
    mode: 'exam',
    status: 'exam',
    statusLabel: 'En cours',
    showReviewAction: true,
    markedForReview: true,
    selectedIndexes: [3],
  },
};

export const MultipleAnswers = {
  args: {
    questionId: 'AZ104-NET-018',
    topic: 'RÉSEAU',
    category: 'MULTISELECT',
    prompt: 'Vous devez sécuriser l’accès à une ressource Azure tout en limitant son exposition publique. Sélectionnez deux éléments qui peuvent participer à la solution.',
    answers: [
      'Private Endpoint',
      'Network Security Group',
      'Public IP statique',
      'Traffic Manager uniquement',
    ],
    multi: true,
    selectedIndexes: [0, 1],
  },
};

export const LongContent = {
  args: {
    topic: 'CALCUL ET STOCKAGE',
    prompt: 'Une entreprise dispose de plusieurs abonnements Azure répartis entre des équipes différentes. Les administrateurs doivent pouvoir gérer les ressources de leur périmètre sans recevoir de droits supplémentaires sur les autres environnements. La solution doit rester simple à auditer, respecter le principe du moindre privilège et pouvoir évoluer lorsque de nouveaux groupes de ressources sont ajoutés.',
    answers: [
      'Attribuer Owner au niveau du tenant afin de simplifier la gestion.',
      'Créer un rôle personnalisé contenant toutes les actions et l’attribuer au niveau racine.',
      'Utiliser des attributions RBAC aux scopes appropriés pour chaque équipe.',
      'Utiliser uniquement des tags pour contrôler les opérations autorisées.',
    ],
  },
};

export const Mobile = {
  args: {
    favorite: true,
    hasNote: true,
    selectedIndexes: [3],
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};

export const Tablet = {
  args: {
    selectedIndexes: [3],
  },
  globals: {
    viewport: { value: 'tablet', isRotated: false },
  },
};

export const MobileIncorrect = {
  args: {
    status: 'retry',
    selectedIndexes: [0],
    correctIndexes: [3],
    incorrectIndexes: [0],
    locked: true,
    feedbackTone: 'error',
    feedbackTitle: 'Le rôle doit être attribué au bon scope',
    feedbackText: 'Le rôle Contributor doit être appliqué directement au groupe de ressources concerné.',
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
