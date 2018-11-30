// importa il modulo express
var express = require('express');
var cors = require('cors');
var app = express();

// importa il modulo body parse
var bodyParser = require('body-parser');

app.use(cors()); // support cross-orginin domain

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// importa il modulo per effetturare le chiamate sincrone (che bloccano l'elaborazione del codice prima fintanto che la risposta non è arrivata)
var request = require('request-promise');

var localUrl = "http://localhost";
var router = "192.168.0.0";

var endpoints = {
    meeter_fake: localUrl + ":8082",
    gestoreLuce_fake: localUrl + ":8081",
    gestoreLuce1: router + "",
    gestoreLuce2: router + "",
    meeter1: router + "",
    meeter2: router + ""
};

var  meeter = endpoints.meeter_fake;
var  gestoreLuce = endpoints.gestoreLuce_fake;

var port = 8085;

// avvia il server
app.listen(port);
console.log('il server è avviato:' + localUrl + ":" + port);


// ######## ininzio api ##########

app.post('/api/accendi/:id', function(req, res){
    var id = req.params.id;

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

// Usage!
    sleep(3500).then(() => {
        // Do something after the sleep!
        console.log(gestoreLuce + "/api/accendi/" + id);

        request({
            url: gestoreLuce + "/api/accendi/" + id,
            method: 'POST'
        }, function(error, response, body){
            res.send(body);
        });
    });


});

app.post('/api/spegni/:id', function(req, res){
   var id = req.params.id;

    request({
        url: gestoreLuce + "/api/spegni/" + id,
        method: 'POST'
    }, function(error, response, body){
        res.send(body);
    });

});

app.get('/api/ottieniStato/:id', function(req, res) {
    var id = req.params.id;

    request({
        url: gestoreLuce + "/api/ottieniStato/" + id,
        method: 'GET'
    }, function(error, response, body){
        res.send(body);
    });
});

app.get('/api/ottieniInformazioni/:id', function(req, res) {
    var id = req.params.id;

    request({
        url: meeter + "/api/ottieniInformazioni/" + id,
        method: 'GET'
    }, function(error, response, body){
        res.send(body);
    });
});


app.post('/smartlight/lightbulb/:id/action', function(req, res){
    var id = req.params.id;
    var action = req.param("action");

    request({
        url: gestoreLuce + "/api/" + action + "/" + id,
        method: 'POST'
    }, function(error, response, body){
        res.send(body);
    });

});

app.get('/smartlight/lightbulb/:id/status', function(req, res) {
    var id = req.params.id;

    request({
        url: gestoreLuce + "/api/ottieniStato/" + id,
        method: 'GET'
    }, function(error, response, body){
        res.send(body);
    });
});