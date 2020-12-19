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

// let main_div = document.createElement("div");
// main_div.classList.add("container", "mt-5", "text-center");
// // main_div.style.height = "500px"
// main_div.style.backgroundColor = "#e0ece4";

// let row = document.createElement("div");
// row.classList.add("row");

// let counter = document.createElement("div");
// counter.classList.add(
//   "col-md-4",
//   "offset-md-4",
//   "text-center",
//   "rounded",
//   "border",
//   "align-middle"
// );
// counter.style.color = "white";
// counter.style.backgroundColor = "#ff4b5c";

// let message = document.createElement("h1");
// message.classList.add("heading");
// message.innerHTML = "10";
// message.style.fontSize = "10rem";

// setTimeout(() => {
//   message.innerText = "10";
//   setTimeout(() => {
//     message.innerHTML = "9";
//     setTimeout(() => {
//       message.innerHTML = "8";
//       setTimeout(() => {
//         message.innerHTML = "7";
//         setTimeout(() => {
//           message.innerHTML = "6";
//           setTimeout(() => {
//             message.innerHTML = "5";
//             setTimeout(() => {
//               message.innerHTML = "4";
//               setTimeout(() => {
//                 message.innerHTML = "3";
//                 setTimeout(() => {
//                   message.innerHTML = "2";
//                   setTimeout(() => {
//                     message.innerHTML = "1";
//                     setTimeout(() => {
//                       message.innerHTML = "0";
//                       setTimeout(() => {
//                         message.innerHTML = "Happy Independence Day";
//                         message.style.fontSize = "5rem";
//                         counter.classList.add("col-md-12");
//                         counter.classList.remove("offset-md-4");
//                       }, 1000);
//                     }, 1000);
//                   }, 1000);
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// counter.appendChild(message);
// row.appendChild(counter);
// main_div.appendChild(row);

// document.body.append(main_div);
