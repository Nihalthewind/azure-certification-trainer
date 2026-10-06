# Icons

Minimal SVG icon registry for Azure Trainer.

Sprint 2 starts with the actions already present in the product:

- star: favorite
- note: personal note
- report: primary problem-reporting icon
- flag: legacy flag icon kept for compatibility
- review: mark for review
- close: modal close

Rules:

- decorative SVGs are aria-hidden;
- the interactive component owns the accessible label;
- avoid Unicode glyphs for product actions because rendering changes between platforms.

Brand mark: exact editable Figma node 116:1009, durable SVG in assets/brand-mark.svg; PNG derivatives for the manifest. Sun/Moon: Simple Design System vector paths, adapted to existing semantic tokens, Figma components 175:301 / 175:308. Product action icons retain the existing SVG registry.
