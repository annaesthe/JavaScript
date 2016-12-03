'use strict';

function mnozenie(parametr1, parametr2) {
    var wynik;
    wynik = parametr1*parametr2;
    return(wynik);
    
}

mnozenie(5,6);
mnozenie(5,6);
mnozenie(5,6);
mnozenie(5,6);



//  funkcja globalna

function mnozenie(parametr1, parametr2) {
    var wynik;
    wynik = parametr1*parametr2;
    return wynik;
    
}

var wynik;
var parametr1 = 5;
var parametr2 = 6;
wynik = mnozenie(parametr1,parametr2);
console.log(wynik);

// funkcja globalna koniec

//  funkcja zwrócona

function multiply (parametr1,parametr2,parametr3) {
    var result;
    result = parametr1*parametr2*parametr3;
    return result;
}

var MyResult;
MyResult = multiply(5,3,2);
console.log(MyResult);

console.log("Wynik:" + multiply(3,9,10));
var funkcja = function () {
    return "wynik"
};

//  funkcja zwrócona koniec


// różne zmienne lokalne i globalne

var liczba1 = 5;

function dodaj() {
    var suma;
    var liczba2;
    
    liczba2= 10;
    suma = liczba1+liczba2;
    return suma;
}

dodaj();

// // różne zmienne lokalne i globalne KONIEC

