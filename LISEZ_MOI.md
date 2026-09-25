# Azure Certification Trainer · 24 septembre 2026

## Démarrer

1. Décompressez toute l'archive dans un même dossier.
2. Ouvrez **OUVRIR_FORMATIONS.html** dans Chrome ou Edge. `OUVRIR_AZ104.html` reste présent pour compatibilité et ouvre le même client.
3. Choisissez la formation dans le sélecteur en haut du menu : **AZ-104** ou **AZ-305**.

La progression, les erreurs, les révisions et les examens sont séparés par formation. Les questions restent dans leur langue source (anglais) et la traduction du navigateur vers le français reste disponible.

## Formations intégrées

### AZ-104

- 568 questions.
- Base de connaissances, Révision, Erreurs et Examen blanc.
- Examen : 48 questions, 100 minutes, étude de cas de 4 questions et une question à contextes multiples.
- Les 404 fiches Q/R restent répondables, y compris celles qui nécessitent une saisie lorsqu'aucun distracteur fiable n'existe dans la source.

### AZ-305

- 286 questions extraites du PDF fourni.
- 183 questions avec choix textuels, 42 formats visuels automatiquement évaluables et 61 formats visuels en auto-évaluation.
- 125 questions utilisent une illustration d'énoncé et 103 une illustration de correction.
- Les HOTSPOT, DRAG DROP et études de cas sont conservés. Quand une correction visuelle ne peut pas être convertie proprement en champs interactifs, le client demande d'abord une réponse libre puis révèle l'illustration de correction.
- Examen de pratique : 48 questions, 100 minutes, avec une étude de cas de 5 questions issue du corpus. Ce réglage est propre à AZ-305 et peut évoluer indépendamment d'AZ-104.

Les réponses AZ-305 reproduisent le document fourni ; elles n'ont pas été silencieusement remplacées par des réponses externes.

## Importer une future formation

Dans le menu, cliquez sur **Importer une formation**. Le client accepte :

- **JSON** : recommandé pour un import complet et reproductible ;
- **CSV** : colonnes de type `question`, `A`, `B`, `C`, `D`, `reponse`, `domain`, `explication` ;
- **TXT** : format textuel de type `Question #... Topic ...` / `Correct Answer:` ;
- **PDF** : extraction client-side des questions textuelles de type ExamTopics.

Après analyse, choisissez **Créer une nouvelle formation** ou **Ajouter / mettre à jour** une formation existante. Les banques importées sont enregistrées dans **IndexedDB** sur l'appareil ; elles ne sont pas envoyées vers un serveur par ce client.

### Limite de l'import PDF

Le parseur PDF charge PDF.js depuis un CDN au moment de l'import. Une connexion Internet est donc nécessaire pour **importer un nouveau PDF**. Les banques AZ-104 et AZ-305 déjà intégrées, ainsi que les imports JSON/CSV/TXT, restent utilisables sans ce chargement.

Pour les formats visuels non convertibles automatiquement, le client utilise l'auto-évaluation plutôt que d'inventer des choix ou une correction.

## Fonctions conservées

- Focus disponible dans tous les modes depuis l'en-tête et le menu.
- Compact et Reset dans l'examen blanc.
- Recherche et filtres par domaine.
- Erreurs, mode Faiblesses, progression locale et export JSON.
- Thèmes clair/sombre.
- Traduction navigateur EN -> FR non bloquée.
- **Historique des examens** par formation : date, score, durée et résultat par domaine pour chaque nouvel examen terminé.
- **Toutes les questions** : navigateur direct vers l’ensemble de la banque ; pendant un examen, le même bouton permet de sauter librement entre les 48 questions de la session.

## Contrôle qualité

Exécutez :

```bash
node controle_qualite.js
```

Le contrôle vérifie les 568 questions AZ-104, les 286 questions AZ-305, les identifiants, les mécanismes de réponse, les images référencées, les paramètres d'examen, le catalogue multi-formations et la présence de l'importeur.

`AUDIT_INTEGRAL.csv` reste l'audit détaillé historique de la banque AZ-104. `RAPPORT_DE_REVISION.md` résume la migration multi-formations et les limites connues.
## AZ-305 - contexte des corrections

Les 286 questions AZ-305 affichent désormais un bloc **Contexte pédagogique** après validation. Lorsqu’une explication détaillée existe dans le PDF source, elle est conservée séparément dans **Détail du support source**.


## Version 2.0 - apprentissage personnalisé

- Tableau de bord de progression par certification.
- Mode Faiblesses basé sur les erreurs et les domaines les moins maîtrisés.
- Répétition espacée retirée : le parcours est optimisé pour une formation ponctuelle.
- Favoris et notes personnelles par question.
- Signalements locaux de contenu à vérifier.
- Export ET import de progression JSON.
- Questions marquées pendant l'examen et temps moyen enregistré dans l'historique.
- PWA installable depuis GitHub Pages avec cache hors ligne.
- Version applicative : v2.0.0.

## v2.0.3 - Interface allegee
- Historique examens retire du menu lateral : ouvrir la carte "Examens" ou le graphique d'historique depuis le Tableau de bord.
- Focus, theme, import/gestion des formations, sauvegarde/restauration et installation regroupes dans le bouton Parametres en bas a gauche.
- Le bouton Parametres reste disponible en mode Focus pour pouvoir en sortir.


## v2.0.5
- Le menu Faiblesses a été retiré.
- Le diagnostic des domaines faibles est intégré à « Maîtrise par domaine » sur le tableau de bord.
- Les domaines sont triés du plus faible au plus maîtrisé, avec un bouton pour travailler directement le domaine choisi.


## v2.0.7

- Bouton EN ⇄ FR à côté de ÉDITION 2026.
- Traduction dynamique français / anglais sans modifier les questions sources.
- Préférence de langue mémorisée localement.
