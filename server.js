var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {

    socket.emit('message', createMessage('Welcome to the Socket Chat Application'));

    io.emit('message', createMessage('New user logged in !'));

    socket.on('message', function(message) {

        io.emit('message', message.text);    
    });
});

http.listen(PORT, function() {

    console.log('Server started! Listening port '+PORT+' ...');
});

function createMessage(text) {

    return {
        text: text,
        timestamp: moment().valueOf()
    }
}