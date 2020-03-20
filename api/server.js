const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
const db =  require('../data/db-config.js');

const server = express();
server.use(helmet()); //protects headers
server.use(CORS()); //teaches express to use cors for endpoinis
server.use(express.json()); //teaches express how to use json

server.get('/', (req, res) => {
    res.send('<h1>It\'s Running 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️<h2>');
})


module.exports = server;