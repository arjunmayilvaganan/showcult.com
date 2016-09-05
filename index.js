var express = require('express');
var app = express();
var morgan = require('morgan')
var fs = require('fs');
var path    = require("path");

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(3000);
