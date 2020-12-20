var container = document.createElement("div");
container.classList.add("container");
container.classList.add("jumbotron");
container.classList.add("text-center");
container.classList.add("bg-warning");
container.classList.add("mt-5");

var countdown = document.createElement("h1");
countdown.setAttribute("class", "display-4");
countdown.innerText = "The Countdown - Callback Hell Task!!!";

container.appendChild(countdown);

var horizontal = document.createElement("hr");

container.appendChild(horizontal);

var maincountdown = document.createElement("h1");
maincountdown.setAttribute("class", "display-1");

setTimeout(function () {
  maincountdown.innerText = "10";
  setTimeout(function () {
    maincountdown.innerText = "9";
    setTimeout(function () {
      maincountdown.innerText = "8";
      setTimeout(function () {
        maincountdown.innerText = "7";
        setTimeout(function () {
          maincountdown.innerText = "6";
          setTimeout(function () {
            maincountdown.innerText = "5";
            setTimeout(function () {
              maincountdown.innerText = "4";
              setTimeout(function () {
                maincountdown.innerText = "3";
                setTimeout(function () {
                  maincountdown.innerText = "2";
                  setTimeout(function () {
                    maincountdown.innerText = "1";

                    setTimeout(function () {
                      maincountdown.innerText = "Happy New Year 2021";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

container.appendChild(maincountdown);

document.body.append(container);
