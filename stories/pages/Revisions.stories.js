import { pageMeta } from "./trainer-page-stories.js";

export default { ...pageMeta, id: "pages-revisions", title: "Pages/Révisions" };
const base = { density: "balanced" };

export const RevisionsLight = {
  name: "Révisions · Clair",
  args: { ...base, mode: "mistakes" },
  globals: { theme: "light" },
};
export const RevisionsDark = {
  name: "Révisions · Sombre",
  args: { ...base, mode: "mistakes" },
  globals: { theme: "dark" },
};

export const Empty = {args:{...base,mode:'mistakes',reviewCount:0}};
export const Single = {args:{...base,mode:'mistakes',reviewCount:1}};
export const Ready = {args:{...base,mode:'mistakes',reviewCount:42}};
export const Errors = {args:{...base,mode:'mistakes',reviewCount:42,initialFilter:'errors'}};
export const Flagged = {args:{...base,mode:'mistakes',reviewCount:42,initialFilter:'flagged'}};
export const Favorites = {args:{...base,mode:'mistakes',reviewCount:42,initialFilter:'favorites'}};
export const DomainFilter = {args:{...base,mode:'mistakes',reviewCount:42,activeDomain:'T2'}};
export const Mobile = {args:{...base,mode:'mistakes',reviewCount:42},globals:{viewport:{value:'mobile',isRotated:false}}};

export const EnglishLight={args:{...base,mode:'mistakes',language:'en'},globals:{theme:'light'}};
export const EnglishDark={args:{...base,mode:'mistakes',language:'en'},globals:{theme:'dark'}};
