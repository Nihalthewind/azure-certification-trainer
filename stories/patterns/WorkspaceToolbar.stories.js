import { createWorkspaceToolbar } from '../../src/ui/patterns/workspace-toolbar/workspace-toolbar.js';

const meta = {
  title: 'Patterns/WorkspaceToolbar',
  parameters: {
    layout: 'padded',
    a11y: { test: 'error' },
  },
  render: (args) => createWorkspaceToolbar(args),
};

export default meta;

export const Study = {
  args: {
    title: 'Votre parcours',
    subtitle: '568 questions disponibles pour AZ-104.',
    focusActive: false,
  },
};

export const FocusActive = {
  args: {
    title: 'Votre parcours',
    subtitle: '568 questions disponibles pour AZ-104.',
    focusActive: true,
  },
};

export const Exam = {
  args: {
    title: 'Examen blanc · 48 questions',
    subtitle: '100 minutes · progression enregistrée localement.',
    examMode: true,
    flagged: true,
  },
};

export const Mobile = {
  args: {
    title: 'Votre parcours',
    subtitle: '568 questions disponibles pour AZ-104.',
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
