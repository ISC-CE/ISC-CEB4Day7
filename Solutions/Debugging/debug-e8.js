/*
Concept Tutorial:
The map() method creates a new array with the results of calling a function for every array element.
It does not modify the original array, so the new array should be stored in a variable.
*/

// Corrected Code:
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubledNumbers);  // Logging the new array to the console
  