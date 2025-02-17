// module 20.13 (20-5.3) Sort an array problems and solution

const person = ['rakib', 'nokib', 'sakib', 'akib', 'dakib']

const sortedPerson = person.sort()
console.log(sortedPerson);

// sort ------>

const num = [2, 3, 7, 8, 4, 5, 9];
console.log(num.sort()); // not working properly

// pro level just see---->

const number = [2, 33, 7, 8, 42, 5, 9];

console.log(number.sort(function (a, b) { return a - b }));
console.log(number.sort(function (a, b) { return  b - a }));