let userAge = prompt('quanti anni hai?');
let userKm = prompt('quanti Km devi percorrere?');

let price = userKm * 0.21;

if ( userAge < 18) {
  prezzo = price - price * 0.2;
}
else if (userAge > 65) {
  prezzo = price - price * 0.4;
}
else {
   prezzo = userKm * 0.21;
} 

let element = document.getElementById('htmlOutput');

element.innerHTML = `il prezzo del tuo biglietto è ${(prezzo).toFixed(2)}`;