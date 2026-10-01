# Sprint 8 — QuestionViewport adaptatif

## Objectif

Utiliser réellement la surface de l’écran pendant la révision et rendre le changement de question stable.

## Livré

- nouveau pattern `QuestionViewport` partagé entre Storybook et l’application ;
- largeur de travail libérée de l’ancienne limite de 1280 px pendant une session de questions ;
- QuestionCard avec hauteur minimale basée sur `100dvh` : le footer descend naturellement en bas de l’écran sur les questions courtes ;
- suppression du scroll interne historique du prompt : les questions longues restent dans le flux normal de la page ;
- repositionnement immédiat sur le haut de la QuestionCard à chaque changement de question ;
- même comportement pour Précédent/Suivant, navigation directe, dashboard, reset d’examen et avance automatique en examen ;
- story `Patterns/QuestionViewport` pour contrôler desktop, contenu long et mobile ;
- cache Service Worker mis à jour.

## Principe UX

Une nouvelle question doit apparaître dans un contexte stable : pas de long scroll animé vers le haut, pas de conservation d’une position située au milieu de la question précédente, et pas de petit viewport interne dans le texte.

## À surveiller

Les questions comportant de très grandes illustrations continueront naturellement à dépasser la hauteur du viewport. C’est volontaire : elles utilisent le scroll de la page plutôt qu’un scroll imbriqué.
