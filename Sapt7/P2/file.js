/* 1. Scrieti o functie care sa protejeze emailul unui user
de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
 */
var emailAddress = function (eMail) {
    var sign = eMail.split('@');
    var secondSign = sign[1].split('.');
    var result = sign[0] + '...' + secondSign[1];
    return result;
}
console.log(emailAddress('arseni.alexandru@yahoo.com'));



/* 2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
 de ex: myFunction("i am superman") sa printeze "I Am Superman */
 var myFunction = function (string) {
    var res = string.split(' ');
    for (i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    console.log(res.join(' '));
};
myFunction("i am superman and batman, the cat is meow");

/* //3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz" */
function firstString(string) {
    return string.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(firstString('abdDSH435'));
//---
function switchLetter(string) {
    var anArray = string.split('');
    var i = 0;
    while (i < anArray.length) {
        if (anArray[i] == anArray[i].toUpperCase()) {
            anArray[i] = anArray[i].toLowerCase();
        } else {
            anArray[i] = anArray[i].toUpperCase();
        };
        i++;
    };
    return anArray.join('');
};
console.log(switchLetter('sjkJKHDdnKsd'));


/* //4. Scrieti o functie care sa concateneze un string de cate ori ii zicem
de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome */
function moreStrings(string, number) {
    var result = "";
    for (i = 0; i < number; i++) {
        result += string;
    }
    console.log(result);
}
moreStrings('wantsome ', 4);


//ex5
//A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word
//'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function palindrom(item) {
    var result = item.toLowerCase().split('').reverse().join('');
    if (result === item) {
        return item + ' este un palindrom.'
    }
    return item + ' nu este un palindrom.'
};
console.log(palindrom('cal'));

/* //6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
 returneaza un array care contine ca si elemente cele mai mari numere din fiecare array */
//Am doua array pe care le voi sorta descrescator
//Valoarea cea mai mare care imi iese de la fiecare array le voi introduce intr-o functie
// unde parametrul functiei va primi ca valoare concatenamentul valorilor cu index 0 de la cele doua array uri.

const returnTheBiggestValue = (item, item1) => {
    item.sort(function (a, b) {
        return b - a;
    });
    if (item[1] < item[0]) {
        console.log(item[0]);
    };

    item1.sort(function (a, b) {
        return b - a;
    });
    if (item1[1] < item1[0]) {
        return item1[0];
    };
};
console.log(returnTheBiggestValue([149, 3, 9, 10, 143,], [344, 23, 55, 1, 7]))
//let item = [14, 3, 9, 10, 143,];
//let item1 = [34, 23, 55, 1, 7];

//////////////////////////////////////



//7. Implementati o functie care face reverse la un string
var bigString = function (string) {
    return string.split('').reverse().join('');
};
console.log(bigString('Mai am multe de invatat'));

//8. Implementati o functie care calculeaza factorialul unui numar
function factorial(nr) {
    for (i = nr - 1; i >= 1; i--) {
        nr *= i
    }
    return nr;
};
console.log(factorial(5));

//9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
const checkStr = (str1, str2) => {
    if (str1.endsWith(str2)) {
        return true;
    }
    return false;
}
console.log(checkStr('caruta', 'ta'));


/* 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
element din array care trece testul specificat */
const functionTest = (arrayArg, functionArg) => {
    for (i = 0; i < arrayArg.length; i++) {
        functionArg(arrayArg[i]);
    }
};

let arrayListTest = [1, 2, 3, 4, 5, 6, 7];

const testArray = (aNumber) => {
    if (aNumber === 3) {
        console.log(aNumber);
    }
}
functionTest(arrayListTest, testArray);

/* 11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
celui de-al doilea string */
const checkString = (string1, strin2) => {
    if (string1 === strin2) {
        return true;
    }
    return false;
}
console.log(checkString('ala', 'ala'));

/* 12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
element al array-ului pana cand intalneste elementul cu valoarea specificata */
const listWord = (word, number) => {
    let someWords = [];
    for (i = 0; i < word.length; i++) {
        someWords = word[i];
        console.log(someWords)
        if (someWords === number) {
            break;
        };
    }//return someWords;
};
console.log(listWord([1, 2, 3, 4, 5, 6], 4));
//----
const listWord = (word, number) => {
    let someWords = [];
    for (someWords of word) {
        console.log(someWords)
        someWords === word;
        if (someWords === number)
            break;
    };
    //return someWords;
};
console.log(listWord([1, 2, 3, 4, 5,], 3));


/* 13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN */
let oldArray = [false, null, 0, "", undefined, NaN, 1];
const deleteValueFromArray = (array) => {
    newArray = []
    for (i = 0; i < array.length; i++) {
        if (Boolean(array[i]) === true) {
            newArray.push(array[i]);
        }
    };
    console.log(newArray);
};
deleteValueFromArray(oldArray);
//---------
let oldArray = [false, null, 0, "", undefined, NaN, 1];
const deleteValueFromArray = (array) => {
    newArray = []
    for (i = 0; i < array.length; i++) {
        newArray.push(!!array[i]);
    };
    console.log(newArray);
};
deleteValueFromArray(oldArray);

/*14. Scrieti o functie care repeta un string de n ori specificate */
const repeatString = (string, aBigNumber) => {
    do {
        return string.repeat(aBigNumber);
    } while (aBigNumber)
};
console.log(repeatString('Azi nu mai jucam fotbal / ', 4));