# Azure Certification Trainer — Design System

[Fichier principal](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT) : **00 · Start Here**. Courant : **Cloud Interactive / Study Workspace**, application 3.1.0. [project.json](project.json) donne pages/frames/composants/variables/mappings, sans secret.

## Structure / conventions

00 Start Here → 01 Foundations → 02 Components → 03 Patterns → 04 Pages → 05 Mobile → 06 Explorations.

CURRENT = référence validée ; EXPLORATION = proposition ; ARCHIVE = historique. La section CURRENT · Cloud Interactive · v3.1.0 dans 04 Pages réunit les écrans et variantes Light/Dark ; leurs IDs sont dans project.json. Les frames v3.0.1 sont archivées. V2/Account clarity archivées sans suppression ; [ancien registre](imported-v2-reference.json).

## Workflow

Inspecter écran/DS/libraries ; décider/vérifier dans Figma ; adapter stories/application avec mêmes tokens/instances. Auto Layout, textes éditables, composants ; aucune interface aplatie.

npm run figma:export produit test-results/figma-import isolé, sans lire/effacer les données utilisateur ni téléverser automatiquement. Comparer et maintenir le registre.

Light/Dark et 390/768/1440 ; clavier/interactions ; validate/tests avant commit/push. [Mappings](../docs/design-system.md), Code Connect non configuré.

## Stories / données

Components primitives ; Patterns compositions ; Pages cinq écrans. Données Figma/Storybook = fixtures ; production = catalogue/progression réels. Tests test-ux/test:v3/account-clarity/training-workspace/test:pages selon [contribution](../CONTRIBUTING.md).

Corrections produit : `npm run test:corrections` vérifie 16 configurations FR/EN × Light/Dark × desktop/tablette/mobile, la pagination et la conservation des données. Voir [le suivi](../docs/product-corrections-audit.md).
