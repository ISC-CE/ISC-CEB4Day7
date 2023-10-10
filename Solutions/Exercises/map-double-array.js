// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];
// Use the 'map' method to create a new array that doubles each number in the original array
let doubledNumbers = numbers.map(function(num) {
  // Return the doubled value of each number
  return num * 2;
});

// Log the new array to the console
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]
