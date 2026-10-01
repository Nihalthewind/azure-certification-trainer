# Sprint 9 — WorkspaceToolbar + Focus UX

## Objectif

Transformer le mode Focus en véritable état du shell de travail, accessible en un clic, et commencer l’extraction de la barre d’outils de session.

## Focus UX

- ajout d’une action **Focus** directement dans la barre de travail ;
- en Focus, l’action devient **Quitter Focus** et reste toujours visible ;
- la navigation latérale disparaît complètement ;
- recherche, filtres et actions secondaires sont masqués ;
- en examen, **À revoir** reste disponible ;
- le layout utilise toute la largeur et la hauteur disponibles ;
- `Esc` quitte Focus lorsqu’aucune modale n’est ouverte ;
- `F` active/désactive Focus lorsque le curseur n’est pas dans un champ ou un bouton.

La clé historique `examFocus` est conservée pour ne pas casser les sauvegardes locales, même si Focus fonctionne désormais dans toute session de questions.

## Design System

Nouveau pattern : `WorkspaceToolbar`.

Stories :

- Study
- Focus Active
- Exam
- Mobile

Ce pattern documente le contrat UX de la barre de session avant sa migration complète hors de `index.html`.

## Nettoyage Storybook

Le patch supprime les stories de démonstration générées par l’installateur Storybook (`Example/*`, `AzureButton`) pour ne conserver que le Design System Azure Trainer.

## Vérifications

`npm run check-ui` vérifie désormais également :

- présence de l’action Focus directe ;
- liaison du bouton ;
- sortie par `Esc` ;
- raccourci `F` ;
- intégration/caching de WorkspaceToolbar ;
- état textuel/ARIA du toggle Focus.
