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
export const Resume={args:{...base,mode:'exam',examState:'resume'}};
export const Loading={args:{...base,mode:'exam',examState:'loading'}};
export const Error={args:{...base,mode:'exam',examState:'error'}};
export const Focus={args:{...base,mode:'exam',examState:'focus'}};
export const Finished={args:{...base,mode:'exam',examState:'finished'}};
