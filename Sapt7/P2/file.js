var emailAddress = ('name@' + 'domain.com')



//ex2
var myFunction = function(string){
    var res = string.split(' ');
    console.log(res);
    for (i=0; i<res.lenght; i++){
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
    console.log(res.join(' '));

    console.log(res[0] + ' ' + res[1] + ' ' + res[2]);
}
myFunction("i am superman and batman");


//ex3
 function firstString(string){
    return string.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}

console.log(firstString('abdDSH435'));


//ex4
function moreStrings(string, number){
    var result = "";
    for(i=0; i<number; i++){
        result += string;
    }
  console.log(result);
}
moreStrings('wantsome', 2);


//ex5
//A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word
//'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function palindrom(item){
    var result = item.toLowerCase().split('').reverse().join('');
        if(result === item){
            return item + ' este un palindrom.'
        }
        return item + ' nu este un palindrom.'
};
console.log(palindrom('cal'));

//6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

