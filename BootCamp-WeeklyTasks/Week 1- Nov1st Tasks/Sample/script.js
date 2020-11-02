// Try the rest countries api below. Extract and print the flag url of all the countries in console. Use the html template. https://restcountries.eu/rest/v2/all

var request = new XMLHttpRequest();

//OPEN AND ASYNCHRONOUS
request.open("GET", "https://restcountries.eu/rest/v2/all", true);

//SEND
request.send();

//load the sequence
request.onload = function () {
  var data = JSON.parse(this.responseText);
  for (index = 0; index <= data.length - 1; index++) {
    console.log(`${data[index].name} flag url: ${data[index].flag}`);
  }
};
