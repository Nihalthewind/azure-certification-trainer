# IconButton

Icon-only action for compact areas such as QuestionCard headers.

## API

- icon: star | note | flag | review | close
- label: accessible name, mandatory in product usage
- size: small | medium
- active
- activeTone: accent | danger | warning
- pressed: boolean | null
- disabled

## Accessibility

`aria-pressed` is only emitted when `pressed` is a boolean.
Use it for true toggles (favorite / mark for review), not simply because an action has stored data.

Examples:

- Favorite: active=true, pressed=true
- Note exists: active=true, pressed=null
- Report exists: active=true, pressed=null, activeTone=danger
