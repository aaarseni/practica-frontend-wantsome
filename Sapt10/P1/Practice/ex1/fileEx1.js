/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/



/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/
const displayAlert = document.getElementById('eventAlert');
displayAlert.onclick = () => {
    alert('Ai apasat pe buton.');
}

const manageText = document.getElementById('changeText');
manageText.onclick = () => {
    alert('Textul din input a fost schimbat');
}


const paragraph = document.querySelector('p');

const cameleonEventHandler = () => {
    let colors = ['blue', 'red' , 'yellow' , 'green' , 'gray'];
    let chooseColor = Math.floor(Math.random() * 5);
    paragraph.style.color = colors[chooseColor];
    console.log(chooseColor);
}
document.querySelector('input').addEventListener('keydown', cameleonEventHandler);