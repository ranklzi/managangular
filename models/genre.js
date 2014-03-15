module.exports = function(sequelize, DataTypes) {
  return sequelize.define("genre", {
    id: DataTypes.INTEGER,
    name: DataTypes.TEXT 
  })
}