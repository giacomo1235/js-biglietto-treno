let userAge = prompt('quanti anni hai?');
let userKm = prompt('quanti Km devi percorrere?');

let price = userKm * 0.21;

if ( userAge < 18) {
  price = price - price * 0.2;
}
else if (userAge > 65) {
  price = price - price * 0.4;
}
let element = document.getElementById('htmlOutput');

element.innerHTML = `il prezzo del tuo biglietto è ${(price).toFixed(2)} &euro;`;
