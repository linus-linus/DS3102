/* FUNKSJONER */

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
            optionsBoxes[questionNo].style.color = "green"
        }else{
            optionsBoxes[questionNo].style.color = "red"
        }
    })


    resultsOutput.innerHTML = `${noOfRightAnswers} av ${planetArray.length}`
}



/* VARIABLER */
const quizOutput = document.getElementById("quiz")
const resultsOutput = document.getElementById("results-div")
const submitBtn = document.getElementById("submit-btn")
const planetBtn = document.querySelector(".planet-icon")

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
planetBtn.addEventListener("click", loadQuiz)
submitBtn.addEventListener("click", displayResults)

