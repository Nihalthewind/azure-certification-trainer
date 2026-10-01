# Sprint 2 - IconButton + Badge

## Goal

Prepare the compact actions and metadata required by the future QuestionCard pattern.

## Delivered

- Button loading state corrected: loading keeps the visual identity of its variant.
- Button now supports a dedicated loadingLabel.
- Icon SVG registry introduced for product actions.
- IconButton component with accessible label and optional toggle semantics.
- Badge component with semantic tones and rounded/pill shapes.
- Storybook stories for IconButton, Badge, and Icons.

## Architecture decisions

### IconButton

An icon-only button is not a Button variant. It owns a mandatory accessible label.
`aria-pressed` is reserved for actual toggle behavior.

### Badge

Badge is non-interactive. It communicates metadata or status.
Clickable elements must use Button, IconButton, or a navigation component.

### Product mapping

Current QuestionCard candidates:

- favoriteButton -> IconButton / star
- noteButton -> IconButton / note
- reportButton -> IconButton / flag
- flagQuestionButton -> future Button or IconButton depending context
- topic-pill -> Badge / accent / rounded
- status-pill -> Badge / pill with semantic tone

## Validation before application migration

1. Dark and light themes.
2. Desktop and mobile viewport.
3. A11y panel without critical error.
4. Button loading remains visually primary.
5. Icon active states are distinguishable without relying only on icon shape.
6. Badge text remains readable in all tones.

No production control is migrated in this sprint. Migration starts after visual approval.
