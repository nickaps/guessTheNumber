 const path = require('path');
 const express = require('express');
 const waitScreenRouter = express.Router();

 const public = path.join(path.dirname(__dirname), '/public');

waitScreenRouter.get('/', (req, res) => {
    res.sendFile(path.join(public, '/wait.html'));
});

 module.exports = waitScreenRouter;