
var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello to pipeline");
});

app.listen(4000);
