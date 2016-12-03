//'use strict';
//
//var Osoba = {
//    imie: "Marcin",
//    wzrost: 180,
//    wyswietlDetale: function() {
//        console.log( this.imie + " " + this.wzrost)
//    }
//}
//
//Osoba.wyswietlDetale();
//
//Osoba["imie"] = "Ania";
//Osoba.wzrost = 160;
//
//
//Osoba.oczy = "niebieskie";
//
//Osoba.wyswietlDetale = function () {
//  console.log(this.name + " " + this.wzrost + " " + this.oczy);
//}
//
//Osoba.wyswietlDetale();



//function sumUp (tabelka) {
//      var suma = 0;
//      for (var i=0; i<tabelka.length; ++i) {
//        suma= suma+tabelka[i];
//        console.log(suma);
//      }
//    return suma;
//}
//
//var tablica = [1,2,3,4,5,6,7,8];
//
//var tablica2 = sumUp(tablica);
//
//console.log(tablica2);

// LOKALNIE tworzę zmienną pomocniczą do której dodaje kolejną wartość z tablica. Na początku określam nową zmienną zero, od której zaczynam liczenie. Później tworzę pętlę w której wywołuje zmienną zero i określam i, nastepnie określam, że jeśli i jest mniejsze od mojej tabelki o indeksie i (dla nas ma wartosc 0) to ma dodac następny element. Następnie nowa funkcja ma mi doliczać następne elementy do siebie. Więc tworzę wartość początkową (moja suma) i nadpisuję ją - idę suma = moje zero i dodaje każdy element z tabelki w funkcji. Daję loga żeby zobaczyć czy mi się dodało.
// GLOBALNIE tworzę tablicę o elementach. Nowa zmienna wywołuje mi nazwę funkcji i w nawiasach przywołuje moje elementy. Następnie w logu sprawdzam czy jest ok :D


// dla nas funkcja to klasa!!!!!

function Aparat(marka,typ) {
  this.marka = marka;
  this.typ = typ;
  this.detale;
  
  this.getInfo = function (){
    console.log("Marka: " + this.marka + "\n"
                + "Typ: " + this.typ + "\n"
                + "Detale: " + this.detale + "\n");
  }
}

var aparat = new Aparat('Nikon', 'lustrzanka');
aparat.detale = 'nowy';

aparat.getInfo();


var aparat2 = new Aparat('Canon', 'kompaktowy');
aparat2.detale = 'nowy';

aparat2.getInfo();


var jsonAparat = {
    "aparat": [
        {marka: "Nikon", typ: "lustrzanka", detale: "nowy"},
        {marka: "Canon", typ: "kompakt", detale: "używany"},
        {marka: "Tamron", typ: "klisza", detale: "uszkodzony"}
    ]
}

console.log(jsonAparat);

//
// function Osoba(imie,nazwisko) {
//     this.imie = imie;
//     this.nazwisko = nazwisko;
//     this.wzrost;
//     this.oczy;
//     this.getInfo = function() {
//         console.log("Imię: " + this.imie + "\n" 
//         + "Nazwisko: " + this.nazwisko + "\n"
//         + "Wzrost: " + this.wzrost + "\n"
//         + "Oczy: " + this.oczy + "\n");
//     }
// }
//
// //znak nowej lini to jest \n (od new line)
//
// // powyższy opis mówi, że każdy z nas jest odrebną osobą czyli definicją pewnego wzoru --> dla nas jest to klasa
// // klasa to opis pewnych właściwości który będą miały obiekty
// // nowa osoba o imieniu krystian ma istancje przypisane powyżej (imie nazwisko itp)
//
// var krystian = new Osoba('Krystian', 'Dziopa');
// krystian.wzrost = 180;
// krystian.oczy = "niebieskie";
// krystian.getInfo();
//
// var ania = new Osoba ('Ania', 'Sieradzka');
// ania.wzrost = 160;
// ania.oczy = "niebieskie";
// ania.getInfo();

