# Sprint 5 — Première intégration du Design System dans l'application

## Objectif

Faire cesser Storybook d'être une UI parallèle : les composants validés commencent à être utilisés par l'application réelle, sans réécrire tout `atelier.js` d'un coup.

## Décision d'architecture

Le projet reste déployable directement sur GitHub Pages, sans étape de bundling obligatoire.

Pour cela :

- les modules JavaScript du Design System n'importent plus leur CSS eux-mêmes ;
- `src/ui/ui.css` devient l'entrée CSS unique partagée entre Storybook et l'application ;
- `atelier.js` charge les modules UI nécessaires avec `import()` ;
- un fallback historique reste disponible si le module UI ne peut pas être chargé ;
- `src/ui/integration/legacy-app.css` contient uniquement les règles temporaires nécessaires pendant la migration progressive.

## Composants réellement utilisés en production

### AnswerOption

Les QCM/QCM multiples générés par `atelier.js` utilisent maintenant `createAnswerOption()`.

Conséquences :

- radio natif pour une réponse unique ;
- checkbox native pour plusieurs réponses ;
- focus clavier partagé avec Storybook ;
- états selected/correct/incorrect partagés avec Storybook ;
- même DOM et même CSS entre le catalogue UI et l'application.

Les formats spéciaux (`Oui/Non`, lignes, réponse libre) restent sur le rendu historique pour éviter un refactor trop large dans ce sprint.

### Button

Les boutons `Précédent`, `Suivant` et `Valider la réponse` du footer réel utilisent maintenant les classes du composant Button du Design System.

Le reste des boutons historiques sera migré progressivement.

## Compatibilité GitHub Pages / PWA

Le Service Worker utilise un nouveau cache de Sprint 5 et précharge les fichiers UI nécessaires au fonctionnement hors ligne.

## Test local de l'application réelle

L'intégration utilise des modules navigateur. Pour tester le Design System réellement consommé par l'application, servir le projet en HTTP plutôt que d'ouvrir `index.html` en `file://` :

```powershell
npm run app
```

Vite expose alors l'application sur `http://127.0.0.1:5173/`. GitHub Pages fonctionne également car il sert le projet en HTTPS. En local, l'application désenregistre volontairement les Service Workers de cette origine afin d'éviter qu'un ancien cache masque les modifications pendant le développement.

Si l'application est ouverte directement en `file://`, le chargement du module peut être bloqué par le navigateur ; le fallback historique garde alors les QCM utilisables.

## Automatisation

Nouvelle commande :

```powershell
npm run check-ui
```

Elle vérifie notamment :

- que l'application charge `src/ui/ui.css` ;
- que `atelier.js` charge réellement `AnswerOption` ;
- que le footer de la QuestionCard utilise les classes Button ;
- que les imports CSS du bundle UI pointent vers des fichiers existants ;
- que les modules UI n'importent plus directement des fichiers CSS ;
- que le Service Worker inclut les ressources UI critiques.

## Fallback

Si `AnswerOption` ne peut pas être importé, `atelier.js` journalise l'erreur dans la console et revient au rendu historique des QCM. L'application reste utilisable.

## Hors périmètre du Sprint 5

- remplacement complet de la QuestionCard historique ;
- migration des formats Oui/Non, lignes et réponse libre ;
- migration des boutons Favori / Note / Signalement ;
- suppression de l'ancien CSS `.choice`, `.soft-button`, `.primary-button` ;
- refactor complet du feedback/correction.

Ces éléments restent volontairement présents tant que tous leurs consommateurs n'ont pas été migrés.

## Critères de validation

- `npm run check-ui` passe ;
- `npm run build-storybook` passe ;
- un QCM simple reste répondable ;
- un QCM multiple reste répondable ;
- la correction affiche toujours la bonne et la mauvaise réponse ;
- le mode examen reste fonctionnel ;
- le mode Compact réduit toujours la densité des AnswerOption ;
- les raccourcis clavier 1–9 continuent à sélectionner les réponses ;
- le Service Worker s'installe sans erreur.
