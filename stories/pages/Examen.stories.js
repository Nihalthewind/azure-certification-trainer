import { pageMeta } from "./trainer-page-stories.js";

export default {
  ...pageMeta,
  id: "pages-examen-blanc",
  title: "Pages/Examen blanc",
};
const base = { density: "balanced" };

export const ExamenLight = {
  args: { ...base, mode: "exam" },
  globals: { theme: "light" },
};
export const ExamenDark = {
  args: { ...base, mode: "exam" },
  globals: { theme: "dark" },
};

export const EnglishLight={args:{...base,mode:'exam',language:'en'},globals:{theme:'light'}};
export const EnglishDark={args:{...base,mode:'exam',language:'en'},globals:{theme:'dark'}};
