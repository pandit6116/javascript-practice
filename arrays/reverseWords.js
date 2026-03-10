//Reverse Words in Sentence

function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love javascript"));