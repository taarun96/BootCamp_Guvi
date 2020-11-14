var restcountries = new XMLHttpRequest();
restcountries.open("GET", "https://restcountries.eu/rest/v2/all", true);
restcountries.send();
restcountries.onload = function () {
  var data = JSON.parse(restcountries.response);
  console.log(data[0]);
  temperature(data, 0);
};

function temperature(data, i) {
  if (i < data.length) {
    var latitude = data[i].latlng[0];
    var longitude = data[i].latlng[1];
    if (lat && lon) {
      // var  = new XMLHttpRequest();
      var keyId = "fb9e6b2d089acaeec4ce29c839748482";
      let url =
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitide +
        "&appid=" +
        keyId;
      var weather = new XMLHttpRequest();
      weather.open("GET", url, true);
      weather.send();
      weather.onload = function () {
        var data2 = JSON.parse(weather.response);
        console.log(`${i + 1}. ${data[i].name}  :  ${data2.main.temp}`);
        i++;
        temperature(data, i);
      };
    } else {
      i++;
      temperature(data, i);
    }
  }
}
