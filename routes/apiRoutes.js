var db = require("../models");
//requiring passport
var passport = require("../config/passport");

var axios = require("axios");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Hit on the movie database

  app.post("/api/daily-survey-results", function(req, res) {
    // save req.body to database

    var movieURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=362b6936916611f650df82861a545e72&language=en-US&include_video=true&sort_by=popularity.desc";

    movieURL += "&include_adult=" + req.body.adult; // newSurvey.answers[0]

    var withGenre = req.body.genre.join("%2C%");

    movieURL += "&with_genres=" + withGenre; // newSurvey.answers[1]

    var withoutGenre = req.body.notGenre.join("%2C%");

    movieURL += "&without_genres=" + withoutGenre; // newSurvey.answers[2]

    movieURL += "&primary_release_date.gte=" + req.body.year; // newSurvey.answers[3]

    // return res.json(movieURL);
    axios(movieURL).then(function(response) {
      return res.json(response.data);
    });
  });

  /////// Pre-Given Code Below- Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
