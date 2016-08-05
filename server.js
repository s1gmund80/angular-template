/*
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname +"/app")).listen(8080);
*/
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/www/index_base.html');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});