const express = require('express');
const routerArtist = require('./artist.router');
const router = express.Router();

router.use('/artists', routerArtist);


module.exports = router;