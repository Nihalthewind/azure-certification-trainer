Version historique v3.0.1. La référence actuelle est [Cloud Interactive](cloud-interactive.md), avec un seul bloc Pourquoi et le logo fourni.

# Corrections produit — suivi du 6 octobre 2026

## Finalisation du 7 octobre — mission active

Base propre : storybook ecb01ba. Les branches rescue sont conservées.

| Point | Cause dans le rendu réellement monté | Décision / contrôle à livrer |
| --- | --- | --- |
| Progression | CourseHub affiche seulement le pourcentage de questions explorées | Même valeur pour le texte et la barre ; 0/partiel/100/indisponible |
| Domaine | CourseHub détache le CTA dans un panneau latéral | Accordéon dans la ligne, un ouvert, IDs stables, retour conservé |
| Correction | FeedbackPanel extrait la première phrase et la répète | Un À retenir contenant toute l’explication et les points complémentaires |
| Révisions | renderMistakesPage monte ReviewRow/pagination | Lanceur Mes erreurs / À revoir / Favoris avec compte et IDs identiques |
| Examen | Landing analytique, focus optionnel, timer créé avant rendu | Introduction accessible, préparation contrôlée, focus automatique et reprise |
| Cadre | workbar et page-head sont des structures distinctes, CSS concurrent | PageContainer / PageHeader / PageContent partagés ; cycles de navigation |
| Activités | summary natif masqué visuellement par les styles globaux | Bouton secondaire à chevron, menu clavier, destinations existantes |

Références réellement ouvertes : Simple Design System Tabs (219:448, composant
b839f8a495ef7b0ef0a47ad1aefd6e05438825b5) et Accordion (219:468, composant
82ffc91046aa70df8a12275baa65bdf5f0a674b0). La sélection par onglets convient à
Révisions ; l’accordéon convient au parcours. Adaptation avec nos composants et
variables, sans dépendance externe. CURRENT Accueil 116:1006 / 117:1287,
Révisions 123:1960 / 123:2195, Examen 123:1556 / 123:1760.

Captures initiales isolées : test-results/polish-before-{home,training,reviews,settings}-1440-light.png.
Les origines sont déjà x224/y96, mais le titre Entraînement utilise une hauteur
28px contre 40.8px ailleurs. Aucun profil utilisateur n’est utilisé pour les tests.
Implémentation : composants partagés ActivitiesMenu, ReviewSession, ExamIntroduction et PageLayout ; mêmes fabriques dans Storybook et dans l’application. FeedbackPanel conserve tous les paragraphes utiles dans un seul À retenir. Le navigateur Révisions utilise l’instantané de session, et non la banque entière.

Deux régressions supplémentaires reproduites et corrigées : le focus transitoire sur body fermait le menu avant un clic souris (fermeture basée désormais sur relatedTarget) ; Flèche bas remontait jusqu’au gestionnaire du menu et avançait deux fois (propagation arrêtée sur le déclencheur). Le test contrôle les destinations réelles Historique/Favoris, pas seulement aria-expanded.

Preuves : matrice 16 configurations, cycles de navigation avec écart maximal 2 px, reprise d’examen et réponses conservées, préparation bloquée par requestAnimationFrame sans démarrage du timer, double clic et erreur récupérable sans perte de données. Zoom Chromium natif via tabs.setZoom(2), valeur getZoom vérifiée, quatre vues normales et introduction accessibles en FR/EN Light/Dark. Captures après : test-results/polish-after-{dashboard,study,mistakes,settings}-{light,dark}-{fr,en}-{1366,1440,768,390}.png. Références examen focus 223:4153 / 223:4242 et responsive 249:1636 / 249:1795 / 249:1728 / 249:1862.

Contrôles locaux réussis : validate, check:docs, test-ux, test:v3 (25 états ciblés × Light/Dark × mobile/desktop), test:corrections (16 configurations et zoom natif), account-clarity, training-workspace, build:pages et test:pages. Fingerprint source synchronisé avec Start Here dans Figma. La première CI a révélé une course dans le test de cache PWA : la capture précédait le démarrage du chronomètre (start:null). Le test attend désormais start numérique, horloge visible et disparition de l’introduction avant de vérifier l’absence de changement et de rechargement ; aucune assertion de conservation n’a été retirée. Livraison protégée par CI ; le SHA public version.json doit correspondre au commit poussé avant déclaration finale. Installation native OS non effectuée ; événements de prompt testés dans Chromium isolé.

## Historique validé du 6 octobre (remplacé par la mission ci-dessus)

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

Contrôle public complémentaire : une piste de grille auto utilisait la largeur intrinsèque des aperçus nowrap, masquée par une ancienne carte overflow hidden. Correction par minmax(0,1fr), typographie explicite des aperçus et suppression de l’enveloppe analytique redondante ; assertion de largeur de chaque ligne et de son statut ajoutée à la matrice. Alignement des titres sur le cadre Figma et traduction explicite de la ligne Historique.
