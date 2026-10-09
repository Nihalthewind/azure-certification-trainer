# Lecteur de support

Lecteur non modal pour les images et PDF des questions et corrections. Sur desktop le document défile dans un volet droit ; sur tablette/mobile, dans le volet supérieur (40dvh). La question reste utilisable. Échap/fermer restitue le focus au lien. Zoom des images sans altérer la source.

createDocumentReader expose element/open/close ; installDocumentReader délègue les liens data-reader dans l’application. Aucun historique ni résultat n’est supprimé. Stories : Patterns/DocumentReader.

L’outil **Main** est actif à l’ouverture : glissement à la souris ou au toucher, flèches quand le document a le focus. Le zoom conserve le centre visible ; Ajuster remet l’échelle et le défilement à zéro. Désactiver Main restitue le défilement normal. Les PDF conservent leur lecteur natif.

`open({url, label, trigger, crop})` accepte un viewport en pixels de la source (`x`, `y`, `width`, `height`, `sourceWidth`, `sourceHeight`). `source-illustration.js` applique le même viewport dans la question et dans le lecteur. Les originaux restent inchangés ; `answerAreaAssets` retire seulement les illustrations contenant exclusivement les réponses désormais natives.

Stories : Image, Dark, Mobile, MobileDark, Tablet, TabletDark, Zoomed, HandDisabled. Validation : `npm run test:content` ; audit : [contenu source](../../../../docs/source-content-audit.md).
