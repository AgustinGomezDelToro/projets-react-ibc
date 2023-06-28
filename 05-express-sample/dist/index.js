"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/ping', function (req, res) {
    res.send("pong"); // res.send permet de repondre au client
});
// req.query --> dans l'url après le ?
app.get('/school', function (req, res) {
    if (typeof req.query.name === 'string') {
        res.send("L'ecole est la suivante : " + req.query.name);
    }
    else {
        res.send("Il n'y a pas d'école"); // si aucun res.send le navigateur va etre en attente à l'infini
    }
});
// req.params --> permet de recuperer des variables directement dans l'url
app.get('/school/:name', function (req, res) {
    var school = req.params['name'];
    res.send("Super voici l'ecole: " + school);
});
app.listen(3000, function () {
    console.log("listening on port 3000...");
});
//# sourceMappingURL=index.js.map