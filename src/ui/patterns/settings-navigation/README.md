# Settings navigation

`bindSettingsNavigation(root, { initialTarget })` affiche une catégorie à la fois.
Les boutons utilisent `data-settings-target` pour désigner les panneaux existants.
Le pattern ajoute les relations tab/tabpanel et les états accessibles ; il gère
les flèches, Home et End. Il ne modifie aucune préférence ni donnée locale.

Le même comportement est utilisé par l’application et les stories Paramètres.
Les styles passent exclusivement par `src/ui/ui.css`.
