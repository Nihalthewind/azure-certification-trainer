# Button

Generic action button for the Azure Trainer Design System.

## API

- variant: primary | secondary | ghost | danger
- size: small | medium
- disabled
- loading
- loadingLabel
- fullWidth
- leadingIcon
- trailingIcon

## Architecture decisions

- disabled and loading are states, not variants;
- fullWidth is layout behavior, not a visual variant;
- IconButton is separate because icon-only controls need an explicit accessible label;
- NavigationItem is navigation, not Button;
- loading preserves the visual identity of the original variant while blocking duplicate activation.

## UX rule

Use one dominant primary action per functional zone. Secondary and ghost actions support it. Danger is reserved for destructive or hard-to-reverse actions.
