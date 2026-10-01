# Button

Bouton d'action générique du Design System Azure Trainer.

## API retenue

- `variant`: `primary | secondary | ghost | danger`
- `size`: `small | medium`
- `disabled`
- `loading`
- `fullWidth`
- `leadingIcon`
- `trailingIcon`

## Décisions d'architecture

- `IconButton` reste un composant séparé : un bouton carré avec uniquement une icône n'a pas les mêmes contraintes d'accessibilité ni de dimensions.
- `NavigationItem` / `rail-link` reste un composant de navigation, pas une variante de Button.
- `settings-button` reste un pattern/composant composite.
- `domain-train-button` pourra migrer vers `Button variant="secondary" size="small"`.
- `primary-button` et `soft-button` sont les premiers candidats au remplacement dans l'application après validation visuelle.

## Règle UX

Une vue ne devrait présenter qu'une action `primary` dominante par zone fonctionnelle. Les autres actions sont `secondary` ou `ghost`. `danger` est réservé aux actions destructrices ou difficiles à annuler.
