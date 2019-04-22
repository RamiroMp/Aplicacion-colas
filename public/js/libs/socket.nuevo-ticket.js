var socket = io();
var label = document.querySelector('#lblNuevoTicket');


//On es para escuchar sucesos 
// detectamos la conexion con el servidor

socket.on('connect', function() {

    console.log('conectado al servidor');




});



socket.on('disconnect', function() {
    console.log('Perdida de conexion con el servidor');
});


// Listener que recibe el ticket al inicial
socket.on('estadoActual', function(data) {



    label.textContent = data.actual;
});



document.querySelector('.btn').addEventListener('click', () => {

    socket.emit('siguienteticket', null, function(siguienteTicket) {
        label.textContent = siguienteTicket;



    });



});