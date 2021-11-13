/* Planet Array 
const planetQuiz = [
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

// Buildings Array //
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
]*/





/* Funksjoner */

// Laster Planetquiz
function loadQuiz(){
    //Lagrer HTML output
    const output = []

    planetArray.forEach(
        (activeQuestion, questionNo) => {
            //Lagrer mulige svar
            const options = []

            //og for hvert mulige svar..
            for(choice in activeQuestion.options){

                //legg til radioKnapp i HTML
                options.push(`
                    <label class="quiz-label">
                        <input type="radio" name="questions${questionNo}" value="${choice}">
                        ${choice} :
                        ${activeQuestion.options[choice]}
                    </label>
                `
                )
            }
            //push spørsmål og svaralternativ til HTML
            output.push(`
                <div class="question"> ${activeQuestion.question}</div>
                <div class="options"> ${options.join('')}</div>
            `
            )
        }
    )

    quizOutput.innerHTML = output.join('')
}

function displayResults(){
    //Hent svaralternativ fra quizen
    const optionsBoxes = quizOutput.querySelectorAll(".options")

    //Brukersvar
    let noOfRightAnswers = 0

    //For each question..
    planetArray.forEach( (activeQuestion, questionNo) => {
        //Finn det riktige svaret
        const optionsBox = optionsBoxes[questionNo]
        const userChoice = `input[name=questions${questionNo}]:checked`
        const userAnswer = (optionsBox.querySelector(userChoice) || {}).value;

        //hvis svaret er riktig
        if(userAnswer === activeQuestion.rightAnswer){
            //legg til i antall riktige svar
            noOfRightAnswers++
        }else{
            optionsBoxes[questionNo].style.color = "red"
        }
    })

    resultsOutput.innerHTML = `${noOfRightAnswers} av ${planetArray.length}`
}

//Variabler
const quizOutput = document.getElementById("quiz")
const resultsOutput = document.getElementById("results-div")
const submitBtn = document.getElementById("submit-btn")
const planetBtn = document.querySelector(".planet-icon")

const planetArray = [
    {
        question: "Hva er kallenavnet til Jorda?",
        options: {
                a: "Den Blå Lagune",
                b: "Den Blå Planeten",
                c: "Venus"
        },
        rightAnswer: "b"
        
    },
    {
        question: "Hvorfor blir Mars kalt Den Røde Planeten?",
        options: {
            a: "Fordi den består av flytende lava",
            b: "Fordi den er så nærme Sola",
            c: "Fordi overflaten er dekket av jernoksid"
        },
        rightAnswer: "c"
    }
]

const buildingsArray = [
    {
        question: "Hvilket land ligger Chryslerbygningen i?",
        options: {
            a: "Dubai",
            b: "Australia",
            c: "USA"
        },
        rightAnswer: "c"
    },
    {
        question: "Hvem bygde Keiser Shah Jahan mausoleet Taj mahal for?",
        options: {
            a: "Favorittbarnebarnet",
            b: "Favorittkonen",
            c: "Dalmantineren Hercules"
        },
        rightAnswer: "b"
    },
    {
        question: "Hvor høyt er Det Skjeve Tårnet i Pisa?",
        options: {
            a: "115 meter",
            b: "16 meter",
            c: "56"
        },
        rightAnswer: "c"
    }
]


//Laster quiz ved knappetrykk

planetBtn.addEventListener("click", loadQuiz)



submitBtn.addEventListener("click", displayResults)































/* 
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

    const buildingDataHolder = buildingQuiz[buildingData]


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

planetQuizActive = false;
function planetQuizFunction(){
    if(!planetQuizActive){
        planetQuizActive = true;
    }
}

buildingQuizActive = false;
function buildingQuizFunction(){
    if(!buildingQuizActive){
        buildingQuizActive = true;
    }
}

nextBtn.addEventListener('click', () => {
    if(!planetQuizFunction){
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
    }if(!buildingQuizFunction){
        const answer = selectedAnswer()
        if(answer) {
        if(answer === buildingQuiz[buildingData].correctAnswer){
            score++
        }
        buildingData++
        
        if(buildingData < buildingQuiz.length){
            loadBuildingQuiz()
        }else{
            buildingQuiz.innerHTML = `
            <h3>Din score ${score} av ${buildingQuiz.length} spørsmål</h3>
            <button onclick="location.reload()">Prøv igjen</button>
            `
        }
    }
}})
    


planetIcon.addEventListener("click", loadPlanetQuiz)
buildingIcon.addEventListener("click", loadBuildingQuiz)

*/
