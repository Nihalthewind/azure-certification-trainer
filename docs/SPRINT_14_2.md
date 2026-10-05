# Sprint 14.2 — Visual Contrast & Semantic States

## Pourquoi

La direction Azure Fluent du Sprint 14.1 est conservée, mais la première passe était trop douce en mode clair : les contours des boutons, champs et cartes manquaient de séparation. Les états correct/incorrect reposaient aussi trop sur une bordure ou une petite icône.

## Changements

### Contraste global

- bordure claire renforcée au niveau des tokens Azure Fluent ;
- texte secondaire plus sombre en thème clair ;
- bordures renforcées des boutons secondaires, champs, selects, recherche et contrôles iconiques ;
- contours des cartes, panneaux, modales et compteurs plus lisibles ;
- thèmes sombre et clair traités séparément.

### Réponses

Avant validation, une réponse sélectionnée reste bleue.

Après validation :

- **bonne réponse** : toute la ligne reçoit une surface verte, une bordure 2 px et un liseré interne vert ;
- **mauvaise réponse** : toute la ligne reçoit une surface rouge, une bordure 2 px et un liseré interne rouge ;
- la lettre A/B/C/D est remplie avec la couleur sémantique ;
- le fallback legacy suit les mêmes règles ;
- les questions Oui/Non marquent maintenant en rouge le choix incorrect sélectionné, en plus de montrer la bonne réponse en vert.

### Correction

FeedbackPanel reprend une bordure et un fond sémantique plus visibles pour succès/erreur.

### Storybook

`Quality / Visual Contrast` fournit trois contrôles :

- Light ;
- Dark ;
- Mobile Light.

Le board affiche boutons, champs, réponse neutre, sélectionnée, correcte et incorrecte.

## Suite

Après validation visuelle de 14.2, continuer les autres retours UX en 14.x. Quand le design est figé, passer au Sprint 15 de QA globale.
