var controller = function(app){
    app.get('/', function(req, res){
        res.render('index', {msg : 'hello'});
    });
};

module.exports = controller;