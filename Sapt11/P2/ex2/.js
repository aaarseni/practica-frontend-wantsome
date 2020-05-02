//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

/* const moveLetters = function(string){
    return string.toLowerCase().split('')
      .map(letter => letter.replace((/[a-zA-Z]/g), String.fromCharCode(letter.charCodeAt(0) + 1)))
        .join('')
  }
  console.log(moveLetters('hEllo')) */
  
  
  // ex2
  // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
  // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
  let changeWordCase = function(string){
    return string.split('')
    .map(function (firstWord) {
      return firstWord[0].toUpperCase() + firstWord.slice(1);
    })
    .join('')
  }
  console.log(changeWordCase('hey ppl, lets learn javascript together'))
  
  /* const words = str.split(' ');
  console.log(words[3]); */
  
  
  /* function titleCase(str) {
    return str.split(' ').map(function(word) {
      return (word.toUpperCase() + word.slice(5) + word.toLowerCase());
    }).join(' ');
  }
  console.log(titleCase('hey ppl, lets learn javascript together')); */