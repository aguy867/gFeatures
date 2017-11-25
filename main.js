let express = require('express');
let app = express();

app.get('/', function(req,res) {
    res.send("Hello world!");
});

var server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    cookie = require('cookie');