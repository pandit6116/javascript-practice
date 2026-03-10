//Array Frequency Counter


function frequency(arr){
    let map = {};

    for(let num of arr){
        map[num] = (map[num] || 0) + 1;
    }

    return map;
}

console.log(frequency([1,2,2,3,3,3,3]));
