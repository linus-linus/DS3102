
const storeNameBtn = document.querySelector(".add-name__confirm-name-btn")
let nameInput = document.querySelector(".add-name__name-input")
const nameOutput = document.querySelector(".add-name__name-output")


function storeName(){
    nameOutput.innerHTML = `
    <p>Hei ${nameInput.value}</p>
    `
}

storeNameBtn.addEventListener("click", storeName)



/*function storeName(){    
    alert("hei")
}

storeNameBtn.addEventListener("click", storeName)

*/
