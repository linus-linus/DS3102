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

let printOut = document.querySelector(".print-out")

let planetBte = document.querySelector(".planet-bte")
let buildingBte = document.querySelector(".building-bte")

let clickedBtn = false

//let printBuildings = () =>

let printAllBuldings = () => {
  if (!clickedBtn) {
    clickedBtn = true
    console.log(clickedBtn)

    buildingsArray.forEach((building) => {
      printOut.innerHTML += `
    <article class="building">
          <h3 class="building__title">${building.name}</h3>
          <img class="building__img" src=${building.img} alt="Taj Mahal">
        </article>
    
    `
    })
  } else {
    clickedBtn = false
    console.log(clickedBtn)
    printOut.innerHTML = ""
  }
}

buildingBte.addEventListener("click", printAllBuldings)
