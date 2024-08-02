const express = require('express');
const routerArtist = require('./artist.router');
const routerAlbum = require('./album.router');
const routerGenre = require('./genre.router');
const router = express.Router();

router.use('/artists', routerArtist);
router.use('/albums', routerAlbum);
router.use('/genres', routerGenre);


module.exports = router;