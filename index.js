var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//Mongo
const MongoClient = require("mongodb").MongoClient;

//env parameters
require("dotenv").config();

//user id and password
var user = process.env.MONGO_USERID
var pw  = process.env.MONGO_PW

//const uri = 

//make routes
