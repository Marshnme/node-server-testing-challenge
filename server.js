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
    const body = req.body
    smash.insert(body)
    .then(inserted => {
        res.status(200).json(inserted)
    })
    .catch(err => res.status(500).json({message:"error inserting char"}))
});


server.put('/smash/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    smash.update(id,body)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(err => res.status(500).json({message:"error updating char"}))
});


server.delete('/smash/:id', (req, res) => {
    const id = req.params.id;
    smash.remove(id)
    .then(removed => {
        res.status(200).json(removed)
    })
    .catch(err => res.status(500).json({message:"error removing char"}))
});












module.exports = server;