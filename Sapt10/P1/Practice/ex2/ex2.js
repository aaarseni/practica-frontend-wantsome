//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

const clickTheButton = document.getElementById('exButton');

const postTheGossip =() =>{
        // Selecting the input element and get its value 
    const firstValue = document.getElementById('name').value;
    const secondValue = document.getElementById('adjective').value;
    const thirdValue = document.getElementById('random-word').value;
    // Displaying the value
    alert(`${firstValue}  este  ${secondValue}  dupa  ${thirdValue}`);
}







