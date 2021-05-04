let express = require('express');
let filmController = require('./controllers/filmController');
let filmControllerApi = require('./controllers/filmControllerApi');
let router = express.Router();

//Voir la liste des films
router.get('/film', filmController.filmList);

//Formulaire pour ajouter un film
router.get('/film/add',filmController.filmFormNew);

//Ajouter un film
router.post('/film',filmController.filmNew);

//Formulaire pour la modification d'une fiche de film
router.get('/film/update/:i',filmController.filmFormUpdate);

//Modifier le film dans la Database
router.post('/film/update',filmController.filmUpdate);

//Effacer une fiche de film
router.get('/film/delete/:i',filmController.filmDelete);

//consulter une fiche
router.get('/film/consult/:i',filmController.filmConsult);

/************API*************/

//Voir la liste des films
router.get('/api/film', filmControllerApi.filmList);

//Ajouter un film
router.post('/api/film',filmControllerApi.filmNew);

//Formulaire pour la modification d'une fiche de film
router.get('/api/film/:i',filmControllerApi.film);

//Modifier le film dans la Database
router.put('/api/film/:i',filmControllerApi.filmUpdate);

//Effacer une fiche de film
router.delete('/api/film/:i',filmControllerApi.filmDelete);

module.exports = router;