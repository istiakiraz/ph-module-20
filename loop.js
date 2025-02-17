// module 20.9 

const mobile = {
    brand: "iphone",
    price: 25000,
    color: "black",
    camera : "36px",
    isnew : true
}

// for of : array
// for in : object

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

// different looping use for of

const key =Object.keys(mobile)
console.log(key);

for(const ky of key){
    console.log(ky , ':' ,(mobile[ky]));
    
}

// extra ---------- different way to create new object

const pen = new Object()
console.log(pen);

const light = Object.create({});
console.log(light);