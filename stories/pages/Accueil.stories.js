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
  args: { ...base, mode: "dashboard", selected: "T3" },
  globals: { theme: "light" },
};

export const ManyModules={args:{...base,mode:'dashboard',manyModules:true}};

export const EnglishLight={args:{...base,mode:'dashboard',language:'en'},globals:{theme:'light'}};
export const EnglishDark={args:{...base,mode:'dashboard',language:'en'},globals:{theme:'dark'}};
