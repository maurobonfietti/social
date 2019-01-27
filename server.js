//const express = require('express');
//const app = express();
//const path = require('path');
//app.use(express.static(__dirname + '/dist'));
//app.listen(process.env.PORT || 8080);
//app.get('/*', function(req, res) {
//  res.sendFile(path.join(__dirname + '/dist/index.html'));
//});
var express = require("express");
//var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;

//var CONTACTS_COLLECTION = "contacts";

var app = express();
//app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.listen(process.env.PORT || 8080);
