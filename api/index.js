var express = require('express');
var app = express();
var morgan = require('morgan')
var fs = require('fs');
var path    = require("path");

app.use(morgan('dev'));
const rootDir = path.join(__dirname, '..');
app.use(express.static(rootDir + '/public'));
app.use(express.static(rootDir + '/dist'));
app.use(express.static(rootDir + '/css'));

app.get('/', function(req, res) {
  res.sendFile(path.join(rootDir + '/index.html'));
});


app.listen(3001);

module.exports = app;
