var APIKey = "49aa7d4eccfdcb197322b924a9762ca3";
var userSearch = document.getElementById("userInput");
var cityDisplay = document.getElementById("jumboDisplay");

// add onclick to
var searchButton = document.getElementById("searchBtn");

function getInputFromSearch(event) {
  event.preventDefault();

  var city = document.getElementById("userInput").value;

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonInfo) {
      fiveDays(city, jsonInfo.coord.lat, jsonInfo.coord.lon);
      //   console.log(jsonInfo.name);
    });
}
searchButton.addEventListener("click", getInputFromSearch);

// gets 5 day forecast query
function fiveDays(cityName, lat, lon) {
  var fiveDayQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
  fetch(fiveDayQuery)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonInfo) {
      console.log(jsonInfo);
      weatherTodayRender(jsonInfo.current, cityName);
      // console.log(days.name);
    });
}
function weatherTodayRender(currentWeather, cityName) {
  var iconUrl = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
  document.getElementById("jumbotron").textContent = cityName;
  document.getElementById("temp").textContent = currentWeather.temp;
  document.getElementById("hum").textContent = currentWeather.humidity;
  document.getElementById("wind").textContent = currentWeather.wind_speed;
  document.getElementById("uv").textContent = currentWeather.uvi;
  document.getElementById("img").setAttribute("src", iconUrl);
}

// fiveDays();
// function weatherForecast(currentWeather, cityName) {
//   var iconUrl = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
//   document.getElementById("jumbotron").textContent = cityName;
//   document.getElementById("temp").textContent = currentWeather.temp;
//   document.getElementById("hum").textContent = currentWeather.humidity;
//   document.getElementById("wind").textContent = currentWeather.wind_speed;
//   document.getElementById("uv").textContent = currentWeather.uvi;
//   document.getElementById("img").setAttribute("src", iconUrl);
// }
// var APIKey = "49aa7d4eccfdcb197322b924a9762ca3";
// var userSearch = document.getElementById("userInput");
// var cityDisplay = document.getElementById("jumboDisplay");
// //
// // var lat = city.coord.lat;
// // var lon = city.coord.lon;

// // add onclick to
// var searchButton = document.getElementById("searchBtn");

// function getInputFromSearch(event) {
//   event.preventDefault();

//   var city = document.getElementById("userInput").value;

//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     APIKey;

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (city) {
//       console.log(city);
//       //   var cityName = city.name;
//     });
// }
//   textcontent =
//   append =

//   var temp = city.main.temp * ​9⁄5 − 459.67;

//   textcontent

//   append

//   var humid = city.main.humidity + "%" ;
//   textcontent

//   append

//     var windSpeed = city.wind.speed
// textcontent

//   append

// });

// searchButton.addEventListener("click", getInputFromSearch);

// var currDate = new Date(response)

// var displayWeather =function () {
//     fetch(queryURL)
//     .then(function()(response){
//         response.json().then(function)(data){
//             displayWeather(data,city)
//         });
//     });
// });

// .then and json to .then then log data

// fetch(queryURL);
// https://api.openweathermap.org/data/2.5/onecall?lat=%7Blat%7D&lon=%7Blon%7D&exclude=%7Bpart%7D&appid=%7BAPIKey%7D

// use another api pull for five day.forecast
