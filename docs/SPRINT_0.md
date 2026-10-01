# Sprint 0 — Stabilisation Storybook

## Objectif

Transformer l'installation Storybook issue de l'onboarding en un socle de Design System propre, sans modifier le comportement métier de l'application.

## Réalisé

- ajout d'un `.gitignore` adapté à Node, Storybook, Playwright et Vitest ;
- alignement du fallback HTML et du package sur la version applicative `2.0.7` ;
- suppression des stories et assets de démonstration Storybook ;
- création de `src/ui/{foundations,components,patterns,pages}` ;
- création d'une première couche de tokens additive ;
- ajout des stories Foundations : Colors, Typography, Spacing, Radius ;
- ajout d'un sélecteur global Dark / Light ;
- ajout de viewports Mobile / Tablet / Desktop ;
- conservation de l'application existante sans refactor métier.

## Non inclus dans ce sprint

- refactor du bouton de production ;
- migration de `atelier.js` ;
- visual regression Chromatic ;
- CI GitHub Actions ;
- publication distante de Storybook.

Ces sujets commencent au Sprint 1 et suivants.
