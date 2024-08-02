const Album = require("./Album");
const Artist = require("./Artist");


Album.belongsTo(Artist);
Artist.hasMany(Album);

