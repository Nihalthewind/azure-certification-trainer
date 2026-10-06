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
