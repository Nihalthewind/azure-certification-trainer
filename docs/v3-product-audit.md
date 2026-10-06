# V3 Product Experience — audit et décisions

Base technique : `d2c153e`, branche `storybook`, dépôt propre avant intervention.
Source visuelle : Azure Certification Trainer — Design System,
`jKDnAtVtPXQvQ74xVNFUeT`. Les V2 restent conservées.

## Écarts identifiés avant implémentation

| Priorité | Figma / Storybook / application | Décision V3 |
|---|---|---|
| P0 | Parcours et Accueil séparés ; sélection des notions sur un écran distinct | Hub unique avec formation, modules réels, notions et prochaine action ; compatibilité `path` vers Accueil |
| P0 | Domaines dispersés en pills / navigation ; filtre caché sur mobile | Un sélecteur accessible « Tous les domaines », alimenté par le catalogue actif |
| P0 | Introduction en trois étapes ; installation absente du premier écran | Une card, application floutée, installation native conditionnelle et accès navigateur permanent |
| P0 | Figma prévoit Erreurs / À revoir / Favoris ; application expose seulement les erreurs | Filtres sur les erreurs, favoris et marques d’examen déjà stockées ; aucune nouvelle règle de scoring |
| P1 | Profil Thomas / objectifs et modules fictifs ; progression ambiguë | Identité locale, cinq domaines AZ-104 réels ; couverture clairement distinguée de réussite |
| P1 | Examen Figma de 50 questions contre 48 réelles ; réglages sans logique | Nombre et durée issus du moteur existant ; pas de configuration factice |
| P1 | Ancien Figma Entraînement : progression dupliquée, grand bandeau clavier | V3 reprend le workspace implémenté : question dominante, note + prochaine étape, raccourcis discrets |
| P1 | Révisions : quatre KPIs et répartition analytique dans l’application | Liste ciblée et prochaine session ; domaines faibles secondaires, sans graphiques |
| P1 | Certains écrans Figma proposent Compte / notifications sans service associé | Garder Apparence, Formation, Application et Données ; aucun compte ou bouton non fonctionnel inventé |
| P1 | Onboarding non inert et fonctions PWA couplées au bouton Paramètres | Focus trap, arrière-plan inert, états install disponible / navigateur / déjà installé et aide iOS |
| P2 | Labels et états incomplets entre mocks et application | Stories des états de composants, empty, clavier et thèmes ; tokens existants |

## Références et limites produit

Material 3 : Menu (surface temporaire, sélection explicite), List item (titre, détail,
action secondaire). Simple Design System : Dialog (scrim et card unique, largeur de
lecture limitée). Adaptation aux composants Button, Badge, AnswerOption, navigation,
styles Manrope / DM Sans et variables Theme / Scale Azure Trainer ; aucune dépendance
UI externe ajoutée.

La progression générale mesure les questions explorées sur la banque réelle ; chaque
module expose sa couverture et son état (À commencer, En cours, À renforcer, Terminé).
Les fiches non évaluables restent accessibles. Aucun module n’est artificiellement verrouillé.
Les pourcentages des stories sont des jeux de données identifiés, jamais des valeurs en production.

Les anciens accès `path` et `#parcours` désignent le même hub ; aucun moteur ou stockage
dupliqué. L’introduction garde la clé d’achèvement existante afin de ne pas interrompre
les utilisateurs déjà formés ou les examens en cours. Le catalogue AZ-305 et les formations
importées alimentent les mêmes composants.

## Matrice de vérification

Cinq écrans : Accueil, Entraînement, Examen blanc, Révisions, Paramètres.
Trois largeurs : 390, 768, 1440. Deux thèmes : Light, Dark.
Introduction : première visite, déjà vue, install disponible / acceptée / refusée,
navigateur seul, standalone, iOS, focus trap et poursuite web.
Domaines : ouvrir, choisir, tous, clavier, Escape, clic extérieur, long catalogue.
Métier : réponses, correction, favoris, notes, révisions, examen, reprise, stockage.
Livraison : validate, tests UX, paquet Pages, cache/offline, run Actions et navigateur public.

Les IDs CURRENT sont centralisés dans figma/project.json. Les contrôles couvrent les six configurations Light/Dark × 390/768/1440, les huit configurations du workspace incluant 1000 px, les six états d’installation, les parcours métier et la mise à jour PWA sans perte de données. Les sorties et captures locales sont dans test-results, ignoré par Git. La vérification publique est effectuée après livraison et comparée au SHA final.
