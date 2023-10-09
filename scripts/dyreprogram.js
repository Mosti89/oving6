const header = document.getElementById("bildebytte"); // Hent headeren med id "header"
const myImage = main.querySelector("img"); //Bruker funksjonen querySelector() for å lete etter elementet <img> i html dokumentet og laster dette inn i variabelen myImage.
myImage.onclick = () => { //Ved klikk på myImage eller img så kjør navnløse funskjonen. 
    const mySrc = myImage.getAttribute("src"); // Hent inn src attributtet til img elementet og last inn i mySrc
    if (mySrc === "images/bilde1.jpeg") { // Test for om mySrc er det samme som bilde1.
      myImage.setAttribute("src", "images/bilde2.jpeg"); // Hvis ja bytt til bilde2
    } else {
      myImage.setAttribute("src", "images/bilde1.jpeg"); // Ellers bytt til bilde1.
    }
  };