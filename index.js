// Rémy, server utilisant le framework express pour faciliter le routing et le chargement des vues
const { response } = require('express');
var express = require('express');
const reader = require('./read.js');
var session = require('express-session');
var url = require('url');
const res = require('express/lib/response');

var word = '';

var app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(3000);

var pageList={'/pendu':'Jeu du pendu', 
'/calculatrice':'Calculatrice', 
'/fuseaux':'Fuseaux horaires',
'/todo':'Todo list',
'/changeColor':'change Color',
'/bounce' : 'bouncing balls'
};

var todoListJSON = reader.getTodoJSON();


app.use(express.urlencoded({
    extended: true
  }))

app.get('/', function(req,res){

    res.render('index.ejs',{'pageList':pageList});
});

app.get('/pendu', function(req, res){
    word = reader.randomWord();
    res.render('pendu.ejs',{"randomWord" : word });
});

app.get('/calculatrice', function(req, res){
    // var q = url.parse(req.url, true).query;
    // console.log(q);
    res.render('calculatrice.ejs');
});

app.get('/fuseaux', function(req, res){
    res.render('fuseaux.ejs');
});

app.post('/save', function(req, res){
    var jsonResult =  req.body.todos;
    reader.writeTodoJSON(jsonResult);
    todoListJSON = reader.getTodoJSON();
    res.render('todo.ejs', {"todoJSON" : todoListJSON});
});

app.get('/todo', function(req,res){
    res.render('todo.ejs', {"todoJSON" : todoListJSON});
});

app.get('/changeColor', function(req,res){
    res.render('changeColor.ejs');
});

app.get('/bounce', function(req,res){
    res.render('bounce.ejs');
});


