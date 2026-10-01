# Sprint 12 — Production AppShell migration

## Décision

La direction **A · Équilibré** du Sprint 11 devient la base de production.

- rail : 248 px ;
- topbar : 60 px ;
- gutters : ~32 px ;
- mêmes tokens sémantiques en sombre et en clair.

Le Sprint 12 ne remplace pas encore chaque composant métier, mais il remplace la **structure de navigation et la hiérarchie des pages** dans l'application réelle.

## AppShell réel

L'application utilise maintenant :

- rail plus épuré ;
- NavigationItem pour les parcours principaux ;
- icônes SVG partagées ;
- topbar avec destination active ;
- shell responsive ;
- comportement Focus conservé.

Le hero et le bandeau de métriques historiques ne sont plus affichés : l'information utile est portée par chaque page.

## Pages principales

### Tableau de bord

Le tableau de bord existant est conservé fonctionnellement mais remaquetté dans le nouvel AppShell.

### Base de connaissances

La QuestionCard, les filtres, Focus, Toutes les questions et les domaines restent le cœur de l'entraînement.

### Erreurs

`Erreurs` devient une vraie page d'orientation :

- compteur d'erreurs ;
- domaine prioritaire ;
- file de reprise ;
- répartition par domaine ;
- action **Lancer une session de rattrapage**.

La session de questions en erreur utilise désormais le mode interne `mistakes-session`.

### Examen blanc

Cliquer sur `Examen blanc` n'envoie plus immédiatement dans une nouvelle session.

Une page présente :

- nombre de questions ;
- durée ;
- correction ;
- dernier score ;
- historique récent ;
- session en cours éventuelle.

L'utilisateur choisit ensuite **Démarrer un examen** ou **Reprendre l'examen**.

### Paramètres

L'ancien petit popover de la sidebar est supprimé.

`Paramètres` devient une destination complète avec :

- thème ;
- Mode Focus ;
- onboarding ;
- import / gestion des formations ;
- export / import des données ;
- installation ;
- version.

## Sombre et clair

Le shell de production repose exclusivement sur les tokens sémantiques.

Une revue spécifique est appliquée aux deux thèmes pour l'élévation et le contraste, sans dupliquer le design.

## Responsive

Sous 920 px :

- le rail devient une navigation horizontale ;
- les domaines sont déplacés dans les pills de la Base de connaissances ;
- Paramètres reste directement accessible ;
- le contenu récupère toute la largeur.

## Focus

Focus reste un état du shell :

- sidebar masquée ;
- topbar compacte ;
- zone de question centrée ;
- sortie Focus conservée dans la toolbar.

## Suite

Sprint 13 : harmonisation des patterns secondaires avec le nouveau langage visuel :

- Modal ;
- QuestionNavigator ;
- Note ;
- Signalement ;
- ExamResult ;
- EmptyState / états système.
