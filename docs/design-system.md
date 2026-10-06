# Design System

Figma = source visuelle ; Storybook = code démontré ; repository = source technique. **V3 Product Experience** : [Figma](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT), [registre](../figma/project.json).

## Tokens

src/ui/foundations/tokens.css expose les aliases ; v2-minimal.css conserve la palette utilisée en V3. Thème data-theme.

| Famille | Références |
| --- | --- |
| Couleurs | --color-background/card/surface/border/text-primary/text-secondary/text-subtle/accent/success/error/warning/focus |
| Typographie | Manrope display, DM Sans body ; --font-family-* et tailles xs/sm/md/lg/xl/2xl |
| Espacement | --space-1/2/3/4/6/8/12/16 : 4/8/12/16/24/32/48/64 px |
| Radius | --radius-sm/md/lg/pill : 8/12/18/999 px |
| Ombres | --shadow de la palette thème |
| Motion | --motion-fast/normal : 120/180 ms ; --easing-standard et reduced-motion |

Collections Figma Theme, Scale, Typography et Component color dans le registre. Réutiliser variables/styles. CSS partagé src/ui/ui.css ; aucun import CSS direct dans les modules navigateur.

## Figma → Storybook → code

| Figma | Storybook | Code |
| --- | --- | --- |
| [Button](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT?node-id=12-63) | Components/Button | [button](../src/ui/components/button/button.js) |
| Badge | Components/Badge | [badge](../src/ui/components/badge/badge.js) |
| IconButton | Components/IconButton | [icon-button](../src/ui/components/icon-button/icon-button.js) |
| AnswerOption | Components/AnswerOption | [answer-option](../src/ui/components/answer-option/answer-option.js) |
| DomainSelector | Components/DomainSelector | [domain-selector](../src/ui/components/domain-selector/domain-selector.js) |
| QuestionCard | Patterns/QuestionCard | [question-card](../src/ui/patterns/question-card/question-card.js) |
| AppShell / navigation | Patterns/AppShell ; Components/NavigationItem | [app-shell](../src/ui/patterns/app-shell/app-shell.js) ; [navigation-item](../src/ui/components/navigation-item/navigation-item.js) |
| ModuleRow / hub | Patterns/CourseHub ; Pages/Accueil | [course-hub](../src/ui/patterns/course-hub/course-hub.js) |
| Introduction | Patterns/Introduction | [first-run-experience](../src/ui/patterns/first-run-experience/first-run-experience.js) |
| Entraînement V3 | Pages/Entraînement | [story](../stories/pages/Entrainement.stories.js) ; [app](../atelier.js) |
| Examen/Révisions/Paramètres | Pages/Examen blanc ; Pages/Révisions ; Pages/Paramètres | [pages](../src/ui/pages/trainer-pages/trainer-pages.js) ; [app](../atelier.js) |

Primitives communes ; DOM métier dans index/atelier ; fixtures distinctes des statistiques de production. IDs des frames/composants dans le registre.

## États / accessibilité

Button/IconButton variantes et disabled ; AnswerOption default/hover/selected/correct/incorrect/disabled ; DomainSelector sélection/clavier/focus/liste longue ; Introduction navigateur/install disponible/déjà installée/iOS ; pages Light/Dark et 390/768/1440. États supportés uniquement. Focus, labels, cibles confortables et sélection explicite obligatoires.

## Code Connect / références

Non configuré : aucun .figma.js/.figma.ts. Table et registre = mapping manuel, sans grosse migration. Material 3 Menu/List item et Simple Design System Dialog adaptés aux tokens propres, sans dépendance UI ajoutée.

CURRENT = référence validée ; EXPLORATION = proposition ; ARCHIVE = historique conservé. [Guide Figma](../figma/README.md).
