
var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello to 1first pipeline");
});

app.listen(4000);
