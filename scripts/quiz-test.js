//Oppretter en funksjon som kan ta imot array gjennom parameter arrayToUse

let loadQuiz = (arrayToUse) => {
  //Sletter evt resultat ved bytte av quiz
  //savedResults.innerHTML = ""
  resultsOutput.innerHTML = ""
  //quizOutput2.innerHTML = ""
  submitBtn.style.display = "block"

  //Lagrer HTML output
  const output = []

  arrayToUse.forEach((activeQuestion) => {
    //Lagrer mulige svar
    const options = []

    //og for hvert mulige svar..
    for (choice in activeQuestion.options) {
      //..legg til radioKnapp i HTML
      options.push(`
                 <label class="quiz-label">
                         <input type="radio" name="questions${activeQuestion.questionNo}" value="${activeQuestion.choice}">
                         ${choice} :
                         ${activeQuestion.options[choice]}<br>
                     </label>
                    `)
    }
    //push spørsmål og svaralternativ til HTML
    output.push(`
                 <div class="question"> ${activeQuestion.question}</div>
                 <div class="options"> ${options.join("")}</div>
                `)
  })
  quizOutput.innerHTML = output.join("")
}

function displayResults() {
  resultsOutput.innerHTML = ""
  submitBtn.style.display = "block"

  //Hent svaralternativ fra quizen
  const optionsBoxes = quizOutput.querySelectorAll(".options")
  //Brukersvar
  let noOfRightAnswers = 0

  //For each question..
  arrayToUse.forEach((activeQuestion) => {
    //Finn det riktige svaret
    const optionsBox = optionsBoxes[activeQuestion.questionNo]
    const userChoice = `input[name=questions${activeQuestion.questionNo}]:checked`
    const userAnswer = (optionsBox.querySelector(userChoice) || {}).value

    //hvis svaret er riktig
    if (userAnswer === activeQuestion.rightAnswer) {
      //legg til i antall riktige svar
      noOfRightAnswers++
      localStorage.setItem("result", noOfRightAnswers)
      //localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

      optionsBoxes[questionNo].style.color = "lightgreen"
    } else {
      optionsBoxes[questionNo].style.color = "red"
    }
  })
  localStorage.setItem("result", noOfRightAnswers)
  //savedResults.innerHTML = localStorageValue;

  resultsOutput.innerHTML = `${noOfRightAnswers} av ${arrayToUse.length}`
}

/* VARIABLER */
const quizOutput = document.getElementById("quiz")
let resultsOutput = document.getElementById("results-div")
const planetBtn = document.querySelector(".planet-icon")
const submitBtn = document.getElementById("submit-btn")

const savedResults = document.querySelector(".saved-results")

/* ARRAY */
let planetArray = [
  {
    question: "Hva er kallenavnet til Jorda?",
    options: {
      a: "Den Blå Lagune",
      b: "Den Blå Planeten",
      c: "Venus",
    },
    rightAnswer: "b",
  },
  {
    question: "Hvorfor blir Mars kalt Den Røde Planeten?",
    options: {
      a: "Fordi den består av flytende lava",
      b: "Fordi den er så nærme Sola",
      c: "Fordi overflaten er dekket av jernoksid",
    },
    rightAnswer: "c",
  },
]

planetBtn.addEventListener("click", loadQuiz(planetArray))
submitBtn.addEventListener("click", displayResults, () => {
  savedResults = ""
})
