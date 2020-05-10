// 1

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
  return value + 1;
}
console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console

const double = (value) => {
  return value * 2;
}
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

const square = (value) => {
  return value * value;
}
console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    var arrIndex = array[i];
    if (callback(arrIndex)) {
      filteredArray.push(arrIndex);
    }
  }
  return filteredArray;
};

const byOdd = (value) => {
  return value % 2 === 1;
}
console.log(filter(randomArray, byOdd))


const filterDivideBy3 = (value) => {
  return value % 3 === 0;
}
console.log(filter(randomArray, filterDivideBy3))


const filterBy4 = (value) => {
  result = Math.sqrt(value);
  return result % 4 === 2;
}
console.log(filter(randomArray, filterBy4))


const filterBy3 = (value) => {
  return value % 3 === 2;
}
console.log(filter(randomArray, filterBy3))


const filterByNumber = (value) => {
  return value < 8;
}
console.log(filter(randomArray, filterByNumber))


// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

let anObj = {
  statusA: 'succes',
  statusB: 'error'
}

const getSucces = () => {
  return "This function is a succes!";
}

const getError = () => {
  return "This is only a error!";
}

const multipleCallbacks = (obj, point1, point2) => {
  if (Object.values(obj)[0] === 'succes') {
    return point1();
  }
  if (Object.values(obj)[1] === 'error') {
    return point2();
  }
}
console.log(multipleCallbacks(anObj, getSucces))
console.log(multipleCallbacks(anObj, getError))