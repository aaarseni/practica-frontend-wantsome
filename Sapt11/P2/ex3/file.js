// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(elem => elem.species === 'cat');
console.log(allCats);


let allHumans = arr.filter(elem => elem.species === 'human');
console.log(allHumans);


let allFemales = arr.filter(gender => gender.sex === 'f');
console.log(allFemales);


let totalOfAllAges = arr.reduce((acc, allAge) => {
    return acc + allAge.age
}, 0);
console.log(totalOfAllAges);


let averageAgeOfCats = arr
    .filter(item => item.species === 'cat')
    .reduce((acc, item) => {
        return acc + item.age / 2;
    }, 0);
console.log(averageAgeOfCats);


let averageAgeOfHumans = arr
    .filter(elem => elem.species === 'human')
    .reduce((acc, item) => {
        return acc + item.age / 3;
    }, 0)
console.log(averageAgeOfHumans);


let avgLengthOfNames = arr.map(elem => ({
    name: elem.name
}))
    .reduce((acc, item) => {
    return acc + item.name.length / arr.length;
}, 0);
console.log(avgLengthOfNames);
