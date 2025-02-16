// module 20.4

const sentence = "i want to learn Web Dev .";

const sen = sentence.split(' ')

console.log(sen);

let reverse = "";

for (const letter of sen) {
    reverse = letter + ' ' + reverse; 
}

console.log(reverse);

//  for loop
let reev = ''
for(let i = 0 ; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    reev = letter + reev
}
console.log(reev);
