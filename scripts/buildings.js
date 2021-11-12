const buildingsArray = [
  {
    name: "Taj Mahal",
    img: "/images/buildings/taj-mahal.png",
  },
  {
    name: "Space Needele",
    img: "/images/buildings/space-needle.png",
  },
  {
    name: "Notre Dame",
    img: "/images/buildings/notre-dame.png",
  },
  {
    name: "Louvre",
    img: "/images/buildings/louvre.png",
  },
  {
    name: "Leaning tower of Pisa",
    img: "/images/buildings/leaning-tower-of-pisa.png",
  },
  {
    name: "Hallgrimskirkja",
    img: "/images/buildings/hallgrimskirkja.png",
  },
]

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

let printOut = document.querySelector(".print-out")

let buildingBte = document.querySelector(".building-bte")
let planetBte = document.querySelector(".planet-bte")

let printAllBuldings = () => {
  printOut.innerHTML = ""
  buildingsArray.forEach((building) => {
    printOut.innerHTML += `
    <article class="info">
          <h3 class="info__title">${building.name}</h3>
          <img class="info__img" src=${building.img} alt="Taj Mahal">
        </article>
    
    `
  })
}

buildingBte.addEventListener("click", printAllBuldings)

let printAllplanets = () => {
  printOut.innerHTML = ""
  planetArray.forEach((planet) => {
    printOut.innerHTML += `
        <article class="info">
              <h3 class="info__title">${planet.name}</h3>
              <img class="info__img" src=${planet.img} alt="Taj Mahal">
            </article>
        
        `
  })
}

planetBte.addEventListener("click", printAllplanets)
