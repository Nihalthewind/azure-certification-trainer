import { createButton } from "../button/button.js";

let sequence = 0;
export function createDomainSelector({
  options = [],
  value = "all",
  open = false,
  onChange,
} = {}) {
  const element = document.createElement("div");
  element.className = "ui-domain-selector";
  const trigger = createButton({
    label: "Tous les domaines",
    trailingIcon: "▾",
  });
  const menu = document.createElement("div");
  menu.className = "ui-domain-selector__menu";
  menu.id = `domain-menu-${++sequence}`;
  menu.setAttribute("role", "listbox");
  menu.setAttribute("aria-label", "Domaines de formation");
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-controls", menu.id);
  element.append(trigger, menu);
  let expanded = false;
  function setOpen(next, focus = false) {
    expanded = next;
    menu.hidden = !next;
    trigger.setAttribute("aria-expanded", String(next));
    if (next && focus)
      (
        menu.querySelector('[aria-selected="true"]') || menu.firstElementChild
      )?.focus();
  }
  function update(next = {}) {
    options = next.options || options;
    value = next.value ?? value;
    trigger.querySelector(".ui-button__label").textContent =
      options.find((item) => item.value === value)?.label ||
      "Tous les domaines";
    menu.replaceChildren(
      ...options.map((item) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "ui-domain-selector__option";
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", String(item.value === value));
        option.tabIndex = item.value === value ? 0 : -1;
        option.dataset.value = item.value;
        const mark = document.createElement("span");
        mark.setAttribute("aria-hidden", "true");
        mark.textContent = item.value === value ? "✓" : "";
        const label = document.createElement("span");
        label.textContent = item.label;
        option.append(mark, label);
        option.onclick = () => {
          value = item.value;
          update();
          setOpen(false);
          trigger.focus();
          onChange?.(value);
        };
        return option;
      }),
    );
  }
  trigger.onclick = () => setOpen(!expanded, !expanded);
  trigger.onkeydown = (event) => {
    if (["ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      setOpen(true, true);
    }
  };
  menu.onkeydown = (event) => {
    const items = [...menu.children],
      index = items.indexOf(document.activeElement);
    let next;
    if (event.key === "ArrowDown") next = (index + 1) % items.length;
    if (event.key === "ArrowUp")
      next = (index - 1 + items.length) % items.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      items.forEach((item, i) => (item.tabIndex = i === next ? 0 : -1));
      items[next]?.focus();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      trigger.focus();
    }
    if (event.key === "Tab") setOpen(false);
  };
  const outside = (event) => {
    if (!element.contains(event.target)) setOpen(false);
  };
  document.addEventListener("pointerdown", outside);
  update();
  setOpen(open);
  return {
    element,
    update,
    setOpen,
    focus: () => trigger.focus(),
    destroy: () => {
      document.removeEventListener("pointerdown", outside);
      element.remove();
    },
  };
}
