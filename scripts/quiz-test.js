//Oppretter en funksjon som kan ta imot array gjennom parameter arrayToUse
const buildingArray = [
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
/* KNAPPER */
const buildingBtn = document.querySelector(".building-icon")
const planetBtn = document.querySelector(".planet-icon")
let quizOutput = document.querySelector("#quiz")
let resultsOutput = document.getElementById("results-div")


planetBtn.addEventListener("click", function(){
    loadQuiz(planetArray)})
buildingBtn.addEventListener("click", function(){
    loadQuiz(buildingArray)})


/* LASTER QUIZ */
function loadQuiz( arrayToUse ){

    quizOutput.innerHTML = ""

    //Sletter evt resultat ved bytte av quiz
    //savedResults.innerHTML = ""
    resultsOutput.innerHTML = ""
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
                 <label class="quiz-label">
                         <input type="radio" name="questions${questionNo}" value="${choice}">
                         ${choice} :
                         ${activeQuestion.options[choice]}<br>
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
};


/* PRINTER RESULTAT*/
function displayPlanetResults(){
    resultsOutput.innerHTML = ""
    
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
            localStorage.setItem("result", noOfRightAnswers)
            //localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

            optionsBoxes[questionNo].style.color = "lightgreen"
        }else{
            optionsBoxes[questionNo].style.color = "red"
        }
    })
    localStorage.setItem("result", noOfRightAnswers)
    //savedResults.innerHTML = localStorageValue;

    resultsOutput.innerHTML = `${noOfRightAnswers} av ${planetArray.length}`
};

function displayBuildingResults(){
    resultsOutput.innerHTML = ""
    
    
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
            //localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

            optionsBoxes[questionNo].style.color = "lightgreen"
        }else{
            optionsBoxes[questionNo].style.color = "red"
        }
    })
    localStorage.setItem("result", noOfRightAnswers)
    //savedResults.innerHTML = localStorageValue;

    resultsOutput.innerHTML = `${noOfRightAnswers} av ${buildingArray.length}`
};

/* VARIABLER */

const savedResults = document.querySelector(".saved-results")

const submitBtn = document.getElementById("submit-btn")
submitBtn.addEventListener("click", function(){
    displayPlanetResults()
})






/* ARRAY */




/*submitBtn.addEventListener("click", displayResults, () => {
    savedResults = ""
})*/



