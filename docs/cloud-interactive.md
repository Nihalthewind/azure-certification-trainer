# Cloud Interactive — v3.1.0

Référence visuelle : [Figma CURRENT](https://www.figma.com/design/jKDnAtVtPXQvQ74xVNFUeT?node-id=264-486). Les modes Cloud Light/Dark reprennent les collections Theme, ComponentColor et Scale ; les versions v3.0.1 sont archivées. Le logo fourni est conservé sans retouche dans assets/cloud-mark.png.

- Chronomètre de l’examen visible dans une barre persistante.
- Travailler ce domaine devient un Button primaire après expansion du module.
- Images/PDF des questions et corrections : lecteur non modal avec défilement indépendant, zoom image et fermeture Échap. Sur mobile/tablette, le support occupe le volet supérieur et la question reste utilisable dessous.
- Chaque nouvelle séance de révision efface les brouillons des questions sélectionnées. Les résultats historiques, favoris, notes et autres formations sont préservés.
- Un seul bloc Pourquoi réunit les explications sans répéter À retenir.
- Palette Azure, contraste du CTA et logo identiques dans les thèmes clair/sombre.

Stories : pages existantes, FeedbackPanel, Patterns/DocumentReader (Light/Dark, 390/768/1440). Tests : npm run test:cloud, npm run test:corrections, npm run test-ux, npm run test:v3, npm run validate, npm run check:docs, npm run build:pages et npm run test:pages. Les tests utilisent exclusivement des profils isolés.
