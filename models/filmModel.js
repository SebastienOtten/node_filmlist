class Film {
    nomdufilm ;
    realisateur ;
    acteur ;
    synopsis ;
    note ;
    nomcategorie ;
    commentaire ;

    constructor(nomdufilm, realisateur, acteur, synopsis, note, nomcategorie, commentaire) {
        this.nomdufilm = nomdufilm;
        this.realisateur = realisateur;
        this.acteur = acteur;
        this.synopsis = synopsis;
        this.note = note;
        this.nomcategorie = nomcategorie;
        this.commentaire = commentaire;
    }
};

class Categorie {
    nomcategories ;
    ID ;

    constructor(nomcategories, ID, descriptioncategorie) {
        this.nomcategories = nomcategories;
        this.ID = ID;
    }
}