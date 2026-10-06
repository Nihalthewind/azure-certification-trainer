import { createDomainSelector } from "../../src/ui/components/domain-selector/domain-selector.js";
import { courseHubFixture } from "../../src/ui/pages/trainer-pages/trainer-pages.js";
const options = [
  { value: "all", label: "Tous les domaines" },
  ...courseHubFixture.map((m) => ({ value: m.id, label: m.label })),
];
export default {
  title: "Components/DomainSelector",
  parameters: { layout: "padded", a11y: { test: "error" } },
  render: (args) => {
    const controller = createDomainSelector({
      ...args,
      options: args.longList
        ? [
            ...options,
            ...Array.from({ length: 15 }, (_, i) => ({
              value: "extra-" + i,
              label: "Notion complémentaire " + (i + 1),
            })),
          ]
        : options,
    });
    if (args.focus) requestAnimationFrame(() => controller.focus());
    return controller.element;
  },
};
export const Closed = {};
export const Open = { args: { open: true } };
export const Selected = { args: { value: "T3" } };
export const KeyboardFocus = { args: { focus: true } };
export const LongList = { args: { open: true, longList: true } };
export const Mobile = {
  args: { open: true },
  globals: { viewport: { value: "mobile", isRotated: false } },
};
export const Dark = { args: { open: true }, globals: { theme: "dark" } };
