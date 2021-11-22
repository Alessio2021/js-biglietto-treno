// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const kilometers = parseInt(prompt("Inserisci i numeri dei kilometri che vuoi percorrere"));
const age = parseInt(prompt("Inserisci ora la tua età"));
console.log(kilometers, age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
let priceForKilometers = kilometers * 0.21;
console.log(priceForKilometers);

// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

if (age < 18){
    priceForKilometers = priceForKilometers - (priceForKilometers * 20 / 100);
} else if (age > 65){
    priceForKilometers = priceForKilometers - (priceForKilometers * 40 / 100);
}

let text = `
<h1> Il prezzo totale del biglietto è di: ${priceForKilometers.toFixed(2)} </h1>
`

document.getElementById("my_js").innerHTML = text

