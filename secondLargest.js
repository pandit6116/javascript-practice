//Find Second Largest Number
function secondLargest(arr){
    arr.sort((a,b) => b - a);
    return arr[1];
}

console.log(secondLargest([10,5,8,20,15,18]));