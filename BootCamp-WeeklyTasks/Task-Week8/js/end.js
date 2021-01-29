function success() {
    if(document.getElementById("username").value==="") { 
           document.getElementById('saveScoreBtn').disabled = true; 
    } else { 
           document.getElementById('saveScoreBtn').disabled = false;
    }
}

let mainContainer = document.createElement("div")
mainContainer.classList.add("container", "mt-5")

let row = document.createElement("div")
row.classList.add("row")

let col = document.createElement("div")
col.classList.add("col-12", "text-center", "mt-5")

let score = document.createElement("div")
score.classList.add("font-weight-bold")
score.innerHTML = `Your Score : ${sessionStorage.getItem("score")}`
score.style.fontSize = "4.5rem"
score.style.color = "#56A5EB"

let username = document.createElement("input")
username.type = "text"
username.classList.add("form-control", "col-md-6", "offset-md-3")
username.placeholder = "User Name"
username.id = "username"
username.style.height = "50px"
username.onkeyup = function(){success()}

let saveScore = document.createElement("button")
saveScore.type = "button"
saveScore.classList.add("col-md-12", "btn", "btn-outline-primary", "btn-lg", "mt-3")
saveScore.id = "saveScoreBtn"
saveScore.innerHTML = "Save"
saveScore.disabled = true
saveScore.onclick = function(){
    localStorage.setItem(document.getElementById("username").value, sessionStorage.getItem("score"))
    document.getElementById("username").disabled = true
    document.getElementById("saveScoreBtn").disabled = true
    sessionStorage.clear()
}

let home = document.createElement("button")
home.type = "button"
home.classList.add("col-md-6", "btn", "btn-outline-primary", "btn-lg", "mt-3")
home.id = "goHome"
home.innerHTML = "Go Home"
home.onclick = function(){window.open("index.html", "_self")}

let playAgain = document.createElement("button")
playAgain.type = "button"
playAgain.classList.add("col-md-6", "btn", "btn-outline-primary", "btn-lg", "mt-3")
playAgain.id = "playAgain"
playAgain.innerHTML = "Play Again"
playAgain.onclick = function(){window.open("game.html", "_self")}

col.append(score, username, saveScore, playAgain, home)
row.appendChild(col)
mainContainer.appendChild(row)
document.body.appendChild(mainContainer)
