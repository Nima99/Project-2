module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define("Search", {
    searched: DataTypes.STRING,
    response: DataTypes.STRING,
    genre: DataTypes.STRING
  });
  return Search;
};