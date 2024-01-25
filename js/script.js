// costante che rappresenta le due cifre finali "23"
const finalNumber = 23;

let firstName = prompt("Come ti chiami?");
let lastName = prompt("Qual'è il tuo cognome?");
let favouriteColor = prompt("Qual'è il tuo colore preferito?");

let password = `${firstName}${lastName}${favouriteColor}${finalNumber}`;
document.getElementById("password").innerHTML = password;


document.getElementById("title").innerHTML = "La tua password super sicura è:";