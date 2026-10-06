# Import de V2 Minimal

Source fournie : `azure-trainer-v2-minimal-source.zip`.

SHA-256 : `f43a1f49ed2ea31d4ebca3986a7f6b6cbadd476294cdef937678916f6fee7c36`.

L'archive et le dossier extrait ne contiennent ni fichier `.fig` ni lien vers
un document Figma. Un document **Azure Trainer — V2 Minimal** a été créé dans
le compte Figma connecté, à partir des composants et styles du dépôt :
https://www.figma.com/design/Xs3HfY4USKunAzd3sHmoXR.

Le registre de liaison est `figma/project.json`. La commande
`npm run figma:export` produit les structures DOM, styles résolus et références
PNG des six vues dans les deux thèmes et aux trois largeurs prévues.

## Interface importée

- Palette claire/sombre V2, surfaces sobres et métriques de la navigation.
- AppShell et compositions des six pages dans Storybook.
- Recherche globale, parcours par domaine et outils d'apprentissage en production.
- Icônes d'action et marqueurs des favoris/signalements du Sprint 14.3.

Les styles passent par `src/ui/ui.css`. La couche `v2-minimal.css` est chargée
en dernier et contient les adaptations nécessaires au workflow existant.

## Adaptations au projet actuel

L'archive contient une version antérieure des sessions d'entraînement. Le code
actuel de reprise, les sessions de dix questions, les corrections structurées
et les commandes mobiles sont conservés. Les IDs existants restent présents.

Les modules, les notions, les compteurs et les notes utilisent les données
de la certification active. Le profil fictif et les actions de compte ou de
notification de la maquette sont remplacés par les fonctions locales disponibles.
Les catégories des paramètres permettent de rejoindre les sections existantes.

Les clés de progression `localStorage` sont conservées. La version de
l'application et le cache PWA passent à `2.1.0`. Les nouvelles feuilles CSS
sont précachées ; le déploiement GitHub Pages reste inchangé.

## Vérification

`npm run validate` vérifie les imports UI, construit Storybook et contrôle le diff.
`npm run test-ux` couvre sombre/clair à 390, 768 et 1440 px, la reprise des
sessions/examens, les anciennes sauvegardes, les parcours AZ-104/AZ-305,
la recherche par identifiant et la sauvegarde des notes rapides.
