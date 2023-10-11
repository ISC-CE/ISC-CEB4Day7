/*
Concept Tutorial:
Recursive functions should have a base case to stop the recursion.
In a factorial function, the base case is usually when the input value is 0, 
and the function returns 1 as 0! is 1.
*/

// Corrected Code:
function factorial(n) {
    if(n === 0) {
      return 1;  // Corrected the return value for the base case to 1
    }
    return n * factorial(n - 1);
  }
  