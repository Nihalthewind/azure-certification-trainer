# Azure Trainer — V2 Minimal

[Ouvrir le document Figma](https://www.figma.com/design/Xs3HfY4USKunAzd3sHmoXR).

`project.json` relie ce dépôt au document et contient les identifiants des
écrans, composants, variables et styles. Il ne contient aucun identifiant de
connexion ni secret. Le fichier Figma reste hébergé dans le compte connecté.

Les six vues de l'application sont représentées en clair et sombre à 390,
768 et 1440 px : accueil, parcours, entraînement, examen, révisions, paramètres.
Les calques de texte et les icônes SVG sont modifiables ; les boutons réutilisent
des composants et les surfaces utilisent les variables issues du CSS existant.

## Synchronisation

1. Vérifier la branche `storybook` et les versions dans Figma et le dépôt.
2. Adapter les composants existants dans Figma, le code et leurs stories.
3. Exécuter `npm run figma:export` pour obtenir les références locales dans
   `test-results/figma-import` (dossier ignoré par Git).
4. Comparer les compositions Figma à ces références et actualiser le registre.
5. Exécuter `npm run test-ux`, puis `npm run validate` avant commit et push.

L'export démarre un serveur Vite éphémère et des contextes Playwright isolés.
Il ne consulte ni n'efface la progression du navigateur de l'utilisateur.
Il n'ajoute aucun script distant à l'application et ne téléverse rien à lui seul.
