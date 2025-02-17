// task -01
// Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"]);

console.log("----------------");
console.log("----------------");

// task -02
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passengerCapacity = 5; // added new property

console.log(car);

console.log("----------------");
console.log("----------------");

// task -03
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks);

console.log("----------------");
console.log("----------------");

// task -04
// Count the number of properties.
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(students).length);

console.log("----------------");
console.log("----------------");

// task -05
// Loop through an object and print the key-value pairs with their types

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const prop in myObject){
    console.log("key:", prop, "|" , "type:", typeof myObject[prop]);
}