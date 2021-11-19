// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

const kilometers = prompt("Inserisci i numeri dei kilometri che vuoi percorrere");
const age = prompt("Inserisci ora la tua età");
console.log(kilometers, age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
let priceForKilometers = kilometers * 0.21;
console.log(priceForKilometers);

// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

if (age < 18){
    discount = ((priceForKilometers / 100) * 20)
    console.log(discount);
    price = (priceForKilometers - discount).toFixed(2);
    console.log(price);
} else if (age > 65){
    discount = ((priceForKilometers / 100) * 40)
    console.log(discount);
    price = (priceForKilometers - discount).toFixed(2);
    console.log(price);
} else {
    price = priceForKilometers.toFixed(2);
    console.log(price);
}


let text = `
<h1> Il prezzo totale del biglietto è di: ${price} </h1>
`

document.getElementById("my_js").innerHTML = text

