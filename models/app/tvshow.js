/* eslint-disable camelcase */
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../app/connection.js");

// Creates a "tvShow" model that matches up with DB
var tvShow = sequelize.define("tvShow", {
  season: Sequelize.INTEGER,
  episode: Sequelize.INTEGER,
  episode_name: Sequelize.STRING,
  episode_plot: Sequelize.STRING
});

// Syncs with DB
tvShow.sync();

// Makes the tvShow Model available for other files (will also create a table)
module.exports = tvShow;
