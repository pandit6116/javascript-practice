//Sum of Numbers from 1 to N

function sum(n){
    let total = 0;

    for(let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}

console.log(sum(5));