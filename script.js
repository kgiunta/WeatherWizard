var APIKey = "4652d3c4d0f1a1d6f335780f0a56d17b";
var userSearch = document.getElementById("userInput");
var cityDisplay = document.getElementById("jumboDisplay");
$("#one").text(moment().add("days", 1).format("L"));
$("#two").text(moment().add("days", 2).format("L"));
$("#three").text(moment().add("days", 3).format("L"));
$("#four").text(moment().add("days", 4).format("L"));
$("#five").text(moment().add("days", 5).format("L"));
var createButton = document.getElementById("createButton");

var cityNames = document.createElement("button");
cityNames.textContent = userSearch;
createButton.append(cityNames);

// make a var by document.createlemt searchButton
// city.textContent = input value
// container.append(city)
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
      fiveDay(cityName, jsonInfo.lat, jsonInfo.lon);
    });
}

console.log(cityName);

function weatherTodayRender(currentWeather, cityName) {
  var iconUrl = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
  document.getElementById("jumbotron").textContent = cityName;
  document.getElementById("temp").textContent = currentWeather.temp;
  document.getElementById("hum").textContent = currentWeather.humidity;
  document.getElementById("wind").textContent = currentWeather.wind_speed;
  document.getElementById("uv").textContent = currentWeather.uvi;
  console.log(uv);
  if (uv.innerHTML > 6) {
    document.getElementById("uv").style.background = "red";
  } else if (uv.innerHTML < 6) {
    document.getElementById("uv").style.background = "green";
  } else {
  }
  document.getElementById("img").setAttribute("src", iconUrl);
}

function fiveDay(cityName, lat, lon) {
  var fiveDayQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
  fetch(fiveDayQuery)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonInfo) {
      console.log(jsonInfo);
      weatherWeekRender(jsonInfo.daily, cityName);
    });
}

function weatherWeekRender(futureWeather) {
  var iconUrlOne = `https://openweathermap.org/img/w/${futureWeather[0].weather[0].icon}.png`;
  console.log(iconUrlOne);
  // document.getElementById("onetron").textContent = cityName;
  document.getElementById("tempone").textContent = futureWeather[0].temp.day;
  document.getElementById("humone").textContent = futureWeather[0].humidity;
  document.getElementById("windone").textContent = futureWeather[0].wind_speed;
  document.getElementById("uvone").textContent = futureWeather[0].uvi;
  document.getElementById("imgOne").setAttribute("src", iconUrlOne);

  var iconUrlTwo = `https://openweathermap.org/img/w/${futureWeather[1].weather[0].icon}.png`;
  console.log(iconUrlTwo);
  // document.getElementById("onetron").textContent = cityName;
  document.getElementById("temptwo").textContent = futureWeather[1].temp.day;
  document.getElementById("humtwo").textContent = futureWeather[1].humidity;
  document.getElementById("windtwo").textContent = futureWeather[1].wind_speed;
  document.getElementById("uvtwo").textContent = futureWeather[1].uvi;
  document.getElementById("imgTwo").setAttribute("src", iconUrlTwo);

  var iconUrlThree = `https://openweathermap.org/img/w/${futureWeather[2].weather[0].icon}.png`;
  //   document.getElementById("onetron").textContent = cityName;
  document.getElementById("tempthree").textContent = futureWeather[2].temp.day;
  document.getElementById("humthree").textContent = futureWeather[2].humidity;
  document.getElementById("windthree").textContent =
    futureWeather[2].wind_speed;
  document.getElementById("uvthree").textContent = futureWeather[2].uvi;
  document.getElementById("imgThree").setAttribute("src", iconUrlThree);

  var iconUrlFour = `https://openweathermap.org/img/w/${futureWeather[3].weather[0].icon}.png`;
  //   document.getElementById("onetron").textContent = cityName;
  document.getElementById("tempfour").textContent = futureWeather[4].temp.day;
  document.getElementById("humfour").textContent = futureWeather[4].humidity;
  document.getElementById("windfour").textContent = futureWeather[4].wind_speed;
  document.getElementById("uvfour").textContent = futureWeather[4].uvi;
  document.getElementById("imgFour").setAttribute("src", iconUrlFour);

  var iconUrlFive = `https://openweathermap.org/img/w/${futureWeather[4].weather[0].icon}.png`;
  //   document.getElementById("onetron").textContent = cityName;
  document.getElementById("tempfive").textContent = futureWeather[4].temp.day;
  document.getElementById("humfive").textContent = futureWeather[4].humidity;
  document.getElementById("windfive").textContent = futureWeather[4].wind_speed;
  document.getElementById("uvfive").textContent = futureWeather[4].uvi;
  document.getElementById("imgFive").setAttribute("src", iconUrlFive);
}

// function fourDays(cityName, lat, lon) {
//   var dayTwoQueryone = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
//   fetch(dayTwoQueryone)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonInfo) {
//       console.log(jsonInfo);
//       weatherWeekRendertwo(jsonInfo.daily, cityName);
//       // console.log(days.name);
//     });
// }
// function weatherWeekRendertwo(futureWeather) {
//   console.log(futureWeather);
//   var iconUrlTwo = `https://openweathermap.org/img/w/${futureWeather[1].weather[0].icon}.png`;
//   console.log(iconUrlOne);
//   //   document.getElementById("onetron").textContent = cityName;
//   document.getElementById("temptwo").textContent = futureWeather[1].temp.day;
//   document.getElementById("humtwo").textContent = futureWeather[1].humidity;
//   document.getElementById("windtwo").textContent = futureWeather[1].wind_speed;
//   document.getElementById("uvtwo").textContent = futureWeather[1].uvi;
//   document.getElementById("imgTwo").setAttribute("src", iconUrlTwo);
// }
// function fiveDay(cityName, lat, lon) {
//   var fiveDayQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
//   fetch(fiveDayQuery)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonInfo) {
//       console.log(jsonInfo);
//       weatherWeekRenderthree(jsonInfo.daily, cityName);
//       // console.log(days.name);
//     });
// }
// function weatherWeekRenderthree(futureWeather) {
//   console.log(futureWeather);
//   var iconUrlThree = `https://openweathermap.org/img/w/${futureWeather[2].weather[0].icon}.png`;
//   //   document.getElementById("onetron").textContent = cityName;
//   document.getElementById("tempthree").textContent = futureWeather[2].temp.day;
//   document.getElementById("humthree").textContent = futureWeather[2].humidity;
//   document.getElementById("windthree").textContent =
//     futureWeather[2].wind_speed;
//   document.getElementById("uvthree").textContent = futureWeather[2].uvi;
//   document.getElementById("imgThree").setAttribute("src", iconUrlThree);
// }
// function fiveDay(cityName, lat, lon) {
//   var fiveDayQuery = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`;
//   fetch(fiveDayQuery)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonInfo) {
//       console.log(jsonInfo);
//       weatherWeekRenderFour(jsonInfo.daily, cityName);
//       // console.log(days.name);
//     });
// }
// function weatherWeekRenderFour(futureWeather) {
//   console.log(futureWeather);
//   var iconUrlFour = `https://openweathermap.org/img/w/${futureWeather[4].weather[0].icon}.png`;
//   console.log(iconUrlFour);
//   //   document.getElementById("onetron").textContent = cityName;
//   document.getElementById("tempfour").textContent = futureWeather[4].temp.day;
//   document.getElementById("humfour").textContent = futureWeather[4].humidity;
//   document.getElementById("windfour").textContent = futureWeather[4].wind_speed;
//   document.getElementById("uvfour").textContent = futureWeather[4].uvi;
//   document.getElementById("imgfour").setAttribute("src", iconUrlFour);
// }

// function weatherWeekRenderFive(futureWeather) {
//   console.log(futureWeather);
//   var iconUrlFive = `https://openweathermap.org/img/w/${futureWeather[4].weather[0].icon}.png`;
//   console.log(iconUrlOne);
//   document.getElementById("onetron").textContent = cityName;
//   document.getElementById("tempfive").textContent = futureWeather[4].temp.day;
//   document.getElementById("humfive").textContent = futureWeather[4].humidity;
//   document.getElementById("windfive").textContent = futureWeather[4].wind_speed;
//   document.getElementById("uvfive").textContent = futureWeather[4].uvi;
//   document.getElementById("imgfive").setAttribute("src", iconUrlFive);
// }
searchButton.addEventListener("click", getInputFromSearch);

// var storeWeather = document.getElementById("yourScore");
// var getScore = localStorage.getItem("currentScore");
// storeWeather.textContent = getScore;

// make container
// make a var by document.createlemt searchButton
// city.textContent = input value
// container.append(city)
