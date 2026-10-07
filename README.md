# Azure Certification Trainer

Préparation interactive à Microsoft Azure Administrator AZ-104 : apprendre, s’entraîner, comprendre ses erreurs et réviser.

| Ressource | Accès |
| --- | --- |
| Application / démo | [Ouvrir l’application](https://nihalthewind.github.io/azure-certification-trainer/) |
| Figma | [Design System — « 00 · Start Here »](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT) |
| Storybook | npm run storybook → http://localhost:6006 ; [artifact CI](https://github.com/Nihalthewind/azure-certification-trainer/actions/workflows/storybook-ci.yml) |
| Repository | [GitHub — branche stable storybook](https://github.com/Nihalthewind/azure-certification-trainer/tree/storybook) |

## Présentation et fonctionnalités

**V3 Product Experience** donne la priorité à la formation. Accueil regroupe formation, modules et prochaine session ; Entraînement met la question au premier plan.

- AZ-104 : 568 questions, cinq domaines, examen blanc 48 questions / 100 minutes. AZ-305 : 286 questions ; formations importables.
- Filtre de domaine, réponses/corrections, notes, favoris, signalements et révisions ciblées.
- Examen chronométré, questions à revoir, historique et reprise.
- Light/Dark, clavier, navigation mobile et traduction EN/FR avec le profil.
- Progression locale, export/import JSON, PWA et installation réelle facultative.

Voir la [vision produit](docs/product.md). Aucun backend ou compte cloud actuel.

## Démarrage rapide

Prérequis : **Node.js 24**, npm et Git. PowerShell 5.1 pour le script de livraison Windows.

    git clone https://github.com/Nihalthewind/azure-certification-trainer.git
    cd azure-certification-trainer
    git switch storybook
    npm ci
    npm run app

Ouvrir http://127.0.0.1:5173. Second terminal : **npm run storybook**, puis http://localhost:6006. Si le port Vite est occupé, utiliser l’adresse affichée.

## Scripts et tests

| Commande | Usage |
| --- | --- |
| npm run app | Application locale Vite |
| npm run storybook | Catalogue interactif |
| npm run validate | **Obligatoire avant livraison** : check-ui → build-storybook → git diff --check |
| npm run check:docs | Liens locaux et mappings du handoff |
| npm run test-ux | Apprentissage et conservation des données |
| npm run test:v3 | Cinq pages, domaines, introduction, thèmes et responsive |
| npm run build:pages | Paquet statique dans dist-pages/ |
| npm run test:pages | Sous-chemin Pages, mise à jour PWA et hors ligne |
| npm run figma:export | Références locales pour comparaison Figma |

Tests navigateur : **npx playwright install chromium** (CI Linux : --with-deps). Contextes isolés, sans supprimer vos données. Contrôles ciblés : node scripts/verify-account-clarity.mjs ; node scripts/verify-training-workspace.mjs ; node controle_qualite.js.

## Stack / structure

Application statique HTML/CSS/JavaScript, composants DOM, Vite, Storybook HTML et Playwright.

| Zone | Contenu |
| --- | --- |
| index.html / atelier.js / atelier.css | Application et moteur |
| formations.js / questions.js / az305_questions.js | Catalogue et banques |
| importer.js | Formations importées |
| src/ui/foundations/ | Tokens et typographie |
| src/ui/components/ | Button, Badge, AnswerOption… |
| src/ui/patterns/ | AppShell, QuestionCard, CourseHub… |
| src/ui/pages/ | Compositions Storybook |
| src/ui/integration/ | Raccordement à l’application |
| stories/ | Foundations, Components, Patterns, Pages, Quality |
| scripts/ | Validations, tests et publication |
| figma/ / docs/ / .github/workflows/ | Registre, guides et CI |

Tests dans scripts/, pas dans tests/. Voir [architecture et sécurité](docs/architecture.md). Les anciens sprints et payload sont des [archives identifiées](docs/archive/README.md).

## Design System / Storybook

**Figma → Storybook → application** : une même version. Manrope pour les titres, DM Sans pour l’interface, tokens Light/Dark, CSS partagé dans src/ui/ui.css.

Commencer par Components/Button puis Pages/Entraînement. Les cinq pages et Patterns/Introduction montrent le produit courant ; leurs valeurs sont des fixtures.

[Mappings Figma → Storybook → code](docs/design-system.md) ; [guide Figma](figma/README.md). Code Connect non configuré.

## Déploiement

Push validé sur **storybook** → workflow unique Storybook CI → application GitHub Pages. Storybook reste un artifact ; aucune URL publique Storybook configurée.

[version.json](https://nihalthewind.github.io/azure-certification-trainer/version.json) expose commitSHA et buildDate à comparer au run réussi. Voir [livraison/PWA/rollback](docs/deployment.md). Ne pas effacer les données pour actualiser la PWA.

## Documentation / contribution / roadmap

- [Produit](docs/product.md) · [Architecture](docs/architecture.md) · [Design System](docs/design-system.md)
- [Déploiement](docs/deployment.md) · [Branches](docs/branching.md) · [Décisions](docs/decisions/README.md)
- [Contribution et Definition of Done](CONTRIBUTING.md) · [Règles agents](AGENTS.md)
- [Roadmap : actuel, prochaine étape, vision SaaS](docs/roadmap.md)

Présentation : README → application → Figma Start Here → Storybook → architecture → roadmap.

## Licence / statut

Projet statique en développement. package.json déclare **ISC** ; aucun fichier LICENSE distinct présent. Version applicative 3.1.0 ; le SHA public identifie la livraison.

Corrections produit : `npm run test:corrections` vérifie 16 configurations FR/EN × Light/Dark × desktop/tablette/mobile, la pagination et la conservation des données. Voir [le suivi](docs/product-corrections-audit.md).
