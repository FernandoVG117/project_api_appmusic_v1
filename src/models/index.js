const Album = require("./Album");
const Artist = require("./Artist");
const Song = require("./Song");

    //! Album --> ArtistID
Album.belongsTo(Artist);
Artist.hasMany(Album);

// Song --> AlbumID
Song.belongsTo(Album);
Album.hasMany(Song);

