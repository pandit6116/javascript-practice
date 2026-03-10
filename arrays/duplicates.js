//Find Duplicate Elements


function findDuplicates(arr){
    let duplicates = [];

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                duplicates.push(arr[i]);
            }
        }
    }

    return [...new Set(duplicates)];
}

console.log(findDuplicates([1,2,3,2,4,5,3]));