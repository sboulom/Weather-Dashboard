var apiKey = "&appid=7980901759d3b1066013adeb63af74a7";
var cityEl = document.querySelector(".city");
var dateEl = document.querySelector(".date");
var weatherIconEl = document.querySelector(".weather-Icon");
var tempEl = document.querySelector(".temperature");
var humidityEl = document.querySelector(".humidity");
var windSpeedEl = document.querySelector(".windSpeed");
var uvEl = document.querySelector(".uvIndex");

$("#find-city").on("click", function(e) {
  e.preventDefault();
  var cityName = $("#searchCity")
    .val()
    .trim();

  console.log(cityName);

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + apiKey;
  console.log(queryURL);

  callAPI(queryURL);
});

function callAPI(queryURL) {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $(".city").append(response.name);
    var date = moment(response.dt, "X").format("MM/DD/YYYY");
    $(".date").append(date);

    var iconurl =
      "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    $("#iconImage").attr("src", iconurl);

    var temp = (response.main.temp - 273.15) * 1.8 + 32;
    $(".temperature").append(temp);
    $(".humidity").append(response.main.humidity);
    $(".windSpeed").append(response.wind.speed);

    var lat = response.coord.lat;
    var lon = response.coord.lon;
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/uvi?${apiKey}&lat=${lat}&lon=${lon}`,
      method: "GET"
    }).then(function(response2) {
      console.log(response2);
      $(".uvIndex").append(response2.value);
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${apiKey}`,
        method: "GET"
      }).then(function(response3) {
        console.log(response3);
        var list = response3.list;
        var row = $("<div class = 'row'>");
        for (let index = 0; index < list.length; index++) {
          if (list[index].dt_txt.indexOf("00:00:00") > -1) {
            var col = $("<div class = 'col-sm-2'>");
            var date = moment(list[index].dt, "X").format("MM/DD/YYYY");
            var iconurl =
              "http://openweathermap.org/img/w/" +
              list[index].weather[0].icon +
              ".png";
            var img = $("<img>");
            img.attr("src", iconurl);
            col.append(date, img);
            row.append(col);
          }
        }
        $("#forecastFive").append(row);
      });
    });
  });
}
