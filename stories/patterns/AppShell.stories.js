import { createAppShell } from '../../src/ui/patterns/app-shell/app-shell.js';
import { createTrainerPage } from '../../src/ui/pages/trainer-pages/trainer-pages.js';

export default {
  title: 'Patterns/AppShell V2',
  parameters: { layout: 'fullscreen', a11y: { test: 'error' } },
  render: (args) => createAppShell({ ...args, content: createTrainerPage(args.activeMode === 'path' ? 'path' : args.activeMode) }),
  argTypes: {
    density: { control: 'radio', options: ['balanced', 'compact', 'spacious'] },
    activeMode: { control: 'select', options: ['dashboard', 'path', 'study', 'exam', 'mistakes', 'settings'] },
  },
};

export const Entrainement = {
  name: 'Entraînement V2',
  args: { density: 'balanced', activeMode: 'study', trainingCode: 'AZ-104', pageTitle: 'Entraînement', pageSubtitle: 'Une question à la fois. Progresse, comprends, continue.' },
};
export const Compact = { args: { ...Entrainement.args, density: 'compact' } };
export const Dark = { args: { ...Entrainement.args }, globals: { theme: 'dark' } };
export const Mobile = { args: { ...Entrainement.args }, globals: { viewport: { value: 'mobile', isRotated: false } } };
