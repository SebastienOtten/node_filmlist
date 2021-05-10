let Film = require('../models/filmModel');
let Categorie = require ('../models/filmModel');
let connection = require('../db');

exports.filmList = (req,res) => {
    connection.query("select * from film;", function(error, result){
        if(error) console(error);
        res.render('filmList.ejs', {films : result });
    });
};

exports.filmFormNew = (req,res) => {
    res.render("filmAdd.ejs");
};

exports.filmNew = (req,res) => {
    let film = {"nomdufilm":req.body.nomdufilm,"realisateur":req.body.realisateur,"acteur":req.body.acteur,"synopsis":req.body.synopsis,"note" : req.body.note,"nomcategorie": req.body.nomcategorie, "commentaire" : req.body.commentaire};
    connection.query("INSERT INTO film SET ? ", film, function(err,result) {
        if(err) console.log(err);
        res.redirect('/film');
    }) ;
};

exports.filmFormUpdate = (req, res) => {
    let i = req.params.i;
    connection.query("select * from film WHERE nomdufilm = ?;",i, function(error, result){
        if(error) console(error);
        res.render("filmUpdate.ejs", {"nomdufilm": result[0].nomdufilm, "realisateur": result[0].realisateur,"acteur": result[0].acteur,"synopsis": result[0].synopsis,"note": result[0].note,"nomcategorie":result[0].nomcategorie, "commentaire": result[0].commentaire} );
    });
    };

    
exports.filmUpdate = (req,res) => {
    let i = req.body.nomdufilm;
    let film = {"nomdufilm":req.body.nomdufilm,"realisateur":req.body.realisateur,"acteur":req.body.acteur,"synopsis":req.body.synopsis,"note" : req.body.note,"nomcategorie" : req.body.nomcategorie, "commentaire" : req.body.commentaire};
    connection.query("UPDATE film SET ? WHERE nomdufilm = ?",[film,i], function(error, result){
        if(error) console(error);
        res.redirect('/film');
    }); 
    };

exports.filmDelete = (req, res) => {
    let i = req.params.i;
    connection.query("DELETE from film WHERE nomdufilm = ?;",i, function(error, result){
        if(error) console(error);
        res.redirect('/film');
    });
    };

exports.filmConsult = (req, res) => {
        let i = req.params.i;
        connection.query("select * from film WHERE nomdufilm = ?;",i, function(error, result){
            if(error) console(error);
            res.render("filmConsult.ejs", {"nomdufilm": result[0].nomdufilm, "realisateur": result[0].realisateur,"acteur": result[0].acteur,"synopsis": result[0].synopsis,"note": result[0].note,"nomcategorie": result[0].nomcategorie, "commentaire": result[0].commentaire} );
        });
        };
exports.filmCategorie =(req,res) =>{
    let i = req.params.i;
   connection.query("SELECT categories.nomcategorie FROM categories JOIN film ON film.nomcategorie = categories.nomcategorie", function(error, result){
    if(error) console(error);
    res.render('categorielist.ejs', {categories: result});
    });
};
exports.categorieConsult=(req,res) =>{
    let i = req.params.i;
    connection.query("SELECT * FROM film WHERE nomcategorie=? ",i, function(error, result){
        if(error) console(error);
        res.render('categoriecontent.ejs', {filmlist : result, "nomdufilm":result[0].nomdufilm, "nomcategorie":result[0].nomcategorie, "ID": result[0].ID});
    });
}
