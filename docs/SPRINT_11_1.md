# Sprint 11.1 — Complete page map + dual-theme review

## Pourquoi ce micro-sprint

Le Sprint 11 définissait l'AppShell et la densité globale, mais ne dessinait pas encore toutes les destinations principales. Il aurait été prématuré de migrer l'application de production.

Le Sprint 11.1 complète donc la carte des écrans avant la migration.

## Écrans couverts

`Pages / Azure Trainer` contient désormais :

- Tableau de bord ;
- Base de connaissances ;
- Erreurs ;
- Examen blanc ;
- Paramètres.

Chaque destination dispose d'une story **Sombre** et d'une story **Clair**.

La Base de connaissances possède également une story mobile dédiée.

## Principe sombre / clair

Les prototypes n'utilisent pas une palette parallèle spécifique à chaque écran. Ils consomment les tokens sémantiques existants :

- background ;
- rail ;
- panel ;
- surface ;
- border ;
- text-primary / secondary / subtle ;
- accent ;
- success ;
- error ;
- warning.

Ainsi, une évolution du thème est centralisée dans les foundations et se propage aux cinq écrans.

## Ce qui est réellement couvert

### Tableau de bord

- indicateurs de progression ;
- maîtrise par domaine ;
- file de reprise ;
- historique d'examens ;
- favoris et notes.

### Base de connaissances

- recherche ;
- filtres de domaines ;
- Toutes les questions ;
- Focus ;
- progression ;
- QuestionCard.

### Erreurs

- volume d'erreurs ;
- priorisation ;
- file de reprise ;
- répartition par domaine ;
- lancement d'une session ciblée.

### Examen blanc

- configuration ;
- répartition des domaines ;
- historique ;
- score précédent ;
- action de démarrage.

### Paramètres

- apparence ;
- Focus ;
- onboarding ;
- formations ;
- export/import des données ;
- installation/version.

## Limite volontaire

Les dialogues spécialisés (note, signalement, navigateur de questions, résultats d'examen, import de formation) restent des **patterns/modales**, pas des pages principales. Ils seront harmonisés ensuite avec le langage visuel retenu.

## Étape suivante

Une fois cette carte d'écrans validée, le prochain sprint peut migrer la direction retenue dans l'application réelle :

1. AppShell ;
2. NavigationItem ;
3. topbar ;
4. pages principales ;
5. responsive ;
6. thème sombre/clair ;
7. tests de non-régression.
