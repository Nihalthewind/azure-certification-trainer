# Sprint 14.1 — Azure Fluent + installation PWA

## Direction visuelle

La référence fournie est traduite en langage d’interface plutôt que copiée littéralement :

- cyan lumineux vers Azure blue ;
- fonds froids bleu-gris ;
- surfaces légèrement translucides ;
- grands rayons et panneaux flottants ;
- profondeur douce, sans effet 3D décoratif envahissant ;
- même hiérarchie en sombre et en clair.

La couche `azure-fluent.css` est chargée en dernier afin de garder le Design System et les garde-fous d’accessibilité du Sprint 14.

## Installation de l’application

Le bouton Installer n’est plus conditionnellement caché. La ligne Paramètres affiche maintenant un état :

- **Prête à installer** quand `beforeinstallprompt` est disponible ;
- **Installation via le navigateur** quand le navigateur n’a pas encore exposé le prompt natif ;
- **Application installée** en mode standalone.

Le projet possède maintenant un vrai `manifest.webmanifest` et des icônes 192/512. Le Service Worker est aussi enregistré en local pour permettre la QA PWA ; sur localhost/127.0.0.1, son `fetch` reste network-only afin d’éviter le cache de développement.

## Suite

Le Sprint 15 devient le quality gate : matrice desktop/tablette/mobile, sombre/clair, AZ-104/AZ-305, PWA, persistance locale, console, performance et GitHub Pages.
