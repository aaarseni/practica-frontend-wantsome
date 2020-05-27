/* 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
comparatie.
Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri. */

let checkNumber = (number) => {
  return new Promise(function (resolve, reject) {
    reject(number > 10);
    resolve(number <= 10);
  })
}

checkNumber(13)
  .then((result) => {
    console.log(`The condition for a number bellow 10 is ${result}.`)
  })
  .catch((error) => {
    console.log(`The condition for a number grater than 10 is ${error}.`)
  })



/*   2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri. */

const checkString = (str) => {
  return new Promise((resolve, reject) => {
    if (str.includes('promise')) {
      resolve(str);
    } else {
      reject(str);
  }})
}

checkString('This text contains a')
  .then((result) => {
    console.log(`${result}.`)
  })
  .catch((error) => {
    console.log(`${error}.`)
  })


/* 4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject. */
arr = ["elephant", "dog", "cat", "bee", "ant"]

const capitalizeWords = (arr) => {
  return new Promise((resolve, reject) => {
    return  arr.charAt(0).toUpperCase() + arr.slice(1);
  })
}

const sortWords = (elem) => {
  elem.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
}

let checkArray = () => {
  capitalizeWords.then(result => {
    console.log(result)
    sortWords.then (something => {
      console.log(something)
    })
  })
}

checkArray()

/* in primul then se apleaza promisul al doilea */

/* ex,5 faci un promis gen (get data) si faci request la server cu hhttp request, onload   https://api.exchangeratesapi.io/latest?base=EUR
*/