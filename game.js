const fs = require('fs');
const path = require('path');
const express = require('express');
const gameRouter = express.Router();

const public = path.join(path.dirname(__dirname), '/public');

let currentGuesses = 0;
let previousGuesses = [];

let numberToGuess = Math.round(Math.random() * 100)

let save = fs.openSync(path.join(public, '/save.json'));
let dat = JSON.parse(save.toString());

gameRouter.get('/', (req, res) => {
    res.sendFile(path.join(public, '/game.html'));
    let highscore = dat["highscore"];
    console.log(highscore);
});

gameRouter.post('/', (req, res) => {
    currentGuesses += 1;

    let guess = req.body["guess"];

    let highscore = dat["highscore"];

    fs.writeFileSync(path.join(public, '/save.json'), JSON.stringify({
        "previousGuess": guess,
        "totalGuesses": currentGuesses,
        "highscore": highscore
    }));

});

gameRouter.get('/highscore', (req,res) => {
    res.sendFile(path.join(public, '/highscore.html'));
});


module.exports = gameRouter;