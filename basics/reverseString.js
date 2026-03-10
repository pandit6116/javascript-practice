function reverseString(str) {
    return str.split("").reverse().join("");
}

let result = reverseString("Hello World");

console.log("Reversed String:", result);