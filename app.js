var express = require('express'),
    format = require('util').format,
    fs = require('fs'),
    spawn = require('child_process').spawn;

var serverUrl = "http://report.radialogica.com";

var app = module.exports = express();

app.use(express.bodyParser( { keepExtensions: true } ));

// These directories contain static files, so if the HTML want to load these
// just load it, no need to set up

// GET on root will return the dashboard
app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.use('/flat-ui',express.static(__dirname + '/flat-ui'));
app.use('/common-files',express.static(__dirname + '/common-files'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/img',express.static(__dirname + '/img'));
app.use('/js',express.static(__dirname + '/js'));


if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}