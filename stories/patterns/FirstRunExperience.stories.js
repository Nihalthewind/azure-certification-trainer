import { createFirstRunExperience } from "../../src/ui/patterns/first-run-experience/first-run-experience.js";
import { createAppShell } from "../../src/ui/patterns/app-shell/app-shell.js";
import { createDashboardPage } from "../../src/ui/pages/trainer-pages/trainer-pages.js";
export default {
  title: "Patterns/Introduction",
  parameters: { layout: "fullscreen", a11y: { test: "error" } },
  render: (args) => {
    const root = document.createElement("div");
    root.style.cssText = "position:relative;min-height:100vh;overflow:hidden;";
    const shell = createAppShell({
      activeMode: "dashboard",
      pageTitle: "Votre préparation AZ-104",
      pageSubtitle: "Votre formation, vos modules et la prochaine question.",
      content: createDashboardPage(),
    });
    shell.inert = true;
    const intro = createFirstRunExperience({
      ...args,
      embedded: true,
      onInstall: async () => args.outcome || "dismissed",
      onComplete: () => intro.destroy(),
      onSkip: () => intro.destroy(),
    });
    root.append(shell, intro.element);
    return root;
  },
};
export const Default = { args: { installState: "browser" } };
export const Welcome = Default;
export const InstallAvailable = { args: { installState: "available" } };
export const BrowserOnly = Default;
export const AlreadyInstalled = { args: { installState: "installed" } };
export const Dark = {
  args: { installState: "available" },
  globals: { theme: "dark" },
};
export const Mobile = {
  args: { installState: "available" },
  globals: { viewport: { value: "mobile", isRotated: false } },
};
export const IOS = {
  args: { installState: "browser", ios: true },
  globals: { viewport: { value: "mobile", isRotated: false } },
};
