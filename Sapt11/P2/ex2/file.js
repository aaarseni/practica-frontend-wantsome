//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = function (string) {
  return string
    .toLowerCase()
    .split('')
    .map(letter => {
      if (String.fromCharCode(letter.charCodeAt()) === 'Z') {
        return String.fromCharCode(65)
      } else if (String.fromCharCode(letter.charCodeAt()) === 'z') {
        return String.fromCharCode(97)
      }
      return letter.replace(/[a-zA-Z]/g, String.fromCharCode(letter.charCodeAt(0) + 1))
    })
    .join('')
}
console.log(moveLetters('hElloz'))


// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

let changeWordCase = function (string) {
  return string
    .split(' ')
    .map((firstWord, index) => {
      if (index % 2 == 0) {
        return firstWord.toUpperCase()
      }
      return firstWord.toLowerCase()
    })
    .join(' ')
}
console.log(changeWordCase('hey ppl, lets learn javascript together sometime'))
