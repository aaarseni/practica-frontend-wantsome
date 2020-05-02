function getPersonsNames(arr) {
    getName = arr.map(name => `${name.name} ${name.surname}`);
    return getName;
}

console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]));