import { createModalSurface } from '../../src/ui/components/modal-surface/modal-surface.js';

const meta = {
  title: 'Components/ModalSurface',
  parameters: { layout: 'fullscreen', a11y: { test: 'error' } },
  render: (args) => createModalSurface(args),
  argTypes: {
    kind: { control: 'select', options: ['default', 'form', 'danger', 'result', 'navigator'] },
    size: { control: 'radio', options: ['small', 'medium', 'wide'] },
  },
};

export default meta;

export const Default = { args: { eyebrow: 'AZURE TRAINER', title: 'Dialogue', description: 'Une action secondaire claire sans quitter votre contexte.', kind: 'default', size: 'medium', actionLabel: 'Continuer' } };
export const Note = { args: { eyebrow: 'AZ-104 · AZ104-042', title: 'Ma note', description: 'Ajoutez un mémo personnel lié à cette question.', kind: 'form', size: 'medium', actionLabel: 'Enregistrer' } };
export const Report = { args: { eyebrow: 'AZ-104 · AZ104-042', title: 'Mettre un drapeau', description: 'Signalez un problème de contenu à vérifier plus tard.', kind: 'danger', size: 'medium', actionLabel: 'Enregistrer' } };
export const Result = { args: { eyebrow: 'AZ-104', title: 'Examen terminé', description: 'Votre résultat est enregistré dans l’historique.', kind: 'result', size: 'medium', actionLabel: 'Revoir les erreurs' } };
export const Wide = { args: { eyebrow: 'AZ-104 · BANQUE COMPLÈTE', title: 'Toutes les questions', description: 'Navigation directe dans toute la banque.', kind: 'navigator', size: 'wide', actionLabel: 'Fermer' } };
export const Mobile = { args: { ...Note.args }, globals: { viewport: { value: 'mobile', isRotated: false } } };
