# Badge

Compact non-interactive metadata/status component.

## API

- label
- tone: neutral | accent | success | error | warning
- shape: rounded | pill
- size: small | medium
- role: optional DOM role

## Product mapping

- `.topic-pill` -> tone=accent, shape=rounded, size=small
- `.status-pill` -> tone=neutral, shape=pill, size=small
- mastered -> tone=success
- to review / incorrect -> tone=error

Badge is not clickable. If the element performs an action, use Button or IconButton.
