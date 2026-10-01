# Sprint 13 — Modal & secondary patterns

## Objectif

Harmoniser les interactions secondaires avec le nouvel AppShell sans casser les workflows métier.

## ModalSurface

Le dialogue partagé devient un composant du Design System. Il prend en charge :

- tailles `small`, `medium`, `wide` ;
- tonalités `default`, `form`, `danger`, `result`, `navigator` ;
- header / body / footer fixes ;
- focus clavier piégé dans le dialogue ;
- restauration du focus à la fermeture ;
- aucun clic extérieur ne ferme le dialogue ;
- sombre et clair via tokens sémantiques.

### Note et Signalement

Pour respecter le comportement UX demandé, **Échap ne ferme plus Note ou Signalement**. La fermeture volontaire se fait par la croix ou l'action Enregistrer / Mettre à jour.

Un compteur de caractères rend la saisie plus prévisible.

## QuestionNavigator

« Toutes les questions » gagne :

- recherche par numéro, ID, catégorie ou domaine ;
- compteur visible `résultats / total` ;
- repère de la question actuelle ;
- états correcte / erreur / répondue / non répondue ;
- favoris et signalements conservés ;
- présentation responsive.

## EmptyState

L'état vide devient un composant réutilisable et la vue historique de la Base de connaissances est alignée dessus.

## Examen / historique / import

Les résultats d'examen, l'historique, les outils d'import et la gestion des formations utilisent le même shell de dialogue.

## Storybook

Nouveaux éléments :

- `Components / ModalSurface` ;
- `Components / EmptyState` ;
- `Patterns / QuestionNavigator`.

## Suite

Sprint 14 : polish global — cohérence des actions, états hover/focus, densité mobile, micro-interactions, accessibilité et dernier passage sombre/clair.
