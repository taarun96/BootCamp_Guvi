let mainContainer = document.createElement("div")
mainContainer.classList.add("container", "mt-5")

let row = document.createElement("div")
row.classList.add("row")

let col = document.createElement("div")
col.classList.add("col-12", "text-center", "mt-5")

let heading = document.createElement("div")
heading.classList.add("font-weight-bold", "mb-3")
heading.innerHTML = "High Scores"
heading.style.fontSize = "4.5rem"
heading.style.color = "#56A5EB"

let highscores = JSON.stringify(localStorage)
col.append(heading)

let sorted = [];
for (const [key, value] of Object.entries(localStorage)) {
    sorted.push([key, value])
}

sorted.sort((a, b) => {return a[1] - b[1]})
sorted.reverse()

for(let i of sorted){

    let score = document.createElement("div")
    score.classList.add("font-weight-bold")
    score.innerHTML = `${i[0]} - ${i[1]}`
    score.style.fontSize = "3rem"
    col.appendChild(score)
}

let home = document.createElement("button")
home.type = "button"
home.classList.add("col-md-6", "btn", "btn-outline-primary", "btn-lg", "mt-3", "mb-3")
home.id = "goHome"
home.innerHTML = "Go Home"
home.onclick = function(){window.open("index.html", "_self")}
col.appendChild(home)

row.appendChild(col)
mainContainer.appendChild(row)
document.body.appendChild(mainContainer)