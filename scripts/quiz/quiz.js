
/* ARRAYS */ 

let buildingArray = [
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
    },
    {
        question: "I hvilken verdensdel finner man tempelet Angkor Wat?",
        options: {
            a: "Sverge",
            b: "Asia",
            c: "Oseania"
        },
        rightAnswer: "b"
    },
    {
        question: "Hva ble Louvre brukt som før det ble museum?",
        options: {
            a: "Festning og kongelig residens",
            b: "Et amfiteater",
            c: "Hundekennel"
        },
        rightAnswer: "a"
    },
    {
        question: "Hvorfor har The Pagoda of Auspicious Light måttet bli ombygget flere ganger?",
        options: {
            a: "Fordi grunnmuren er svak",
            b: "På grunn av jordskjelv",
            c: "På grunn av flere branner"
        },
        rightAnswer: "c"
    },
    {
        question: "Hvem ble Triumfbuen bygget til ære for?",
        options: {
            a: "De som kjempet og falt for Frankrike under den franske revolusjonen og Napoleons-krigene",
            b: "De som bygde Eiffeltårnet",
            c: "Flyktninger"
        },
        rightAnswer: "a"
    },
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

/* KNAPPER FRA HTML */
const buildingBtn = document.querySelector(".building-icon")
const planetBtn = document.querySelector(".planet-icon")
/* OUTPUT-SEKSJONER FRA HTML */
let quizOutput = document.querySelector("#quiz")
let resultsOutput = document.getElementById("results-div")
const savedResults = document.querySelector(".saved-results")


/* AKTIVERER KNAPPENE */
const submitBtn = document.getElementById("submit-btn")
planetBtn.addEventListener("click", function(){
    loadQuiz(planetArray)})
buildingBtn.addEventListener("click", function(){
    loadQuiz(buildingArray)})

//submitBtn.style.display = "none"



/* LASTER QUIZ */
function loadQuiz( arrayToUse ){

    savedResults.style.display = "none"
    quizOutput.innerHTML = ""

    //Sletter evt resultat ved bytte av quiz
    
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
            localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

            optionsBoxes[questionNo].style.color = "#66f875"
        }else{
            optionsBoxes[questionNo].style.color = "#ff7a41"
        }
    })
    localStorage.setItem("result", noOfRightAnswers)
    savedResults.style.display = "block"
    savedResults.innerHTML = localStorageValue;
    

    resultsOutput.innerHTML = `Du fikk ${noOfRightAnswers} poeng av ${planetArray.length} mulige`
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
            localStorageValue = `Ditt resultat ${noOfRightAnswers} er nå lagret`

            optionsBoxes[questionNo].style.color = "#66f875"
        }else{
            optionsBoxes[questionNo].style.color = "#ff7a41"
        }
    })

    localStorage.setItem("result", noOfRightAnswers)
    savedResults.innerHTML = localStorageValue;
    savedResults.style.display = "block"

    resultsOutput.innerHTML = `Du fikk ${noOfRightAnswers} poeng av ${buildingArray.length} mulige`
    
};


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

