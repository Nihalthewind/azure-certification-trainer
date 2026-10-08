import { pageMeta } from "./trainer-page-stories.js";

export default { ...pageMeta, id: "pages-accueil", title: "Pages/Accueil" };
const base = { density: "balanced" };

export const AccueilLight = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "light" },
};
export const AccueilDark = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "dark" },
};
export const AccueilPremierUsage = {
  args: { ...base, mode: "dashboard", firstRun: true },
  globals: { theme: "light" },
};
export const MobileAccueilLight = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "light", viewport: { value: "mobile", isRotated: false } },
};
export const MobileAccueilDark = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "dark", viewport: { value: "mobile", isRotated: false } },
};
export const TabletAccueilLight = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "light", viewport: { value: "tablet", isRotated: false } },
};
export const TabletAccueilDark = {
  args: { ...base, mode: "dashboard" },
  globals: { theme: "dark", viewport: { value: "tablet", isRotated: false } },
};
export const AccueilHighProgress = {
  args: { ...base, mode: "dashboard", highProgress: true },
  globals: { theme: "light" },
};
export const AccueilModuleSelected = {
  args: { ...base, mode: "dashboard", selected: "T3", openedDomain:"T3" },
  globals: { theme: "light" },
};

export const QuestionsDuTheme = {args:{...base,mode:'dashboard',openedDomain:'T1'},globals:{theme:'light'}};
export const QuestionsDuThemeDark = {...QuestionsDuTheme,globals:{theme:'dark'}};
export const QuestionsDuThemeMobile = {...QuestionsDuTheme,globals:{theme:'light',viewport:{value:'mobile',isRotated:false}}};

export const ManyModules={args:{...base,mode:'dashboard',manyModules:true}};
export const Unavailable={args:{...base,mode:'dashboard',noData:true}};
export const LongLabel={args:{...base,mode:'dashboard',longLabel:true}};
export const ActivitiesOpen={args:{...base,mode:'dashboard',activitiesOpen:true}};
export const ActivitiesEnglish={args:{...base,mode:'dashboard',activitiesOpen:true,language:'en'}};
export const ActivitiesMobile={args:{...base,mode:'dashboard',activitiesOpen:true},globals:{viewport:{value:'mobile',isRotated:false}}};
export const ActivitiesKeyboard={args:{...base,mode:'dashboard'},play:async({canvasElement})=>{const trigger=canvasElement.querySelector('.ui-activities-menu>button');trigger.focus();trigger.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));}};

export const EnglishLight={args:{...base,mode:'dashboard',language:'en'},globals:{theme:'light'}};
export const EnglishDark={args:{...base,mode:'dashboard',language:'en'},globals:{theme:'dark'}};
