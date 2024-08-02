const { getAll, create, getOne, remove, update, setSongs } = require('../controllers/artist.controllers');
const express = require('express');

const routerArtist = express.Router();

routerArtist.route('/')
    .get(getAll)
    .post(create);

routerArtist.route('/:id/songs')
    .post(setSongs)

routerArtist.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerArtist;