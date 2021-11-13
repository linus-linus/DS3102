/* FUNKSJONER */

// Laster buildingquiz
function loadQuiz(){
    //Lagrer HTML output
    const output = []

    buildingArray.forEach(
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
    buildingArray.forEach( (activeQuestion, questionNo) => {
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

    resultsOutput.innerHTML = `${noOfRightAnswers} av ${buildingArray.length}`
}

/* VARIABLER */
const buildingBtn = document.querySelector(".building-icon")

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


//Laster quiz ved knappetrykk
buildingBtn.addEventListener("click", loadQuiz)
submitBtn.addEventListener("click", displayResults)

