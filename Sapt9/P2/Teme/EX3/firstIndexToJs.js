//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

let firstTest = document.getElementById('test');
firstTest.style.backgroundColor = 'red'

let secondAndThird = document.getElementsByClassName('test');
for (i = 0; i < secondAndThird.length; i++) {
  secondAndThird[i].style.backgroundColor = 'green'
}

let getTheSection = document.getElementsByTagName('section');
  for(i = 0; i < getTheSection.length; i++){
    getTheSection[i].style.backgroundColor = 'blue'
  }

let getTheQuery = document.querySelector('#test-query');
  getTheQuery.style.backgroundColor = 'brown';

let allQuery = document.querySelectorAll('.test-query-all');
  for(i = 0; i < allQuery.length; i++){
    allQuery[i].style.backgroundColor = 'blue';
  }
