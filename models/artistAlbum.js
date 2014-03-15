module.exports = function(sequelize, DataTypes) {
  return sequelize.define("artistsAlbum", {
  	id: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  })
}