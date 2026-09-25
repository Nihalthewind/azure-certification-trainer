# Azure Certification Trainer

Plateforme web de préparation aux certifications Microsoft Azure, actuellement dédiée à **AZ-104** et **AZ-305**.

Le projet fonctionne en **HTML / CSS / JavaScript statique**, peut être hébergé sur **GitHub Pages** et conserve la progression localement dans le navigateur.

## Formations intégrées

### AZ-104 - Azure Administrator
- **568 questions**.
- Base de connaissances complète.
- Questions QCM, Oui/Non, listes et fiches question/réponse.
- Examen blanc : **48 questions / 100 minutes**.
- Étude de cas intégrée.

### AZ-305 - Azure Solutions Architect
- **286 questions**.
- QCM, HOTSPOT, DRAG DROP et études de cas.
- Illustrations d'énoncé et de correction conservées lorsque nécessaires.
- Contexte pédagogique affiché après validation.
- Examen blanc : **48 questions / 100 minutes**.

## Fonctionnalités principales

- **Tableau de bord** par certification.
- **Maîtrise par domaine** avec tri des domaines du plus faible au plus maîtrisé.
- Bouton **Travailler / Découvrir** directement depuis chaque domaine.
- **Base de connaissances** avec recherche et filtres.
- **Erreurs** : reprise des questions réellement ratées.
- **Toutes les questions** : navigation directe dans l'ensemble de la banque.
  - `★` : question en favori.
  - `⚑` : question signalée.
- **Favoris** par question.
- **Notes personnelles** par question.
- **Signalement** d'une question : réponse douteuse, contenu obsolète, explication incorrecte, image manquante, etc.
- **Historique des examens** accessible depuis le Dashboard.
- Navigation libre entre les **48 questions** pendant un examen.
- Marquage **À revoir** pendant l'examen.
- Résultats et statistiques par domaine.
- **Focus** et thème **Sombre / Clair**.
- Traduction navigateur **anglais -> français** non bloquée.
- **Export / import des données utilisateur** au format JSON.
- **PWA installable** avec `manifest.webmanifest` et Service Worker.

## Menu simplifié

Le menu principal est volontairement limité au parcours d'apprentissage :

- Tableau de bord
- Base de connaissances
- Erreurs
- Examen blanc
- Domaines

Les fonctions secondaires sont regroupées sous **⚙ Paramètres** en bas à gauche :

- Focus
- Sombre / Clair
- Export / import des données
- Gestion / import des formations
- Installation de l'application

## Données et progression

La progression reste **locale au navigateur** :

- progression AZ-104 et AZ-305 séparée ;
- erreurs ;
- favoris ;
- notes ;
- signalements ;
- historique des examens ;
- préférences utilisateur.

Une mise à jour du site via GitHub Pages ne supprime normalement pas ces données tant que le domaine et les clés de stockage restent identiques.

Pour changer de PC ou de navigateur, utiliser **Exporter mes données** puis **Importer mes données**.

## Hébergement GitHub Pages

Point d'entrée principal :

```text
index.html
```

Le dépôt peut être publié directement avec GitHub Pages depuis :

```text
Branch : main
Folder : / (root)
```

Après une mise à jour, GitHub Pages redéploie automatiquement le site.

### Mise à jour depuis PowerShell

```powershell
git add -A
git commit -m "Azure Certification Trainer - mise a jour"
git pull --rebase origin main
git push origin main
```

Si Opera/Chrome affiche encore une ancienne version après déploiement :

```text
Ctrl + Shift + R
```

En dernier recours : DevTools -> Application -> Storage -> Clear site data.

## Fichiers principaux

```text
index.html               Interface principale GitHub Pages
OUVRIR_FORMATIONS.html   Point d'entrée alternatif
OUVRIR_AZ104.html        Compatibilité ancienne version
atelier.css              Styles
atelier.js               Moteur principal
formations.js            Configuration des formations
questions.js             Banque AZ-104
az305_questions.js       Banque AZ-305
importer.js              Import de formations
controle_qualite.js      Contrôles de cohérence
manifest.webmanifest     Configuration PWA
service-worker.js        Cache PWA
assets/                  Illustrations et ressources
```

## Contrôle qualité

Pour lancer les contrôles locaux :

```bash
node controle_qualite.js
```

État actuel :

- **568 questions AZ-104** ;
- **286 questions AZ-305** ;
- identifiants uniques ;
- assets référencés contrôlés ;
- examens configurés sur 48 questions / 100 minutes.

## Historique condensé des versions

### v2.0.7 - Traduction intégrée sans bandeau

- Le sélecteur EN / FR reste dans l'en-tête de l'application.
- Suppression visuelle du bandeau et des fenêtres Google Translate.
- Le changement de langue ne décale plus la page et conserve le design natif.
- Renforcement du nettoyage du cache de traduction côté navigateur.

### v2.0.6 - Traduction EN / FR

- bouton **EN ⇄ FR** ajouté à côté de **ÉDITION 2026** ;
- traduction à la volée de l’anglais vers le français ;
- retour à la version originale anglaise en un clic ;
- langue choisie mémorisée localement.

### v2.0.5 - Maîtrise par domaine
- Suppression du menu **Faiblesses**.
- Diagnostic des faiblesses intégré directement à **Maîtrise par domaine**.
- Domaines triés du plus faible au plus maîtrisé.
- Actions **Travailler / Découvrir** directement depuis le Dashboard.

### v2.0.4 - Hotfix démarrage
- Correction d'un crash JavaScript provoqué par un bouton absent dans certaines versions HTML.
- Initialisation rendue tolérante aux éléments optionnels.
- Évite qu'un décalage HTML/JS bloque le chargement des banques.

### v2.0.3 - Menu épuré
- Historique des examens retiré du menu latéral et accessible depuis le Dashboard.
- Focus, thème, sauvegarde, import et installation regroupés sous **⚙ Paramètres**.
- Menu latéral simplifié.

### v2.0.2 - Interactions questions
- Suppression du bouton **Je ne sais pas**.
- Correction du bouton **Note**.
- Correction du bouton **Drapeau / signalement**.
- Affichage `★` et `⚑` dans **Toutes les questions**.

### v2.0.0 - Plateforme d'apprentissage
- Tableau de bord.
- Historique des examens.
- Navigation complète dans les banques.
- Favoris, notes et signalements.
- Export / import de progression.
- PWA et versioning.
- Support multi-formations AZ-104 / AZ-305.

## Remarques

- Les questions restent dans leur langue source lorsque cela est pertinent.
- Les corrections AZ-305 provenant du support source ne sont pas remplacées silencieusement par des réponses externes.
- Les formats visuels impossibles à convertir proprement restent en auto-évaluation plutôt que d'inventer une réponse.
- Le dépôt étant public lorsqu'il est utilisé avec GitHub Pages gratuit, ne jamais y stocker de mots de passe, tokens, clés API ou données internes sensibles.

---

**Version actuelle : v2.0.7**  
**Édition : 2026**
