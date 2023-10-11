// Incorrect Code:
let numbers = [1, 2, 3, 4, 5];
numbers.map(function(num) {
  return num * 2;
});
console.log(num * 2);

// Issue: map() returns a new array, original array 'numbers' is not modified.
