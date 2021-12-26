const { response } = require('express');
var express = require('express');
const reader = require('./read.js');
var session = require('express-session');
var url = require('url');

var word = '';

var app = express();
app.use(session({secret:'test'}));

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(3000);

var pageList={'/pendu':'Jeu du pendu', '/calculatrice':'Calculatrice'};
app.get('/', function(req,res){

    res.render('index.ejs',{'pageList':pageList});
});

app.get('/pendu', function(req, res){
    word = reader.randomWord();
    res.render('pendu.ejs',{"randomWord" : word });
});

app.get('/calculatrice', function(req, res){
    var q = url.parse(req.url, true).query;
    console.log(q);
    res.render('calculatrice.ejs');
});


