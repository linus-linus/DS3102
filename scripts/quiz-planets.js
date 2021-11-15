/* FUNKSJONER */



// Laster Planetquiz
function loadPlanetQuiz(){

    //Sletter evt resultat ved bytte av quiz
    savedResults.innerHTML = ""
    resultsOutput.innerHTML = ""
    quizOutput2.innerHTML = ""
    submitBtn.style.display = "block"

    //Lagrer HTML output
    const output = []

    checkInfoLocalStorage()

    
    planetArray.forEach(
        (activeQuestion, questionNo) => {
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
}



function displayResults(){

    resultsOutput.innerHTML = "";
    
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
}

const checkInfoLocalStorage = () => {
    const numberOfItems = localStorage.length
    let localStorageValue = ``

    if(numberOfItems === 0){
        localStorageValue = `Antall verdier i local storage: ${numberOfItems}`
    }else{
        let result = localStorage.getItem("result")
        
        localStorageValue = `Velkommen tilbake! Ditt forrige resultat var ${result}`
    }
    savedResults.innerHTML = localStorageValue;
}


/* VARIABLER */
const quizOutput = document.getElementById("quiz")
let resultsOutput = document.getElementById("results-div")
const submitBtn = document.getElementById("submit-btn")
const planetBtn = document.querySelector(".planet-icon")
const savedResults = document.querySelector(".saved-results")

/* ARRAY */
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

/* AKTIVERER KNAPP + IKON */

planetBtn.addEventListener("click", loadPlanetQuiz)
submitBtn.addEventListener("click", displayResults)