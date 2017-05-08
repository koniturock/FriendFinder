var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creating an "express" server
var app = express();
var PORT = process.env.PORT || 8080;



// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json 
app.use(bodyParser.json({ type:'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));




require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


//start listening to the server
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});