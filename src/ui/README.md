# Azure Trainer UI System

Ce dossier contient la nouvelle couche UI extraite progressivement de l'application historique.

## Règle d'architecture

- `foundations/` : tokens et règles visuelles transverses.
- `components/` : briques UI réutilisables sans logique métier Azure Trainer.
- `patterns/` : assemblages métier (QuestionCard, ExamNavigation, SettingsPanel...).
- `pages/` : compositions de pages pour Storybook et tests visuels.

## Migration

La migration suit un *strangler pattern* :

1. reproduire l'élément existant dans Storybook ;
2. formaliser ses variantes et états ;
3. extraire le composant ;
4. remplacer progressivement l'ancien rendu ;
5. tester avant de passer au composant suivant.
