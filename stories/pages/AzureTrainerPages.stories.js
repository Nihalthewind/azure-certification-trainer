import { createAppShell } from '../../src/ui/patterns/app-shell/app-shell.js';
import { createTrainerPage } from '../../src/ui/pages/trainer-pages/trainer-pages.js';

const PAGE_CONFIG = {
  dashboard: { title: 'Accueil', subtitle: 'Reprends ta préparation AZ-104 là où tu l’as laissée.' },
  path: { title: 'Parcours AZ-104', subtitle: '8 modules pour couvrir les compétences de l’examen, sans bruit inutile.' },
  study: { title: 'Entraînement', subtitle: 'Une question à la fois. Progresse, comprends, continue.' },
  exam: { title: 'Examen blanc', subtitle: 'Simule les conditions de l’AZ-104, puis analyse uniquement ce qui compte.' },
  mistakes: { title: 'Révisions', subtitle: 'Travaille seulement les notions qui méritent ton attention.' },
  settings: { title: 'Paramètres', subtitle: 'Réglez votre espace d’apprentissage. Vos données restent sur cet appareil.' },
};

function renderPage(args) {
  const config = PAGE_CONFIG[args.mode] || PAGE_CONFIG.study;
  return createAppShell({
    density: args.density,
    activeMode: args.mode,
    trainingCode: 'AZ-104',
    pageTitle: config.title,
    pageSubtitle: config.subtitle,
    content: createTrainerPage(args.mode, args),
  });
}

export default {
  title: 'Pages/Azure Trainer V2',
  parameters: { layout: 'fullscreen', a11y: { test: 'error' } },
  render: renderPage,
  argTypes: {
    mode: { control: 'select', options: ['dashboard', 'path', 'study', 'exam', 'mistakes', 'settings'] },
    density: { control: 'radio', options: ['balanced', 'compact', 'spacious'] },
  },
};

const base = { density: 'balanced' };
export const AccueilLight = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'light' } };
export const AccueilDark = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'dark' } };
export const ParcoursLight = { args: { ...base, mode: 'path' }, globals: { theme: 'light' } };
export const ParcoursDark = { args: { ...base, mode: 'path' }, globals: { theme: 'dark' } };
export const EntrainementLight = { name: 'Entraînement · Clair', args: { ...base, mode: 'study' }, globals: { theme: 'light' } };
export const EntrainementDark = { name: 'Entraînement · Sombre', args: { ...base, mode: 'study' }, globals: { theme: 'dark' } };
export const ExamenLight = { args: { ...base, mode: 'exam' }, globals: { theme: 'light' } };
export const ExamenDark = { args: { ...base, mode: 'exam' }, globals: { theme: 'dark' } };
export const RevisionsLight = { name: 'Révisions · Clair', args: { ...base, mode: 'mistakes' }, globals: { theme: 'light' } };
export const RevisionsDark = { name: 'Révisions · Sombre', args: { ...base, mode: 'mistakes' }, globals: { theme: 'dark' } };
export const ParametresLight = { name: 'Paramètres · Clair', args: { ...base, mode: 'settings' }, globals: { theme: 'light' } };
export const ParametresDark = { name: 'Paramètres · Sombre', args: { ...base, mode: 'settings' }, globals: { theme: 'dark' } };
export const MobileEntrainement = { name: 'Mobile · Entraînement', args: { ...base, mode: 'study' }, globals: { theme: 'light', viewport: { value: 'mobile', isRotated: false } } };

export const TabletEntrainementLight = { args: { ...base, mode: 'study' }, globals: { theme: 'light', viewport: { value: 'tablet', isRotated: false } } };
export const TabletEntrainementDark = { args: { ...base, mode: 'study' }, globals: { theme: 'dark', viewport: { value: 'tablet', isRotated: false } } };
export const MobileEntrainementDark = { args: { ...base, mode: 'study' }, globals: { theme: 'dark', viewport: { value: 'mobile', isRotated: false } } };

export const AccueilPremierUsage = { args: { ...base, mode: 'dashboard', firstRun: true }, globals: { theme: 'light' } };
export const MobileAccueilLight = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'light', viewport: { value: 'mobile', isRotated: false } } };
export const MobileAccueilDark = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'dark', viewport: { value: 'mobile', isRotated: false } } };
export const TabletAccueilLight = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'light', viewport: { value: 'tablet', isRotated: false } } };
export const TabletAccueilDark = { args: { ...base, mode: 'dashboard' }, globals: { theme: 'dark', viewport: { value: 'tablet', isRotated: false } } };
export const MobileParametresLight = { args: { ...base, mode: 'settings' }, globals: { theme: 'light', viewport: { value: 'mobile', isRotated: false } } };
export const MobileParametresDark = { args: { ...base, mode: 'settings' }, globals: { theme: 'dark', viewport: { value: 'mobile', isRotated: false } } };
export const TabletParametresLight = { args: { ...base, mode: 'settings' }, globals: { theme: 'light', viewport: { value: 'tablet', isRotated: false } } };
export const TabletParametresDark = { args: { ...base, mode: 'settings' }, globals: { theme: 'dark', viewport: { value: 'tablet', isRotated: false } } };
export const ParametresFormationsLight = { args: { ...base, mode: 'settings', category: 'training' }, globals: { theme: 'light' } };
export const ParametresFormationsDark = { args: { ...base, mode: 'settings', category: 'training' }, globals: { theme: 'dark' } };
export const ParametresDonneesLight = { args: { ...base, mode: 'settings', category: 'data' }, globals: { theme: 'light' } };
export const ParametresDonneesDark = { args: { ...base, mode: 'settings', category: 'data' }, globals: { theme: 'dark' } };
export const ParametresApplicationLight = { args: { ...base, mode: 'settings', category: 'app' }, globals: { theme: 'light' } };
export const ParametresApplicationDark = { args: { ...base, mode: 'settings', category: 'app' }, globals: { theme: 'dark' } };
