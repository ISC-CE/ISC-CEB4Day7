// Define a function named getLargestNumber
function getLargestNumber(args){
    // Use Math.max method with the spread operator to find the largest number
    return Math.max(...args);
}

// Call the function with an Array of Numbers

console.log(getLargestNumber([34,78,100,3,4,2,89,7]));

