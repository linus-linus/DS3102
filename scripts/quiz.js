
var quizQuestions = [
    {
        question: "Hva er kallenavnet til Jorda?",
        a: "Venus",
        b: "Den blå planeten", 
        c: "Den blå lagune",
        correctAnswer: "b"  
    },
    {
        question: "Hvor mange planeter er det mellom Sola og Saturn?",
        a: "5",
        b: "2", 
        c: "33",
        correctAnswer: "a"
    }, 
    {
        question: "Hvor mange år er Neptun?",
        a: "4,5 milliarder år",
        b: "1 milliard år", 
        c: "100 millioner år",
        correctAnswer: "a"
    }, 
    {
        question: "Hvor lang tid bruker Uranus på en runde rundt Sola?",
        a: "1 år",
        b: "4 måneder", 
        c: "84 år",
        correctAnswer: "c"
    }, 
    {
        question: "Hvorfor blir Mars kalt 'Den Røde Planeten?",
        a: "Fordi sola skinner så sterkt på den",
        b: "Fordi hele planeten er dekket i flytende lava", 
        c: "Fordi overflaten er dekket i jernoksid",
        correctAnswer: "c"
    }  

]
// Henter inn: Quiz-containeren, radioknapper, spørsmål//
const quizDiv = document.querySelector(".quiz-div")
const quizChoice = document.querySelectorAll(".quiz-choice")
const question = document.querySelectorAll("#question-h3")
// Svaralternativ //
const choiceA = document.getElementById("a-label")
const choiceB = document.getElementById("b-label")
const choiceC = document.getElementById("c-label")
const choiceD = document.getElementById("d-label")
const choiceE = document.getElementById("e-label")
const choiceF = document.getElementById("f-label")
// Knapp //
const nextBtn = document.getElementById("next-btn")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    emptyQuizChoices()

    const currentQuizData = quizQuestions[currentQuiz]

    question.innerHTML = currentQuizData.question
    choiceA.innerHTML = currentQuizData.a
    choiceB.innerHTML = currentQuizData.b
    choiceC.innerHTML = currentQuizData.c
    choiceD.innerHTML = currentQuizData.d
    choiceE.innerHTML = currentQuizData.e
    choiceF.innerHTML = currentQuizData.f
}

function emptyQuizChoices(){
    quizChoice.forEach(quizChoice => quizChoice.checked = false)
}

function selectedAnswer(){
    let answer
    quizChoice.forEach(quizChoice => {
        if(quizChoice.checked){
            answer = quizChoice.id
        }
    })
    return answer
}

nextBtn.addEventListener('click', () => {
    const answer = selectedAnswer()
    if(answer) {
        if(answer === quizQuestions[currentQuiz].correctAnswer){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizQuestions.length){
            loadQuiz()
        }else{
            quizQuestions.innerHTML = `
            <h3>Din score ${score} av ${quizQuestions.length} spørsmål</h3>
            <button onclick="location.reload()">Prøv igjen</button>
            `
        }
    }
})



