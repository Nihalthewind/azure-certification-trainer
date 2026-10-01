import { createNavigationItem } from '../../src/ui/components/navigation-item/navigation-item.js';

const meta = {
  title: 'Components/NavigationItem',
  parameters: {
    layout: 'centered',
    a11y: { test: 'error' },
  },
  render: (args) => {
    const frame = document.createElement('div');
    frame.style.width = '240px';
    frame.append(createNavigationItem(args));
    return frame;
  },
  argTypes: {
    icon: {
      control: 'select',
      options: ['dashboard', 'knowledge', 'error', 'exam', 'layers', 'settings'],
    },
    size: {
      control: 'radio',
      options: ['medium', 'compact'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Base de connaissances',
    icon: 'knowledge',
    count: 568,
    active: false,
    size: 'medium',
  },
};

export const Active = {
  args: {
    ...Default.args,
    active: true,
  },
};

export const WithErrorCount = {
  args: {
    label: 'Erreurs',
    icon: 'error',
    count: 18,
    active: false,
    size: 'medium',
  },
};

export const Compact = {
  args: {
    ...Default.args,
    size: 'compact',
  },
};
