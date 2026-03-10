//Fibonacci Series

function fibonacci(n){
    let a = 0;
    let b = 1;

    for(let i = 0; i < n; i++){
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

fibonacci(13);