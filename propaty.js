// module 20.7

const person = {
    name: "sabbir ahmed",
    age : 25,
    profession: "teacher",
    salary : 25000,
    married : false
}

console.log(person);
console.log(person.married); // individual property call, this feature also called dot notation

const income = person.salary;
console.log(income); // individual property to variable

console.log("bracket notation------------------");
// bracket notation-----

console.log(person['age']);
