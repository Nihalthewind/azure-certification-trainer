# Sprint 10.1 — UX continuity

## Objectif

Supprimer deux frictions avant d'ouvrir la phase de design / expérience utilisateur globale.

## Onboarding stable

Les actions `Continuer`, `Commencer` et `Précédent` occupent désormais une zone fixe.

- le panneau garde une hauteur stable entre les étapes ;
- le footer ne se déplace plus ;
- le bouton principal conserve une largeur fixe ;
- `Précédent` garde sa place même lorsqu'il est masqué à la première étape ;
- le composant ne recentre plus automatiquement le bouton à chaque changement d'étape ;
- sur mobile, l'onboarding occupe un viewport stable.

Conséquence : le pointeur peut rester au même endroit pour enchaîner les étapes.

## Correction cadrée automatiquement

Après `Valider la réponse`, le nouveau `FeedbackPanel` devient automatiquement la prochaine zone de lecture.

- aucun focus clavier n'est volé ;
- pas d'animation longue ;
- le haut de la correction est aligné avec une marge de lecture ;
- titre de correction, réponse et contexte pédagogique apparaissent immédiatement ;
- le comportement ne s'applique pas au mode Examen, qui continue d'avancer vers la question suivante.

## Étape suivante

Après validation de ce micro-sprint, la phase suivante devient **Design & UX** :

1. audit visuel global ;
2. hiérarchie et densité ;
3. navigation et architecture d'information ;
4. cohérence responsive ;
5. design tokens et identité visuelle ;
6. états vides / chargement / erreurs ;
7. micro-interactions ;
8. revue accessibilité et ergonomie finale.
