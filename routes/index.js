var express = require('express');
var router = express.Router();
var fs=require("fs");
var path=require("path");
/* GET home page. */

router.get('/', function(req, res, next) {

fs.readFile(path.join("./inventors.json"),"utf-8",function(err,data){
  data=JSON.parse(data);
  res.render('index', { data: data, title:"Express" }); 
});
 
});

module.exports = router;
