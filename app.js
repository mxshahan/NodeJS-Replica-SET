var express = require('express');
var app = express();
var port = 3000;
//calling contrallers
var controllers = require('./controllers/controller');

app.set('view engine', 'ejs')
app.use(express.static('./public'));

//Fire Controller 
controllers(app);

app.listen(port);
console.log("Application Listening Port "+port);