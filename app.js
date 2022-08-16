
var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello to my demo pipeline");
});

app.listen(4003);
