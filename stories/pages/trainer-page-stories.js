import { createAppShell } from "../../src/ui/patterns/app-shell/app-shell.js";
import { createTrainerPage } from "../../src/ui/pages/trainer-pages/trainer-pages.js";

const PAGE_CONFIG = {
  dashboard: {
    title: "Votre préparation AZ-104",
    subtitle: "Votre formation, vos modules et la prochaine question.",
  },
  path: {
    title: "Votre préparation AZ-104",
    subtitle: "Votre formation, vos modules et la prochaine question.",
  },
  study: {
    title: "Entraînement",
    subtitle: "Une question à la fois. Progresse, comprends, continue.",
  },
  exam: {
    title: "Examen blanc",
    subtitle:
      "Simule les conditions de l’AZ-104, puis analyse uniquement ce qui compte.",
  },
  mistakes: {
    title: "Révisions",
    subtitle: "Travaille seulement les notions qui méritent ton attention.",
  },
  settings: {
    title: "Paramètres",
    subtitle:
      "Réglez votre espace d’apprentissage. Vos données restent sur cet appareil.",
  },
};

export function renderPage(args) {
  const config = PAGE_CONFIG[args.mode] || PAGE_CONFIG.study;
  return createAppShell({
    density: args.density,
    activeMode: args.mode,
    trainingCode: "AZ-104",
    pageTitle: config.title,
    pageSubtitle: config.subtitle,
    content: createTrainerPage(args.mode, args),
  });
}

export const pageMeta = {
  title: "Pages/Accueil",
  parameters: { layout: "fullscreen", a11y: { test: "error" } },
  render: renderPage,
  argTypes: {
    mode: {
      control: "select",
      options: ["dashboard", "path", "study", "exam", "mistakes", "settings"],
    },
    density: { control: "radio", options: ["balanced", "compact", "spacious"] },
  },
};
