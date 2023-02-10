console.log("Ciao Cianuro... oggi si gioca a CAMPO MINATO: BONUS");
// .....................................................................................................RICHIAMO ELEMENTI DAL DOM
// .....................................................................................................
const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
const emptyBtnElement = document.getElementById("empty-button");
console.log(grigliaElement, playBtnElement);

// .....................................................................................................IMPOSTO LE DIMENSIONI DELLA GRIGLIA
// .....................................................................................................
let gridSize = 10;
let griCell = gridSize * gridSize;

// .....................................................................................................APERTURA addEventListener su BOTTONE PLAY
// .....................................................................................................
playBtnElement.addEventListener("click", function () {
  console.log("INIZIO GIOCO");
  // RESETTO IL PLAY GROUND AD OGNI CLICK SUL PULSANTE PLAY
  grigliaElement.innerHTML = "";

  // .....................................................................................................CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  // ..............................................................................
  for (let i = 0; i < griCell; i++) {
    let index = i + 1;
    console.log(index);
    let cellElement = document.createElement("div");
    cellElement.classList.add("cella");
    grigliaElement.append(cellElement);
    cellElement.style["width"] = "calc(100% / " + gridSize + ")";
    cellElement.innerHTML = index;
    console.log(cellElement);

    //   AGGIUNGO COMPORTAMENTO AL CLICK DELLA SINGOLA CELLA
    cellElement.addEventListener("click", function () {
      console.log("Hai cliccato sulla cella " + index);
      cellElement.classList.add("on-click");
    });

    // CHIUSURA CICLO FOR
  }
  // .....................................................................................................RESETTO LA CONSOLE PER INIZIO  UOVA PARTITA
  // .....................................................................................................
  console.clear();
  console.log("STAI INIZIANDO UNA NUOVA PARTITA DEL BONUS");
  // ...................................................................................................CHIUSURA addEventListener su BOTTONE PLAY
  // .....................................................................................................
});
