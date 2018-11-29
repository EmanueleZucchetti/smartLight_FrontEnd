var express = require('express');
var app = express();

// importa il modulo body parse
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var port = 8082;

// avvia il server
app.listen(port);

app.get('/api/ottieniInformazioni/:id', function(req, res) {

    var t = Math.floor(Math.random() * 11);
    var e = Math.floor(Math.random() * 11);

    res.send({"tensione":t, "elettricita":e});

});
