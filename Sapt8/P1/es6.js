/* /Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100 */
function calcule(nr, numb) {
    if (nr != numb) {
        let prod = nr + numb;
        return prod;
    };
    //console.log(prod);

    if (nr === numb) {
        let sumProd = nr + numb;
        let bestSum = sumProd * 5;
        return bestSum;
    }
    console.log(bestSum);
}
console.log(calcule(4, 4))

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function returnSomething(nr1, nr2) {
    if (nr1 === 30 && nr2 === 30) {
        return true;
    };
    if (nr1 + nr2 === 30) {
        return true;
    } else {
        return false;
    }
    //return returnSomething;
}
console.log(returnSomething(30, 30))

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
function newString(string) {

    if (string.includes('JS')) {
        return otherString;
    } else {
        return `JS${string}`;
    }
};
console.log(newString('jswantsome'))

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const duplicates = (numb) => {
    let cancelLetters = [...new Set(numb)];
    console.log(cancelLetters.join(''))
}
duplicates('hhhdrrstttsuuu')

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
let longString = (string) => {
    let oneString = string.split(' ');
    let resultWord = 0;
    for (let i = 0; i < oneString.length; i++) {
        if (oneString[i].length > oneString[resultWord].length) {
            resultWord = i;
        }
    };
    return oneString[resultWord];
}
console.log(longString('Wantsomee is Awsomeeeeeee today'));



//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
const creatApiramid = () => {
    let numberOfRow = 5
    let result = ''
    for (let i = 1; i <= numberOfRow; i++) {
        for (let j = 1; j <= i; j++) {
            let j = '*'
            result += j + '  '
        }
        console.log(result)
        result = ''
    }
}

creatApiramid()

//ex7
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above
const negativeNumbers = []

function extractNegativeNumbers(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i])
        }
    }
    return negativeNumbers
}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]))


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
const someCalc = (number, number2, operat) => {
    switch (operat) {
        case 'add':
            return number + number2
            break
        case 'multiply':
            return number * number2
            break
        case 'substract':
            return number - number2
            break
        case 'divide':
            return number / number2
            break
        default:
            return 'Unknown result'
    }
}
console.log(someCalc(9, 4, 'divide'))

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
const checkDivide = (oneNumber) => {
    if (oneNumber % 3 == 0 && oneNumber % 5 == 0) {
        return 'BOTH';
    }
    if (oneNumber % 3 == 0) {
        return 'THREE';
    } else {
        return oneNumber;
    }
}
console.log(checkDivide(15))
console.log(checkDivide(9))
console.log(checkDivide(7))

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. +
// Ora este : 20 PM : 30 : 38
let today = new Date();
const days = [
    'Azi este : Duminica',
    'Azi este : luni',
    'Azi este : Narti',
    'Azi este : Miercuri',
    'Azi este : Joi',
    'Azi este : Vineri',
    'Azi este : Duminica'
]

const d = new Date()
const dayName = days[d.getDay()]
console.log(dayName)

let hour = today.getHours()
let minute = today.getMinutes()
let second = today.getSeconds()
let prepand = hour >= 12 ? ' PM ' : ' AM '
hour = hour >= 12 ? hour - 12 : hour
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = ' Noon'
    } else {
        hour = 12
        prepand = ' PM'
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = ' Midnight'
    } else {
        hour = 12
        prepand = ' AM'
    }
}
console.log(
    'Ora este : ' + hour + prepand + ' : ' + minute + ' : ' + second
)

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
const atmCheck = (pinCheck) => {
    if (pinCheck === '6969' || pinCheck === '696969') {
        return true;
    }
    return false;
}
console.log(atmCheck('6969'))

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
const removeVowels = (string) => {
    let vowels = string.toLowerCase();
    return vowels.replace(/[aeiou]/g, '');
};
console.log(removeVowels('Hey I am developer'));

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
const isSquareNumber = (number) => {
    return number = !0 && Math.sqrt(number) % 1 === 0;
};
console.log(isSquareNumber(-1))
console.log(isSquareNumber(25))
console.log(isSquareNumber(3))


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
const anagramCheck = (word1, word2) => {
    word1 = word1.replace(/[^\w]/g, '').toLowerCase()
    word2 = word2.replace(/[^\w]/g, '').toLowerCase()

    return sortString(word1) === sortString(word2)
};

function sortString(string) {
    return string.split('').sort().join('')
};
console.log(anagramCheck('School master', 'The class room'))
console.log(anagramCheck("silent", "liste"))
