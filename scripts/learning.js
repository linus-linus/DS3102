const buildingsArray = [
  {
    name: "Taj Mahal",
    img: "/images/buildings/taj-mahal.png",
    year: 1653,
    continents: "Asia",
    country: "India",
    history:
      "Taj Mahal er et mausoleum i Agra, India. Det ble bestilt i 1632 av keiser Shah Jahan til å huse levningene til hans favorittkone, Mumtaz Mahal, og sto ferdig i 1653. Etter hvert ble også keiseren selv gravlagt her. Mausoleet inneholder også en moske og et gjestehus, og er omkranset av en stor hage. Det er blitt estimert at bygget i sin tid kostet 32 millioner rupier, som i dagens kurs er tilsvarende 8.5 milliarder kroner. Rundt 20 000 arbeidere bidro under konstruksjonen av Taj Mahal. Taj Mahal ble i 1983 lagt til på UNESCO’s verdensarvliste.",
  },
  {
    name: "Space Needele",
    img: "/images/buildings/space-needle.png",
    year: 1962,
    continents: "Nord-Amerika",
    country: "USA",
    history:
      "Space Needle er et av de mest kjente landemerkene i Seattle i USA og har funksjon som utsiktstårn. Tårnet ble bygget til Verdensutstillingen i 1962, som ble holdt i Seattle.Tårnet er 184 meter høyt og er bygd for å tåle vind i 320 km/h, samt jordskjelv opp til 9.0 på skalaen.Fra tårnet har man utsikt over store deler av Seattle, samt mot flere store fjell.",
  },
  {
    name: "Notre Dame",
    img: "/images/buildings/notre-dame.png",
    year: 1260,
    continents: "Europa",
    country: "Frankrike",
    history:
      "Notre-Dame er en katolsk katedral i Paris, Frankrike. Katedralen ble bygget for Jomfru Maria og blir betraktet som et av de fineste eksemplene på fransk-gotisk arkitektur. Den ble påbegynt under Middelalderen i 1163 og sto ferdig i 1260. I årene som fulgte har katedralen blitt modifisert flere ganger og bærer derfor stilmessig også preg av andre epoker. Notre-Dame har flere ganger vært offer for ødeleggelse og vanhelligelse. Først under den franske revolusjon, der katedralen ble stormet og flere religiøse artefakter ble skadet og ødelagt. Etter Napoleons-krigene sto katedralen igjen i så dårlig forfatning at det ble lagt planer om å rive den. Den franske forfatteren Victor Hugo motsatte seg dette og skrev boken om Ringeren i Notre-Dame i et forsøk på å redde katedralen. Boken ble en enorm suksess, og Kong Louis Philippe bestemte etter hvert at katedralen i stedet skulle restaureres.I 2019 ble Notre-Dame offer for en stor brann som førte til store skader på spir og tak. Katedralen er som følge av dette stengt for publikum imens den restaureres.",
  },
  {
    name: "Louvre",
    img: "/images/buildings/louvre.png",
    year: 1793,
    continents: "Europa",
    country: "Frankrike",
    history:
      "Louvre er verdens mest besøkte museum og ligger i Paris, Frankrike. Museet befinner seg inne i Louvre-palasset som ble etablert som museum i 1793. Før den tid har Louvre blitt brukt som festning og kongelig residens. I 1682 valgte kong Ludvig XIV å endre bosted til Versailles og la Louvre være et oppbevaringssted for den kongelige kunstsamlingen. Louvre ble etter dette overtatt av De Kongelige Akademier for litteratur, maleri og skulptur, før det under den franske revolusjon ble bestemt at palasset skulle åpnes for resten av befolkningen.Louvre huser rundt 380 000 objekter fra forhistorisk tid og frem til 1800-tallet, men kun 35 000 av disse er utstilt. Blant verkene som er utstilt er Mona Lisa av Leonardo Da Vinci og den antikke skulpturen Nike fra Samothrake.Pyramiden, som gjerne betraktes som et symbol på Louvre, ble innviet i 1988.",
  },
  {
    name: "Leaning tower of Pisa",
    img: "/images/buildings/leaning-tower-of-pisa.png",
    year: 1372,
    continents: "Europa",
    country: "Italia",
    history:
      "Det skjeve tårnet i Pisa er et frittstående klokketårn som tilhører Pisa katedralen i Pisa, Italia. Skjevheten skyldes ustabilt fundament og fremkom allerede på 1100-tallet, før tårnet sto ferdig i 1372.  I 1990 hadde tårnet lent seg hele 5.5 grader. Tårnet ble etter dette forsøkt stabilisert, noe som førte til at skjevheten ble redusert til 3.97 grader.Tårnet er 56.67 meter høyt og har 296 trappetrinn, og det er lov å gå inn.",
  },
  {
    name: "Hallgrimskirkja",
    img: "/images/buildings/hallgrimskirkja.png",
    year: 1986,
    continents: "Europa",
    country: "Island",
    history:
      "Hallgrimskirkja er en luthersk kirke i Reykjavik, Island. Kirken er oppkalt etter Hallgrimur Petursson, en islandsk poet og salmedikter. Med sine 74.5 høydemeter er Hallgrimskirkja den største kirken på Island, og en av de største i Norden. Kirken sto ferdig i 1986 etter en 41-års lang byggeprosess. Selv om kirken har status som et av Reykjaviks mest kjente landemerker, blir den fortsatt aktivt brukt som kirke, både til vanlige seremonier og bryllup.",
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
