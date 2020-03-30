/*1. Scrieti o functie de tip named function denumita greatestNrBetween care:
- Primeste ca argumente doua numere
- Returneaza numarul care este mai mare
Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“*/
var greatestNrBetween = function (num1, num2) {
    if (num1 > num2) {
        return 'NUmarul mai mare dintre ' + num1 + ' si ' + num2 + ' este ' + num1 + '.';
    }
    return 'NUmarul mai mare dintre ' + num1 + ' si ' + num2 + ' este ' + num2 + '.';
};

greatestNrBetween(4, 9);

/*2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
- Primeste ca argument codul unei limbi: “en”, “es”, “de”
- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
Apelati functia pentru fiecare caz in parte.*/
var helloWorldInLang = function (lang) {
    if (lang === 'en') {
        return 'Hello world';
    } else if (lang === 'es') {
        return 'Buenas dias';
    } else if (lang === 'de') {
        return 'Guten tag';
    } else {
        return 'HELLO WORLD';
    }
};
console.log(helloWorldInLang());

/*3. Scrieti o functie numita pluralizeWord care:
- accepta doua argumente: un substantiv in engleza si un numar
- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese”*/
var pluralizeWord = function (word, numb) {
    if (word === 'sheep' && numb > 1) {
        return numb + ', ' + 'sheep';
    } else if (word === 'goose' && numb > 1) {
        return numb + ', ' + 'geese';
    } if (numb > 1) {
        return numb + ', ' + word + 's';
    } else {
        return numb + ', ' + word;
    }
};

console.log(pluralizeWord('goose', 1));

/*4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
corespunzatoare considerand urmatoarele criterii:
- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”*/
function calculTaxe(salarAn) {
    if (salarAn <= 30000) {
        return 'Pentru un venit anual de ' + salarAn + ', aveti de platit taxe in valoare de 0%';
    } else if (salarAn >= 50000 && salarAn <= 99999) {
        var taxe = salarAn * 0.35;
        return 'Pentru un venit anual de ' + salarAn + ', aveti de platit taxe in valoare de ' + taxe + '.';
    } else if (salarAn >= 100000) {
        var taxe = salarAn * 0.4;
        return 'Pentru un venit anual de ' + salarAn + ', aveti de platit taxe in valoare de ' + taxe + '.';
    }
}

console.log(calculTaxe(2000));

/*5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
afiseaza:
- AA if points is greater than 90
- AB if points is greater than 80 and less than or equal to 90
- BB if points is greater than 70 and less than or equal to 80
- BC if points is greater than 60 and less than or equal to 70
- CC if points is greater than 50 and less than or equal to 60
- CD if points is greater than 40 and less than or equal to 50
- DD if points is greater than 30 and less than or equal to 40
- FF if points is less than or equal to 30*/

var sharePoints = function (points) {
    if (points > 90) {
        return 'AA';
    } else if (points > 80 && points <= 90) {
        return 'AB';
    } else if (points > 70 && points <= 80) {
        return 'BB';
    } else if (points > 60 && points <= 70) {
        return 'BC';
    } else if (points > 50 && points <= 60) {
        return 'CC';
    } else if (points > 40 && points <= 50) {
        return 'CD';
    } else if (points > 30 && points <= 40) {
        return 'DD';
    } else (points <= 30); {
        return 'FF'
    }
}
console.log(sharePoints(36));

var somePoints = function (onePoint) {
    switch (onePoint) {
        case onePoint > 90:
            console.log('AA');
            break;
        case onePoint > 80 && onePoint <= 90:
            console.log('AB');
            break;
        case onePoint > 70 && onePoint <= 80:
            console.log('BB');
            break;
        case onePoint > 60 && onePoint <= 70:
            console.log('BC');
            break;
        case onePoint > 50 && onePoint <= 60:
            console.log('CC');
            break;
        case onePoint > 40 && onePoint <= 50:
            console.log('CD');
            break;
        case onePoint > 30 && onePoint <= 40:
            console.log('DD');
            break;
        default: onePoint <= 30
            console.log('FF');
    }
}
console.log(somePoints(34));

/*6. Scrieti o functie care testeaza daca o anumita data introdusa este in weekend: 
*/
var testWeekend = function (date) {
    if (testWeekend.getDay === 6) {
        return 'Weekend';
    } if (testWeekend.getDay === 0) {
        return 'Weekend';
    }
};
console.log(testWeekend('nov', 13, 2020));

/*1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".*/
//Se acepta valoarea numerica CNP
//Se stie ca primul numar stabileste sexul
//Prin slice aleg primul numar si il compar daca e o valoare de 1 sau 2
// am incercat si cu while dar tot imi da eroare
// mai jos este si o varianta cu Objects literals

function genderCheck(cnp) {
    var res = cnp;
    if (res.slice(0, 1) === 1) {
        return 'Persoana verificata este de sexul M'
    } if (res.slice(0, 1) === 2) {
        return 'Persoana verificata este de sexul F'
    }
};
console.log(genderCheck());


function gendCheck(codPers) {
    var number;
    function isMale() {
        return number = 'Persoana verificata este de sexul M'
    }
    function isFemale() {
        return number = 'Persoana verificata este de sexul F'
    }
    var codNUmeric = {
        '1': isMale,
        '2': isFemale,
    };
    return codNUmeric[codPers]();
}
var number = gendCheck('1234556');
console.log(number);


/*2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:*/
//Se introduc valorile pana la 10
//Se stabileste valoarea E pentru punctaj intre 1-3, daca valoarea este intre 3-6 avem D, daca avem intre 7-8 obtinem un B, pentru 9 avem A si pentru 10 avem A+
//Se returneaza nota si calificativul primit.
var testPoint = function (myPoints) {
    if (myPoints >= 1 && myPoints <= 3) {
        return 'Calificatul corespunzator punctajului ' + myPoints + ' este E.'
    } if (myPoints >= 3 && myPoints <= 6) {
        return 'Calificatul corespunzator punctajului ' + myPoints + ' este D.'
    } if (myPoints >= 7 && myPoints <= 8) {
        return 'Calificatul corespunzator punctajului ' + myPoints + ' este B.'
    } if (myPoints === 9) {
        return 'Calificatul corespunzator punctajului ' + myPoints + ' este A.'
    } if (myPoints === 10) {
        return 'Calificatul corespunzator punctajului ' + myPoints + ' este A+.'
    }
}
console.log(testPoint(5));

//ex3.
//Creez o functie anonima si ii asignez un argument
//Daca argumentul corespunde uneia din tarile producatoare de masini va afisa un mesaj

var carType = function (myCar) {
    if (myCar === 'BMW') {
        return 'Marca ' + myCar + ' se produce in Germania.';
    } if (myCar === 'fiat') {
        return 'Marca ' + myCar + ' se produce in Italia.';
    } if (myCar === 'dacia') {
        return 'Marca ' + myCar + ' se produce in Romania.';
    } if (myCar === 'seat') {
        return 'Marca ' + myCar + ' se produce in Spania.';
    } if (myCar === 'toyota') {
        return 'Marca ' + myCar + ' se produce in Japonia.';
    } if (myCar === 'tata') {
        return 'Marca ' + myCar + ' se produce in india.';
    }
    return "Marca este necunoscuta."
}
console.log(carType('fiat'));
//----------------------------------------------
function getCar(model) {
    var aCar;
    function aBmw() {
        return 'Marca ' + model + ' se produce in Germania.';
    }
    function aFiat() {
        return 'Marca ' + model + ' se produce in Italia.';
    }
    function aDacia() {
        return 'Marca ' + model + ' se produce in Romania.';
    }
    function aSeat() {
        return 'Marca ' + model + ' se produce in Spania.';
    }
    function aToyota() {
        return 'Marca ' + model + ' se produce in Japonia.';
    }
    function aTata() {
        return 'Marca ' + model + ' se produce in india.';
    }
    function otherCars() {
        return "Marca este necunoscuta."
    }

    var someCars = {
        'Bmw': aBmw,
        'Fiat': aFiat,
        'Dacia': aDacia,
        'Seat': aSeat,
        'Toyota': aToyota,
        'Tata': aTata,
        'default': otherCars,
    }
    return (someCars[model] || someCars['default'])();
}
var aCar = getCar('Bmw');
console.log(aCar);

//-----
function typeCar(model) {
    switch (model) {
        case 'Bmw':
            return 'Marca ' + model + ' se produce in Germania.';
            break;
        case 'Ferrari':
            return 'Marca ' + model + ' se produce in Italia.';
            break;
        case 'Mercedes':
            return 'Marca ' + model + ' se produce in Germania.';
            break;
        case 'Ford':
            return 'Marca ' + model + ' se produce in USA.';
            break;
        case 'Land Rover':
            return 'Marca ' + model + ' se produce in UK.';
            break;
        case 'Peugeot':
            return 'Marca ' + model + ' se produce in Franta.';
            break;
        default:
            return "Marca este necunoscuta."
    }
}
console.log(typecar('Land Rover'));


//ex4.
/*Scrieti o functie de tip IIFE care:
- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];
- afiseaza in consola array-ul sortat*/

//Avand Array ul dat implementez functia de tip IIFE folosind schema standard
//In interiorul functiei apelez array-ul si il sortez sortat
// ca sa am o functie de tip IIFE ea trebuie apelata imediat cum se termina functia
//afisez rezultatul

var cars = [
    { name: "John", salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
];

(function () {
    cars.sort(function (a, b) {
        return a.salary - b.salary;
    });
    console.log(cars);
})();
