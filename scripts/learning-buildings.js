import buildingsArray from "./buildings-array.js"

/***** DOM *****/

/* Print out ved å trykke på icon Buildings */
let printOutBuilding = document.querySelector(".print-out")

let buildingBte = document.querySelector(".building-bte")

//let btnSection = document.querySelector(".button-section")

/*DOM printer ut all info btn */
let btnInfo = document.querySelector(".button__info")

/*DOM printer ut basert på alfabetisk rekkefølge btn*/
let btnAlphabetical = document.querySelector(".button__alphabetical")

/*DOM printer ut basert på year btn*/
let btnYear = document.querySelector(".button__year")

/*DOM for printing ut av continenter */
let selectes = document.querySelector("#continents")

/*DOM for søke felt */

let searchInput = document.querySelector(".search__input")

/* error tekst print*/
let errorPrint = document.querySelector(".error-print")

let oneclickAllInfo = document.querySelector(".oneclick-all-info")
/***** DOM slutt *****/

/* Kode som blir gjentatt */

let forEachFunctionLong = (data) => {
  data.forEach((building) => {
    printOutBuilding.innerHTML += `
    <a class="oneclick-all-info">
    <article class="info">
    
    <h3 class="info__title">${building.name}</h3>
    <img class="info__img" src=${building.img} alt="Taj Mahal">
    <p class="info__section">${building.year} ${building.yearText}</p>
    <p class="info__section">${building.continent}</p>
    <p class="info__section">${building.country}</p>
    <p class="info__section">${building.history}</p>
    
</article>
</a>

`
  })
}

let forEachFunctionShort = (data) => {
  data.forEach((building) => {
    printOutBuilding.innerHTML += `
  
    <article class="info">
    
    <h3 class="info__title"><a class="oneclick-all-info">${building.name}</a></h3>
  
    <img class="info__img" src=${building.img} alt="Taj Mahal">
    
</article>

`
  })
}

/* Printer ut alle Buildings */

let printAllBuldings = () => {
  printOutBuilding.innerHTML = ""
  //printOutPlanet.innerHTML = ""
  let buildingSection = (document.querySelector(
    ".building-section"
  ).style.display = "block")

  let planetSection = (document.querySelector(".planet-section").style.display =
    "none")

  forEachFunctionShort(buildingsArray)
}

buildingBte.addEventListener("click", printAllBuldings)

/* SØKE felt */

let showSearchResult = () => {
  printOutBuilding.innerHTML = ""

  let searchWord = searchInput.value

  const searchResult = buildingsArray.filter((building) => {
    return Object.values(building).some((val) => val.includes(searchWord))
  })

  /*Gjentagen kode */
  forEachFunctionLong(searchResult)
}

searchInput.addEventListener("input", showSearchResult)

/* Print ut all info om building */

let printAllBuldingInfo = () => {
  printOutBuilding.innerHTML = ""

  forEachFunctionLong(buildingsArray)
}

btnInfo.addEventListener("click", printAllBuldingInfo)

/* Printer ut basert på alfabetisk rekkefølge */

let showAlphabeticalOrder = () => {
  printOutBuilding.innerHTML = ""
  let alphabeticalSort = buildingsArray.sort((building1, building2) =>
    building1.name > building2.name ? 1 : -1
  )

  forEachFunctionShort(alphabeticalSort)
}

console.log(showAlphabeticalOrder)

btnAlphabetical.addEventListener("click", showAlphabeticalOrder)

/* Printer ut basert på year*/

let showYearOrder = () => {
  printOutBuilding.innerHTML = ""
  let yearSort = buildingsArray.sort((building1, building2) =>
    building1.year > building2.year ? 1 : -1
  )

  yearSort.forEach((building) => {
    printOutBuilding.innerHTML += `
    <article class="info">
          <h3 class="info__title">${building.name}</h3>
          <img class="info__img" src=${building.img} alt="Taj Mahal">
          <p class="info__section">${building.year}</p>
          <p class="info__section">${building.yearText}</p>
         
        </article>
    
    `
  })
}

btnYear.addEventListener("click", showYearOrder)

/* Print ut på valg av continent */

let showSelected = () => {
  //printOut.innerHTML = ""
  let continentSearch = buildingsArray.filter((building) => {
    return building.continent === selectes.value
  })
  console.log(selectes.value)

  if (selectes.value === ("Sør-Amerika" || "Antarctia" || "Oseania")) {
    printOutBuilding.innerHTML = ""
    printOutBuilding.innerHTML = `
    <i class="far fa-frown smiley"></i>
    <h3 class="smiley-text">Ingen bygning funnet</h3>
    
    `
  } else if (selectes.value === "Velg") {
    printOutBuilding.innerHTML = ""
  } else {
    printOutBuilding.innerHTML = ""

    continentSearch.forEach((search) => {
      printOutBuilding.innerHTML += `

  <article class="info">
  <h3 class="info__title">${search.name}</h3>
  <img class="info__img" src=${search.img} alt="Taj Mahal">
  <p class="info__section">${search.continent}
  </article>
  `
    })
  }
}

selectes.addEventListener("change", showSelected)

/*OneClick printer ut info på et spesifikt objekt */

/* Print ut all info om building */

let printAllBuldingInfoOneClick = () => {
  //printOutBuilding.innerHTML = ""

  alert("hello")
  //forEachFunctionLong(buildingsArray)
}

oneclickAllInfo.addEventListener("click", printAllBuldingInfoOneClick)
