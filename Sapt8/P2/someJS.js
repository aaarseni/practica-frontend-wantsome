//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumOfallPreviousNumber = aNumber => aNumber * (aNumber + 1) / 2;
console.log(sumOfallPreviousNumber(6))
/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const checkLongestWord = string => {
    let divideStringAndSort = string.split(' ').sort((a, b) => b.length - a.length);
    return divideStringAndSort[0];
};
console.log(checkLongestWord('Wantsome is Awsomeeeet today'))
/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const checkReversString = string => string.split('').reverse().join('');
console.log(checkReversString('Incerc sa invat algoritmica'));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const switchLetters = string => string.replace(/[a-zA-Z]/g, function (i) {
    return String.fromCharCode(i.charCodeAt(0) + 1);
});
console.log(switchLetters('abba'));
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertNumberToTime = aNumber => {
    if (aNumber % 60 == 0) {
        return aNumber / 60;
    }
    return Math.floor(aNumber / 60) + ':' + aNumber % 60;
}
console.log(convertNumberToTime(70))
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const sortStringAlpha = string => string.split('').sort().join('');
console.log(sortStringAlpha('xymnab'));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
let checkPlusBetweenLetters = string => {
    let splitWord = string.split('');
    for (i = 0; i < splitWord.length; i++) {
        if (string.charAt(i + 1) === '+') {
            return true;
        };
        return false;
    }
}
console.log(checkPlusBetweenLetters('a+b+c+'))
console.log(checkPlusBetweenLetters('+ab+c+d+'))