# Azure Trainer — V2 Minimal

[Ouvrir le Design System principal](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT).

`project.json` relie ce dépôt au document et contient les identifiants des
écrans, composants, variables et styles. Il ne contient aucun identifiant de
connexion ni secret. Le fichier Figma reste hébergé dans le compte connecté.

La révision `Account clarity` du document principal représente Accueil et
Paramètres en clair et sombre à 390, 768 et 1440 px. Les quatre catégories de
paramètres sont documentées séparément. Les anciens écrans sont conservés.
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

## Entraînement — workspace

La section `trainingWorkspace` de `imported-v2-reference.json` identifie les six frames de référence
et la famille `AnswerOption` (Default, Hover, Selected, Correct, Incorrect).
Le rail desktop mesure 200 px, la topbar 64 px et le rail d’apprentissage 256 px.
La progression reste dans le bandeau de formation ; les outils sont limités à
la note rapide et à la prochaine étape. Sur tablette, ils suivent la question.

Après `npm run build-storybook`, `node scripts/verify-training-workspace.mjs`
vérifie l’application et les stories construites dans les deux thèmes et aux
trois largeurs, les raccourcis, la sélection et la priorité des états de résultat.

## Accueil, paramètres et profil

`project.json` est le registre du Design System principal. Le précédent document
d’import V2 et ses identifiants restent archivés dans `imported-v2-reference.json`.
La révision `Account clarity` utilise les variables Theme et Foundation existantes,
les instances Button et la navigation existante. Les lignes simples s’inspirent
du pattern List item de Material 3, adapté aux tokens Azure Trainer.

L’accueil présente la prochaine session, trois indicateurs sobres puis les
domaines. Historique, favoris et reprises sont disponibles dans un volet replié.
Les paramètres affichent une catégorie à la fois, avec navigation clavier.
L’accès unique aux paramètres reste en bas à gauche, y compris sur mobile.
La langue et l’avatar sont regroupés en haut à droite.

`node scripts/verify-account-clarity.mjs` vérifie l’application et Storybook en
clair/sombre, aux trois largeurs, les panneaux clavier, la conservation des données
et le cache PWA. Le moteur Google Translate est simulé dans ce test afin de vérifier
son raccordement et les états du contrôle sans dépendre du réseau externe.
