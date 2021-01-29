async function getData(){
    let response = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple");
    let data = await response.json();
    let quizData = []
    for (let i =0; i < data.results.length; i++){
        let object = {}
        object.question = data.results[i].question
        object.difficulty = data.results[i].difficulty
        object.correctAnswer = data.results[i].correct_answer
        let incorrect = data.results[i].incorrect_answers
        incorrect.push( object.correctAnswer)
        object.options = incorrect
        quizData.push(object)
    }
    return quizData
    console.log(quizData);
}


let mainContainer = document.createElement("div")
mainContainer.classList.add("container", "mt-5")

let row = document.createElement("div")
row.classList.add("row")

let col = document.createElement("div")
col.classList.add("col-md-12")

let topRow = document.createElement("div")
topRow.classList.add("row")

let topQues = document.createElement("div")
topQues.classList.add("col-md-6", "mt-2")
let ptext = document.createElement("h2")
ptext.innerHTML = `<h2>Question : </h2>`
ptext.id = "progressText"

let pbd = document.createElement("div")
pbd.classList.add("progress")
pbd.style.height = "30px"

let pb = document.createElement("div")
pb.classList.add("progress-bar", "progress-bar-striped", "progress-bar-animated")
pb.setAttribute("role", "progressbar")
pb.setAttribute("aria-valuenow", "75")
pb.setAttribute("aria-valuemin", "0")
pb.setAttribute("aria-valuemax", "100")
pb.style.width = `0%`
pb.id = "ppercent"

let scoreTab = document.createElement("div")
scoreTab.classList.add("col-md-6", "text-center", "mt-2")

let score = document.createElement("h2")
score.classList.add("col-md-4", "offset-md-8")
score.innerHTML = "Score"

let ScoreVal = document.createElement("h2")
ScoreVal.classList.add("col-md-4", "offset-md-8")
ScoreVal.style.color = "#007BFF"
ScoreVal.innerHTML = "<strong>0</strong>"
ScoreVal.id = "scoreValue"

scoreTab.append(score, ScoreVal )
pbd.appendChild(pb)
topQues.append(ptext, pbd)
topRow.append(topQues, scoreTab)

let mainRow = document.createElement("row")
mainRow.classList.add("row", "mt-5")

let questions = document.createElement("h4")
questions.classList.add("col-12")
questions.innerHTML = "<strong>Question : _</strong>"
questions.id = "question"
mainRow.append(questions)

for(let i = 0; i < 4; i++){
    let op = document.createElement("button")
    op.type = "button"
    op.classList.add("btn", "btn-info", "btn-lg", "btn-block", "text-left", "mt-3", "choice-text")
    op.innerHTML = "_"
    op.id = `op${i}`
    mainRow.appendChild(op)
}

let next = document.createElement("button")
next.type = "button"
next.classList.add("btn", "btn-primary", "btn-lg", "mt-5", "mb-5", "col-sm-2", "offset-sm-10")
next.innerHTML = "Next"
next.id = "next"
mainRow.appendChild(next)

col.append(topRow, mainRow)
row.appendChild(col)
mainContainer.appendChild(row)
document.body.appendChild(mainContainer)

let actualScore = 0;


getData().then((data) => {
    function onEnd(){
        window.open("end.html", "_self")
    }
    function makePage(id, actualScore){
        let q = data[id];
        let as = actualScore;
        document.getElementById("progressText").innerHTML = `<strong>Question : ${id + 1} / 10</strong>`
        document.getElementById("ppercent").style.width = `${id + 1}0%`
        document.getElementById("scoreValue").innerHTML = `<strong>${as * 10}</strong>`
        document.getElementById("question").innerHTML = `<strong>Question : </strong>${q.question}`
        let options = ["<strong>A. </strong>", "<strong>B. </strong>", "<strong>C. </strong>", "<strong>D. </strong>"]
        for(let i = 0; i < 4; i++){

            document.getElementById(`op${i}`).innerHTML = options[i] + q.options[i]
            document.getElementById(`op${i}`).addEventListener("click", function(){
                for(let i = 0; i < 4; i++){
                    document.getElementById(`op${i}`).disabled = true;
                }
                if (q.options[i] == q.correctAnswer){
                    document.getElementById(`op${i}`).classList.remove("btn-info", "btn-success", "btn-danger")
                    document.getElementById(`op${i}`).classList.add("btn-success")
                    as += 1;
                    document.getElementById("scoreValue").innerHTML = `<strong>${as * 10}</strong>`

                }else{
                    document.getElementById(`op${i}`).classList.remove("btn-info", "btn-success", "btn-danger")
                    document.getElementById(`op${i}`).classList.add("btn-danger")
                }
            })
        }

        if(id == 9){
            document.getElementById("next").innerHTML = "Finish"
        }
        document.getElementById("next").addEventListener("click", function(){
            for(let i = 0; i < 4; i++){
                document.getElementById(`op${i}`).classList.remove("btn-info", "btn-success", "btn-danger")
                    document.getElementById(`op${i}`).classList.add("btn-info")
                    document.getElementById(`op${i}`).disabled = false;
            }
            if(id < 9){
                makePage(id + 1, as)
            }else{
                sessionStorage.setItem("score", as * 10);
                onEnd()
            }
        })
    }
    makePage(0, 0)
})