# Questions source et navigation des supports

Révision du 9 octobre 2026, branche `storybook`. Les banques restent à **568 AZ-104 + 286 AZ-305 = 854 questions**, avec leurs IDs et leurs ressources source. Le moteur de notation et les résultats déjà enregistrés ne sont pas migrés ni supprimés.

## Vérification du contenu

Les PDF AZ-104 « Exam Q&As » et « Question Solution », le PDF AZ-305 et les illustrations originales ont servi à confronter les imports. L’OCR a aidé au repérage ; les choix rétablis ont été contrôlés sur les illustrations. Les incohérences techniques identifiées ont été confrontées à Microsoft Learn, référencé dans les questions concernées.

- **152 questions** à saisie libre, auto-évaluation ou structure mal importée ont des sélections natives. Les 61 anciennes auto-évaluations AZ-305 passent par le moteur automatique existant.
- **13 listes existantes** ont été réparées : texte OCR, libellés, doublons et réponses attendues absentes des choix. T3-Q18 comporte désormais deux sélections distinctes.
- **52 tableaux Oui/Non** affichent leurs propositions complètes plutôt que « Ligne 1 ». T2-Q95 récupère ses trois propositions. La fin tronquée de la troisième proposition de T2-Q72 est explicitée avec RG1, la portée du scénario.
- **215 explications** ont été remplacées par un raisonnement spécifique au scénario ou par l’explication détaillée de la source. Il s’agit d’un audit des imports et des incohérences repérées, pas d’une certification indépendante de chaque correction historique du corpus.

Exemples significatifs : T2-Q26 explique désormais le Load Balancer interne et Application Gateway ; T4-Q82 récupère ses choix réseau/authentification au lieu de la commande de T4-Q83 ; T4-Q83 présente `update` et `--max-surge 2` ; T4-Q41 distingue autoscaler de nœuds et HPA ; T5-Q20 distingue address space et subnet ; T5-Q66 compte une seule ressource VPN gateway active-active ; T4-Q60 distingue récupération de fichiers et restauration de VM.

AZ305-T1-Q12 rétablit la troisième action Conditional Access. AZ305-T1-Q19 compte quatre Blueprint assignments pour quatre abonnements. AZ305-T2-Q28 conserve Avro pour Event Hubs Capture. AZ305-T4-Q111 sépare le subnet délégué App Service de celui du private endpoint SQL. Les conflits avec la correction source sont explicités dans les métadonnées et le Pourquoi ; les anciennes réponses restent disponibles pour la provenance.

Certaines questions portent sur des services ou assistants historiques. Le scénario est conservé ; les explications signalent les différences actuelles pertinentes. Les banques personnalisées importées conservent leur fallback de saisie/auto-évaluation lorsqu’aucun choix fiable n’est fourni.

## Supports et design

**385 viewports** conservent le contexte utile, en retirant les zones de réponse. **108 illustrations ne contenant que ces zones** sont masquées dans la question. Les fichiers originaux ne sont pas retouchés. Les corrections natives remplacent l’affichage des illustrations de solution surlignées ; les ressources de provenance restent dans les banques.

La miniature et le lecteur partagent `source-illustration.js`. Main permet le déplacement souris/tactile et les flèches ; le zoom conserve le centre, Ajuster restaure la vue, Échap restitue le focus. Le PDF conserve son lecteur natif. La question reste utilisable à côté du volet desktop ou sous le volet mobile/tablette.

Figma CURRENT utilise les instances Button, IconButton et QuestionCard, les tokens Theme Light/Dark, et une illustration originale recadrée de T2-Q88. Les couches de l’interface restent éditables. Les références desktop, 768px et 390px sont dans [le registre](../figma/project.json). Storybook utilise la même question du fichier `questions.js`, sans fixture de contenu dupliquée.

## Contrôles reproductibles

`npm run test:content` vérifie les 854 structures, l’existence du choix attendu, les propositions et les bornes des recadrages ; il exerce notation native, Oui/Non, ouverture sans nouvel onglet, glissement souris/tactile, flèches, Ajuster et conservation des notes/favoris dans six contextes isolés Light/Dark × 390/768/1440. La CI l’exécute avant le déploiement existant. `npm run validate`, les parcours produit et les contrôles Pages/PWA complètent la validation.
