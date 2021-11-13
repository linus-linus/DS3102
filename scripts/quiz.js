// Quiz-array //
var planetQuiz = [
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

// Quiz-array //
var buildingQuiz = [
    {
        question: "Hvilket land ligger Chrysler Bygningen i?",
        a: "Brasil",
        b: "Australia", 
        c: "USA",
        correctAnswer: "c"  
    },
    {
        question: "Hvor høyt er Det Skjeve Tårnet i Pisa?",
        a: "ca 145 meter",
        b: "ca 56 meter", 
        c: "ca 15 meter",
        correctAnswer: "b"
    }, 
    {
        question: "Hvem bygde Keiser Shah Jahan mausoleet Taj mahal for?",
        a: "Favorittkonen",
        b: "Barnebarnet", 
        c: "Hunden sin",
        correctAnswer: "a"
    }, 
    {
        question: "Når sto Colosseum ferdig?",
        a: "1500 e.kr",
        b: "80 år fvt", 
        c: "80 år evt",
        correctAnswer: "c"
    }, 
    {
        question: "Hvor mange år tok det å bygge Hallgrimskirkja?",
        a: "2 måneder",
        b: "14 år", 
        c: "41 år",
        correctAnswer: "c"
    }  

]

// Ikoner //
const planetIcon = document.querySelector(".planet-icon")
const buildingIcon = document.querySelector(".building-icon")

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

// //
let buildingData = 0
let planetData = 0
let score = 0

// Funksjon for å laste planet-quiz //
function loadPlanetQuiz(){

    emptyQuizChoices()

    const planetDataHolder = planetQuiz[planetData]

    question.innerHTML = planetDataHolder.question
    choiceA.innerHTML = planetDataHolder.a
    choiceB.innerHTML = planetDataHolder.b
    choiceC.innerHTML = planetDataHolder.c
    choiceD.innerHTML = planetDataHolder.d
    choiceE.innerHTML = planetDataHolder.e
    choiceF.innerHTML = planetDataHolder.f
}

// Funksjon for å laste bygning-quiz //
function loadBuildingQuiz(){
    
    emptyQuizChoices()

    let quizHtmlContent = ""

    planetQuiz.forEach(question => {
        let optionContent = ""
        question.options.forEach(option => {
            optionContent += `
            <li class="list__answer">
                <input type="radio" name="quiz-choice" id="a" class="quiz-choice"><!--answer-->
                <label for="a" id="a-label"></label><!--a_text-->
            </li>
            `
        })
    });

    question.innerHTML = buildingDataHolder.question
    choiceA.innerHTML = buildingDataHolder.a
    choiceB.innerHTML = buildingDataHolder.b
    choiceC.innerHTML = buildingDataHolder.c
    choiceD.innerHTML = buildingDataHolder.d
    choiceE.innerHTML = buildingDataHolder.e
    choiceF.innerHTML = buildingDataHolder.f

}

// Funksjon for å tømme valg ved nytt spørsmål //
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
        if(answer === planetQuiz[planetData].correctAnswer){
            score++
        }
        planetData++
        
        if(planetData < planetQuiz.length){
            loadPlanetQuiz()
        }else{
            planetQuiz.innerHTML = `
            <h3>Din score ${score} av ${planetQuiz.length} spørsmål</h3>
            <button onclick="location.reload()">Prøv igjen</button>
            `
        }
    }
})
    


planetIcon.addEventListener("click", loadPlanetQuiz)
buildingIcon.addEventListener("click", loadBuildingQuiz)


