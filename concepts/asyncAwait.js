function fetchData(){

    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Data received");
        },2000);
    });

}

async function getData(){

    let result = await fetchData();
    console.log(result);

}

getData();