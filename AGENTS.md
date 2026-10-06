# Règles de développement

Codex agit comme orchestrateur unique. Pour chaque modification UI/UX :
vérifier le dépôt et le Design System Figma principal
[Azure Certification Trainer](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT), référencé dans `figma/project.json`, synchroniser
Figma, le code et Storybook en réutilisant les composants et tokens existants,
préserver la logique métier, puis exécuter `npm run validate` et corriger les
erreurs. Créer un commit clair et pousser `storybook` uniquement après réussite
des validations et synchronisation des trois versions.

Inspecter les composants, variables, styles et libraries Figma avant de concevoir.
Décider dans Figma, vérifier visuellement, puis adapter Storybook et l’application.
Réutiliser les tokens Light/Dark ; garder la formation dominante et préserver
toutes les fonctions d’apprentissage. Les références du précédent import V2
restent archivées dans `figma/imported-v2-reference.json`.

- Travailler uniquement sur la branche `storybook`. Vérifier la branche avant toute modification.
- Ne jamais supprimer la progression dans `localStorage` sans demande explicite.
- Préserver le déploiement GitHub Pages et le fonctionnement de la PWA.
- Ne jamais stocker de token ni de mot de passe dans le dépôt.
- Préserver les IDs et les attributs `data-*` utilisés par `atelier.js`.
- Les modules navigateur ne doivent pas importer directement leur CSS.
- Le CSS partagé passe par `src/ui/ui.css`.
- Tester systématiquement les thèmes sombre et clair.
- Supporter les largeurs mobile 390px, tablette 768px et desktop 1440px.
- Exécuter `npm run validate` avant tout commit ou push. Ne jamais commit ni push si une validation échoue.
