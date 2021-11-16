import planetArray from "./planets-array.js"

/*DOM*/
let printOutPlanet = document.querySelector(".print-out")
let planetBte = document.querySelector(".planet-bte")

/*søke felt*/
let wordInputPlanet = document.querySelector(".search__input-planet")

/* all info btn*/
let btnInfo = document.querySelector(".button__info-planet")

/*DOM printer ut basert på alfabetisk rekkefølge btn*/
let btnAlphabetical = document.querySelector(".button__alphabetical-planet")

/*DOM printer ut basert på year btn*/
let btnPlacement = document.querySelector(".button__placement")

let buttoSum = document.querySelector(".button__img")

/*DOM Slutt*/

/*Gjentagende kode*/
let repeatCodeLonge = (data) => {
  data.forEach((planet) => {
    printOutPlanet.innerHTML += `
          <article class="info">
                <h3 class="info__title">${planet.name}</h3>
                <img class="info__img-planet" src=${planet.img} alt="Planeten: ${planet.name}">
                <p>${planet.age} Milliarder år
                </p>
                <p>Plassering i sol systemet: ${planet.placement}</p>
                <p>${planet.info}</p>
              </article>
          
          `
  })
}

let repaetCodeShort = (data) => {
  data.forEach((planet) => {
    printOutPlanet.innerHTML += `
          <article class="info">
                <h3 class="info__title">${planet.name}</h3>
                <img class="info__img-planet" src=${planet.img} alt="Planeten: ${planet.name}">
              </article>
          
          `
  })
}
/* Printer ut alle Planet */

let printAllplanets = () => {
  printOutPlanet.innerHTML = ""
  //printOutBuilding.innerHTML = ""
  let buildingSection = (document.querySelector(
    ".building-section"
  ).style.display = "none")

  let planetSection = (document.querySelector(".planet-section").style.display =
    "block")
  repaetCodeShort(planetArray)
}
planetBte.addEventListener("click", printAllplanets)

/* SØKE felt planeter  */

let showSearchResultPlanets = () => {
  printOutPlanet.innerHTML = ""

  let searchWord = wordInputPlanet.value

  const searchResult = planetArray.filter((planet) => {
    return Object.values(planet).some((val) => val.includes(searchWord))
  })

  /*Gjentagen kode */
  repeatCodeLonge(searchResult)
}

wordInputPlanet.addEventListener("input", showSearchResultPlanets)

/* Print ut all info om planeter*/

let printAllPlanetsInfo = () => {
  printOutPlanet.innerHTML = ""
  repeatCodeLonge(planetArray)
}

btnInfo.addEventListener("click", printAllPlanetsInfo)

/* Printer ut basert på alfabetisk rekkefølge */

let showAlphabeticalOrder = () => {
  printOutPlanet.innerHTML = ""
  let alphabeticalSort = planetArray.sort((planet1, planet2) =>
    planet1.name > planet2.name ? 1 : -1
  )

  repaetCodeShort(alphabeticalSort)
}
btnAlphabetical.addEventListener("click", showAlphabeticalOrder)

/* Print ut basert på plasering i solsystemet  */

let showOrder = () => {
  printOutPlanet.innerHTML = ""
  let orderSort = planetArray.sort((planet1, planet2) =>
    planet1.placement > planet2.placement ? 1 : -1
  )

  orderSort.forEach((planet) => {
    printOutPlanet.innerHTML += `
    <article class="info">
          <h3 class="info__title">${planet.name}</h3>
          <img class="info__img-planet" src=${planet.img} alt="Planeten: ${planet.name}">
          <p class="info__section">Plassering i sol systemet: ${planet.placement}</p>
         
        </article>
    
    `
  })
}

btnPlacement.addEventListener("click", showOrder)

/*kun printe bilder*/

let showImg = () => {
  printOutPlanet.innerHTML = ""
  let mapImg = planetArray.map((planetImg) => planetImg.img)

  mapImg.forEach((planetImg) => {
    printOutPlanet.innerHTML += `
    <article class="info">
         
          <img class="info__img-planet" src=${planetImg} alt="Planeten:">
        
         
        </article>
    `
  })
}

buttoSum.addEventListener("click", showImg)
