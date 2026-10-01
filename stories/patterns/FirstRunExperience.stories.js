import { createFirstRunExperience } from '../../src/ui/patterns/first-run-experience/first-run-experience.js';

const meta = {
  title: 'Patterns/FirstRunExperience',
  parameters: {
    layout: 'fullscreen',
    a11y: { test: 'error' },
  },
  render: (args) => createFirstRunExperience({ ...args, embedded: true }).element,
};

export default meta;

export const Welcome = {
  args: {
    trainingCode: 'AZ-104',
    trainingName: 'Microsoft Azure Administrator',
    description: 'Préparez AZ-104 avec un espace de travail conçu pour réviser, pratiquer et mesurer votre progression.',
    initialStep: 0,
  },
};

export const PersonalWorkspace = {
  args: {
    trainingCode: 'AZ-104',
    trainingName: 'Microsoft Azure Administrator',
    initialStep: 1,
  },
};

export const FocusDiscovery = {
  args: {
    trainingCode: 'AZ-104',
    trainingName: 'Microsoft Azure Administrator',
    initialStep: 2,
  },
};

export const Mobile = {
  args: {
    trainingCode: 'AZ-104',
    trainingName: 'Microsoft Azure Administrator',
    initialStep: 0,
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
};
