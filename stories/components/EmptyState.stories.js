import { createEmptyState } from '../../src/ui/components/empty-state/empty-state.js';

const meta = {
  title: 'Components/EmptyState',
  parameters: { layout: 'centered', a11y: { test: 'error' } },
  render: (args) => {
    const frame = document.createElement('div');
    frame.style.width = 'min(760px, 92vw)';
    frame.append(createEmptyState(args));
    return frame;
  },
};

export default meta;
export const Default = { args: { icon: '◇', title: 'Rien dans cette sélection', description: 'Essayez un autre domaine ou revenez à l’apprentissage.', actionLabel: 'Voir toutes les questions' } };
export const NoErrors = { args: { icon: '✓', title: 'Aucune erreur active', description: 'Continuez votre progression ou lancez un examen blanc pour consolider vos acquis.', actionLabel: 'Continuer la révision' } };
