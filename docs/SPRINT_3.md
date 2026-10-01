# Sprint 3 - QuestionCard

## Goal

Construire le premier pattern métier du Design System sans modifier encore la QuestionCard de production.

## Delivered

- `QuestionCard` pattern composé de `Badge`, `IconButton` et `Button`.
- Hiérarchie de contenu question / prompt / réponses.
- Sélection simple et multiple démontrable dans Storybook.
- États : découverte, maîtrisée, à reprendre, examen.
- Actions : favori, note, signalement et optionnellement « à revoir ».
- Feedback correct / incorrect.
- Responsive mobile.
- Stories dédiées : Default, Selected, Correct, Incorrect, Personalised, Exam, MultipleAnswers, LongContent, Mobile.
- A11y Storybook configuré en mode erreur sur le pattern.

## Architecture decision

`QuestionCard` est un **Pattern**, pas un Component atomique.

Il compose :
- Badge
- IconButton
- Button

Les options de réponse restent provisoirement internes au pattern. Elles seront extraites en
`AnswerOption` après validation du contrat UX simple/multiple.

## Out of scope

Ce sprint ne modifie pas `index.html`, `atelier.js` ou le moteur de scoring.

La migration de production viendra après validation visuelle et fonctionnelle dans Storybook.

## Validation

1. Vérifier Default en dark et light.
2. Cliquer sur plusieurs réponses dans Playground.
3. Vérifier Correct et Incorrect.
4. Vérifier Exam avec l'action « à revoir ».
5. Vérifier Mobile en 390 px.
6. Ouvrir l'onglet Accessibility et corriger toute erreur critique avant migration.
