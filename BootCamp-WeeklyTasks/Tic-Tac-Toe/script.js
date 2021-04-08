//************Craeting Elements******************/

var selectBox = document.createElement('div');
selectBox.setAttribute('class', 'select-box');
var header1 = document.createElement('header');
header1.innerText = "Taarun's Tic Tac Toe ";
selectBox.appendChild(header1);

//document.body.append(selectBox);

var content = document.createElement('div');
content.setAttribute('class', 'content');
var title = document.createElement('div');
title.setAttribute('class', 'title');
title.innerText = 'Select which player you want to be ❌ or ⭕?';
content.appendChild(title);

//selectBox.appendChild(content);

var options = document.createElement('div');
options.classList.add('options');
var playerXButton = document.createElement('button');
playerXButton.classList.add('playerX');
playerXButton.innerText = 'Player X';
options.appendChild(playerXButton);

var playerOButton = document.createElement('button');
playerOButton.classList.add('playerO');
playerOButton.innerText = 'Player O';
options.appendChild(playerOButton);

content.append(options);

selectBox.appendChild(content);

document.body.append(selectBox);

var playBoard = document.createElement('div');
playBoard.classList.add('play-board');
var details = document.createElement('div');
details.classList.add('details');

var players = document.createElement('div');
players.classList.add('players');
var Xturn = document.createElement('span');
Xturn.classList.add('Xturn');
Xturn.innerText = "X's Turn";
var Oturn = document.createElement('span');
Oturn.classList.add('Oturn');
Oturn.innerText = "O's Turn";
var slider = document.createElement('div');
slider.classList.add('slider');

players.append(Xturn, Oturn, slider);

details.appendChild(players);

// playBoard.appendChild(details);

// document.body.append(playBoard);

var playArea = document.createElement('div');
playArea.classList.add('play-area');

var section1 = document.createElement('section');
var box1 = document.createElement('span');
box1.classList.add('box1');
var box2 = document.createElement('span');
box2.classList.add('box2');
var box3 = document.createElement('span');
box3.classList.add('box3');
section1.append(box1, box2, box3);

var section2 = document.createElement('section');
var box4 = document.createElement('span');
box4.classList.add('box4');
var box5 = document.createElement('span');
box5.classList.add('box5');
var box6 = document.createElement('span');
box6.classList.add('box6');
section2.append(box4, box5, box6);

var section3 = document.createElement('section');
var box7 = document.createElement('span');
box7.classList.add('box7');
var box8 = document.createElement('span');
box8.classList.add('box8');
var box9 = document.createElement('span');
box9.classList.add('box9');
section3.append(box7, box8, box9);

playArea.append(section1, section2, section3);

playBoard.append(details, playArea);

document.body.append(playBoard);

var resultBox = document.createElement('div');
resultBox.classList.add('result-box');
var wonText = document.createElement('div');
wonText.classList.add('won-text');

var buttonResult = document.createElement('div');
buttonResult.classList.add('btn');
var innerButtonResult = document.createElement('button');
innerButtonResult.innerText = 'Replay';
buttonResult.appendChild(innerButtonResult);

resultBox.append(wonText, buttonResult);
document.body.append(resultBox);

//***************Selecting All Elements */

const selectBoxContainer = document.querySelector('.select-box');
const selectXBtn = selectBoxContainer.querySelector('.playerX');
const selectOBtn = selectBoxContainer.querySelector('.playerO');
const playBoardContainer = document.querySelector('.play-board');
const allBox = document.querySelectorAll('section span');
const playersContainer = document.querySelector('.players');
const resultBoxContainer = document.querySelector('.result-box');
const wonTextContainer = resultBoxContainer.querySelector('.won-text');
const replayBtn = resultBoxContainer.querySelector('button');

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute('onclick', 'clickedBox(this)');
  }
};

selectXBtn.onclick = () => {
  selectBoxContainer.classList.add('hide');
  playBoardContainer.classList.add('show');
};
selectOBtn.onclick = () => {
  selectBoxContainer.classList.add('hide');
  playBoardContainer.classList.add('show');
  playersContainer.setAttribute('class', 'players active player');
};
let playerXIcon = 'fas fa-times';
let playerOIcon = 'fab fa-opera';
let playerSign = 'X';
let ai = true;

function clickedBox(element) {
  // console.log(element);
  if (playersContainer.classList.contains('player')) {
    playerSign = 'O';
    element.innerHTML = `<i class="${playerOIcon}"></i>`;
    playersContainer.classList.add('active');
    element.setAttribute('id', playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
    playersContainer.classList.add('active');
    element.setAttribute('id', playerSign);
  }
  selectWinner();
  element.style.pointerEvents = 'none';
  playBoardContainer.style.pointerEvents = 'none';
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    robot(ai);
  }, randomDelayTime);
}

function robot(ai) {
  let array = [];

  if (ai) {
    playerSign = 'O';
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
        // console.log(i);
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    // console.log(`RandomBox -- ${randomBox}`);
    if (array.length > 0) {
      if (playersContainer.classList.contains('player')) {
        playerSign = 'X';
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        playersContainer.classList.add('active');
        allBox[randomBox].setAttribute('id', playerSign);
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        playersContainer.classList.remove('active');
        allBox[randomBox].setAttribute('id', playerSign);
      }

      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = 'none';
    playBoardContainer.style.pointerEvents = 'auto';
    playerSign = 'X';
  }
}

function getClass(classname) {
  return document.querySelector('.box' + classname).id;
}

function checkClasses(val1, val2, val3, sign) {
  if (
    getClass(val1) == sign &&
    getClass(val2) == sign &&
    getClass(val3) == sign
  ) {
    return true;
  }
}

function selectWinner() {
  if (
    checkClasses(1, 2, 3, playerSign) ||
    checkClasses(4, 5, 6, playerSign) ||
    checkClasses(7, 8, 9, playerSign) ||
    checkClasses(1, 4, 7, playerSign) ||
    checkClasses(2, 5, 8, playerSign) ||
    checkClasses(3, 6, 9, playerSign) ||
    checkClasses(1, 5, 9, playerSign) ||
    checkClasses(3, 5, 7, playerSign)
  ) {
    console.log(`${playerSign} is the winner`);
    ai = false;
    robot(ai);
    setTimeout(() => {
      playBoardContainer.classList.remove('show');
      resultBoxContainer.classList.add('show');
    }, 1000);
    wonText.innerText = `${playerSign} has won the game 🥳`;
  } else {
    if (
      getClass(1) != '' &&
      getClass(2) != '' &&
      getClass(3) != '' &&
      getClass(4) != '' &&
      getClass(5) != '' &&
      getClass(6) != '' &&
      getClass(7) != '' &&
      getClass(8) != '' &&
      getClass(9) != ''
    ) {
      ai = false;
      robot(ai);
      setTimeout(() => {
        playBoardContainer.classList.remove('show');
        resultBoxContainer.classList.add('show');
      }, 1000);
      wonText.innerText = `Match has Drawn ✌☮`;
    }
  }
}

replayBtn.onclick = () => {
  window.location.reload();
};
