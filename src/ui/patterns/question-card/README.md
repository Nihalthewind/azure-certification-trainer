# QuestionCard

Pattern métier principal d'Azure Trainer.

Il compose des composants du Design System (`Badge`, `IconButton`, `Button`) et garde encore
les choix de réponse en interne. `AnswerOption` sera extrait dans un sprint dédié lorsque
le contrat de sélection simple/multiple sera stabilisé.

## Responsabilités

- métadonnées de la question ;
- actions secondaires (favori, note, signalement, à revoir) ;
- hiérarchie question / prompt / réponses ;
- états de correction ;
- navigation précédente / suivante ;
- action principale de validation ;
- responsive mobile.

La logique métier de score, persistance et navigation de l'application ne doit pas vivre ici.
