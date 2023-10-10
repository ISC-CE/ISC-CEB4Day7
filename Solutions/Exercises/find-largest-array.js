// Define a function named 'findLargest' that takes one parameter, arr
function findLargest(arr) {
    // Use the Math.max method along with the spread operator to find the largest number in the array
    return Math.max(...arr);
  }
  
  // Call the function with an array of numbers, and log the result to the console
  console.log(findLargest([1, 2, 3, 4, 5]));  // Output: 5
  