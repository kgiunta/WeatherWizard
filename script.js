var APIKey = "49aa7d4eccfdcb197322b924a9762ca3";

// add onclick to
document.getElementById("searchBtn").onclick = getInputFromSearch;

function getInputFromSearch() {
  var input = document.getElementById("userInput").value;
  alert(input);
}

console.log(getInputFromSearch);

var city = "miami";


var appid;

var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

fetch(queryURL).then(function(response){

    return response.json();
}),then function(city){
    console.log(city);
}


// .then and json to .then then log data

console.log(queryURL);

// fetch(queryURL);
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={APIKey}
