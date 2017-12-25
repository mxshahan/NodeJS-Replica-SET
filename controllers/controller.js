var bodyParser = require('body-parser');
var data = [{item: 'Hello'}, {item: 'Demo Text'}, {item: 'ABCD'}];
var urlencodeParser = bodyParser.urlencoded({extended: false});
var db = require('../config/db');
var con = db.config()


var controller = function(app){
    app.get('/', function(req, res){
        res.render('index', {msg : data});
    });

    app.post('/',urlencodeParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item; 
        });
        res.json(data);
    });
};

module.exports = controller;