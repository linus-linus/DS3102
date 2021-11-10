let planetNumber = 1
showPlanet(planetNumber)

function slideBtns(n){
    showPlanet(planetNumber += n)
}

function selectedPlanet(n){
    showPlanet(planetNumber = n)
}

function showPlanet(n){
    let i
    let planets = document.getElementsByClassName("planet")
    if (n > planets.length){
        planetNumber = 1
    }if (n < 1){
        planetNumber = planets.length
    }
    for(i = 0; i < planets.length; i++){
        planets[i].style.display = "none";
    }
    planets[planetNumber-1].style.display = "block"

}
