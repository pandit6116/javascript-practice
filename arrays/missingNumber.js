//Find Missing Number

function findMissing(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a,b) => a + b, 0);

    return total - sum;
}

console.log(findMissing([1,2,3,4,5,6,7,9,10]));