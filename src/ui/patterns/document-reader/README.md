# Lecteur de support

Lecteur non modal pour les images et PDF des questions et corrections. Sur desktop le document défile dans un volet droit ; sur tablette/mobile, dans le volet supérieur (40dvh). La question reste utilisable. Échap/fermer restitue le focus au lien. Zoom des images sans altérer la source.

createDocumentReader expose element/open/close ; installDocumentReader délègue les liens data-reader dans l’application. Aucun historique ni résultat n’est supprimé. Stories : Patterns/DocumentReader.
