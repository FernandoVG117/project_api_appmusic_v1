const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");

    //! Album --> ArtistID
Album.belongsTo(Artist);
Artist.hasMany(Album);

    //! Song --> AlbumID
Song.belongsTo(Album);
Album.hasMany(Song);

// Pivot/Union Tables
    // songs_genres
    Song.belongsToMany(Genre, {through: "songs_genres"});
    Genre.belongsToMany(Song, {through: "songs_genres"});

    // genres_artists
    Genre.belongsToMany(Artist, {through: "genres_artists"});
    Artist.belongsToMany(Genre, {through: "genres_artists"});

    // artists_songs
    Artist.belongsToMany(Song, {through: "artists_songs"});
    Song.belongsToMany(Artist, {through: "artists_songs"});