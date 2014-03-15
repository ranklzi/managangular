module.exports = function(sequelize, DataTypes) {
  return sequelize.define("album", {
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    frontImageUrl: DataTypes.TEXT,
    backImageUrl: DataTypes.TEXT,
    description: DataTypes.TEXT
  })
}