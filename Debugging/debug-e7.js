// Incorrect Code:
function factorial(n) {
    if(n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(3));
  // Issue: Base case should return 1, not 0.
  