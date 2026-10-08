# CourseHub

createCourseHub compose formation, couverture, thèmes et prochaine session. Un thème ouvert affiche le QuestionNavigator partagé : numéro, ID, état textuel, favoris et signalements, filtre et accès direct à une question. Les catégories ne sont plus affichées en liste. La grille défile sur 320 px maximum et utilise les mêmes tokens Light/Dark que l’entraînement.

courseModules projette les questions et l’état réels sans scoring parallèle. onQuestionSelect transmet l’ID de la question et son domaine ; les réponses et la progression sont préservées. ModuleRow Figma correspond aux lignes de ce pattern. Stories Patterns/CourseHub, Patterns/QuestionNavigator et Pages/Accueil ; CSS via ui.css.
