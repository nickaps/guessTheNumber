
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const gameRoute = require('./routes/game');
const waitScreenRoute = require('./routes/wait');

let pub = path.join(__dirname, "/public");

app.use(express.json());
app.use(express.static(pub));
app.use('/game', gameRoute);
app.use('/wait', waitScreenRoute);

app.get('/', (req, res) => {
    res.sendFile(path.join(pub, '/index.html'));
})

app.listen(port, () => {
    console.log(`Listening from Port ${port}`);
});