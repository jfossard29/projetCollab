const express = require('express'); // chargement du module express
const config = require("./config.js"); // chargement de la configuration
const util = require('util');

const base = config.base;
const port_http = config.port_http;

var app = express();

app.use("/", express.static(base+"/html", { index: 'index.html' }))

// Serve la page gym.html
app.get("/gym", function(req, res) {
    res.sendFile(base + "/html/gym.html");
  });
  
app.use(express.urlencoded({ extended: true }))


var server = app.listen(port_http, function () {
    console.log('Express server listening on port ' + port_http);
});