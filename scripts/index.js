/* Add name to localStorage */

// HTML-elements
const storeNameBtn = document.querySelector(".add-name__confirm-name-btn")
const nameInput = document.querySelector(".add-name__name-input")
const nameOutput = document.querySelector(".show-name__name-output")

// Function that stores the input value to localStorage, and also returns the value to innerHTML
function storeName(){
    localStorage.setItem("username", nameInput.value)
    let userName = localStorage.getItem("username")
    nameOutput.innerHTML = `
    <p>Hei ${userName}! Hva har du lyst til å gjøre?</p>
    `
    // re-using this function to display new section and remove previous one
    addNameSection.style.display = "none"
    chooseActionSection.style.display = "block"
}

storeNameBtn.addEventListener("click", storeName)

/* Make new elements visible on onclick events */

// HTML- elements
let startSection = document.querySelector(".start-section")
let addNameSection = document.querySelector(".add-name")
// let showNameSection = document.querySelector(".show-name")
let chooseActionSection = document.querySelector(".choose-action")
let initiateVisibility = document.querySelector(".start-section__initializer")

function makeVisible(){
    addNameSection.style.display = "block"
    startSection.style.display = "none"
}

initiateVisibility.addEventListener("click", makeVisible)


