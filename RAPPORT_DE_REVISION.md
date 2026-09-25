# Révision multi-formations · Azure Certification Trainer

**Date : 24 septembre 2026**

## Résultat

Le client AZ-104 a été généralisé en moteur multi-formations sans supprimer les fonctions existantes.

| Contrôle | Résultat |
|---|---:|
| Questions AZ-104 | 568 |
| Questions AZ-305 extraites | 286 |
| Questions AZ-305 automatiquement évaluables | 225 |
| Questions AZ-305 en auto-évaluation | 61 |
| Questions AZ-305 avec choix textuels | 183 |
| Formats AZ-305 HOTSPOT | 87 |
| Formats AZ-305 DRAG DROP | 16 |
| Questions AZ-305 rattachées à un cas | 25 |
| Images d'énoncé AZ-305 utilisées | 125 questions |
| Images de correction AZ-305 utilisées | 103 questions |
| Identifiants dupliqués dans chaque banque | 0 |
| Assets référencés manquants | 0 |

## Architecture

Les éléments spécifiques à une certification sont maintenant déclarés dans `formations.js` : code, nom, domaines, banque de questions et paramètres d'examen. Le moteur `atelier.js` charge la formation active et maintient une progression séparée par identifiant de formation.

Les banques intégrées sont `questions.js` pour AZ-104 et `az305_questions.js` pour AZ-305. Une banque importée depuis le client est stockée dans IndexedDB et peut remplacer ou compléter une formation intégrée sans modifier le code source.

## AZ-305

Le corpus AZ-305 a été construit uniquement depuis le PDF fourni. Les QCM textuels utilisent la correction `Correct Answer` du document. Les HOTSPOT/DRAG DROP dont la correction textuelle expose clairement les valeurs sont convertis en lignes répondables. Lorsqu'une réponse dépend essentiellement d'une image, la question reste répondable en saisie libre et l'image de correction n'est révélée qu'après validation.

Le corpus comporte 286 identifiants uniques. Les études de cas sont regroupées et le contexte est réutilisé pour les questions qui y appartiennent. L'examen de pratique AZ-305 utilise 48 questions / 100 minutes et place à la fin une série de 5 questions provenant d'un même cas du corpus. Ce paramètre est configurable indépendamment d'AZ-104.

## Importeur

L'importeur accepte JSON, CSV, TXT et PDF. Il détecte le code de certification depuis le nom de fichier lorsque possible, crée les domaines rencontrés et génère les objets de question attendus par le moteur.

Pour un PDF, PDF.js est chargé à la demande depuis un CDN. Cette dépendance est limitée à l'import d'un **nouveau** PDF. L'utilisation normale des banques intégrées n'en dépend pas. Les documents visuels impossibles à convertir sans ambiguïté passent en auto-évaluation afin d'éviter toute correction inventée.

## Compatibilité

- `OUVRIR_FORMATIONS.html` est le point d'entrée principal.
- `OUVRIR_AZ104.html` charge la même application afin de ne pas casser l'ancien raccourci.
- La progression AZ-104 existante est migrée depuis l'ancienne clé `az104-atelier-2026-progress-v1` vers l'état multi-formations.
- Focus, Compact, Reset examen, traduction navigateur, Révision et Erreurs sont conservés.

## Vérifications exécutées

- validation syntaxique de `atelier.js`, `formations.js` et `importer.js` ;
- contrôle structurel des 854 questions intégrées ;
- présence de chaque asset référencé ;
- 100 générations d'examen AZ-104 et 100 AZ-305 : 48 questions, aucune question d'auto-évaluation dans l'examen, étude de cas conservée en fin de session ;
- tests d'import CSV, JSON et TXT ;
- inspection visuelle d'échantillons d'illustrations AZ-305 question/correction.

Le rendu automatisé complet dans Chromium headless n'est pas disponible dans l'environnement de construction ; le navigateur y reste bloqué avant `dump-dom`. Les contrôles DOM statiques et les tests de données ont donc été utilisés à la place. Une vérification manuelle dans Chrome/Edge reste recommandée avant diffusion large.
## Mise à jour AZ-305 - contextualisation des réponses

- 286/286 questions AZ-305 disposent d’un contexte pédagogique.
- 42 questions conservent en plus une explication détaillée issue du support source.
- Les corrections visuelles HOTSPOT/DRAG DROP restent affichées après validation.


## Mise à jour - historique et navigation

- Chaque examen terminé est désormais enregistré localement dans l’historique propre à la formation active.
- L’historique conserve la date, le score, le pourcentage, la durée, le nombre de réponses et le détail par domaine.
- Le bouton **Toutes les questions** ouvre une grille de navigation complète : 568 questions pour AZ-104 et 286 pour AZ-305.
- Pendant un examen blanc, la grille est limitée aux 48 questions de la session et indique uniquement leur état répondu/non répondu, sans révéler la correction.
- Les états existants sont migrés sans perte : si une ancienne progression ne possède pas encore d’historique, celui-ci est initialisé vide. Les anciens examens déjà terminés avant cette mise à jour ne peuvent pas être reconstruits car l’ancienne version ne conservait pas leurs sessions.
