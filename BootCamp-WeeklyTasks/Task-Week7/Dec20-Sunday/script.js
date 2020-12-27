async function restCountriesData() {
  try {
    let url = "https://restcountries.eu/rest/v2/all";
    let response = await fetch(url);
    let text = await response.json();
    ll = text[0].latlng;
    return text;
  } catch (error) {
    console.error(error);
  }
}
restCountriesData();

async function openWeatherData(item) {
  let api_key = "fb9e6b2d089acaeec4ce29c839748482";
  let ow_link = "https://api.openweathermap.org/data/2.5/weather?";

  try {
    let latlon = await restCountriesData();
    latlon = latlon[item].latlng;
    let lat = latlon[0];
    let lon = latlon[1];
    url = `${ow_link}lat=${lat}&lon=${lon}&appid=${api_key}`;
    let response = await fetch(url);
    let text = await response.json();
    return text;
  } catch (error) {
    console.error(error);
  }
}

document.body.style.background = "linear-gradient(to right, #c31432, #240b36)";

let main_container = document.createElement("div");
main_container.classList.add("container");

let row = document.createElement("div");
row.classList.add("row");

let top_col = document.createElement("div");
top_col.classList.add("col-12");
top_col.style.textAlign = "center";

let heading = document.createElement("h1");
heading.innerHTML =
  "<strong><em>Rest Countries & Open Weather API Combo</em></strong>";
heading.style.fontFamily = "cursive";
heading.style.color = "white";
heading.classList.add("mt-5");
top_col.append(heading);
row.appendChild(top_col);

async function createCards(id) {
  let content = await restCountriesData();
  let flag = content[id].flag;
  let name = content[id].name;
  let capital = content[id].capital;
  let region = content[id].region;
  let countryCode = content[id].alpha3Code;

  let col = document.createElement("div");
  col.classList.add("col-lg-4", "col-xs-12");

  let cards = document.createElement("div");
  cards.classList.add("card-flex", "border", "mt-3", "mb-3");
  cards.style.borderRadius = "6px";
  cards.style.textAlign = "center";

  let cardhead = document.createElement("div");
  cardhead.classList.add("card-header");
  cardhead.style.backgroundColor = "#000000";
  cardhead.style.color = "white";
  cardhead.innerText = name;

  let cardbody = document.createElement("div");
  cardbody.classList.add("card-body");
  cardbody.style.backgroundImage =
    "linear-gradient(to bottom, #000428, #004e92)";

  let flag_image = document.createElement("img");
  flag_image.src = flag;
  flag_image.classList.add("img");
  flag_image.style.height = "200px";
  flag_image.style.maxWidth = "100%";

  let details = document.createElement("div");
  details.classList.add("mt-3");
  details.style.color = "#FFF";
  details.innerHTML = `Capital : ${capital}<br>`;
  details.innerHTML += `Region : ${region}<br>`;
  details.innerHTML += `Country code : ${countryCode}<br>`;

  let button = document.createElement("button");
  button.classList.add("btn", "btn-outline-light", "mt-2");
  button.onclick = async function () {
    let w_data = await openWeatherData(id);
    let main = w_data.weather[0].main;
    let desc = w_data.weather[0].description;
    let iconcode = w_data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    let temp = w_data.main.temp;
    let tempFixed = (temp - 273.15).toFixed(2);
    let pressure = w_data.main.pressure;
    let humidity = w_data.main.humidity;
    let w_speed = w_data.wind.speed;

    let alert = document.createElement("div");
    alert.classList.add("alert", "alert-success", "mt-3");
    alert.setAttribute("role", "alert");

    let head = document.createElement("h3");
    head.innerHTML = "Weather Details";

    let image = document.createElement("img");
    image.src = iconurl;

    let lis = document.createElement("p");
    lis.innerHTML += main;
    lis.innerHTML += `Temperature : ${tempFixed}&deg;C<br>`;
    lis.innerHTML += `Pressure : ${pressure}<br>`;
    lis.innerHTML += `Humidity : ${humidity}<br>`;
    lis.innerHTML += `Wind Speed : ${w_speed}<br>`;

    let button_next = document.createElement("button");
    button_next.classList.add("btn", "btn-outline-secondary");
    button_next.innerText = "Home Page";
    button_next.onclick = function () {
      cardbody.removeChild(alert);
      cardbody.append(flag_image, details);
    };

    alert.append(head, image, lis, button_next);
    cardbody.removeChild(details);
    cardbody.removeChild(flag_image);
    cardbody.appendChild(alert);
  };
  button.innerText = "Click for Weather Details";
  details.appendChild(button);

  cardbody.append(flag_image, details);

  cards.append(cardhead, cardbody);
  col.append(cards);
  row.append(col);
}

async function getCards() {
  for (let i = 0; i < 250; i++) {
    await createCards(i);
  }
}

getCards();

main_container.appendChild(row);
document.body.append(main_container);
