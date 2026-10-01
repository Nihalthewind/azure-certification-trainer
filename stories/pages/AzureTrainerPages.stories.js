import { createAppShell } from '../../src/ui/patterns/app-shell/app-shell.js';
import { createTrainerPage } from '../../src/ui/pages/trainer-pages/trainer-pages.js';

const PAGE_CONFIG = {
  dashboard: {
    eyebrow: 'PILOTAGE',
    title: 'Tableau de bord',
    subtitle: 'Votre progression, vos faiblesses et vos derniers examens au même endroit.',
  },
  study: {
    eyebrow: 'ENTRAÎNEMENT',
    title: 'Base de connaissances',
    subtitle: 'Travaillez toute la banque ou ciblez un domaine.',
  },
  mistakes: {
    eyebrow: 'RÉVISION',
    title: 'Erreurs',
    subtitle: 'Priorisez les notions qui vous coûtent encore des points.',
  },
  exam: {
    eyebrow: 'SIMULATION',
    title: 'Examen blanc',
    subtitle: 'Préparez une session chronométrée et consultez votre historique.',
  },
  settings: {
    eyebrow: 'APPLICATION',
    title: 'Paramètres',
    subtitle: 'Apparence, formations, sauvegardes et installation.',
  },
};

function renderPage(args) {
  const config = PAGE_CONFIG[args.mode] || PAGE_CONFIG.study;
  return createAppShell({
    density: args.density,
    activeMode: args.mode,
    trainingCode: 'AZ-104',
    trainingName: 'Azure Administrator',
    pageEyebrow: config.eyebrow,
    pageTitle: config.title,
    pageSubtitle: config.subtitle,
    counts: {
      study: 568,
      mistakes: 18,
      exam: 4,
    },
    content: createTrainerPage(args.mode),
  });
}

const meta = {
  title: 'Pages/Azure Trainer',
  parameters: {
    layout: 'fullscreen',
    a11y: { test: 'error' },
  },
  render: renderPage,
  argTypes: {
    mode: {
      control: 'select',
      options: ['dashboard', 'study', 'mistakes', 'exam', 'settings'],
    },
    density: {
      control: 'radio',
      options: ['balanced', 'compact', 'spacious'],
    },
  },
};

export default meta;

const base = {
  density: 'balanced',
};

export const DashboardDark = {
  name: 'Dashboard · Sombre',
  args: { ...base, mode: 'dashboard' },
  globals: { theme: 'dark' },
};

export const DashboardLight = {
  name: 'Dashboard · Clair',
  args: { ...base, mode: 'dashboard' },
  globals: { theme: 'light' },
};

export const KnowledgeDark = {
  name: 'Base de connaissances · Sombre',
  args: { ...base, mode: 'study' },
  globals: { theme: 'dark' },
};

export const KnowledgeLight = {
  name: 'Base de connaissances · Clair',
  args: { ...base, mode: 'study' },
  globals: { theme: 'light' },
};

export const MistakesDark = {
  name: 'Erreurs · Sombre',
  args: { ...base, mode: 'mistakes' },
  globals: { theme: 'dark' },
};

export const MistakesLight = {
  name: 'Erreurs · Clair',
  args: { ...base, mode: 'mistakes' },
  globals: { theme: 'light' },
};

export const ExamDark = {
  name: 'Examen blanc · Sombre',
  args: { ...base, mode: 'exam' },
  globals: { theme: 'dark' },
};

export const ExamLight = {
  name: 'Examen blanc · Clair',
  args: { ...base, mode: 'exam' },
  globals: { theme: 'light' },
};

export const SettingsDark = {
  name: 'Paramètres · Sombre',
  args: { ...base, mode: 'settings' },
  globals: { theme: 'dark' },
};

export const SettingsLight = {
  name: 'Paramètres · Clair',
  args: { ...base, mode: 'settings' },
  globals: { theme: 'light' },
};

export const MobileKnowledge = {
  name: 'Mobile · Base de connaissances',
  args: { ...base, mode: 'study' },
  globals: {
    theme: 'dark',
    viewport: { value: 'mobile', isRotated: false },
  },
};
