import { pageMeta } from "./trainer-page-stories.js";

export default {
  ...pageMeta,
  id: "pages-entrainement",
  title: "Pages/Entraînement",
};
const base = { density: "balanced" };

export const EntrainementLight = {
  name: "Entraînement · Clair",
  args: { ...base, mode: "study" },
  globals: { theme: "light" },
};
export const EntrainementDark = {
  name: "Entraînement · Sombre",
  args: { ...base, mode: "study" },
  globals: { theme: "dark" },
};
export const MobileEntrainement = {
  name: "Mobile · Entraînement",
  args: { ...base, mode: "study" },
  globals: { theme: "light", viewport: { value: "mobile", isRotated: false } },
};

export const TabletEntrainementLight = {
  args: { ...base, mode: "study" },
  globals: { theme: "light", viewport: { value: "tablet", isRotated: false } },
};
export const TabletEntrainementDark = {
  args: { ...base, mode: "study" },
  globals: { theme: "dark", viewport: { value: "tablet", isRotated: false } },
};
export const MobileEntrainementDark = {
  args: { ...base, mode: "study" },
  globals: { theme: "dark", viewport: { value: "mobile", isRotated: false } },
};
