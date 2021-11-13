const planetArray = [
  {
    name: "Earth",
    img: "/images/planets/earth.svg",
  },
  {
    name: "Jupiter",
    img: "/images/planets/jupiter.svg",
  },
  {
    name: "Mars",
    img: "/images/planets/mars.svg",
  },
  {
    name: "Mars",
    img: "/images/planets/mars.svg",
  },
  {
    name: "Mars",
    img: "/images/planets/mars.svg",
  },
  {
    name: "Mars",
    img: "/images/planets/mars.svg",
  },
]

let printOutPlanet = document.querySelector(".print-out-planet")
let planetBte = document.querySelector(".planet-bte")

/* Printer ut alle Planet */

let printAllplanets = () => {
  let btnSection = (document.querySelector(".button").style.display = "none")
  let continentDisplay = (document.querySelector(".continent").style.display =
    "none")

  printOut.innerHTML = ""
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
