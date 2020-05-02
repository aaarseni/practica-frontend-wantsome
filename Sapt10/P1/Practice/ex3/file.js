//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click

const sqrButton = document.querySelector('#sqr-btn');

const sqrNum = () =>{
    const number = document.querySelector('#square').value;
    alert(number * number);
}
sqrButton.addEventListener('click', sqrNum);

const halfNumber = document.querySelector('#half-btn');
const halfNum = () => {
    const number = document.querySelector('#half').value;
    alert (number / 2)
}
halfNumber.addEventListener('click', halfNum);

const percentege = document.querySelector('#prc-btn');
const percentageNumb = () => {
    const firstNumb = document.querySelector('#percent1').value;
    const secondNumb = document.querySelector('#percent2').value;
    alert (firstNumb * 100 / secondNumb);
}
percentege.addEventListener('click', percentageNumb);

const areaCalc = document.querySelector('#area-btn');
const areaCircle = () => {
    const number = document.querySelector('#area').value;
    alert(Math.PI * number * number);
}
areaCalc.addEventListener('click', areaCircle);