// module 20.11 (20-5.1) Array Traversal using for and while Loop

const friends = ['elmon', 'sakib', 'mark', 'don'];

// for of loop
for (const friend of friends) {
    console.log(friend);
}

// for loop 

for (i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

//while loop

let j = 0;
while (j < friends.length) {
    console.log(friends[j]);
    j++;
}
