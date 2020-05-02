// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra


const aBody = document.querySelector('body');
const aParagraph = document.createElement('p');
aParagraph.textContent = 'Hello world';
//aParagraph.innerHTML = 'Hello world';
aBody.appendChild(aParagraph);

aBody.style.fontFamily = 'Arial, sans-serif';

/* const aName = document.getElementById('name');
aName.textContent = 'Alex';

const aDrink = document.getElementById('fav-drink');
aName.textContent = 'palinca';

const sPlace = document.getElementById('bornPlace');
aName.textContent = 'Iasi'; */

const span = document.getElementsByTagName('span');
span[0].textContent = 'Alex';
span[1].textContent = 'palinca';
span[2].textContent = 'Iasi';

const aList = document.querySelectorAll('ul');
for (i = 0; i < aList; i++) {
    aList[i].classList.add('listitem')
}

const image = document.createElement('img');
image.setAttribute('src', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2013/11/mojito-cocktails.jpg?itok=7ZS6egg_')
const body = document.querySelector('body');
body.appendChild(image);