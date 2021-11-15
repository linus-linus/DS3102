let buildingsArray = [
  {
    name: "Taj Mahal",
    img: "/images/buildings/taj-mahal.png",
    year: "1653",
    yearText: "år",
    continent: "Asia",
    country: "India",
    history:
      "Taj Mahal er et mausoleum i Agra, India. Det ble bestilt i 1632 av keiser Shah Jahan til å huse levningene til hans favorittkone, Mumtaz Mahal, og sto ferdig i 1653. Etter hvert ble også keiseren selv gravlagt her. Mausoleet inneholder også en moske og et gjestehus, og er omkranset av en stor hage. Det er blitt estimert at bygget i sin tid kostet 32 millioner rupier, som i dagens kurs er tilsvarende 8.5 milliarder kroner. Rundt 20 000 arbeidere bidro under konstruksjonen av Taj Mahal. Taj Mahal ble i 1983 lagt til på UNESCO’s verdensarvliste.",
  },
  {
    name: "Space Needele",
    img: "/images/buildings/space-needle.png",
    year: "1962",
    yearText: "år",
    continent: "Nord-Amerika",
    country: "USA",
    history:
      "Space Needle er et av de mest kjente landemerkene i Seattle i USA og har funksjon som utsiktstårn. Tårnet ble bygget til Verdensutstillingen i 1962, som ble holdt i Seattle.Tårnet er 184 meter høyt og er bygd for å tåle vind i 320 km/h, samt jordskjelv opp til 9.0 på skalaen.Fra tårnet har man utsikt over store deler av Seattle, samt mot flere store fjell.",
  },
  {
    name: "Notre Dame",
    img: "/images/buildings/notre-dame.png",
    year: "1260",
    yearText: "år",
    continent: "Europa",
    country: "Frankrike",
    history:
      "Notre-Dame er en katolsk katedral i Paris, Frankrike. Katedralen ble bygget for Jomfru Maria og blir betraktet som et av de fineste eksemplene på fransk-gotisk arkitektur. Den ble påbegynt under Middelalderen i 1163 og sto ferdig i 1260. I årene som fulgte har katedralen blitt modifisert flere ganger og bærer derfor stilmessig også preg av andre epoker. Notre-Dame har flere ganger vært offer for ødeleggelse og vanhelligelse. Først under den franske revolusjon, der katedralen ble stormet og flere religiøse artefakter ble skadet og ødelagt. Etter Napoleons-krigene sto katedralen igjen i så dårlig forfatning at det ble lagt planer om å rive den. Den franske forfatteren Victor Hugo motsatte seg dette og skrev boken om Ringeren i Notre-Dame i et forsøk på å redde katedralen. Boken ble en enorm suksess, og Kong Louis Philippe bestemte etter hvert at katedralen i stedet skulle restaureres.I 2019 ble Notre-Dame offer for en stor brann som førte til store skader på spir og tak. Katedralen er som følge av dette stengt for publikum imens den restaureres.",
  },
  {
    name: "Louvre",
    img: "/images/buildings/louvre.png",
    year: "1793",
    yearText: "år",
    continent: "Europa",
    country: "Frankrike",
    history:
      "Louvre er verdens mest besøkte museum og ligger i Paris, Frankrike. Museet befinner seg inne i Louvre-palasset som ble etablert som museum i 1793. Før den tid har Louvre blitt brukt som festning og kongelig residens. I 1682 valgte kong Ludvig XIV å endre bosted til Versailles og la Louvre være et oppbevaringssted for den kongelige kunstsamlingen. Louvre ble etter dette overtatt av De Kongelige Akademier for litteratur, maleri og skulptur, før det under den franske revolusjon ble bestemt at palasset skulle åpnes for resten av befolkningen.Louvre huser rundt 380 000 objekter fra forhistorisk tid og frem til 1800-tallet, men kun 35 000 av disse er utstilt. Blant verkene som er utstilt er Mona Lisa av Leonardo Da Vinci og den antikke skulpturen Nike fra Samothrake.Pyramiden, som gjerne betraktes som et symbol på Louvre, ble innviet i 1988.",
  },
  {
    name: "Leaning tower of Pisa",
    img: "/images/buildings/leaning-tower-of-pisa.png",
    year: "1372",
    yearText: "år",
    continent: "Europa",
    country: "Italia",
    history:
      "Det skjeve tårnet i Pisa er et frittstående klokketårn som tilhører Pisa katedralen i Pisa, Italia. Skjevheten skyldes ustabilt fundament og fremkom allerede på 1100-tallet, før tårnet sto ferdig i 1372.  I 1990 hadde tårnet lent seg hele 5.5 grader. Tårnet ble etter dette forsøkt stabilisert, noe som førte til at skjevheten ble redusert til 3.97 grader.Tårnet er 56.67 meter høyt og har 296 trappetrinn, og det er lov å gå inn.",
  },
  {
    name: "Hallgrimskirkja",
    img: "/images/buildings/hallgrimskirkja.png",
    year: "1986",
    yearText: "år",
    continent: "Europa",
    country: "Island",
    history:
      "Hallgrimskirkja er en luthersk kirke i Reykjavik, Island. Kirken er oppkalt etter Hallgrimur Petursson, en islandsk poet og salmedikter. Med sine 74.5 høydemeter er Hallgrimskirkja den største kirken på Island, og en av de største i Norden. Kirken sto ferdig i 1986 etter en 41-års lang byggeprosess. Selv om kirken har status som et av Reykjaviks mest kjente landemerker, blir den fortsatt aktivt brukt som kirke, både til vanlige seremonier og bryllup.",
  },
  {
    name: "Pyramidekomplekset ved Giza",
    img: "/images/buildings/great-sphinx-of-giza.png",
    year: "-2400",
    yearText: "f.kr",
    continent: "Afrika",
    country: "Egypt",
    history:
      "Pyramidekomplekset i Giza i Egypt er noen av verdens eldste gjenværende byggverk, og består av tre hovedpyramider omringet av flere mindre pyramider, i tillegg til en sfinks. Pyramidekomplekset ble reist mellom 2600 og 2400 f.Kr. Pyramidene skulle fungere som gravkamre for faraoer fra antikkens Egypt. Det ble trodd at en del av faraoens sjel ville leve videre etter hans død og at det å ta ordentlig vare på levningene var nødvendig for at faraoen skulle kunne utføre sin nye rolle som konge over de døde. Pyramiden skulle også fungere som oppbevaringssted for alt det en farao måtte trenge i etterlivet.",
  },

  {
    name: "Empire state building",
    img: "/images/buildings/empire-state-building.png",
    year: "1931",
    yearText: "år",
    continent: "Nord-Amerika",
    country: "USA",
    history:
      "Empire State Building er det niende høyeste bygget i New Yorks Skyline. Det ruver hele 443.2 meter over bakken og var, fra det sto ferdig i 1931 frem til 1970, verdens høyeste bygning. Empire State Building er et av de mest gjenkjennelige symbolene på New York og rundt 4 millioner mennesker besøker hvert år bygget. Selve navnet er arvet etter staten New York sitt kallenavn, «the Empire State». Bygget har medvirket i over 250 TV-serier og filmer, den første King Kong som ble utgitt i 1933. Bygget har også blitt omtalt som en av de «Syv undre i den moderne verden».",
  },
  {
    name: "Eiffeltårnet",
    img: "/images/buildings/eiffel-tower.png",
    year: "1889",
    yearText: "år",
    continent: "Europa",
    country: "Frankrike",
    history:
      "Eiffeltårnet er et tårn i Paris, Franrike og har sitt navn etter ingeniøren som designet tårnet, Gustave Eiffel. Tårnet ble bygget til Verdensutstillingen i 1889 i Paris, og selv om tårnet i begynnelsen ble sterkt kritisert for sitt design, har det i ettertid blitt et kulturelt ikon for Frankrike og en av de mest kjente byggverkene i verden.Tårnet er 324 meter høyt og er med det den høyeste strukturen i Paris. Eiffeltårnet var i litt over 40 år også det høyeste bygget i verden, frem til Chrysler Building sto ferdig i 1930.",
  },
  {
    name: "Colosseum",
    img: "/images/buildings/colosseum.png",
    year: "0080",
    yearText: "e.Kr",
    continent: "Europa",
    country: "Italia",
    history:
      "Colosseum er et amfiteater lokalisert i Roma i Italia. Det er det største amfiteateret som noensinne er blitt bygd. Colosseum ble påbegynt i 72 e.Kr og sto ferdig i år 80 e.Kr. Colosseum kunne holde på 50 000 – 80 000 tilskuere og ble flittig brukt til gladiatorkamper, henrettinger, dyrejakt (Venatio, jakte på ville dyr), dramaer og gjenfortelling av kjente kriger, og fungerte på denne måten som et møtested for det romerske folket. Colosseum ble tatt ut av bruk i tidlig middelalder, men ble i ettertid brukt til ulike formål, som festning, kristen helligdom og religiøse ordres hovedkvarter.",
  },
  {
    name: "Chrysler Building",
    img: "/images/buildings/chrysler-building.png",
    year: "1930",
    yearText: "år",
    continent: "Nord-Amerika",
    country: "USA",
    history:
      "Chrysler Building er en skyskraper i New York. Chrysler Building sto ferdigstilt bygd i 1930 og ble bygget for den amerikanske bilprodusenten Chrysler, noe selve utformingen av bygget bærer preg av. Spiret i rustfritt stål var nemlig inspirert av hjulkapslene på 1920-tallets Chrysler-modeller. Chrysler Building er ikke åpen for publikum og brukes i dag til næringsvirksomhet. Bygget er 319 meter høy, det nest høyeste i New Yorks «skyline».",
  },
  {
    name: "The Pagoda of Auspicious Light",
    img: "/images/buildings/auspicious-light-pagoda.png",
    year: "0280",
    yearText: "e.Kr",
    continent: "Asia",
    country: "Kina",
    history:
      "The Pagoda of Auspicious Light befinner seg i Suzhou i Kina og var originalt en del av et større buddhistisk kloster bygget under Kong Wu i «de tre rikers tid» mellom år 220 og år 280 e.Kr. En pagode er et tårn gjerne tilknyttet et buddhistisk tempel eller kloster, men har også en uavhengig betydning i kinesisk geomantisk teori som lykkebringende elementer i landskapet. The Pagoda of Auspicious Light har opptil flere ganger vært utsatt for brann, og har derfor i flere omganger måtte blitt gjenbygget. Pagoden ble sist renovert i 1986.",
  },
  {
    name: "Samarra-moskeen",
    img: "/images/buildings/great-mosque-of-samarra.png",
    year: "0851",
    yearText: "e.Kr",
    continent: "Europa",
    country: "Island",
    history:
      "Samarra-moskeen er en moske i Samarra i Irak. Det er et av den islamske verdens mest kjente byggverk, og sto ferdig i år 851 e.Kr. Under byggingen var moskeen verdens største moske, en tittel den i ettertid har blitt fratatt. Samarra-moskeen er kjent for det 52 meter høyet minaret i omkranset av en spiral.",
  },
  {
    name: "Klippedomen",
    img: "/images/buildings/dome-of-the-rock.png",
    year: "0691",
    yearText: "e.kr",
    continent: "Asia",
    country: "Israel",
    history:
      "Klippedomen er en islamsk helligdom i Jerusalem, Israel. Den ble reist i år 687 til 691 e.Kr som minnebygning på det stedet profeten Muhammed ifølge historien påbegynte sin himmelfart, miraj. Klippedomen regnes som verdens eldste islamske byggverk.",
  },
  {
    name: "Triumfbuen eller Arc de Triomphe",
    img: "/images/buildings/arc-de-triomphe.png",
    year: "1836",
    yearText: "år",
    continent: "Europa",
    country: "Frankrike",
    history:
      "Triumfbuen ligger i Paris i Frankrike og ble bygget fra 1806-1836 for å hedre de som sloss og falt for Frankrike under den franske revolusjon og Napoleons-krigene. Både på innsiden og utsiden er buen inngravert med navnene på de franske generalene som deltok i disse konfliktene, og også slagsteder der Frankrike kom seirende ut er gravert inn. Buen er 50 meter høy og er med det den nest største av sitt slag. Under buen er gravkamret til Den Ukjente Soldat fra første verdenskrig.",
  },
  {
    name: "Angkor Wat",
    img: "/images/buildings/angkor-wat.png",
    year: "1100",
    yearText: "år",
    continent: "Asia",
    country: "Kambodsja",
    history:
      "Angkor Wat er et hinduistisk tempel som ligger i ruinbyen Angkor i det nordlige Kambodsja. «Angkor Wat» oversettes til «bytempel» og ble bygd på begynnelsen av 1100-tallet til bruk som statlig tempel og som det politiske senteret for keiserdømmet til keiser Suryayarman II. Angkor Wat fungerte altså som både en religiøs og en politisk arena for Khmer-folket. Tempelet ble i begynnelsen viet til den hinduistiske guden Vishnu, men utover 1300-tallet ble tempelet konvertert til en theravada-buddhistisk helligdom. Angkor Wat brukes også som symbol for Kambodsja og opptrer i landets flagg.",
  },
]

export default buildingsArray
