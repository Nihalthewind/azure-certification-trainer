# Branches et livraison

Audit 6 octobre 2026 : origin Nihalthewind/azure-certification-trainer. GitHub par défaut **main** ; travail/stable/livraison **storybook**, imposée par AGENTS.

Pages build_type workflow ; ancien champ source main / sans effet sur Actions. Workflow unique storybook-ci.yml et politique environnement github-pages autorisent storybook seulement. Protection classique : API « Branch not protected » ; pas un audit exhaustif des rulesets.

## Aujourd’hui

Travailler/livrer storybook ; PR storybook/main contrôlées sans publier. Pas de rescue automatique ni rebase/reset/force-push.

## Cible — migration non effectuée

main stable/production ; feature/*, fix/*, chore/*. Migration actuellement risquée : branche, CI, Pages, ship et règles doivent rester alignés.

Plan pour intervention autorisée : comparer main/storybook et WIP, choisir SHA publié ; préparer PR sans supposer fast-forward ; adapter ensemble triggers/guards/politique Pages/script/docs/protections ; valider/publier une seule source ; comparer SHA public, vérifier PWA/données et garder revert. Aucun renommage ni changement de branche par défaut effectué.
