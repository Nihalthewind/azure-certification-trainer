import { createButton } from "../../components/button/button.js";
export function defaultFirstRunSteps({ trainingCode = "AZ-104" } = {}) {
  return [
    {
      title: `Prépare l’${trainingCode} à ton rythme.`,
      content: [
        "Entraînement par domaine",
        "Corrections expliquées",
        "Révisions ciblées",
      ],
    },
  ];
}
export function createFirstRunExperience({
  trainingCode = "AZ-104",
  embedded = false,
  installState = "browser",
  ios = false,
  onInstall,
  onComplete,
  onSkip,
} = {}) {
  const root = document.createElement("section");
  root.className = `ui-first-run${embedded ? " ui-first-run--embedded" : ""}`;
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", String(!embedded));
  root.setAttribute("aria-labelledby", "uiFirstRunTitle");
  root.setAttribute("aria-describedby", "uiFirstRunDescription");
  const panel = document.createElement("div");
  panel.className = "ui-first-run__panel";
  const brand = document.createElement("strong");
  brand.className = "ui-first-run__brand";
  brand.textContent = "Azure Trainer";
  const title = document.createElement("h1");
  title.id = "uiFirstRunTitle";
  title.textContent = `Prépare l’${trainingCode} à ton rythme.`;
  const description = document.createElement("p");
  description.id = "uiFirstRunDescription";
  description.className = "ui-first-run__description";
  description.textContent =
    "Entraîne-toi sur des questions ciblées, comprends tes erreurs et concentre tes révisions sur les notions qui comptent.";
  const benefits = document.createElement("ul");
  benefits.className = "ui-first-run__features";
  for (const label of defaultFirstRunSteps()[0].content) {
    const item = document.createElement("li");
    item.textContent = `✓ ${label}`;
    benefits.append(item);
  }
  const primary = createButton({
    label: "",
    variant: "primary",
    fullWidth: true,
    onClick: async () => {
      if (installState !== "available") {
        onComplete?.();
        return;
      }
      primary.disabled = true;
      try {
        const outcome = await onInstall?.();
        if (outcome === "accepted") onComplete?.();
      } catch {
        help.hidden = false;
        help.textContent =
          "Installation indisponible. Vous pouvez continuer dans le navigateur.";
        setInstallState("browser");
      } finally {
        primary.disabled = false;
      }
    },
  });
  const secondary = createButton({
    label: "Continuer dans le navigateur",
    variant: "ghost",
    fullWidth: true,
    onClick: () => onSkip?.(),
  });
  const help = document.createElement("p");
  help.className = "ui-first-run__help";
  help.setAttribute("role", "status");
  help.hidden = !ios;
  help.textContent =
    "Sur iPhone ou iPad : Partager → Ajouter à l’écran d’accueil.";
  panel.append(brand, title, description, benefits, primary, secondary, help);
  root.append(panel);
  function setInstallState(next) {
    installState = next;
    root.dataset.installState = next;
    primary.querySelector(".ui-button__label").textContent =
      next === "available"
        ? "Installer l’application"
        : "Commencer ma formation";
  }
  function keyboard(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      onSkip?.();
    }
    if (event.key !== "Tab") return;
    const targets = [...root.querySelectorAll("button:not([disabled])")],
      first = targets[0],
      last = targets.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  root.addEventListener("keydown", keyboard);
  setInstallState(installState);
  return {
    element: root,
    setInstallState,
    focus: () => primary.focus({ preventScroll: true }),
    destroy: () => {
      root.removeEventListener("keydown", keyboard);
      root.remove();
    },
  };
}
