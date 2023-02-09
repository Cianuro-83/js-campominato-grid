console.log("Ciao Cianuro... oggi si gioca a CAMPO MINATO");
// .....................................................................................................RICHIAMO ELEMENTI DAL DOM
// .....................................................................................................
const grigliaElement = document.getElementById("griglia");
const playBtnElement = document.getElementById("play-button");
console.log(grigliaElement, playBtnElement);

// .....................................................................................................IMPOSTO LE DIMENSIONI DELLA GRIGLIA
// .....................................................................................................
let gridSize = 10;
let griCell = gridSize * gridSize;

// .....................................................................................................APERTURA addEventListener su BOTTONE PLAY
// .....................................................................................................
playBtnElement.addEventListener("click", function () {
  console.log("INIZIO GIOCO");

  // .....................................................................................................CICLO LE CELLE CON FOR PER CREARE LA GRIGLIA SUL DOM
  // ..............................................................................
  for (let i = 0; i < griCell; i++) {
    let index = i + 1;
    console.log(index);
    let cellElement = document.createElement("div");
    cellElement.classList.add("cella");
    cellElement = `ciao`;
    console.log(cellElement);
    // CHIUSURA CICLO FOR
  }
  // ...................................................................................................CHIUSURA addEventListener su BOTTONE PLAY
  // .....................................................................................................
});
