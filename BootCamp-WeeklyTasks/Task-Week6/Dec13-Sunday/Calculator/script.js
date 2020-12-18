var container_nav = document.createElement("nav");
container_nav.classList.add("navbar");
container_nav.classList.add("navbar-dark");
container_nav.classList.add("bg-danger");

var title = document.createElement("span");
title.classList.add("navbar-brand");
title.classList.add("mb-0");
title.classList.add("h1");
title.innerText = "Calculator Task using DOM";
container_nav.appendChild(title);

document.body.append(container_nav);

var main_container = document.createElement("div");
main_container.classList.add("container-flex");
main_container.classList.add("mt-5");

var row = document.createElement("div");
row.classList.add("row");
row.style.margin = "0";

var col = document.createElement("div");
col.classList.add("col-lg-6", "col-12");
col.classList.add("offset-lg-3");
row.appendChild(col);
main_container.appendChild(row);

//document.append.body(main_container);'

var row_1 = document.createElement("div");
row_1.classList.add("row");

var col_1 = document.createElement("div");
col_1.classList.add("col-12");

var outputarea = document.createElement("input");
outputarea.setAttribute("type", "text");
outputarea.classList.add("form-control");
outputarea.classList.add("text-right");
outputarea.classList.add("mb-4");
outputarea.setAttribute("id", "type-area");
outputarea.setAttribute("readonly", "true");
outputarea.setAttribute("placeholder", "Zero");
outputarea.style.fontSize = "25px";
outputarea.style.borderRadius = "10px";
outputarea.style.padding = "20px 10px";
outputarea.style.lineHeight = "20px";
outputarea.style.border = "1px solid black";
col_1.append(outputarea);

var col_2 = document.createElement("div");
col_2.classList.add("col-12", "mb-4");

//https://stackoverflow.com/questions/14444938/append-text-to-textarea-with-javascript
//adding text element to text box on click

function addText(event) {
  var targ = event.target || event.srcElement;
  document.getElementById("type-area").value +=
    targ.textContent || targ.innerText;
}

function loadNumber(value, color, id) {
  var number_ = document.createElement("div");
  if (value == "=") {
    number_.classList.add("col-6");
  } else {
    number_.classList.add("col-3");
  }
  number_.style.display = "inline-block";
  var number = document.createElement("input");
  number.setAttribute("type", "button");
  number.setAttribute("value", value);
  number.setAttribute("id", id);
  number.innerHTML = value;
  number.onclick = function () {
    addText(event);
  };
  number.classList.add("btn");
  number.classList.add(color);
  number.style.height = "100%";
  number.style.width = "100%";
  number.style.fontSize = "3vw";
  number.style.borderRadius = "10px";
  number_.appendChild(number);
  return number_;
}

let n7 = loadNumber("7", "btn-outline-info", "seven");
let n8 = loadNumber("8", "btn-outline-info", "eight");
let n9 = loadNumber("9", "btn-outline-info", "nine");
let n_mod = loadNumber(" % ", "btn-outline-warning", "n_mod");

col_2.append(n7, n8, n9, n_mod);

var col_3 = document.createElement("div");
col_3.classList.add("col-12", "mb-4");

let n4 = loadNumber("4", "btn-outline-info", "four");
let n5 = loadNumber("5", "btn-outline-info", "five");
let n6 = loadNumber("6", "btn-outline-info", "six");
let n_div = loadNumber(" / ", "btn-outline-warning", "n_div");

col_3.append(n4, n5, n6, n_div);

var col_4 = document.createElement("div");
col_4.classList.add("col-12", "mb-4");

let n1 = loadNumber("1", "btn-outline-info", "one");
let n2 = loadNumber("2", "btn-outline-info", "two");
let n3 = loadNumber("3", "btn-outline-info", "three");
let n_mul = loadNumber(" * ", "btn-outline-warning", "n_mul");

col_4.append(n1, n2, n3, n_mul);

var col_5 = document.createElement("div");
col_5.classList.add("col-12", "mb-4");

let n_dot = loadNumber(".", "btn-outline-info", "n_dot");
let n0 = loadNumber("0", "btn-outline-info", "zero");
let n_add = loadNumber(" + ", "btn-outline-warning", "n_add");
let n_sub = loadNumber(" - ", "btn-outline-warning", "n_sub");

col_5.append(n_dot, n0, n_add, n_sub);

var col_6 = document.createElement("div");
col_6.classList.add("col-12", "mb-4");

let n_clear = loadNumber("Clear", "btn-outline-danger", "n_clear");
let n_back = loadNumber("Delete", "btn-outline-danger", "n_back");
let n_equal = loadNumber("=", "btn-outline-success", "n_equal");

col_6.append(n_clear, n_back, n_equal);

//keyboard number press using keycodes

//https://keycode.info/

window.onload = function () {
  var input = document.getElementById("type-area");
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 48) {
      event.preventDefault();
      document.getElementById("zero").click();
    }
    if (event.keyCode === 49) {
      event.preventDefault();
      document.getElementById("one").click();
    }
    if (event.keyCode === 50) {
      event.preventDefault();
      document.getElementById("two").click();
    }
    if (event.keyCode === 51) {
      event.preventDefault();
      document.getElementById("three").click();
    }
    if (event.keyCode === 52) {
      event.preventDefault();
      document.getElementById("four").click();
    }
    if (event.keyCode === 53) {
      event.preventDefault();
      document.getElementById("five").click();
    }
    if (event.keyCode === 54) {
      event.preventDefault();
      document.getElementById("six").click();
    }
    if (event.keyCode === 55) {
      event.preventDefault();
      document.getElementById("seven").click();
    }
    if (event.keyCode === 56) {
      event.preventDefault();
      document.getElementById("eight").click();
    }
    if (event.keyCode === 57) {
      event.preventDefault();
      document.getElementById("nine").click();
    }
    if (event.keyCode === 190) {
      event.preventDefault();
      document.getElementById("n_dot").click();
    }
    if (event.keyCode === 191) {
      event.preventDefault();
      document.getElementById("n_div").click();
    }
    if (event.keyCode === 106) {
      event.preventDefault();
      document.getElementById("n_mul").click();
    }
    if (event.keyCode === 187) {
      event.preventDefault();
      document.getElementById("n_add").click();
    }
    if (event.keyCode === 189) {
      event.preventDefault();
      document.getElementById("n_sub").click();
    }
    if (event.keyCode === 8) {
      event.preventDefault();
      document.getElementById("n_clear").click();
    }
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("n_equal").click();
    }
  });

  let backspace = document.getElementById("n_back");
  let evaluation = document.getElementById("n_equal");
  let clear = document.getElementById("n_clear");
  let typeArea = document.getElementById("type-area");

  backspace.onclick = function () {
    if (typeArea.value[typeArea.value.length - 1] != " ") {
      typeArea.value = typeArea.value.substring(0, typeArea.value.length - 1);
    } else {
      typeArea.value = typeArea.value.substring(0, typeArea.value.length - 2);
    }
  };
  evaluation.onclick = function () {
    if (typeArea.value) {
      typeArea.value = typeArea.value.substring(
        typeArea.value.lastIndexOf("=") + 1
      );
      typeArea.value = eval(typeArea.value);
    }
  };
  clear.onclick = function () {
    typeArea.value = "";
  };
};

col.append(row_1);
row_1.append(col_1, col_2, col_3, col_4, col_5, col_6);
document.body.append(container_nav, main_container);
