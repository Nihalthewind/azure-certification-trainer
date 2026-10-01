# QuestionCard

Pattern métier qui compose les primitives du Design System pour afficher et traiter une question.

## Composition

- `Badge` : domaine et statut
- `IconButton` : favori, note, signalement, à revoir
- `AnswerOption` : réponse radio/checkbox
- `Button` : navigation et validation

## Règles Sprint 4

- La question elle-même est le titre principal (`h2`).
- Le choix des réponses est porté par un `fieldset` / `legend`.
- Le feedback de correction est distinct de l'action personnelle « À revoir ».
- En mode `training`, l'utilisateur valide explicitement sa réponse.
- En mode `exam`, la sélection est enregistrée via `onSelect` et le CTA de validation disparaît.
- Le footer mobile place l'action principale avant la navigation.
