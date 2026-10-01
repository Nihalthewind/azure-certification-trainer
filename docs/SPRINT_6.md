# Sprint 6 — Header reel + correction QCM multiples

## Objectif

Poursuivre la migration de la QuestionCard de production et supprimer une regression observee apres le Sprint 5 sur l'affichage des QCM multiples.

## Correction QCM multiples

Le calcul des etats visuels est maintenant centralise dans `src/ui/integration/answer-state.js`.

Apres revelation de la correction :

- une reponse correcte est toujours affichee en succes ;
- une mauvaise reponse selectionnee est toujours affichee en erreur ;
- un distracteur non selectionne reste neutre ;
- une bonne reponse oubliee est revelee en succes.

Les indices sont normalises en nombres avant comparaison afin de rester robustes face aux anciennes progressions ou banques importees qui pourraient contenir des indices serialises en chaines.

La fonction `score()` normalise egalement les indices avant le calcul du resultat global.

Une verification de regression est ajoutee a `npm run check-ui` et une story `Multiple Result States` documente le comportement attendu.

## Migration du header de QuestionCard

Le header reel de l'application consomme maintenant deux composants du Design System deja valides dans Storybook.

### Badge

- domaine / contexte : `accent` ;
- `A decouvrir` : `neutral` ;
- `Fiche Q/R` et reponse d'examen enregistree : `accent` ;
- `A evaluer` : `warning` ;
- `Maitrisee` : `success` ;
- `A reprendre` : `error`.

### IconButton

Les actions suivantes utilisent maintenant les SVG et etats du Design System :

- Favori : vrai toggle avec `aria-pressed` ;
- Note : action avec etat visuel si une note existe ;
- Signalement : action avec etat danger si un signalement actif existe.

Les noeuds DOM historiques et leurs IDs sont conserves. `updateBadge()` et `updateIconButton()` mettent a niveau ces noeuds sans les remplacer, ce qui preserve les handlers existants dans `atelier.js` pendant la migration progressive.

## PWA

Le cache Service Worker passe a `azure-trainer-v2.0.7-ui-sprint6` et inclut les nouveaux modules JavaScript utilises directement par l'application.

## Automatisation

`npm run check-ui` verifie maintenant :

- le chargement de AnswerOption, Badge et IconButton ;
- l'utilisation des composants dans `atelier.js` ;
- la presence des modules dans le cache PWA ;
- la regression QCM multiple avec une mauvaise selection ;
- la compatibilite des modules avec un deploiement statique GitHub Pages.

## Hors perimetre

- migration du bouton `A revoir` de l'examen ;
- migration des formats Oui/Non, lignes et reponse libre ;
- migration du feedback/correction vers un composant dedie ;
- suppression des anciennes classes `.topic-pill`, `.status-pill` et `.icon-action`, conservees comme fallback temporaire.

## Criteres de validation

- `npm run check-ui` passe ;
- `npm run build-storybook` passe ;
- sur un QCM multiple volontairement faux, la mauvaise selection est rouge ;
- les bonnes reponses sont vertes ;
- Favori reste cliquable et expose correctement `aria-pressed` ;
- Note et Signalement ouvrent toujours leurs modales ;
- les badges de domaine et statut changent correctement avec l'etat de la question ;
- le mode Examen reste fonctionnel.
