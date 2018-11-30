var express = require('express');
var app = express();

// importa il modulo body parse
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var port = 8081;

// avvia il server
app.listen(port);

var acceso = false;

app.post('/api/accendi/:id', function(req, res) {
    var id = req.params.id
    acceso = true;
    res.send({message: "stato di " + id + ":" + acceso});
});

app.post('/api/spegni/:id', function(req, res) {
    var id = req.params.id
    acceso = false;
    res.send({message: "stato di " + id + ":" + acceso});
});

app.get('/api/ottieniStato/:id', function(req, res) {
    var id = req.params.id
    res.send({id: id, stato: acceso});
});