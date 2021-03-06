import buildingArray from "./quiz-buildingArray.js"
import planetArray from "./quiz-planetArray.js"

/* KNAPPER FRA HTML */
const buildingBtn = document.querySelector(".building-icon")
const planetBtn = document.querySelector(".planet-icon")

/* OUTPUT-SEKSJONER FRA HTML */
let quizOutput = document.querySelector("#quiz")
let resultsOutput = document.getElementById("results-div")
const savedResults = document.querySelector(".saved-results")
const collectPrize = document.querySelector("#collect-prize")
let prizeTxt = document.querySelector("#prize-txt")


/* AKTIVERER KNAPPENE */
const submitBtn = document.getElementById("submit-btn")
planetBtn.addEventListener("click", function(){
    loadQuiz(planetArray)})
buildingBtn.addEventListener("click", function(){
    loadQuiz(buildingArray)})


//Skjuler fullfør- og premieknapp
submitBtn.style.display = "none"
collectPrize.style.display = "none"


/* LASTER QUIZ */
function loadQuiz( arrayToUse ){

    //Sletter evt resultat ved bytte av quiz
    savedResults.style.display = "none"
    quizOutput.innerHTML = ""
    let choice = ""
    resultsOutput.innerHTML = ""

    //Viser fullfør-knapp
    submitBtn.style.display = "block"

    //Lagrer HTML output
    const output = []

    arrayToUse.forEach((activeQuestion, questionNo) => {
        //Lagrer mulige svar
        const options = []
        
        //og for hvert mulige svar..
        for(choice in activeQuestion.options){
         
            //..legg til radioKnapp i HTML
            options.push(`
            <div id="quiz-container">
            <label class="quiz-section__label">
            <input type="radio" name="questions${questionNo}" value="${choice}">
            ${choice} :
            ${activeQuestion.options[choice]}<br>
            </label>
            </div>
            `
            )                 
        }

        //push spørsmål og svaralternativ til HTML
        output.push(`
            <div class="quiz-section__question"> ${activeQuestion.question}</div>
            <div class="options"> ${options.join('')}</div>
            `
            )
        })

        if(arrayToUse==planetArray){
            submitBtn.addEventListener("click", function(){
                displayPlanetResults()
            })
        }else{
            submitBtn.addEventListener("click", function(){
                displayBuildingResults()
            })
        }
    
    quizOutput.innerHTML = output.join('')
    
};

/* PRINTER RESULTAT*/
function displayPlanetResults(){
    resultsOutput.innerHTML = ""
    let localStorageValue = "";
    
    //Hent svaralternativ fra quizen
    const optionsBoxes = quizOutput.querySelectorAll(".options")
    //Brukersvar
    let noOfRightAnswers = 0

    //For each question..
    planetArray.forEach( (activeQuestion, questionNo) => {
        //Finn det riktige svaret
        const optionsBox = optionsBoxes[questionNo]
        const userChoice = `input[name=questions${questionNo}]:checked`
        const userAnswer = (optionsBox.querySelector(userChoice) || {}).value
        

        //hvis svaret er riktig
        if(userAnswer === activeQuestion.rightAnswer){
            //legg til i antall riktige svar
            noOfRightAnswers++
            //Lagrer resultat i localStorage
            localStorage.setItem("result", noOfRightAnswers)
            localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

            optionsBoxes[questionNo].style.color = "#66f875"
        }else{
            optionsBoxes[questionNo].style.color = "#ff7a41"
        }
        //Hvis full pott -> Vis premielink
        if(noOfRightAnswers === planetArray.length){
            prizeTxt.innerHTML = "Gratulerer! Du fikk full score! Trykk for å åpne premien din!"
            collectPrize.style.display = "Block"
        }
    })
    console.log(localStorageValue)
    savedResults.style.display = "block"
    savedResults.innerHTML = localStorageValue;

    resultsOutput.innerHTML = `Du fikk ${noOfRightAnswers} av ${planetArray.length} mulige poeng`
};

function displayBuildingResults(){
    resultsOutput.innerHTML = ""
    let localStorageValue = ""
    
    //Hent svaralternativ fra quizen
    const optionsBoxes = quizOutput.querySelectorAll(".options")
    //Brukersvar
    let noOfRightAnswers = 0

    //For each question..
    buildingArray.forEach( (activeQuestion, questionNo) => {
        //Finn det riktige svaret
        const optionsBox = optionsBoxes[questionNo]
        const userChoice = `input[name=questions${questionNo}]:checked`
        const userAnswer = (optionsBox.querySelector(userChoice) || {}).value

        //hvis svaret er riktig
        if(userAnswer === activeQuestion.rightAnswer){
            //legg til i antall riktige svar
            noOfRightAnswers++
            localStorage.setItem("result", noOfRightAnswers)
            localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`
            optionsBoxes[questionNo].style.color = "#66f875"
        }else{
            optionsBoxes[questionNo].style.color = "#ff7a41"
        }

       //Hvis full pott -> Vis premielink
       if(noOfRightAnswers === planetArray.length){
        prizeTxt.innerHTML = "Gratulerer! Du fikk full score! Trykk for å åpne premien din!"
        collectPrize.style.display = "Block"
    }

    })
    //Lagrer resultat i localStorage
    localStorage.setItem("result", noOfRightAnswers)
    savedResults.innerHTML = localStorageValue;

    //Viser at resultat blir lagret
    savedResults.style.display = "block"
    resultsOutput.innerHTML = `Du fikk ${noOfRightAnswers} poeng av ${buildingArray.length} mulige poeng`
    
};

/* HENTER FRA LOKALSTORAGE OM DET ER MATCHENDE VERDIER DER */
const checkInfoLocalStorage = () => {
    const numberOfItems = localStorage.length
    let localStorageValue = ``

    if(numberOfItems === 0){
        localStorageValue = `Antall verdier i local storage: ${numberOfItems}`
    }else{
        let result = localStorage.getItem("result")
        
        localStorageValue = `Velkommen tilbake! Ditt forrige resultat var ${result} poeng.<br>
                            Vil du prøve igjen?`
    }
    savedResults.innerHTML = localStorageValue;
}

checkInfoLocalStorage()