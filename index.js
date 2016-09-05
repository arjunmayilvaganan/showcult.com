var express = require('express');
var app = express();
var fs = require('fs');
var path    = require("path");

app.use(express.static('.'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(3000);