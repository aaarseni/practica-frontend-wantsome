console.log(typeof 'w3resource'); // string
console.log(typeof [1, 2, 4, 0]); // object

function is_Blank(input) {
  if (input.length === 0)
    return true;
  else
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('ADVvSDV'));

var string = "Robin , Singh";
var result = string.split(',');
console.log(result);

var string = "Robin Singh";
console.log(string.substring(0, 7));

function firstString(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(firstString("js string exercises"));

var string ="Robin Singh";
console.log(string.slice(0, 4));

function upperLetter(input, index){
  return input.charAt(index).toUpperCase() === input.charAt(index);
}
console.log(upperLetter('Js STRING EXERCISES', 0));


function insert(mainString, insertString, index){
  if(typeof(index) == "undefined"){
    insertString = '';
  }
  return mainString.slice(0, index) + insertString + mainString.slice(index);
}
console.log(insert('We are doing some exercises.','JavaScript ',18));


function mainString(string, index){
  var result = string.indexOf(index);
  if(result === -1){
    return string;
  }
    return string.slice(0, result) + string.slice(result + index.length);
  }
console.log(mainString("The quick brown fox jumps over the lazy dog", 'back'));


function compareString(string1, string2){
  var result = string1.toUpperCase() === string2.toUpperCase();
  return result;
}
console.log(compareString('abcd', 'AbcD'));


function lowLetter(string){
  return string.charAt(0).toLowerCase() === string.slice(1);
}
console.log(lowLetter("Js string exercises"));