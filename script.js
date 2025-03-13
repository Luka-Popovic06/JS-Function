"use strict";
/* Zadatak-1 */
const naslov = "JavaScript za početnike";
const autor = "Ivan Ivić";
const godinaIzdavanja = 2022;
let cena = 25;
let stanje = "nova";
const zanr = "tehnologija";
const naStanju = true;

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
  if (naStanju === true) {
    return true;
  } else {
    return false;
  }
}
isInStock();
