
const storeNameBtn = document.querySelector(".add-name__confirm-name-btn")
let nameInput = document.querySelector(".add-name__name-input")
const nameOutput = document.querySelector(".add-name__name-output")


function storeName(){
    localStorage.setItem("username", nameInput.value)
    let userName = localStorage.getItem("username")
    nameOutput.innerHTML = `
    <p>Hei ${userName}</p>
    `
}

storeNameBtn.addEventListener("click", storeName)



/*function storeName(){    
    alert("hei")
}

storeNameBtn.addEventListener("click", storeName)

*/
