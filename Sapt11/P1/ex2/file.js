/* Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
argument */

function doubleEachNumber(arr) {
    let dubbleNum = arr.map(item => {
        if (typeof item === 'number') {
            return item * 2;
        }
        return item;
    });
    return dubbleNum;
};
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala'])); // [4, “5”, 200, “100”, “blalblala”]