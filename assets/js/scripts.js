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
    console.log(response.coord.lon);

    var city = $(".city");
    var row = $('<div class="row">');
    var col = $("<div class='col-sm-8'>");
    var p = $("<p>" + JSON.stringify(response.coord.lon) + "</p>");
    // var textarea = $("<textarea>");
    // var button = $("<button>");
    // button.addClass = "searchCity";
    // button.text("Search City");

    city.append(row.append(col.append(p)));
  });
}

// console.log(displayWeather)
// cityEl.innerHTML =

// dateEl.innerHTML =

// weatherIconEl.innerHTML =
//   `<img src="icons/${weather.iconID}.png"/>`

// tempEl.innerHTML =

// humidityEl.innerHTML =
//  weather.humidity;

// windSpeedEl.innerHTML =
//   weather.windspeed;
// uvEl.innerHTML =
//  weather.uv

// }
// // cityEl.innerHTML =
// displayWeather()

// $("#find-City").on("click", function(event){

//     event.preventDefault();

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       })

//       .then(function(response) {

//         console.log (response);

// create column for 1 day forecast column 8
// must include - city name, date, (moments JS), icon image, temperature, humidity, wind speed and UV index CHECK CURRENT WEEK FOR ACTIVITY
// create column for 5 day forecast column 8
// must include - date, icon image, temperature, humidity

//Use the OpenWeather API to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.
// Use AJAX to hook into the API to retrieve data in JSON format.
// Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
// Display the following under current weather conditions:
// City
// Date
// Icon image (visual representation of weather conditions)
// Temperature
// Humidity
// Wind speed
// UV index
// Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city.
// Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:
// Date
// Icon image (visual representation of weather conditions)
// Temperature
// Humidity
// !!!!!!!!!!!!!!!!!!-------HINTS-----------!!!!!!!!!!!!!!!
// Create multiple functions within your application to handle the different parts of the dashboard:
// Current conditions
// 5-Day Forecast
// Search history
// UV index
// You will need to make more than one AJAX call.
// You will need to hardcode some of the parameters in the API's URL. User input will determine some of the other parameters.
// Use localStorage to store any persistent //
