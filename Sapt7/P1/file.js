/* //1. Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia
numarul [index]” - Scrieti codul in doua variante */
function iters(nr) {
    for (i = 0; i <= nr; i++) {
        console.log("Sunt la iteratia numarul " + i);
    }
};
console.log(iters(10));
//-----
function iters(numb) {
    var i = 0;
    while (i < numb) {
        i++;
        console.log("Sunt la iteratia numarul " + i);
    }
};
iters(6);


/* 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa -
Scrieti codul in doua variante */
var animalArray = ['dog', 'cow', 'horse']
var bigAnimal = function () {
    for (i = 0; i <= animalArray.length; i++) {
        console.log(animalArray[i]);
    }
};
bigAnimal();

//---
var bigAnimal = function () {     //declar o functie
    var animalArray = [' dog', ' cow', ' horse', 'pork']; //am un array pt animale
    var text = '';
    var len = animalArray.length;   //stabilesc lungimea array unde mai jos il voi parcurge 
    while (text < animalArray.length) {
        text += animalArray   ///vreau sa imi afiseze fiecare index in parte la fiecare trecere prin loop
    }
    return text;          ///sa imi returneze la fiecare loop rezultatul
};
console.log(bigAnimal());  


/* //3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa -
scrieti codul in doua variante */

var userName = {
    name: "alex",
    varsta: "20",
    job: "programator"
}
var text = 'Detali pentru urmatoarea persoana la interviu: ';
function cvUser() {
    for (var key in userName) {
        text += userName[key] + ", ";
    };
    console.log(text);
};
cvUser(text);
//---------
var value = Object.values(userName);
//console.log(value);
for (i = 0; i < value.length; i++) {
    console.log('Detali pentru urmatoarea persoana la interviu: ' + value[i]);
};

//ex.4
//1
for (i = 0; i <= 1000; i += 100) {
    console.log(i);
};

//2
for (i = 1; i <= 150; i) {
    i = i * 2;
    console.log(i);
};

//3
for (i = -2; i <= 15; i) {
    i = i + 2;
    console.log(i);
};

//4
for (i = 1; i <= 15; i++) {
    i = i + 2;
    console.log(i);
};

//5
for (i = 9; i >= 0; i--) {
    console.log(i);
};

//6
for (i = 1; i <= 4; i++) {
    console.log(i);
    console.log(i);
    console.log(i);
};
//7
for (i = 0; i <= 4; i++) {
    for (a = 0; a <= 4; a++) {
        console.log(a);
    }
};


///ex.5
var actionFn = function () {
    console.log('ceva');
};

stream(conditionalFn, actionFn); {
    var conditionalFnReturn = conditionalFn();
    while (conditionalFnReturn) {
        actionFn();
    }
};

counter = 10;
var conditionalFn = function () {
    counter--;
    return counter >= 0;
}

var actionFn = function () {
    console.log('ceva');
};

stream(conditionalFn, actionFn); {
    while (conditionalFnReturn()) {
        actionFn();
    }
}

//ex6
function computeSumOfArrayElements(array) {
    var i = 0;
    var sum = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
}
console.log(computeSumOfArrayElements([1, 2, 3, 4]));

///HOMEWORK

//EX.1
for (i = 0; i <= 20; i++) {   //declar un for unde stabilesc valoarea lui i=0, la fiecare iteratie se adauga +1 pana la 20 inclus
    if (i % 2 == 0) {    //ca i sa fie par trebuie sa am rest 0
        console.log(i + ' este par');    //daca am rest zero atunci numarul iterat este PAR
    } else {                              //altfel numarul este impar
        console.log(i + ' este impar');  // valorile se vor afisa atomat avant console.log in interiorul for ului
    }
};
//----

var i = 0;                         //se stabileste valoarea lui i de plecare
while (i % 2 == 0 && i <= 20) {      // stabilim conditia de paritate si cea unde i sa nu depaseasca 20
    //i += 1;
    console.log(i + ' este par');    //daca numarul afisat este par se va afisa acest text.
    i++;
}
console.log(i + ' este impar');   // daca nr.este impar se afiseaza acest text.
//---

var i = 0;                         //se stabileste valoarea lui i de plecare
while (i <= 20) {      // stabilim conditia de paritate si cea unde i sa nu depaseasca 20
    //i += 1;
    i++;              // se incrementeaza de 1 la fiecare iteratie
    if (i % 2 == 0) {    // se stabileste ca daca restul lui i este 0, atunci numarule ste par
        console.log(i + ' este par'); //se afiseaza prima conditie daca este indeplinita
        continue;
    }
    console.log(i + ' este impar'); //altfel se afiseaza a doua conditie

};

//EX.2
for (i = 0; i <= 10; i++) {          //se stabilesc cele trei statment
    var result = 9;             // stabilim o variabila reprezentativa pentru text-ul care se va afisa
    var total = i * 9;          // se face caluculul care va fi afisat ca rezultat intre cele doua numere i si result
    console.log(i + ' * ' + result + ' = ' + total); // afisam operatia matematica sub forma de text

}
//--------
var i = 0;
var result = 9;
while (i <= 10) {
    i++;
    total = i * 9;
    console.log(i + ' * ' + result + ' = ' + total);
};
// Nu inteleg de ce nu pleaca de la 0
// De ce daca ar fi sa pun in interiorul lui while (i <= 20 && i++) - nu merge
// De ce daca pun i++ inainte de total = i * 9; - iteratia este eronata

//EX.3
/* Decalar un for cu numere care pleaca de la 0 pana la 10.
    La fiecare iteratie numerele din for-ul i se vor inmulti cu numere de la 1 la 10.
    Numerele de la 0 la 10 se pot lua dintr-un alt for numit a
    La fiecare valoare a lui a trebuie sa calculez toate valorile din interatia lui i.
*/
for (i = 0; i <= 10; i++) {
    var newValue = i;
    for (a = 1; a < newValue; a++) {
        var customValue = newValue * i;
        //a++;
    };
    //total = i * a;
    console.log(a + ' * ' + i + ' = ' + customValue);
}


///EX.4 
/*
var testPoint = function(myPoints){
    if(myPoints >= 1 && myPoints <= 3){
        return 'Calificatul corespunzator punctajului ' + myPoints +' este E.'
    }if(myPoints >= 3 && myPoints <= 6){
        return 'Calificatul corespunzator punctajului ' + myPoints +' este D.'
    }if(myPoints >= 7 && myPoints <= 8){
        return 'Calificatul corespunzator punctajului ' + myPoints +' este B.'
    }if(myPoints === 9){
        return 'Calificatul corespunzator punctajului ' + myPoints +' este A.'
    }if(myPoints === 10){
        return 'Calificatul corespunzator punctajului ' + myPoints +' este A+.'
    }
}
console.log(testPoint(5));
*/

/*
Se stabileste un function expression
Pt aceasta functie trebuie stabilit un loop prin for care sa itereze notele de la 1 pana 10
Raman aceleasi conditii pt fiecare calificativ in functie de nota
In afara functie se face un call pt toate cazurile iterate de la 1 la 10,
*/

var testPoint = function (myPoints) {
    for (myPoints = 1; myPoints <= 10; myPoints++) {
        if (myPoints >= 1 && myPoints <= 3) {
            console.log('Calificatul corespunzator punctajului ' + myPoints + ' este E.');
        } if (myPoints >= 3 && myPoints <= 6) {
            console.log('Calificatul corespunzator punctajului ' + myPoints + ' este D.');
        } if (myPoints >= 7 && myPoints <= 8) {
            console.log('Calificatul corespunzator punctajului ' + myPoints + ' este B.');
        } if (myPoints === 9) {
            console.log('Calificatul corespunzator punctajului ' + myPoints + ' este A.');
        } if (myPoints === 10) {
            console.log('Calificatul corespunzator punctajului ' + myPoints + ' este A+.');
        };
    }
}
console.log(testPoint());