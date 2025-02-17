// module 20.12 (20-5.2) Reversing an array with/without reverse method

const num = [1, 2, 3, 4, 5, 6, 7];

//num.reverse()
console.log(num);

// use for of loop

const revNum = [];

for (const nums of num) {
    // console.log(nums);
    // revNum.unshift(nums)

}

// console.log(revNum);


// use for loop

for( let i = 0; i < num.length; i++){
    const numa = num[i]; 
    
    revNum.unshift(numa)
}

console.log(revNum);



for( let k = num.length -1; k >= 0; k-- ){
    console.log(num[k]);
}
