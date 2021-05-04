//Import express
let express = require('express');

//initialize the app
let app = express();
app.use(express.urlencoded({extended:  true}));
app.use(express.json());

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", 
    "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
    res.status(200).end();
    } else { next(); }
    });


//importer les routes
router = require('./routes');
app.use('/', router);


//fixer le port
app.listen(8000, function() {
    console.log('Server is running on port 8000')
});




