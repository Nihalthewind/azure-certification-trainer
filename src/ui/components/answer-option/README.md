# AnswerOption

Contrôle de réponse accessible utilisé par `QuestionCard`.

## Contrat

- `type="single"` → `input[type="radio"]`
- `type="multiple"` → `input[type="checkbox"]`
- `selected` décrit la sélection utilisateur.
- `state="correct|incorrect"` décrit le résultat après correction.
- `locked` fige une réponse déjà corrigée sans la rendre visuellement atténuée.
- `disabled` représente une option réellement indisponible.

La sélection et le résultat sont volontairement deux dimensions différentes.
