// costante che rappresenta le due cifre finali "23"
const finalNumber = 23;

let firstName = prompt("Come ti chiami?");
// document.writeln(firstName);
let lastName = prompt("Qual'è il tuo cognome?");
// document.writeln(lastName);
let favouriteColor = prompt("Qual'è il tuo colore preferito?");
// document.writeln(favouriteColor);

let password = `${firstName}${lastName}${favouriteColor}${finalNumber}`;
document.getElementById("password").innerHTML = password;


document.getElementById("title").innerHTML = "La tua password super sicura è:";