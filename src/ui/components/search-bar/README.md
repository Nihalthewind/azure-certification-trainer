# SearchBar

`createSearchBar` crée la recherche partagée de Storybook ; `enhanceSearchBar`
adopte le champ global existant sans remplacer son ID ou ses handlers.
Le wrapper reçoit le focus visuel via `:focus-within`, les décorations restent
hors du parcours clavier. Échap vide le champ et émet l’événement `input`.
Ctrl/Cmd+K est géré par le shell de production et par le composant en Storybook.
Styles et motion sont chargés uniquement par `src/ui/ui.css`.
