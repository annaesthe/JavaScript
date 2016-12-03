'use strict';

var liczb = 40;
var kolory = ['yellow', 'orange', 'salmon'];

kolory[3] = "black";

console.log(kolory);


//kolory.push("red"); //dodaje

//kolory.pop("red"); //usuwa

//kolory.unshift("zielony"); //dodaje przed żółtym

//var dlugoscTablicy;
//dlugoscTablicy = kolory.unshift("blue");

//console.log(kolory);
//console.log(dlugoscTablicy);

//kolory.shift();

//console.log(kolory.length);

//i to zmienna która liczy ile razy pętla się zakręciła
// ++i dodaje zapętlenia aż do końca spełnianych warunków (w tym wypadku ile nie więcej niz 4 elementy) :)

//for (var i=0; i<kolory.length; ++i) {
//  console.log(i);
//  console.log(kolory[i]);
//}

kolory.forEach( function (element, iteration ) {
    console.log("Numer koloru " + iteration + " " + element);
});


var p1 = kolory.join("+"); // dodaje pomiedzy elementami określony parametr!
console.log(p1);

kolory.reverse();  //przestawia elementy odwrotnie
console.log(kolory);

// prostrzy sposób
console.log(kolory.reverse());

var uniwersalnaZmienna = kolory.sort();
console.log(uniwersalnaZmienna);

// łączenie tablic CONCAT która pierwsz przed tym to się wyświetli jako 1

var koloryAny = [ 'blue', 'pink', 'white'];
console.log(koloryAny.concat(kolory));


// chcemy wyszukać pozycje kolorówAny

uniwersalnaZmienna = koloryAny.indexOf("blue");
console.log(uniwersalnaZmienna);


// chcemy sprawdzić czy coś jest w tablicy

if (Array.isArray(koloryAny)) {
  console.log("jest"); 
  } else {
    console.log("nie jest");
  }

// ucinamy i dodajemy do tablicy
koloryAny.splice(2, 1, "brown");
console.log(koloryAny);

//możemy zmienić tablicę na listę do stringa tak jak joina 

console.log(koloryAny.toString ());