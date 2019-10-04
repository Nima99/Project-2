$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name);
  });
});

// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var tvSearch = $("#tv-search")
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + tvSearch, function(data) {
    console.log(data);
    // Call our renderShows function to add our books to the page
    renderShows(data);
  });
});

//

function renderShows(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {
      var div = $("<div>");

      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Season: " + data[i].season + "</p>");
      div.append("<p>Episode: " + data[i].episode + "</p>");
      div.append("<p>Episode Name: " + data[i].name + "</p>");
      div.append("<p>Episode Plot: " + data[i].plot + "</p>");
      div.append(
        "<button class='' data-id='" + data[i].id + "'>Shuffle</button>"
      );

      $("#stats").append(div);
    }
  }
}
