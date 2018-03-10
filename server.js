//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//importing mongoose models
var db = require("./models");

//setup express
var PORT = 3000;
var app = express();

//setup middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//setup mongoose
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/mongooseScrapperDB");

//setup handlebars 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require('./routes');
app.use('/', routes);

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
