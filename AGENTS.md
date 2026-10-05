# Règles de développement

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
