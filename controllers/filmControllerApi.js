let Film = require('../models/filmModel');
let Categorie = require ('../models/filmModel');
let connection = require('../db');

exports.filmList = (req,res) => {
    connection.query("select * from film;", function(error, result){
        if(error) {
            console.log(error);
            res.status(400).json({'message': err});
        }
        res.status(200).json(result);
    });
};

exports.filmNew = (req,res) => {
    let film = {"nomdufilm":req.body.nomdufilm,"realisateur":req.body.realisateur,"acteur":req.body.acteur,"synopsis":req.body.synopsis,"note" : req.body.note,"nomcategorie" : req.body.nomcategorie,"commentaire":req.body.commentaire};
    connection.query("INSERT INTO film SET ? ", film, function(err,result) {
        if(err) {
            console.log(err);
            res.status(400).json({'message': err});
        }
        res.status(200).json({'message' : 'success'});
    });
};

exports.film = (req, res) => {
    let i = req.params.i;
    connection.query("SELECT * from film WHERE nomdufilm = ?;",i, function(error, result){
        if(error) {
            console(error);
            res.status(400).json({'message': err});
        }
        res.json(result);
    });
    };

exports.filmUpdate = (req,res) => {
    let i = req.params.i;
    let film = {"nomdufilm":req.body.nomdufilm,"realisateur":req.body.realisateur,"acteur":req.body.acteur,"synopsis":req.body.synopsis,"note" : req.body.note,"nomcategorie" : req.body.nomcategorie,"commentaire" :  req.body.commentaire};
    connection.query("UPDATE film SET ? WHERE nomdufilm = ?",[film,i], function(error, result){
        if(error){
         console(error);
         res.status(400).json({'message': err});
        }
        res.status(200).json({'message' : 'success'});
    }); 
    };

exports.filmDelete = (req, res) => {
    let i = req.params.i;
    connection.query("DELETE from film WHERE nomdufilm = ?;",i, function(error, result){
        if(error){
            console(error);
            res.status(400).json({'message': err});
        }
        res.status(200).json({'message' : 'success'});
    });
    };
   // 
    exports.filmCategorie =(req,res) =>{
        let i = req.params.i;
       connection.query("SELECT categories.nomcategorie FROM categories JOIN film ON film.nomcategorie = categories.nomcategorie",function(error, result){
        if(error) {
            console.log(error);
            res.status(400).json({'message': err});
        }
        res.status(200).json(result);
    });
    };
    exports.categorieConsult=(req,res) =>{
        let i = req.params.i;
        connection.query("SELECT * FROM film WHERE nomcategorie=? ",i, function(error, result){
            if(error) {
                console.log(error);
                res.status(400).json({'message': err});
            }
            res.status(200).json(result);
        });
    }






