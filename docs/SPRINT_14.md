# Sprint 14 — UX polish global

## Objectif

Le produit est structurellement migré. Ce sprint n'ajoute pas de nouvelle architecture : il crée une **quality gate d'interaction** avant la QA finale.

## Ce qui est harmonisé

- focus clavier visible et cohérent ;
- lien « Aller au contenu » pour contourner la navigation ;
- annonces de toast via `role=status` + `aria-live` + `aria-atomic` ;
- cibles tactiles de 44 px sur écrans tactiles ;
- états disabled / busy ;
- hover réservé aux périphériques qui disposent réellement d'un hover ;
- lisibilité des textes longs dans QuestionCard / FeedbackPanel ;
- contraste d'état actif revu en sombre et en clair ;
- safe areas mobiles pour modales et toasts ;
- `prefers-reduced-motion` ;
- Windows High Contrast / `forced-colors`.

## Principe de motion

Aucune animation décorative n'est ajoutée. Les transitions servent uniquement à matérialiser :

1. un hover ;
2. un focus ;
3. un changement d'état ;
4. l'apparition contrôlée du skip-link.

Si l'utilisateur demande une réduction des animations, la couche Sprint 14 neutralise les transitions non essentielles.

## Storybook

`Quality / UX Polish` sert de quality gate visuelle avec :

- hiérarchie des CTA ;
- états de navigation ;
- focus clavier ;
- viewport mobile ;
- même markup en thème sombre et clair.

## Validation manuelle recommandée

### Clavier

- `Tab` depuis le haut de la page : le lien « Aller au contenu » apparaît ;
- la cible de focus est toujours visible ;
- Note / Signalement gardent leur comportement volontaire ;
- `F` entre en Focus et `Esc` en sort.

### Sombre / clair

Vérifier au minimum :

- navigation active ;
- bouton primaire / secondaire / danger ;
- AnswerOption sélectionnée / correcte / incorrecte ;
- Note ;
- Toutes les questions ;
- FeedbackPanel.

### Mobile / tactile

- cibles >= 44 px sur périphérique tactile ;
- modale utilisable en bas d'écran ;
- CTA de modale pleine largeur ;
- toast non masqué par la barre système.

## Étape suivante

Sprint 15 : QA fonctionnelle et responsive multi-matrice (desktop, laptop, tablette, mobile × sombre, clair × AZ-104, AZ-305), console, PWA, localStorage et performance.
