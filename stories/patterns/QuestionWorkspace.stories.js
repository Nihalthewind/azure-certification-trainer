import { createKnowledgePage } from '../../src/ui/pages/trainer-pages/trainer-pages.js';
import { createAppShell } from '../../src/ui/patterns/app-shell/app-shell.js';
export default { title:'Patterns/QuestionWorkspace', tags:['autodocs'], parameters:{layout:'fullscreen'},render:args=>createAppShell({activeMode:'study',pageTitle:'Entraînement',pageSubtitle:'Une question à la fois. Votre session est sauvegardée automatiquement.',content:createKnowledgePage(args)}) };
export const Default={};
export const Selected={args:{trainingState:'selected'}};
export const ValidatedCorrect={args:{trainingState:'validated-correct'}};
export const ValidatedIncorrect={args:{trainingState:'validated-incorrect'}};
export const FeedbackVisible=ValidatedCorrect;
export const FocusMode={args:{focusActive:true}};
export const Dark={args:{trainingState:'validated-correct'},globals:{theme:'dark'}};
export const Mobile={globals:{viewport:{value:'mobile',isRotated:false}}};

export const NextQuestion={args:{questionNumber:13}};
