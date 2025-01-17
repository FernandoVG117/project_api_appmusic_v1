const catchError = require('../utils/catchError');
const Artist = require('../models/Artist');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    const results = await Artist.findAll({include: [Song]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Artist.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Artist.findByPk(id, {include: [Song]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Artist.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Artist.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

    // Set the songs into the artists.
    // /artist/:id/songs
const setSongs = catchError(async(req,res) => {
        // Obtain the identifier with params
    const { id } = req.params;
        // Find the artist with id
    const artist = await Artist.findByPk(id);
        // Assignate songs to artists
    await artist.setSongs(req.body);
        // Obtain the songs associated at artists
    const songs = await artist.getSongs();
        //Return JSON with songs associated.
    return res.json(songs)
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setSongs,
}