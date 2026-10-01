import { createQuestionCard } from '../../src/ui/patterns/question-card/question-card.js';

const sample = {
  questionId: 'AZ104-NET-033',
  topic: 'RÉSEAU VIRTUEL',
  status: 'discovery',
  questionNumber: 21,
  totalQuestions: 48,
  category: 'QCM',
  prompt: 'Vous devez permettre à une machine virtuelle d’accéder à un service Azure via une adresse IP privée, sans exposer le trafic au réseau Internet public. Quelle solution répond au besoin ?',
  answers: [
    'Créer un Private Endpoint pour le service concerné.',
    'Ajouter uniquement une adresse IP publique statique à la machine virtuelle.',
    'Utiliser Traffic Manager pour résoudre le nom du service.',
    'Créer une règle de NAT sortante sur un Load Balancer public.',
  ],
  answerNote: '1 réponse attendue',
  selectedIndexes: [],
  correctIndexes: [],
  incorrectIndexes: [],
  mode: 'training',
};

function viewport(args) {
  const wrapper = document.createElement('div');
  wrapper.className = 'ui-question-viewport';
  wrapper.style.padding = '12px';
  wrapper.append(createQuestionCard({ ...sample, ...args }));
  return wrapper;
}

const meta = {
  title: 'Patterns/QuestionViewport',
  parameters: {
    layout: 'fullscreen',
    a11y: { test: 'error' },
  },
  render: (args) => viewport(args),
};

export default meta;

export const DesktopFill = {};

export const LongQuestion = {
  args: {
    prompt: 'Une organisation exploite plusieurs réseaux virtuels Azure et doit réduire l’exposition publique de ses services PaaS. Les connexions doivent utiliser le réseau privé, la résolution DNS doit rester cohérente entre les environnements et les administrateurs souhaitent conserver une architecture simple à diagnostiquer. Quelle approche répond le mieux à ces contraintes tout en limitant les changements applicatifs ?',
  },
};

export const MobileFill = {
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
