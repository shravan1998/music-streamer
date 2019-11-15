var express = require("express");
//var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");
var cors = require("cors");



var db = mongo.connect("mongodb://localhost:27017/musicstreamer",function(err,response){
    if(err){
        throw err;
    }else{
        
        console.log("Connected to database");
    }
    
});
var app = express();
var router = express.Router();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});





var port = 8000;

app.listen(port,function(){
    console.log(process.env.PORT);
});