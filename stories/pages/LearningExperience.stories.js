import { createDashboardPage } from '../../src/ui/pages/trainer-pages/trainer-pages.js';

export default {
  title: 'Pages/Learning Experience',
  tags: ['autodocs'],
  render: (args) => createDashboardPage(args),
  parameters: { layout: 'fullscreen' },
};

export const FirstSession = { args: { firstRun: true } };
export const ResumeSession = { args: { firstRun: false } };
