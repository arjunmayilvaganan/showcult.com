var express = require('express');
var app = express();
var morgan = require('morgan')
var fs = require('fs');
var path    = require("path");

const rootDir = path.join(__dirname, '..');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(rootDir + '/public'));
app.use(express.static(rootDir + '/dist'));
app.use(express.static(rootDir + '/css'));

app.get('/', function(req, res) {
  res.sendFile(path.join(rootDir + '/index.html'));
});


app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});

module.exports = app;
