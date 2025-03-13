"use strict";
/* ZADATAK-1 */
const naslov = "JavaScript za početnike";
const autor = "Ivan Ivić";
const godinaIzdavanja = 2022;
let cena = 25;
let stanje = "nova";
const zanr = "tehnologija";
let naStanju = true;

/* Function-1*/
function getBookInfo() {
  const informacije =
    "Naslov: JavaScript za početnike, Autor: Ivan Ivić, Cena: 25, Stanje: nova";
  return informacije;
}
getBookInfo();

/* Function-2*/
function calculateBookAge(sadasnjaGodina) {
  const starost = sadasnjaGodina - godinaIzdavanja;
  return starost;
}
calculateBookAge(2027);

/*Function-3*/
function changeBookPrice(novaCena) {
  cena = novaCena;
  console.log(cena);
  return cena;
}
changeBookPrice(200);

/*Function-4*/
function changeBookState(novoStanje) {
  stanje = novoStanje;
  return stanje;
}
changeBookState("polovna");

/*Function-5*/
function isInStock() {
  if ((naStanju = true)) {
    return true;
  } else {
    return false;
  }
}
isInStock();

/*Function-6*/
function toggleStockStatus() {
  if ((naStanju = true)) {
    naStanju = false;
  } else {
    naStanju = true;
  }
  console.log(naStanju);
}
toggleStockStatus();

/*Function-7*/
function printBookDetails() {
  const print =
    "Naslov: JavaScript za početnike, Autor: Ivan Ivić, Godina izdavanja: 2022, Cijena: 25, Stanje: nova, Žanr: tehnologija, Dostupna na stanju: Da/Ne";
}
printBookDetails();

/* ZADATAK-2 */
const name = "dragon";
const health = 100;
const energy = 99;
const level = 12;
const experience = 30;
const speed = 250;
const attackPower = 54;
const movement = "walking";
