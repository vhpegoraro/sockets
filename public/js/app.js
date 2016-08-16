
var socket = io();

socket.on('message', function(message) {
    
    $("#messages").append('<p>' + message.timestamp + ' - ' + message.text + '</p>');
});

$("#message-form").on("submit", function(event) {

    event.preventDefault();

    socket.emit('message', $("#message").val());

    $("#message").val('');
});