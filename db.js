var mysql = require("mysql");

//Database connection
var connection = mysql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : 'root' ,
    database : 'sebastien'

});
connection.connect(function(error) { if (error) console.log(error);});

module.exports = connection;