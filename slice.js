// module 20.3
console.log('Since---------');

const address = "andorkilla";

const part = address.slice(3,6) //Since substr() is deprecated, it's better to use slice() or substring().
console.log(part);

console.log('spilt-------------------------');
console.log('-------------------------');

// spilt

const sentence = "i have a pen and i also have a book"
console.log(sentence.split('and'));

const friends = "rahim,kahim,shamim,fahim,hamim"

const friend = friends.split(',')
console.log(friend);

console.log('join-------------------------');
console.log('-------------------------');

// join 

const realFriend = ['rahim', 'kahim', 'shamim', 'fahim', 'hamim']

console.log(realFriend.join('-'));
console.log(realFriend.join('|'));

console.log('concat-------------------------');
console.log('-------------------------');

// concat------

const first = "Istiak";
const last = "Mahmud";

const fullName = first +" "+ last;
console.log(fullName);

// use concat 

const fullName2 = first.concat(' ').concat(last);


console.log('includes-------------------------');
console.log('-------------------------');

// includes (case sensitive)


console.log(last.includes('D'));
console.log(last.includes('d'));



