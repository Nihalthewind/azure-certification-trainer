# Sprint 7 — FeedbackPanel + UX backlog

## Objectif

Faire sortir la correction de l'ancien rendu `.feedback` et la transformer en composant du Design System réellement consommé par l'application.

## Livré

### FeedbackPanel

Nouveau composant `src/ui/components/feedback-panel/` avec trois états :

- `success` : réponse correcte ;
- `error` : réponse incorrecte ;
- `reference` : auto-évaluation / comparaison avec la correction.

Le composant prend en charge le titre de correction, le contexte pédagogique, le détail du support source, les notes de provenance, les illustrations, les liens de documentation/PDF, l'auto-évaluation et l'action « Refaire cette question ».

La notion « À revoir » n'est plus utilisée comme synonyme de réponse incorrecte.

### Production

`atelier.js` charge maintenant `FeedbackPanel` via le Design System et l'utilise pour les corrections dans l'application réelle. Un fallback historique reste présent pendant la migration.

### Améliorations UX du backlog

1. Les modales ne se ferment plus en cliquant sur l'arrière-plan. Pour une note ou un signalement, l'utilisateur doit utiliser l'action du dialogue ou la croix.
2. « Toutes les questions » recentre automatiquement la grille sur la question courante lors de l'ouverture.

L'amélioration de mise en page plein écran / scroll stable reste au backlog pour le sprint suivant.

## Vérifications

`npm run check-ui` couvre :

- la régression QCM multiple ;
- la présence de FeedbackPanel en production ;
- le cache Service Worker ;
- la non-fermeture des modales au clic extérieur ;
- le recentrage du navigateur de questions.

Le script d'installation lance aussi `npm run build-storybook` et `git diff --check`.
