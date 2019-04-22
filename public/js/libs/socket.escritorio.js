var socket = io();
var button = document.querySelector('button');
var label = document.querySelector('small');

// obtenemos parametros por Url

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');

}
var escritorio = searchParams.get('escritorio');
document.querySelector('h1').textContent = 'Escritorio: ' + escritorio;
button.addEventListener('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        if (resp === ' no hay tickets') {
            label.textContent = resp;
            alert(resp);
            return;
        }
        label.textContent = 'Ticket ' + resp.numero;
    });

});