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

## Architecture et commandes

Application statique : index.html / atelier.js ; banques formations.js / questions.js / az305_questions.js ; importer.js pour IndexedDB. UI réutilisable dans src/ui/components et patterns ; pages Storybook dans src/ui/pages et stories/pages. Ne pas déplacer le moteur pour un simple changement visuel.

Commandes : npm run app, npm run storybook, npm run validate ; npm run check:docs pour le handoff, npm run test-ux et test:v3 pour les parcours, build:pages puis test:pages pour la livraison/PWA. Les tests sont dans scripts et utilisent des contextes isolés.

Avant commit : revoir status/diff, vérifier Figma = stories = application, puis validations pertinentes. Utiliser ship.ps1 lorsque tous les fichiers sont livrables ; il stage tous les changements. Attendre CI/deploy et comparer le SHA public avant de déclarer une publication terminée.

Guides humains : README.md et CONTRIBUTING.md ; détails : docs/architecture.md, docs/design-system.md, docs/deployment.md. CURRENT = référence validée ; EXPLORATION = proposition ; ARCHIVE = historique, conservé.
