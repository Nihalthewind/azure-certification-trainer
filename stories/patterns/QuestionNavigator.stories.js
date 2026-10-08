import { createQuestionNavigator } from '../../src/ui/patterns/question-navigator/question-navigator.js';

const items = Array.from({ length: 36 }, (_, index) => ({
  index: index + 1,
  id: `AZ104-${String(index + 1).padStart(3, '0')}`,
  category: index % 5 === 0 ? 'GOUVERNANCE' : index % 3 === 0 ? 'RÉSEAUX' : 'COMPUTE',
  domain: index % 5 === 0 ? 'Identités' : index % 3 === 0 ? 'Réseaux' : 'Compute',
  status: index % 9 === 0 ? 'bad' : index % 4 === 0 ? 'good' : index % 3 === 0 ? 'answered' : 'pending',
  favorite: index === 4 || index === 14,
  reported: index === 8,
  flagged: index === 19,
}));

const meta = {
  title: 'Patterns/QuestionNavigator',
  parameters: { layout: 'centered', a11y: { test: 'error' } },
  render: (args) => {
    const frame = document.createElement('div');
    frame.style.width = 'min(940px, 94vw)';
    frame.style.padding = '22px';
    frame.style.border = '1px solid var(--color-border)';
    frame.style.borderRadius = '18px';
    frame.style.background = 'var(--color-panel)';
    frame.append(createQuestionNavigator(args));
    return frame;
  },
};

export default meta;
export const Training = { args: { items, currentId: 'AZ104-012', examMode: false } };
export const Exam = { args: { items: items.map((item, index) => ({ ...item, status: index % 3 === 0 ? 'answered' : 'pending' })), currentId: 'AZ104-020', examMode: true } };
export const Mobile = { args: { ...Training.args }, globals: { viewport: { value: 'mobile', isRotated: false } } };
export const CourseTheme = {args:{items,embedded:true,label:'Questions · Identités et gouvernance'},parameters:{docs:{description:{story:'Vignettes compactes : numéro et ID visibles, couleur success/error ; état conservé dans le label accessible et l’infobulle.'}}}};
export const CourseThemeDark = {...CourseTheme,globals:{theme:'dark'}};
export const CourseThemeMobile = {...CourseTheme,globals:{viewport:{value:'mobile',isRotated:false}}};
