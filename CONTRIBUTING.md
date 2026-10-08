# Contribuer à Azure Certification Trainer

## Prérequis / installation

Node 24, npm, Git ; PowerShell 5.1 pour ship.ps1. Depuis la racine : git switch storybook, npm ci, npx playwright install chromium ; npm run app et npm run storybook dans deux terminaux.

## Workflow Git

Branche de travail/livraison : **storybook**. Vérifier branche/status avant modification. Préserver WIP ; aucune reprise automatique de rescue, réécriture ou force-push. [Stratégie](docs/branching.md).

## Modifier un composant

1. Inspecter application, [mappings](docs/design-system.md), composants, variables/styles et libraries Figma.
2. Décider/vérifier dans Figma avec instances et tokens existants ; archiver les anciennes versions.
3. Adapter src/ui/components/ ou patterns/, sans doublon ; déclarer le CSS dans src/ui/ui.css, jamais par import dans un module navigateur.
4. Adapter story, pages et application ; préserver IDs/data-*, stockage, notes, favoris, correction, examen et PWA.

## Storybook / Figma

npm run storybook → http://localhost:6006. Components/Button puis Pages/Entraînement ; toolbar thème/viewport. États supportés uniquement. [Figma](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT) et [registre](figma/project.json) identifient CURRENT. Mettre les mappings à jour ; Code Connect non configuré.

## Tests / npm run validate

    npm run validate
    npm run check:docs
    npm run test-ux
    npm run test:v3
    npm run build:pages
    npm run test:pages

Validate = check-ui + build-storybook + git diff --check ; ne remplace pas la revue visuelle et les parcours navigateur. Tests dans scripts/, stockage isolé. Vérifier Light/Dark, 390/768/1440 px, clavier, focus, labels, interactions et console. Ajouter les contrôles ciblés du README pour questions/paramètres.

## Commit

Revoir status/diff/diff --check ; corriger toute validation échouée avant commit/push. Messages feat(ui), fix, docs, chore, test ou ci descriptifs.

Lorsque **tous** les changements sont livrables :

    .\scripts\ship.ps1 -Message "feat(ui): describe the validated change"

Le script valide, stage tous les fichiers, commit si changement, puis pousse storybook. Pour plusieurs commits indépendants, sélectionner les fichiers et valider chaque commit.

## Pull Request / publication

Décrire problème, résultat, frames/stories et validation. PR vers storybook/main contrôlées sans publier. La branche stable et la branche par défaut sur GitHub sont storybook. Vérifier run et SHA public selon [déploiement](docs/deployment.md).

## Definition of Done

Pour une modification UI :

- [ ] Figma = Storybook = application ; registre/documentation à jour.
- [ ] Desktop/tablette/mobile, Light/Dark vérifiés.
- [ ] Clavier, focus, labels, disabled et feedback accessibles.
- [ ] Moteur, stockage et PWA préservés ; console sans erreur.
- [ ] Validate, tests ciblés et liens docs réussis.
- [ ] Diff relu, commit propre ; si publication, run/SHA public vérifiés.

Non visuel : code, tests pertinents, documentation, validate, diff et commit. Aucun secret frontend/Git.
