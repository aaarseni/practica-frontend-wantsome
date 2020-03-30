//ex1

var emailAddress = function (eMail) {
    var sign = eMail.split('@');
    var secondSign = sign[1].split('.');
    var result = sign[0] + '...' + secondSign[1];
    return result;
}
console.log(emailAddress('arseni.alexandru@yahoo.com'));



//ex2
var myFunction = function (string) {
    var res = string.split(' ');
    console.log(res);
    for (i = 0; i < res.lenght; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    console.log(res.join(' '));

    console.log(res[0] + ' ' + res[1] + ' ' + res[2]);
}
myFunction("i am superman and batman");


//ex3
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


//ex4
function moreStrings(string, number) {
    var result = "";
    for (i = 0; i < number; i++) {
        result += string;
    }
    console.log(result);
}
moreStrings('wantsome', 2);


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

//6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
var item = [1, 3, 6, 10, 14,];
var item1 = [34, 23, 55, 1, 7];

function arraySort(array) {
    item.sort(function (a, b) {
        return b - a;
    });
}
//////////////////////////////////////



//7. Implementati o functie care face reverse la un string
var bigString = function (string) {
    return string.split('').reverse().join('');
};
console.log(bigString('Mai am multe de invatat'));

//8. Implementati o functie care calculeaza factorialul unui numar