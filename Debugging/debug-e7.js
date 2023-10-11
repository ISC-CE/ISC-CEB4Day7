// Incorrect Code:
function factorial(n) {
    if(n === 0) {
      return 0;
    }
    return n * factorial(n - 1);
  }

  // factorial();
  
  // Issue: Base case should return 1, not 0.
  