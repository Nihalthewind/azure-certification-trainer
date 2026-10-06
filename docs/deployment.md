# Publication de l’application

URL : https://nihalthewind.github.io/azure-certification-trainer/

## Source et validations

La branche de livraison est `storybook`. GitHub Pages utilise la source **GitHub Actions**,
et l’environnement `github-pages` autorise uniquement cette branche.
Le workflow `.github/workflows/storybook-ci.yml` exécute Node 24, `npm ci`,
`npm run validate`, `npm run check:docs`, `npm run test-ux`, `npm run test:v3`, `npm run build:pages` et `npm run test:pages`.
Le job de publication dépend du succès de toutes ces étapes. Les pull requests sont testées,
mais ne sont jamais publiées. Figma et l’interface ne sont pas modifiés par la publication.

`dist-pages/` contient uniquement l’application statique, ses modules, les illustrations,
le manifest et le service worker. Storybook est un artifact distinct, pas le site public.
Tous les chemins sont relatifs au sous-chemin `/azure-certification-trainer/`.

## Livraison

Sur `storybook`, après revue du diff :

```powershell
npm ci
npm run validate
npm run check:docs
npm run test-ux
npm run test:v3
npm run build:pages
npm run test:pages
.\scripts\ship.ps1 -Message "fix(deploy): describe the validated change"
```

Le script revérifie `validate`, commit et pousse. Attendre ensuite le succès des jobs
`validate` **et** `deploy` dans Actions. Un push n’est pas une preuve de publication.
La page `version.json` à l’URL publique expose `commitSHA` et `buildDate` produits en CI.
Comparer `commitSHA` au commit du run Actions, puis vérifier l’interface dans un navigateur.

## Cache et progression

Chaque paquet utilise un cache PWA identifié par le SHA livré. L’activation supprime seulement
les anciens caches préfixés `azure-trainer-`. Elle ne touche ni localStorage ni IndexedDB,
ni les caches des autres applications. Le précache recharge les ressources et le worker revalide le cache HTTP sur le réseau, conserve les réponses
réussies pour le mode hors ligne et n’utilise le fallback HTML que pour les navigations.
`version.json` reste consulté sur le réseau. Aucune mise à jour ne recharge automatiquement
une page ou un examen actif. Recharger normalement lorsque la session peut être interrompue.
Ne pas utiliser « Clear site data », ne pas supprimer la progression.

## Retour à une version validée

Identifier le dernier commit publié avec un run réussi et son `version.json`.
Sur `storybook`, créer un **nouveau commit** qui annule les changements responsables
(`git revert <commit>` ; pour plusieurs commits, les annuler du plus récent au plus ancien).
Revoir le diff, garder le mécanisme de livraison et exécuter les mêmes validations avant
de pousser. Le workflow publie ce nouveau commit traçable. Ne pas forcer le push, ne pas
déployer une branche rescue et ne pas effacer les données navigateur.

## Diagnostic initial — 6 octobre 2026

Pages utilisait `main` à la racine (`build_type: legacy`), dernier déploiement
`6295fe3f6a71c4e931503969bfc00b314ce02c06`, avec le cache `azure-trainer-v2.0.7`.
La dernière interface validée était `4cc3b415f9dfa3f4eb31a7b470f407020106cdb5` sur
`storybook` : son CI était réussi, mais ne publiait que l’artifact Storybook.
Le décalage provenait donc de la source de publication ; le cache seul ne pouvait pas
faire apparaître une interface qui n’avait jamais été livrée.

Corrections produit : `npm run test:corrections` vérifie 16 configurations FR/EN × Light/Dark × desktop/tablette/mobile, la pagination et la conservation des données. Voir [le suivi](product-corrections-audit.md).
