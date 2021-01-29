function onPlay(){
    window.open("game.html", "_self")
}

function onHighScores(){
    window.open("highscores.html", "_self")
}

let main_Container = document.createElement("div")
main_Container.classList.add("container", "text-center", "mt-5")
let head = document.createElement("h1")
head.innerHTML = "Quiz"
head.style.fontSize = "4.5rem"
head.style.color = "#7AB8EF"

let playButton = document.createElement("button")
playButton.classList.add("mt-4", "btn", "btn-lg", "btn-info", "btn-block", "col-md-6", "offset-md-3")
playButton.style.fontSize = "2rem"
playButton.innerHTML = "Play"
playButton.id = "play"
playButton.addEventListener("click", function(){onPlay()})

let highScoreButton = document.createElement("button")
highScoreButton.classList.add("mt-3", "btn", "btn-lg", "btn-info", "btn-block", "col-md-6", "offset-md-3")
highScoreButton.style.fontSize = "2rem"
highScoreButton.innerHTML = "High Scores"
highScoreButton.id = "highscores"
highScoreButton.addEventListener("click", function(){onHighScores()})

main_Container.append(head, playButton, highScoreButton)
document.body.appendChild(main_Container)