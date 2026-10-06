import { createButton } from "../../components/button/button.js";

const node = (tag, className, text) => {
  const element = document.createElement(tag);
  element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};
export function courseModules({ domains, questions, state = {} }) {
  return domains.map(([id, label]) => {
    const items = questions.filter((question) => question.domain === id);
    const explored = items.filter(
      (question) =>
        state.seen?.[question.id] ||
        state.answers?.[question.id]?.done ||
        state.answers?.[question.id]?.read ||
        state.drafts?.[question.id],
    ).length;
    const errors = items.filter(
      (question) => state.answers?.[question.id]?.correct === false,
    ).length;
    return {
      id,
      label,
      total: items.length,
      explored,
      percent: items.length ? Math.round((explored / items.length) * 100) : 0,
      status: !explored
        ? "À commencer"
        : errors
          ? "À renforcer"
          : explored === items.length
            ? "Terminé"
            : "En cours",
      topics: [
        ...new Set(items.map((question) => question.category || "Notion")),
      ],
    };
  });
}
export function createCourseHub({
  resumeButton,
  onSelect,
  onStart,
  onContinue,
  ...initial
} = {}) {
  const element = node("section", "ui-course-hub");
  const course = node("section", "ui-course-hub__card");
  course.append(node("div", "ui-course-hub__kicker", "FORMATION EN COURS"));
  const title = node("h3", "ui-course-hub__title"),
    description = node("p", "ui-course-hub__muted"),
    coverage = node("strong", "ui-course-hub__coverage");
  const resume =
    resumeButton ||
    createButton({
      label: "Reprendre l’entraînement",
      variant: "primary",
      onClick: () => onContinue?.(),
    });
  course.append(title, description, coverage, resume);
  const heading = node("h3", "ui-course-hub__title");
  const grid = node("div", "ui-course-hub__grid");
  const modules = node("div", "ui-course-hub__modules");
  modules.setAttribute("aria-label", "Modules de formation");
  const detail = node("section", "ui-course-hub__card ui-course-hub__detail");
  detail.setAttribute("aria-live", "polite");
  const detailTitle = node("h4", ""),
    detailProgress = node("p", "ui-course-hub__muted"),
    topics = node("ul", "ui-course-hub__topics");
  const start = createButton({
    label: "Travailler ce domaine",
    onClick: () => onStart?.(model.selected),
  });
  detail.append(
    detailTitle,
    detailProgress,
    node("h4", "", "Notions à travailler"),
    topics,
    start,
  );
  grid.append(modules, detail);
  const next = node("section", "ui-course-hub__card");
  const nextTitle = node("h4", "");
  next.append(
    node("div", "ui-course-hub__kicker", "PROCHAINE ÉTAPE"),
    nextTitle,
    node(
      "p",
      "ui-course-hub__muted",
      "Votre position et vos réponses sont sauvegardées sur cet appareil.",
    ),
    createButton({ label: "Continuer", onClick: () => onContinue?.() }),
  );
  element.append(course, heading, grid, next);
  let model = {};
  function update(data = {}) {
    model = { ...model, ...data };
    title.textContent = model.name || "Microsoft Azure Administrator";
    const total = (model.modules || []).reduce(
        (sum, item) => sum + item.total,
        0,
      ),
      explored = (model.modules || []).reduce(
        (sum, item) => sum + item.explored,
        0,
      );
    description.textContent = `${model.code || "AZ-104"} · ${explored} questions explorées sur ${total}`;
    coverage.textContent = `${total ? Math.round((explored / total) * 100) : 0} % explorés · ${(model.modules || []).length} domaines`;
    heading.textContent = `Mon parcours ${model.code || "AZ-104"}`;
    nextTitle.textContent = model.nextLabel || "Commencer une première session";
    if (model.resumeLabel) {
      const label = resume.querySelector(".ui-button__label");
      if (label) label.textContent = model.resumeLabel;
      else resume.textContent = model.resumeLabel;
    }
    const selected =
      model.modules?.find((item) => item.id === model.selected) ||
      model.modules?.[0];
    if (selected) model.selected = selected.id;
    modules.replaceChildren(
      ...(model.modules || []).map((item) => {
        const row = node(
          "button",
          `ui-course-hub__module${item.id === model.selected ? " is-active" : ""}`,
        );
        row.type = "button";
        row.dataset.pathDomain = item.id;
        row.setAttribute("aria-pressed", String(item.id === model.selected));
        const copy = node("span", "ui-course-hub__module-copy");
        copy.append(
          node("strong", "", item.label),
          node(
            "small",
            "",
            `${item.status} · ${item.explored} questions explorées sur ${item.total}`,
          ),
        );
        row.append(
          copy,
          node(
            "small",
            "ui-course-hub__module-percent",
            `${item.percent} % explorés`,
          ),
        );
        row.onclick = () => {
          update({ selected: item.id });
          modules
            .querySelector('[aria-pressed="true"]')
            ?.focus({ preventScroll: true });
          onSelect?.(item.id);
        };
        return row;
      }),
    );
    detailTitle.textContent = selected?.label || "Aucun domaine disponible";
    detailProgress.textContent = selected
      ? `${selected.explored} / ${selected.total} questions explorées`
      : "Importez une formation depuis les paramètres.";
    topics.replaceChildren(
      ...(selected?.topics || []).map((topic) => node("li", "", topic)),
    );
    start.disabled = !selected?.total;
  }
  update(initial);
  return { element, update };
}
