# Sprint 4 — AnswerOption + responsive QuestionCard

## Objectif

Transformer les réponses de `QuestionCard` en véritable composant accessible et rendre les scénarios responsive reproductibles dans Storybook.

## Livré

### AnswerOption

- nouveau composant `src/ui/components/answer-option/`
- radio natif pour une question à choix unique
- checkbox native pour une question multisélection
- états : default, selected, correct, incorrect, disabled, locked
- focus clavier visible
- libellé de résultat accessible aux technologies d'assistance
- marqueurs de correction en SVG

### QuestionCard

- consomme désormais `AnswerOption`
- `fieldset` + `legend` pour le groupe de réponses
- la question devient le titre principal du pattern
- le feedback « Réponse incorrecte » est séparé de l'action personnelle « À revoir »
- mode `training` : validation explicite
- mode `exam` : pas de CTA de validation, la sélection est remontée par `onSelect`
- footer mobile : CTA principal avant Précédent / Suivant
- groupe d'actions du header avec rôle accessible explicite

### Responsive Storybook

Les stories Mobile / Tablet utilisent le global `viewport` de Storybook pour imposer réellement :

- Mobile : 390 × 844
- Tablet : 768 × 1024

### Stories ajoutées

`Components / AnswerOption`

- Playground
- Default
- Selected
- Correct
- Incorrect
- Disabled
- Multiple Choice
- Single Choice Group
- Result States

`Patterns / QuestionCard`

- Mobile
- Tablet
- Mobile Incorrect
- Exam mis à jour

## Validation attendue

1. `npm run build-storybook` passe.
2. Ouvrir `Components > AnswerOption > Result States`.
3. Ouvrir `Patterns > QuestionCard > Mobile` et vérifier que le canvas est réellement limité à 390 px.
4. Ouvrir `Patterns > QuestionCard > Incorrect`.
5. Vérifier l'onglet Accessibility : objectif 0 violation avant intégration applicative.

## Hors périmètre

Ce sprint ne remplace pas encore la QuestionCard historique générée dans `atelier.js`.
Le Sprint 5 commencera l'intégration progressive dans l'application réelle.
