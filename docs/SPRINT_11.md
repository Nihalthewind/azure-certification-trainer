# Sprint 11 — Design direction: AppShell

## Pourquoi ce sprint est Storybook-first

La phase précédente a stabilisé le comportement. À partir de maintenant, les décisions visuelles importantes ne sont plus appliquées directement à la production sans comparaison.

Le Sprint 11 construit donc un **prototype de structure globale** dans Storybook. L'application réelle ne change pas encore de layout.

## Nouveau composant : NavigationItem

Le composant formalise :

- icône SVG ;
- libellé explicite ;
- compteur facultatif ;
- état actif ;
- tailles `medium` et `compact`.

Le choix est volontairement de conserver des libellés visibles pour les parcours principaux. Une barre uniquement composée d'icônes serait plus compacte mais moins découvrable.

## Nouveau pattern : AppShell

`Patterns / AppShell` propose trois directions qui partagent exactement la même architecture d'information.

### A · Équilibré

- rail : 248 px ;
- topbar : 60 px ;
- gutter principal : 32 px.

Objectif : équilibre entre lisibilité et surface de travail.

### B · Compact

- rail : 220 px ;
- topbar : 52 px ;
- gutter principal : 24 px.

Objectif : maximiser la place donnée aux questions.

### C · Aéré

- rail : 272 px ;
- topbar : 64 px ;
- gutter principal : 44 px.

Objectif : confort visuel et séparation plus forte des zones.

## Décision attendue

Comparer A / B / C sur :

1. vitesse de lecture de la navigation ;
2. place laissée à la question ;
3. hiérarchie entre formation, parcours et domaines ;
4. fatigue visuelle ;
5. comportement à 1440 × 900 ;
6. comportement mobile.

Il est possible de choisir une base et de demander un mélange précis, par exemple :

> A pour la sidebar, B pour les espacements de contenu.

## Suite

Après décision, le Sprint 12 migrera la direction retenue dans la production avec une stratégie progressive :

- `layout` → AppShell ;
- `rail-link` → NavigationItem ;
- topbar ;
- training switcher ;
- responsive ;
- tests de non-régression.

