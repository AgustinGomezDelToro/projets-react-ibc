import {config} from "dotenv";
//config(); // permet de lire le fichier .env et de le mettre dans process.env

import * as express from 'express';
import {Request, Response} from "express";

const app = express();

app.get('/ping', function(req: Request, res: Response) {
    res.send("pong"); // res.send permet de repondre au client
});

// req.query --> dans l'url après le ?
app.get('/school', function(req: Request, res: Response) {
    if(typeof req.query.name === 'string') {
        res.send("L'ecole est la suivante : " + req.query.name)
    } else {
        res.send("Il n'y a pas d'école"); // si aucun res.send le navigateur va etre en attente à l'infini
    }
});

// req.params --> permet de recuperer des variables directement dans l'url
app.get('/school/:name', function(req: Request, res: Response) {
    const school = req.params['name'];
    res.send("Super voici l'ecole: " + school);
})


app.listen(3002, function() {
    console.log("listening on port 3002...");
});