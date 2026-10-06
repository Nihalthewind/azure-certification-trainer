# Corrections produit — suivi du 6 octobre 2026

Base : storybook, ea1bcd1. Aucun merge rescue.

## Causes reproduites avant modification

- Accueil : hauteur document 1216 px à 1366×768 ; résumé vertical, deuxième carte Continuer et modules espacés.
- Entraînement : règles conditionnelles de sidebar, gouttière et titre différentes des autres pages.
- Recherche : focus sur input et wrapper simultanément ; clic du raccourci reçoit déjà le focus.
- Actions : boutons SVG seuls, mais tooltip CSS dans une carte overflow hidden ; risque de coupure et texte trop long sans retour à la ligne.
- Traduction : Google Translate agit sur le DOM complet, sans distinction interface / contenu / identité.
- Installation : alternative réduite à un toast, erreurs du prompt non traitées au clic Paramètres.
- Révisions : collection entière, aucun domaine ni pagination, CTA après la liste.
- Provenance : phrase ajoutée dans les deux chemins de feedback, indépendamment du contenu pédagogique.

## Référence visuelle

Figma jKDnAtVtPXQvQ74xVNFUeT, frames CURRENT (pas les archives V2). Logo mark 116:1009 : export vectoriel exact. Bibliothèque Simple Design System : pagination Previous/List/Next, Sun/Moon ; adaptation avec nos boutons et variables.

## Lots

1. Figma : cadre partagé, Accueil compact, topbar thème, Révisions paginées ; frames CURRENT Light/Dark et références anglaises éditables. Logo natif 116:1009 ; ReviewRow 181:361 ; Pagination 181:376 ; Sun/Moon 175:308 / 175:301.
2. Application : cadre commun ; progression unique ; choix et actions accessibles ; traduction explicite de l’interface, contenu pédagogique original ou traduction relue ; alternative d’installation par navigateur. Aucun changement aux banques, aux critères de correction ou aux clés de progression.
3. Storybook : cinq pages Light/Dark et EN, Accueil avec nombreux modules, Révisions vide/unique/paginée/mobile, IconButton avec label long/focus, questions longues/paragraphes/contenu structuré/recherche.
4. Tests réussis : npm ci (0 vulnérabilité), validate, check:docs, test-ux, test:v3, account-clarity, training-workspace, test:corrections, build:pages et test:pages. Commit/push et contrôle public effectués ensuite ; le SHA publié est vérifié avec version.json.

Matrice : FR/EN × Light/Dark × 1366×768, 1440×900, 768×1024 et 390×844. Accueil sans scroll desktop à 100 %, absence de débordement horizontal, notes/favoris/signalements, filtres/pagination/retour détail et données de l’autre formation conservés après actualisation. Les changements de thème et langue conservent aussi un examen actif et l’origine du chronomètre.

PWA : prompt consommé une fois, refus, indisponibilité, erreur et confirmation testés par événements simulés. Manifest, assets, mise à jour des caches et fonctionnement hors connexion vérifiés dans Chromium isolé. Installation native réelle non effectuée. Le contrôle 200 % utilise un viewport CSS équivalent (683×384), pas une manipulation du zoom du navigateur.

Guidance d’installation vérifiée dans les sources officielles : [Chrome](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en), [Edge](https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge), [Safari iPhone](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/27/ios/27).

Limite de contenu : aucune traduction pédagogique inventée. En l’absence de traduction relue avec mêmes options et indices, l’interface annonce l’affichage du contenu d’origine. Code, identifiants, notes utilisateur et noms de marque sont préservés.
