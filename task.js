// task 01
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

let rev = [];

for( let i = 0 ; i < colors.length; i++){
    const color =  colors[i];
    rev.unshift(color);

}

console.log(rev);

console.log("------------->");
console.log("------------->");

// task -2 
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumber = [];
for (const num of numbers ){
    if(num % 2 == 0){
        evenNumber.push(num);
    }
}

console.log(evenNumber);

console.log("------------->");
console.log("------------->");

// task -03
// Use a for...of loop to concatenate all the elements of an array into a single string.

var names = ['Tom', 'Tim', 'Tin', 'Tik'];

let singleString = "";

for ( const name of names){
    singleString += name;
}

console.log(singleString);
console.log(typeof singleString);

console.log("------------->");
console.log("------------->");

// task -04
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

const sen = statement.split(" ").reverse().join(" ");

// let reverse = "";

// for (const letter of sen) {
//     reverse = letter + ' ' + reverse; 
// }

console.log(sen);
