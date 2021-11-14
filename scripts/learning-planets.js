const planetArray = [
  {
    name: "Earth",
    img: "/images/planets/earth.svg",
    age: 4.6,
    placement: 3,
    info: "Jorda er den tredje planeten fra sola og den eneste planeten man med sikkerhet kan si at det eksisterer liv på. Den ble mest sannsynlig dannet for 4.6 milliarder år siden, og det antas at liv oppsto første gang for rundt 4 milliarder år siden. Jorda er den femte største planeten i solsystemet og er den planeten med størst tetthet. På en runde rundt sola bruker jorda 365,26 dager, mens den bruker 24 timer på å snurre rundt en gang. Av jordens overflate på 510 millioner km2 er 362 millioner km2. dekket av hav, og jorden kalles derfor også for «den blå planeten».",
  },
  {
    name: "Jupiter",
    img: "/images/planets/jupiter.svg",
    age: 4.6,
    placement: 5,
    info: "Jupiter er den femte og største planeten i solsystemet. Planeten er en gasskjempe, i likhet med Saturn. Jupiter er også svært synlig og er det objektet på nattehimmelen som lyser mest etter Månen og Venus.Planeten består i hovedsak av hydrogen, og hele dens masse er 2,5 ganger mer massiv enn alle de andre planetene i solsystemet til sammen. Jupiters volum kan holde hele 1321 jordkloder. På en runde rundt sola bruker Jupiter 11,86 år. Rundt sin egen akse bruker Jupiter rundt 10 timer, det raskeste av alle planetene i solsystemet. Jupiter er 4.6 milliarder år gammel, og er trolig den eldste av alle planetene. ",
  },
  {
    name: "Mars",
    img: "/images/planets/mars.svg",
    age: 4.6,
    placement: 4,
    info: "Mars er den fjerde og nest minste planeten i solsystemet. Den blir ofte kalt «Den røde planeten» fordi overflaten er dekket i jernoksid, også kalt rødrust. Mars er i likhet med Merkur, Venus og jorda en terrestrisk planet, som vil si at den hovedsakelig er bygd opp av bergarter. Mars bruker 686,971 dager rundt sola, altså i underkant av 2 år. Fordi Mars og Jorda har såpass lik rotasjonsperiode, kan dagene og sesongene til Mars sammenlignes med jordas. Mars er 4.6 milliarder år gammel",
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

let printOutPlanet = document.querySelector(".print-out")
let planetBte = document.querySelector(".planet-bte")

/* Printer ut alle Planet */

let printAllplanets = () => {
  printOutPlanet.innerHTML = ""
  //printOutBuilding.innerHTML = ""

  let searchSection = (document.querySelector(".search-section").style.display =
    "none")

  let btnDisplay = (document.querySelector(".button-section").style.display =
    "none")

  let continentDisplay = (document.querySelector(
    ".continent-section"
  ).style.display = "none")

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
