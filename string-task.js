// task - 01
// Count how many times a string has the letter a

const country = "bangladeshAs";

console.log(country.includes('a'));
let count= country.split('a');
console.log(count.length-1);

console.log("----------------");
console.log("----------------");

// task -02
// Count how many times a string has the letter a or A

const myCountry = "bangladeshAs";

let counti= myCountry.toLowerCase().split('a');
console.log(counti.length-1);

console.log("----------------");
console.log("----------------");

// task 03
// Check whether a string contains all the vowels a, e, i, o, u

const check = "i have a pen and also a book"

console.log('a:', check.includes("a"));
console.log('e:', check.includes("e"));
console.log('i:',check.includes("i"));
console.log('o:',check.includes("o"));
console.log('u:',check.includes("u"));

console.log("----------------");
console.log("----------------");

// task - 4
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const given = "xoXo xoXo"

const update = given.replace(/x/g , 'y').replace('X' , "Y"); //The g flag ensures that it replaces every occurrence in the string.

console.log(update);

console.log("----------------");
console.log("----------------");

// task 05
// Capitalize Every first Letter of each word in a String

const line = "Capitalize every first Letter of each word in a String"
let lines = line.split(' ')
for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i][0].toUpperCase() + lines[i].slice(1);
    
}
let capitalLine = lines.join(" ");

console.log(capitalLine);
