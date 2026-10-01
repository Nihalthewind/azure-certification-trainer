# Azure Certification Trainer — UI System Audit

**Baseline auditée : dépôt Storybook fourni le 1er octobre 2026**  
**Runtime détecté : v2.0.7**  
**Stack : HTML / CSS / JavaScript + Storybook 10.6.1 / html-vite**

## 1. Décision d'architecture

Pour Azure Trainer, conserver **Storybook HTML + Vite** pour la première phase. Ne pas migrer vers React uniquement pour Storybook.

Objectif : extraire progressivement l'UI du code impératif existant vers un système de composants réutilisables, documentés et testables, sans réécrire le moteur de questions.

Approche recommandée : **strangler pattern UI**.

1. Reproduire l'UI existante dans Storybook.
2. Extraire un composant réel.
3. Faire consommer ce composant par l'application.
4. Vérifier qu'aucune fonction métier n'est cassée.
5. Passer au composant suivant.

---

## 2. État constaté

### Application

- `index.html` contient l'App Shell et les principaux conteneurs UI.
- `atelier.css` centralise pratiquement tout le design.
- `atelier.js` mélange état, logique métier, génération HTML, événements et rendu.
- Les banques de questions sont séparées de l'UI (`questions.js`, `az305_questions.js`).
- La progression est conservée localement.
- Le projet possède déjà dark/light, responsive, focus visible et reduced motion.

### Storybook

- Storybook 10.6.1 est installé avec `@storybook/html-vite`.
- `atelier.css` est déjà importé dans `.storybook/preview.js`.
- Addons déclarés : Docs, A11y, Vitest, Chromatic.
- Les stories de démonstration Storybook sont encore présentes.
- `AzureButton.stories.js` ne représente pas encore le vrai bouton de production : il crée un `<button>` sans les classes du produit.

### Dette structurelle

- 88 IDs statiques dans `index.html` : fort couplage au DOM.
- 78 classes statiques et environ 415 règles CSS.
- Les composants ne sont pas encore des unités de code indépendantes.
- Beaucoup de HTML dynamique est construit directement dans `atelier.js`.
- Les événements sont rattachés après chaque rendu via `onclick` / `onchange`.
- Les breakpoints sont dispersés (`1100`, `980`, `830`, `640`, `600`).
- Les espacements, rayons et tailles ne sont pas tokenisés.
- Les icônes sont majoritairement des caractères Unicode, donc leur rendu dépend de la plateforme.

---

## 3. Incohérences techniques à corriger avant refactor UI

### Versioning

- `APP_VERSION` : `2.0.7`.
- cache Service Worker : `azure-trainer-v2.0.7`.
- README : `v2.0.7`.
- fallback HTML `#versionLabel` : `v2.0.6`.

Le JS corrige le label après démarrage, mais la source doit rester cohérente.

### Git

Aucun `.gitignore` n'est présent dans l'archive auditée. Ajouter au minimum :

```gitignore
node_modules/
storybook-static/
coverage/
test-results/
playwright-report/
debug-storybook.log
.DS_Store
```

### Storybook

L'installation a signalé des erreurs non bloquantes pour la configuration de certains addons. Storybook démarre, mais il faudra valider séparément :

- A11y
- Vitest
- Playwright browser tests
- build statique `npm run build-storybook`

---

## 4. Cartographie Design System

### FOUNDATION

#### Couleurs

Tokens existants :

- background
- rail
- panel
- card
- surface
- border
- ink
- muted
- subtle
- accent
- accent ink
- success
- error
- shadow

À ajouter / normaliser :

- warning
- info
- focus
- overlay
- disabled
- interactive hover / active

Éviter les couleurs codées en dur encore présentes dans certains états (`#f0bc45`, `#f08a78`, etc.).

#### Typographie

Familles actuelles :

- DM Sans
- Manrope

Créer les rôles :

- display
- heading-xl / lg / md / sm
- body-lg / md / sm
- label
- caption
- code / mono si nécessaire

#### Spacing

Créer une échelle unique, par exemple :

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64`

#### Radius

Créer une échelle :

`sm / md / lg / pill`

#### Breakpoints

Consolider en 3 ou 4 niveaux au lieu de media queries dispersées :

- mobile
- tablet
- desktop
- wide (optionnel)

#### Motion

Définir :

- duration-fast
- duration-normal
- easing-standard

Conserver `prefers-reduced-motion` déjà présent.

#### Icons

Remplacer progressivement les caractères Unicode par une collection SVG cohérente.

---

## 5. Components à créer

### Priorité P0

1. **Button**
   - primary
   - secondary / soft
   - ghost
   - danger
   - disabled
   - icon + label
   - small / medium

2. **IconButton**
   - default
   - active
   - favorite
   - note
   - report

3. **Badge / Pill**
   - neutral
   - accent
   - success
   - error
   - warning
   - status

4. **ProgressBar**
   - global progress
   - mini/domain progress
   - accessible value

5. **FormField**
   - input
   - search
   - select
   - textarea
   - label / help / error

6. **Modal**
   - standard
   - wide
   - focus management
   - escape
   - action footer

### Priorité P1

7. NavigationItem
8. TrainingSwitcher
9. StatCard
10. DomainProgress
11. EmptyState
12. Toast
13. Disclosure / Details
14. AnswerOption
15. BinaryChoice

---

## 6. Patterns métier

1. **AppShell**
   - Sidebar
   - TopBar
   - Main content

2. **WorkspaceToolbar**
   - Search
   - Domain filter
   - Question navigator
   - Exam controls

3. **QuestionCard**
   - metadata
   - question status
   - actions
   - prompt
   - assets
   - answer controls
   - feedback
   - navigation

4. **DomainMasteryList**

5. **DashboardSummary**

6. **ExamTrend**

7. **ReviewQueue**

8. **FavoritesPreview**

9. **QuestionNavigator**

10. **ExamHistory**

11. **SettingsPanel**

12. **ExamResult**

13. **NoteEditor**

14. **ReportQuestionForm**

15. **TrainingManager / ImportTraining**

---

## 7. Pages / Views

1. Dashboard
2. Base de connaissances
3. Erreurs
4. Examen blanc

Les domaines ne sont pas des pages différentes : ce sont des variantes filtrées de la Base de connaissances.

---

## 8. États Storybook prioritaires

### Button

- Primary
- Secondary
- Disabled
- WithIcon
- Dark
- Light

### QuestionCard

- Unanswered
- Selected
- Correct
- Incorrect
- Knowledge / self-grade
- Favorite
- WithNote
- Reported
- WithImage
- CaseStudy
- ExamPending
- ExamAnswered
- ExamFlagged

### Modal

- Default
- Wide
- LongContent
- Confirmation
- Form

### DomainProgress

- NotStarted
- Weak
- Consolidating
- Strong

### Dashboard

- Empty / new learner
- InProgress
- ManyErrors
- WithExamHistory
- Mobile

---

## 9. Dette UX / accessibilité

### Points déjà positifs

- styles `:focus-visible`
- boutons sémantiques sur la majorité des actions
- `aria-live` sur le toast
- `aria-pressed` utilisé pour plusieurs toggles
- `prefers-reduced-motion`
- libellés `aria-label` sur plusieurs icon buttons

### À renforcer

- focus trap et restitution du focus sur fermeture de modal
- utiliser un vrai bouton pour les surfaces interactives quand possible, plutôt que `section role="button"`
- formaliser états loading / empty / error
- garantir contrastes pour light + dark dans Storybook A11y
- tester entièrement au clavier
- remplacer Unicode icons pour cohérence visuelle et accessibilité

---

## 10. Architecture cible

```text
src/
  ui/
    foundations/
      tokens.css
      typography.css
      themes.css

    components/
      Button/
      IconButton/
      Badge/
      ProgressBar/
      FormField/
      Modal/
      Toast/
      NavigationItem/
      AnswerOption/

    patterns/
      AppShell/
      WorkspaceToolbar/
      QuestionCard/
      DomainMasteryList/
      DashboardSummary/
      QuestionNavigator/
      ExamHistory/
      SettingsPanel/

    pages/
      Dashboard/
      Study/
      Mistakes/
      Exam/

  app/
    state/
    storage/
    exam/
    trainings/

.storybook/
stories/  # temporaire pendant migration, puis stories colocalisées avec les composants
```

À terme, préférer les stories colocalisées :

```text
Button/
  Button.js
  Button.css
  Button.stories.js
  Button.test.js
```

---

## 11. Séparation métier / présentation cible

Aujourd'hui :

```text
atelier.js
  state
  business logic
  markup
  events
  DOM rendering
```

Cible :

```text
Business state / services
        ↓
View models
        ↓
UI components
        ↓
DOM
```

Exemple QuestionCard :

```text
Question + answer state
        ↓
QuestionCardViewModel
        ↓
renderQuestionCard(viewModel)
```

Storybook fournit directement des `QuestionCardViewModel` prédéfinis sans nécessiter toute l'application.

---

## 12. Backlog initial

### Sprint 0 — hygiène

- [ ] Ajouter `.gitignore`.
- [ ] Aligner toutes les références de version.
- [ ] Supprimer les stories de démonstration Storybook.
- [ ] Vérifier `npm run build-storybook`.
- [ ] Vérifier A11y/Vitest.
- [ ] Créer arborescence `src/ui`.

### Sprint 1 — Foundations

- [ ] Transformer les couleurs existantes en tokens sémantiques.
- [ ] Créer spacing/radius/typography/motion/breakpoints.
- [ ] Ajouter toolbar Storybook dark/light.
- [ ] Ajouter viewport mobile/tablet/desktop.
- [ ] Créer page Storybook `Foundations`.

### Sprint 2 — premiers composants

- [ ] Button
- [ ] IconButton
- [ ] Badge
- [ ] ProgressBar
- [ ] FormField

### Sprint 3 — composants structurants

- [ ] Modal
- [ ] NavigationItem
- [ ] StatCard
- [ ] DomainProgress
- [ ] AnswerOption

### Sprint 4 — premier pattern métier

- [ ] QuestionCard
- [ ] tous ses états Storybook
- [ ] interactions
- [ ] accessibilité
- [ ] intégration dans l'application réelle

### Sprint 5 — Dashboard

- [ ] DashboardSummary
- [ ] DomainMasteryList
- [ ] ExamTrend
- [ ] ReviewQueue
- [ ] FavoritesPreview

### Sprint 6 — Shell et responsive

- [ ] AppShell
- [ ] Sidebar
- [ ] TopBar
- [ ] SettingsPanel
- [ ] Mobile navigation

### Sprint 7 — CI / visual QA

- [ ] GitHub Actions
- [ ] build Storybook
- [ ] tests
- [ ] A11y
- [ ] Chromatic / visual regression
- [ ] PR previews

---

## 13. Definition of Done d'un composant UI

Un composant est considéré terminé lorsqu'il possède :

1. API / responsabilités documentées.
2. Design dark + light.
3. Stories représentant les états pertinents.
4. Responsive si nécessaire.
5. Navigation clavier correcte.
6. Vérification A11y.
7. Tests d'interaction si interactif.
8. Aucun état métier caché dans le CSS.
9. Utilisation réelle dans l'application.
10. Validation visuelle avant merge.

---

## 14. Première décision recommandée

**Ne pas commencer par QuestionCard.**

Commencer par les fondations puis `Button`, car presque toutes les interfaces actuelles réutilisent les mêmes concepts de boutons sous des classes différentes (`primary-button`, `soft-button`, `icon-action`, `rail-secondary`, `domain-train-button`, etc.).

Le premier objectif concret est donc :

> Un composant Button documenté dans Storybook, fidèle au produit, capable de remplacer progressivement les différentes variantes actuelles sans modifier la logique métier.
