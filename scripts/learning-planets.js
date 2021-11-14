import planetArray from "./planets-array.js"

let printOutPlanet = document.querySelector(".print-out")
let planetBte = document.querySelector(".planet-bte")

/* Printer ut alle Planet */

let printAllplanets = () => {
  printOutPlanet.innerHTML = ""
  //printOutBuilding.innerHTML = ""
  let buildingSection = (document.querySelector(
    ".building-section"
  ).style.display = "none")

  let planetSection = (document.querySelector(".planet-section").style.display =
    "block")

  planetArray.forEach((planet) => {
    printOutPlanet.innerHTML += `
          <article class="info">
                <h3 class="info__title">${planet.name}</h3>
                <img class="info__img" src=${planet.img} alt="Taj Mahal">
              </article>
          
          `
  })
}
planetBte.addEventListener("click", printAllplanets)
