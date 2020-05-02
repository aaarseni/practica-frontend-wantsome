const books = [
  {title: 'The Power of Habit',
   author: 'Charles Duhigg',
   read: true,
  
  },
  {title: 'Mindset: The New Psychology of Success',
  author: 'Carol S. Dweck',
  read: false
  }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati 
      //un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.
//-------------------------------------------

for (let i = 0; i < books.length; i++) {
  let node = document.createElement("li")
  for (let key of ['title', 'author', 'read']) {
    let creatLi = document.createElement("li")
    creatLi.innerHTML = books[i][key]
    node.appendChild(creatLi)
  }
  document.querySelector('ul').appendChild(node);
}

const image = document.createElement('img');
image.setAttribute('src','https://images-na.ssl-images-amazon.com/images/I/819ZixpQzUL.jpg');
const appendImage = document.querySelector('li');
li.appendChild(image);