// Make a get request to our api route that will return every tvShow
$.get("../seeds.sql", function(data) {
  // For each tvShow that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold tvShow data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "tvShow-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our tvShow data to the well we just placed on the page
    $("#tvShow-well-" + i).append(
      "<h2>Season" + ". " + data[i].season + "</h2>"
    );
    $("#tvShow-well-" + i).append("<h3>Episode: " + data[i].episode + "</h4>");
    $("#tvShow-well-" + i).append(
      "<h3>Name: " + data[i].episode_name + "</h4>"
    );
    $("#tvShow-well-" + i).append(
      "<h3>Plot: " + data[i].episode_plot + "</h4>"
    );
  }
});
