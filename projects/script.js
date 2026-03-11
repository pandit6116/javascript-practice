const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.getAttribute("data-value");

handleInput(value);

});

});

function handleInput(value){

if(value === "C"){
display.value = "";
}

else if(value === "back"){
display.value = display.value.slice(0,-1);
}

else if(value === "="){

try{

let exp = display.value;

if(/[+\-*/]$/.test(exp)){
exp = exp.slice(0,-1);
}

display.value = eval(exp);

}

catch{
display.value = "Error";
}

}

else{
display.value += value;
}

}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

const key = event.key;

if(!isNaN(key) || ["+","-","*","/","."] .includes(key)){
display.value += key;
}

else if(key === "Enter"){
handleInput("=");
}

else if(key === "Backspace"){
handleInput("back");
}

else if(key === "Escape"){
handleInput("C");
}

});