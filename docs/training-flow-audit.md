# Training Flow — Cloud Interactive v3.2

Décision visuelle dans le fichier Figma principal : filtres sur une ligne,
progression sans card, une surface pédagogique principale, Focus dans le
header, navigation à la place de Valider après réponse, une explication Pourquoi.
Les IDs et les handlers du moteur sont conservés ; Réinitialiser efface seulement
les filtres. Les résultats, notes, favoris et autres formations sont préservés.

Motion partagé : Fast 120, Normal 180, Feedback 200, Progress 300, Exam 220 ms,
easing `cubic-bezier(0.2,0,0,1)`. Transition suivante : copie décorative inerte
pendant le fade de sortie, changement métier immédiat, entrée de 4 px maximum.
Focus utilise des copies décoratives dans un Shadow DOM pour préserver les
sélecteurs et le parcours clavier. Reduced motion désactive ces copies et
toutes les animations. La progression ne transitionne que si sa valeur change.

Figma utilise les Interactive Components AnswerOption, SearchBar, DomainSelector,
QuestionCard et ProgressBar. Les prototypes de page montrent sélection,
validation, navigation, Focus, thème, accordéon et activités ; les données des
prototypes restent des exemples pédagogiques, sans reproduction du moteur.

Favicon : SVG Cloud simplifié éditable, rendus 16/32/48 et PWA 192/512 issus du
même SVG. Le PNG du logo original reste intact. Les URLs relatives et le cache
PWA sont conservés pour le sous-chemin GitHub Pages.

Validation : `npm run validate`, `npm run test:training`, `npm run test-ux`,
`npm run test:v3`, `npm run test:corrections`, `npm run test:cloud`,
`node scripts/verify-training-workspace.mjs`, `npm run check:docs`,
`npm run build:pages`, `npm run test:pages`.
Les contextes Chromium sont isolés : aucune donnée du navigateur utilisateur
n’est supprimée. La matrice couvre Light/Dark, 390/768/1440 et FR/EN.

Comparaison visuelle réalisée à 1440 × 900 et 390 × 900, Light/Dark, avec une
fixture de question et de progression identique injectée uniquement dans un
contexte Chromium isolé. La banque du dépôt reste intacte. Sur desktop,
application et Storybook ont la même toolbar (x 224, y 186, largeur 1177,
hauteur 44), le même bandeau (y 246, hauteur 76,5) et le même workspace
(x 224, y 339, largeur 897). Les marges héritées des filtres et des réponses,
les contraintes Figma des boutons et le repli du placeholder mobile ont été
corrigés. Les actions mobiles suivent le compteur et restent au-dessus de
la navigation, avant et après validation. Captures : `test-results/` (ignoré).

Les frames Figma utilisent des exemples ; la banque réelle peut avoir du
contenu plus long, des images et un avis de langue originale. Les glyphes des
icônes et l’arrondi sous-pixel des polices peuvent varier entre Figma et Chromium.
La hauteur suit le contenu, sans espace réservé à une analyse supplémentaire.

Les contrôles produit complets ont réussi : navigation et bornes de sélection,
FR/EN, Focus, réponses multiples, sessions filtrées, révision et persistance,
préparation/reprise/minuterie d’examen, zoom natif 200 %, lecteur, stories et
PWA sous le chemin Pages. Le test de préparation contrôle explicitement sa
queue RAF ; il ne dépend plus d’un repaint d’onglet en arrière-plan.
Les événements d’installation PWA sont simulés ; l’installation native ne peut
pas être exécutée dans Chromium headless. Mise à jour du cache et mode hors
ligne sont testés, avec conservation de localStorage et IndexedDB.
