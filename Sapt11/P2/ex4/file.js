//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

/* const composedValue = (...functions) => data =>
  functions.reduce((acc, func) => func(acc), data)
const square = item => item * item;
const double = item => item * 2;
console.log(composedValue(square, double) (5)); */



//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc


const compose = (...functions) => data =>
  functions.reduce((acc, func) => func(acc), data)
const square = item => item * item;
const double = item => item * 2;
const  myFunction = compose(double, square)
console.log(myFunction(10))

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

//Nu am inteles de ce in cerinta este cu functie find
// .find returneaza o singura valoare

/* function checkOdd(element, index, array) {
  return (element%2 == 1);
}

console.log([1,2,3,4,5].find(checkOdd)); */


const isOdd = number => number % 2 === 1
const checkArray = (array, condition) => {
  return array.filter(elem => condition(elem) === true)
}

console.log(checkArray([1, 2, 3, 4, 5], isOdd))