/*function largest(arr){
    let largest = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}
lnum = largest(1);
console.log("The largest number of the given array is: ",lnum);*/


function getLargest(arg){
    return Math.max(...arg);
}

console.log(getLargest([1,2,3,4,5,6]));