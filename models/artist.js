module.exports = function(sequelize, DataTypes) {
  return sequelize.define("artist", {
    id: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT
  })
}