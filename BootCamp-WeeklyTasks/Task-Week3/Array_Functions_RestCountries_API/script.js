// Try the rest countries api below. Extract and print the flag url of all the countries in console. Use the html template. https://restcountries.eu/rest/v2/all

let request = new XMLHttpRequest();

//document.getElementById("1").innerHTML = "";
console.clear();

try {
  request.open("GET", "https://restcountries.eu/rest/v2/all", true);
  request.send();

  //load the sequence
  request.onload = function () {
    if (request.status != 200) {
      throw new Error("Network Issue...Please reload or try after some time");
    } else {
      var data = JSON.parse(this.responseText);
      // console.log(data[0]);

      const asianCountries = data.filter((item) => {
        return item.region === "Asia";
      });

      const population = data.filter((item) => {
        return item.population < 200000;
      });

      const totalpopulation = data.reduce((accumulator, item) => {
        return accumulator + item.population;
      }, 0);

      let currencyDollar = [];

      data.forEach((item) => {
        let currencyArr = item.currencies;
        currencyArr.forEach((i) => {
          if (i.name === "United States dollar") {
            currencyDollar.push(item.name);
          }
        });
      });

      console.log("****Countries with US Dollars****");
      console.log(currencyDollar);

      console.log(`Total population in all countries:${totalpopulation}`);

      let allDetailsArray = [];
      const allDetails = data.forEach((item) => {
        allDetailsArray.push(
          "Country:" + item.name,
          "Capital:" + item.capital,
          "FlagUrl:" + item.flag
        );
      });
      console.log("***Country,Capital and FlagUrl of Rest Countries API ***");
      console.log(allDetailsArray);

      let populationSmallArray = [];
      population.forEach((item) => {
        populationSmallArray.push(item.name + ":" + item.population);
      });
      console.log("***Population lesser than 2 lakhs***");
      console.log(
        "Countries having population lesser than 2 lakhs:" +
          populationSmallArray
      );

      let asianCountriesarray = [];
      asianCountries.forEach((item) => {
        asianCountriesarray.push(item.name);
      });
      const asianPopulation = asianCountries.reduce((accumulator, item) => {
        return accumulator + item.population;
      }, 0);
      console.log(
        `The total population in Asian Countries are: ${asianPopulation}`
      );
      console.log("***AsianCountries****");
      console.log(
        "AsianCountries from Rest Countries API:" + asianCountriesarray
      );
    }
  };
} catch (err) {
  console.log(e.message);
}
