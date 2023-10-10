// Incorrect Code:
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers);

// Issue: map() returns a new array, original array 'numbers' is not modified.
