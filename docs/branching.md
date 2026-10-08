# Branches et livraison

État vérifié le 8 octobre 2026 : origin Nihalthewind/azure-certification-trainer. GitHub par défaut **storybook** ; travail/stable/livraison **storybook**, imposée par AGENTS. Le dépôt et son README affichent donc directement la version courante.

Pages build_type workflow ; ancien champ source main / sans effet sur Actions. Workflow unique storybook-ci.yml et politique environnement github-pages autorisent storybook seulement. Protection classique : API « Branch not protected » ; pas un audit exhaustif des rulesets.

## Aujourd’hui

Travailler/livrer storybook ; PR storybook/main contrôlées sans publier. Pas de rescue automatique ni rebase/reset/force-push. Le changement de branche par défaut de main vers storybook a été autorisé le 8 octobre 2026 ; aucune fusion vers main ni modification de la configuration de livraison n’a été effectuée.

## Alternative historique — migration vers main non effectuée

Une organisation main stable/production et feature/*, fix/*, chore/* reste une alternative à décider explicitement. Ce n’est pas le workflow actuel : branche, CI, Pages, ship et règles doivent rester alignés sur storybook.

Plan pour une éventuelle migration autorisée vers main : comparer main/storybook et WIP, choisir SHA publié ; préparer PR sans supposer fast-forward ; adapter ensemble triggers/guards/politique Pages/script/docs/protections ; valider/publier une seule source ; comparer SHA public, vérifier PWA/données et garder revert. Aucun renommage de branche ni migration de livraison vers main effectué.
