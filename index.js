var express = require("express");
//var path = require("path");
var bodyParser = require("body-parser");
var mongo = require("mongoose");
var cors = require("cors");



var db = mongo.connect("localhost:27017/",function(err,response){
    if(err){
        throw err;
    }else{
        
        console.log("Connected to database");
    }
    
});
var app = express();
var router = express.Router();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','https://cs-dept-scem.netlify.com');
    res.setHeader('Allow-Access-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Allow-Access-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept');
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
});
var Schema = mongo.Schema;


//var model = mongo.model('achievements',achievements);
/*app.get("/",function(req,res) {
    model.find({})
    .exec(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
            console.log(data);
            
        }
    })
});
app.post("/",function(req,res){
    console.log(req.body);
    var mod = new model(req.body);
    mod.save(function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Record Inserted"});
            console.log(data);
        }
    });
});*/

var port = 8000;

app.listen(port,function(){
    console.log(process.env.PORT);
});