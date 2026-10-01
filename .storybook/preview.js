import '../src/ui/foundations/tokens.css';
import '../atelier.css';

const VIEWPORTS = {
  mobile: {
    name: 'Mobile · 390 × 844',
    styles: { width: '390px', height: '844px' },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet · 768 × 1024',
    styles: { width: '768px', height: '1024px' },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop · 1440 × 900',
    styles: { width: '1440px', height: '900px' },
    type: 'desktop',
  },
};

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  globalTypes: {
    theme: {
      description: 'Thème du produit Azure Trainer',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'dark', title: 'Sombre' },
          { value: 'light', title: 'Clair' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = context.globals.theme || 'dark';
      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: VIEWPORTS,
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
