// Try the rest countries api below. Extract and print the flag url of all the countries in console. Use the html template. https://restcountries.eu/rest/v2/all

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.send();

//load the sequence
request.onload = function () {
  var data = JSON.parse(this.responseText);
  console.log(data);
  for (index = 0; index <= data.length - 1; index++) {
    console.log(
      `${index + 1}:  ${data[index].name} flag url: ${data[index].flag}`
    );
  }
};
