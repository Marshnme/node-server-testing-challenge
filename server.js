const express = require('express');
const helmet = require('helmet')
const smash = require('./models/smashModels');

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/smash', (req, res) => {
    smash.getAll()
    .then(char => {
        res.status(200).json(char)
    })
    .catch(err => res.status(500).json({message:"error getting char"}))
});

server.post('/smash', (req, res) => {
    res.status(200).json({ api: 'up' });
});


server.put('/smash/:id', (req, res) => {
    res.status(200).json({ api: 'up' });
});


server.delete('/smash/:id', (req, res) => {
    res.status(200).json({ api: 'up' });
});












module.exports = server;