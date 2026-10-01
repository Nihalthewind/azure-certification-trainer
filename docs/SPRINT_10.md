# Sprint 10 — First Run Experience + Focus discoverability

## Objectif

Retirer l'explication répétée du haut de page et la déplacer au bon moment : le premier démarrage. Rendre également le mode Focus immédiatement compréhensible et accessible.

## First Run Experience

Nouveau pattern `FirstRunExperience`.

L'introduction plein écran comporte trois étapes :

1. **Bienvenue** — rôle de l'application et formation active ;
2. **Votre espace de travail** — Favoris, Notes et Signalements ;
3. **Mode Focus** — fonctionnement, sortie et raccourci clavier.

Le fond de l'application est assombri et flouté pendant l'introduction. Le composant :

- ne se ferme pas par clic extérieur ;
- piège correctement le focus clavier dans le dialogue ;
- respecte `prefers-reduced-motion` ;
- est mémorisé via `localStorage` ;
- ne s'affiche automatiquement qu'au premier lancement ;
- peut être relancé depuis **Paramètres → Revoir l'introduction**.

## En-tête permanent

Le hero historique est conservé comme identité produit mais devient compact :

- titre de la formation active ;
- nombre de questions ;
- suppression de la description marketing répétée ;
- réduction importante de la hauteur utilisée.

La description complète reste utilisée dans l'onboarding.

## Mode Focus

L'action Focus n'est plus enfouie avec les filtres.

Elle est placée à côté du titre de l'espace de travail, avec :

- icône `⛶` ;
- libellé **Mode Focus** ;
- état actif **Quitter Focus** ;
- rappel du raccourci `F` dans le tooltip ;
- visibilité renforcée par une bordure et un fond accentués.

## Storybook

Nouveau pattern :

`Patterns / FirstRunExperience`

Stories :

- Welcome
- Personal Workspace
- Focus Discovery
- Mobile

`WorkspaceToolbar` documente également le nouveau placement du bouton Focus.

## Vérifications

`npm run check-ui` vérifie notamment :

- persistance de l'onboarding ;
- action Revoir l'introduction ;
- chargement/caching du pattern ;
- hero compact ;
- Focus explicite et visible ;
- reduced motion ;
- compatibilité GitHub Pages des modules JS.
