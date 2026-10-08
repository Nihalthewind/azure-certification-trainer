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

Brand mark: original artwork retained in assets/cloud-mark.png, presented through the self-contained assets/favicon.svg viewport. Its rounded clip removes the white canvas in Light/Dark. Application, favicon and PWA PNG exports share this exact visual; regenerate PNGs with node scripts/generate-app-icons.mjs. CURRENT Figma component 264:487 uses the same original image and crop. Sun/Moon: Simple Design System vector paths, adapted to existing semantic tokens, Figma components 175:301 / 175:308. Product action icons retain the existing SVG registry.
