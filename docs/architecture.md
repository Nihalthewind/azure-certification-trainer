# Architecture actuelle

Application **statique HTML/CSS/JavaScript sans backend** ; Vite en développement, GitHub Pages en production. Aucun framework ajouté pour le handoff.

## Responsabilités

| Zone | Rôle |
| --- | --- |
| index.html / atelier.css | DOM et styles historiques |
| atelier.js | Navigation, questions, réponses/corrections, état, progression et examen |
| formations.js / questions.js / az305_questions.js | Catalogue et banques |
| importer.js | Formations importées et IndexedDB |
| src/ui/foundations/ / components/ | Tokens et primitives DOM |
| src/ui/patterns/ | Shell, question, introduction, hub |
| src/ui/pages/trainer-pages/ | Pages de démonstration |
| src/ui/integration/ / ui.css | Raccordement et CSS partagé |
| stories/ / scripts/ | Storybook, validations et tests Playwright |

Les dossiers conceptuels src/domain/, services/, data/ et tests/ n’existent pas. Les fichiers ci-dessus assurent ces responsabilités ; extraction future compatible avec les sauvegardes.

## Questions / état

Atelier construit les listes filtrées et gère réponses, correction, auto-évaluation des formats non convertibles, notes/favoris. CourseHub projette les données réelles ; DomainSelector filtre sans moteur parallèle.

Révisions combine erreurs, favoris et marques à revoir. Les nouveaux examens conservent les IDs marqués ; les anciens historiques sans IDs ne permettent pas leur reconstruction. Chronomètre, navigation, réponses et reprise restent existants.

## Stockage

localStorage : azure-cert-trainer-2026-v3, états par formation et préférences ; clés annexes introduction/langue/version et compatibilité des anciennes données AZ-104. IndexedDB : azure-cert-trainer-db / trainings pour imports. Export/import JSON avec confirmation de restauration. Cache Storage distinct pour ressources PWA.

Ne pas changer silencieusement les clés ou effacer la progression. Tests dans contextes isolés.

## PWA / livraison

Manifest/service worker : installation, précache, revalidation réseau, hors ligne. Cache de production identifié par SHA ; activation nettoie seulement les anciens caches azure-trainer-, sans toucher localStorage/IndexedDB ni recharger un examen actif.

build-pages produit dist-pages/ à partir des fichiers applicatifs et assets/src/ui. Documents, Git, outils et Storybook exclus. version.json : commitSHA/buildDate. Voir [déploiement](deployment.md).

## Storybook / tests

HTML/Vite, modules DOM et CSS partagé ; pages fixtures. Validate contrôle intégration/build ; test-ux, test:v3, scripts ciblés et test:pages vérifient parcours/PWA. Voir [contribution](../CONTRIBUTING.md).

## Sécurité / limites

Aucun secret frontend/Git. CI : permissions Actions, aucun token du dépôt. Données locales ; pas d’auth serveur, isolation multi-utilisateur ou sync cloud. Traduction Google et polices distantes dépendent du réseau. Aucune conformité réglementaire revendiquée.

## Future SaaS Architecture — non implémentée

Évaluer données versionnées, API, auth/droits, stockage cloud, sauvegardes et supervision. Facturation/admin après validation produit/sécurité. Ce n’est pas l’architecture déployée. [Roadmap](roadmap.md).
