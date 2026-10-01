# Azure Trainer UI System

Ce dossier contient la nouvelle couche UI extraite progressivement de l'application historique.

## Règle d'architecture

- `foundations/` : tokens et règles visuelles transverses.
- `components/` : briques UI réutilisables sans logique métier Azure Trainer.
- `patterns/` : assemblages métier (QuestionCard, ExamNavigation, SettingsPanel...).
- `pages/` : compositions de pages pour Storybook et tests visuels.
- `integration/` : compatibilité temporaire avec l'application historique pendant la migration.
- `ui.css` : entrée CSS unique utilisée par Storybook **et** l'application réelle.

## Contrainte de déploiement

Azure Trainer reste une application statique compatible GitHub Pages. Les modules JavaScript UI doivent donc pouvoir être chargés directement par le navigateur, sans bundler obligatoire.

En conséquence, les composants JavaScript n'importent pas leur CSS. Les styles sont centralisés via `ui.css`.

## Migration

La migration suit un *strangler pattern* :

1. reproduire l'élément existant dans Storybook ;
2. formaliser ses variantes et états ;
3. extraire le composant ;
4. remplacer progressivement l'ancien rendu ;
5. tester avant de passer au composant suivant.

Depuis le Sprint 5, `AnswerOption` est le premier composant réellement consommé par `atelier.js`.
