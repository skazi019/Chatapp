var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, function () {
    console.log('Listening to requests on port 4000.');
});


//Static files
app.use(express.static('public'));


//Socket setup
var io = socket(server);


io.on('connection', function(socket){
  console.log('A user conneted with id - ',socket.id);
});
