# Sprint 1 — Button contract

## Objectif

Créer le premier composant réel du Design System sans modifier le moteur métier Azure Trainer.

## Audit du produit existant

Les contrôles actuels utilisent plusieurs styles proches :

- `.primary-button`
- `.soft-button`
- `.rail-secondary`
- `.domain-train-button`
- `.icon-action`
- `.settings-button`

Ils ne doivent pas tous devenir des variantes du même composant.

## Décision

`Button` couvre les actions textuelles génériques :

- Primary
- Secondary
- Ghost
- Danger
- Small / Medium
- Disabled
- Loading
- Full width
- Leading / trailing icon

Restent séparés :

- `IconButton` : action icon-only
- `NavigationItem` : navigation latérale
- `SettingsButton` : déclencheur composite du panneau Paramètres

## Migration prévue

Après validation visuelle dans Storybook :

1. remplacer `primary-button` par le composant Button ;
2. remplacer `soft-button` par le composant Button ;
3. migrer `domain-train-button` vers `secondary + small` ;
4. vérifier KB, Examen, Modal et Dashboard ;
5. seulement ensuite supprimer les anciennes règles CSS devenues inutiles.

## Critères de validation

- Dark et Light
- Desktop et Mobile
- focus visible
- disabled lisible
- loading non cliquable et `aria-busy=true`
- aucune dépendance à la logique métier
