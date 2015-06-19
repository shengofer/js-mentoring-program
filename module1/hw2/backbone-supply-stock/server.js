var express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs');




// Create our Express application
var app = express();

// Body parser for only JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Create our Express router
var router = express.Router();

// Set view file to render a file
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/dist'));

// main index handler
app.get('/', function(req, res) {

    res.render('index.html');
});


// Start the server
var port = process.env.PORT || 3000;
app.listen(port);
console.log(port + ' is listening port');