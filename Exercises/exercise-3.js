function findLargestNumber(array) {
    return  Math.max(...array);;
  }
  
  const array = [1, 5, 3, 7, 2];
  const largestNumber = findLargestNumber(array);
  
  console.log(largestNumber); // 7

  