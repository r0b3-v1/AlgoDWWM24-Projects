let fs = require('fs');
const todoPath = './todo.json';

exports.randomWord = function(){
    //on lit le fichier texte et on récupère le contenu
    const dictionnaire = fs.readFileSync('./randomWords.txt','utf-8', function(err,data){
        if (err) throw err;
        return data;    
    });

    var reg = '[^a-zA-Zçéèëïôê]+';
    const listeMots = dictionnaire.toLowerCase().split(new RegExp(reg));
    let nombreDeMots = listeMots.length;
    let nombreAleatoire = Math.floor(Math.random() * nombreDeMots);
    let motAleatoire = listeMots[nombreAleatoire];
    return motAleatoire;
}

exports.getTodoJSON = function(){
    if(!fs.existsSync(todoPath) || fs.readFileSync(todoPath)=='')
    fs.appendFileSync(todoPath,'[]');

    return fs.readFileSync(todoPath);
};

exports.writeTodoJSON = function(json){
    if(!fs.existsSync(todoPath) || fs.readFileSync(todoPath)=='')
    fs.appendFileSync(todoPath,'[]');

    fs.writeFileSync(todoPath, json);
};