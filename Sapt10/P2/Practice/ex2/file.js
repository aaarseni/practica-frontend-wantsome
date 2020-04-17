let objectFirstConst = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

let request = new XMLHttpRequest();
request.open('GET', objectFirstConst);
request.responseType = 'jason';
request.send();

function fillTheSection (jasonObj){
    const paragraph = document.createElement('p');
    paragraph.textContent = jsonObj['aliceblue'];
    p.appendChild(paragraph);
}

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }