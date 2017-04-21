var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
 
var databaseConfig = require('./config/database');
var router = require('./app/routes');
 
mongoose.connect(databaseConfig.url);
 

app.use(morgan('dev'));  
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());//cors 

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
router(app);

app.listen(process.env.PORT || 8080);//listen on port 8080
console.log("App listening on port 8080");