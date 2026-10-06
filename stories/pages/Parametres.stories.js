import { pageMeta } from "./trainer-page-stories.js";

export default {
  ...pageMeta,
  id: "pages-parametres",
  title: "Pages/Paramètres",
};
const base = { density: "balanced" };

export const ParametresLight = {
  name: "Paramètres · Clair",
  args: { ...base, mode: "settings" },
  globals: { theme: "light" },
};
export const ParametresDark = {
  name: "Paramètres · Sombre",
  args: { ...base, mode: "settings" },
  globals: { theme: "dark" },
};
export const MobileParametresLight = {
  args: { ...base, mode: "settings" },
  globals: { theme: "light", viewport: { value: "mobile", isRotated: false } },
};
export const MobileParametresDark = {
  args: { ...base, mode: "settings" },
  globals: { theme: "dark", viewport: { value: "mobile", isRotated: false } },
};
export const TabletParametresLight = {
  args: { ...base, mode: "settings" },
  globals: { theme: "light", viewport: { value: "tablet", isRotated: false } },
};
export const TabletParametresDark = {
  args: { ...base, mode: "settings" },
  globals: { theme: "dark", viewport: { value: "tablet", isRotated: false } },
};
export const ParametresFormationsLight = {
  args: { ...base, mode: "settings", category: "training" },
  globals: { theme: "light" },
};
export const ParametresFormationsDark = {
  args: { ...base, mode: "settings", category: "training" },
  globals: { theme: "dark" },
};
export const ParametresDonneesLight = {
  args: { ...base, mode: "settings", category: "data" },
  globals: { theme: "light" },
};
export const ParametresDonneesDark = {
  args: { ...base, mode: "settings", category: "data" },
  globals: { theme: "dark" },
};
export const ParametresApplicationLight = {
  args: { ...base, mode: "settings", category: "app" },
  globals: { theme: "light" },
};
export const ParametresApplicationDark = {
  args: { ...base, mode: "settings", category: "app" },
  globals: { theme: "dark" },
};
