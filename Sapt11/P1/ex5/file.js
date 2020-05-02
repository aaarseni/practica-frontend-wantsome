function getPersonsDomElements(arr) {
    arr.forEach(person => {
        let fullName = document.createElement('h1');
        fullName.textContent = person.name + ' ' + person.surname;
        document.querySelector('body').appendChild(fullName);

        let age = document.createElement('h2');
        age.textContent = person.age;
        document.querySelector('body').appendChild(age);
    })
}
console.log(getPersonsDomElements([
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