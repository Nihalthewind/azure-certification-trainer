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
