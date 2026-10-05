import { createFeedbackPanel } from '../../src/ui/components/feedback-panel/feedback-panel.js';

export default {
  title: 'Components/FeedbackPanel',
  tags: ['autodocs'],
  render: (args) => createFeedbackPanel(args),
  args: {
    title: 'Le rôle Contributor doit être attribué au groupe au niveau du groupe de ressources.',
    context: 'Le scope de l’attribution RBAC détermine où les permissions sont effectives. Choisir le niveau le plus étroit qui répond au besoin.',
    sources: [{ label: 'Documentation Azure RBAC', url: 'https://learn.microsoft.com/azure/role-based-access-control/' }],
    onRetry: () => {},
  },
};

export const Correct = {
  args: { tone: 'success', kicker: '✓ Bonne réponse' },
};

export const Incorrect = {
  args: { tone: 'error', kicker: '✕ Réponse incorrecte' },
};

export const Reference = {
  args: {
    tone: 'reference',
    kicker: '◎ Auto-évaluation',
    selfGrade: true,
    onGradeGood: () => {},
    onGradeBad: () => {},
  },
};

export const WithSourceDetail = {
  args: {
    tone: 'success',
    kicker: '✓ Bonne réponse',
    sourceDetail: 'Le support source précise que l’attribution doit être réalisée au scope du groupe de ressources.',
    provenanceNotes: ['Réponse issue du document fourni.'],
  },
};

export const LearningSummary = {
  args: {
    tone: 'error',
    kicker: '✕ Réponse incorrecte',
    takeaway: 'Choisir le scope le plus étroit qui répond au besoin.',
  },
};

export const MissingExplanation = {
  args: { tone: 'reference', context: '', selfGrade: true },
};
