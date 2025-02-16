// module 20.4 (extra)

const sen = "i have a pen."

let reverse = ""

for( let i =0; i < sen.length; i++){
    // console.log(i);
    const letter = sen[i];
    reverse = letter + reverse
}

console.log(reverse);

// shortcut //

const rev = sen.split('').reverse().join('');
console.log(rev)


