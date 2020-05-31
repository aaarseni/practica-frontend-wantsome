// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users" 

fetch(url)
  .then(response => response.json())
  .then(data => data.filter(function(i) { return i.id > 5 })
  .map(i => console.log(i.username, i.id)))

/* ex */
  // PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
let url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.items.map(book => book.volumeInfo)
  .filter(book => book.pageCount > 230)
  .filter(book => book.authors.length > 1 )))


  //EX3
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.

const url = 'https://jsonplaceholder.typicode.com/posts';
const myPost = {
  title: 'Javascript Post is awesome',
  body: 'lorem ipsum etc',
  userId: 1
}
 
/* const options = {
  method: 'POST',
  body:  body.myPost,
  headers: title.myPost,
}; */

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(myPost),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});


//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()




//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

/* document.cookie = 'userName = Alex'
const firstCookie = document.cookie;
console.log(firstCookie)

document.cookie1 = 'userJob = driver';
const secondCookie = document.cookie1;
console.log(secondCookie)

document.cookie2 = 'userAge = 20';
const thirdCookie = document.cookie2;
console.log(thirdCookie)

document.cookie3 = 'userJob = preast; expires= Thu, 1 Jan 2021 00:00:00 GMT'
const localCookie = document.cookie3
console.log(localCookie)

document.cookie4 = 'userAge = 30; expires= Thu, 2 Jan 2023 00:00:00 GMT'
const someCookie = document.cookie4
console.log(someCookie) */

//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px")
localStorage.setItem("height", "100px")
localStorage.setItem("background-color", "green")

const width =  localStorage.getItem("width")
const height = localStorage.getItem("height")
const background = localStorage.getItem("background-color")

const div = document.createElement('div')

div.style.width = width;
div.style.height = height;
div.style.background = background;

document.body.appendChild(div)




//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

function displayVideo () {
  //let url = require('./world.json');

  fetch('./world.json' )
    .then(response => response.json())
    .then(data => {
      console.log(data)
        data.forEach(element => {
          document.getElementsByClassName('.listVideo').innerHTML = `
          <iframe width="1280" height="720" src= ${youtubeVideo}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`;

/*           let result =`
          <video src= ${youtubeVideo}>
          `; */
          $('.listVideo').append(element.result)
        });
    })
    .catch(err => console.error(err))
}


/* [
  {"youtubeVideo": "https://www.youtube.com/watch?v=CBwKJfrm5-U",
    "title": "Bali Travel Guide - How to travel Bali",
    "author": "Allan Su",
    "rating": 4
  },
  {"youtubeVideo": "https://www.youtube.com/watch?v=oSexfR0Ubzw",
    "title": "Rome in 4k",
    "author": "Around The World 4k",
    "rating": 5
  },
  {"youtubeVideo": "https://www.youtube.com/watch?v=k7ZqiSKIB9g",
    "title": "Glasgow Vacation Travel Guid",
    "author": "Expedia",
    "rating": 3
  },
  {"youtubeVideo": "https://www.youtube.com/watch?v=xl3QM22kWV0",
    "title": "Around Malaysia",
    "author": "Drone Around The world",
    "rating": 2
  }
] */