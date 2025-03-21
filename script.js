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
  if (naStanju) {
    return true;
  } else {
    return false;
  }
}
isInStock();

/*Function-6*/
function toggleStockStatus() {
  if (naStanju) {
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
let health = 100;
let energy = 99;
let level = 12;
let experience = 30;
let speed = 250;
let attackPower = 54;
let movement = "walking";
/* PISANJE FUNKCIJA */
/*8*/
function logStats() {
  const info = `Name:${name}, Health:${health}, Energy:${energy}, Level:${level}, Experience:${experience}, Speed:${speed}, Attack Power:${attackPower}, Movement:${movement} `;
  console.log(info);
  return info;
}
logStats();

/*9*/
function fly() {
  if (movement === "walking") {
    movement = "flying";
    speed = speed + 50;
    const text = `Dragon is now flying, current speed is ${speed}.`;
    console.log(text);
  } else {
    const texTwo = "Monster is already flying.";
    console.log(texTwo);
  }
}
fly();

/*10*/
function walk() {
  if (movement === "flying") {
    movement = "walkig";
    speed = speed - 50;
    const textThree = `Monster is now walkig, current speed is ${speed}.`;
    console.log(textThree);
  } else {
    const textFour = "Monster is already walkig.";
    console.log(textFour);
  }
}
walk();

/*11*/
function attack(broj) {
  if (energy < 30) {
    const textFive = "Don't have enough energy to attack!";
    console.log(textFive);
    return;
  } else if (broj < attackPower) {
    const textSix = "Monster attacked successfully!";
    console.log(textSix);
    experience = experience + 50;
    energy = energy - 50;
  } else if (broj > attackPower) {
    const textSeven = "Monster failed to attack!";
    console.log(textSeven);
    energy = energy - 70;
    health = health - 50;
  }
  checkStats();
}
attack(20);

/*12*/
function heal() {
  health = health + 100;
  energy = energy + 100;
  logStats();
}
heal();

/*13*/
function checkStats() {
  if (health < 1) {
    const textEight = "Monster died. GAME OVER";
    console.log(textEight);
    return;
  } else if (experience > 100) {
    level = level + 1;
    const newExperience = experience - 100;
    console.log(newExperience);
  }
}
checkStats();
//Variables 3
const ime = "Lazar";
let prezime = "Vuckovic";
prezime = "Petrovic";
