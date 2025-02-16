// module 20.8 (extra)

const school = {
    name: "pilot",
    class: ['8', '9', '10'],
    bobon: ['lal', 'shada', 'kalo'],
    unique: {
        color: 'red',
        result: {
            gpa: 5
        }
    }
}
school.unique.result.gpa = 4.91
console.log(school["unique"]["result"]['gpa']); // bracket notation use korte hole '' dite hobe property majhe; 

school.bobon.push('red')
school.bobon[4] = "holud"
school.bobon.shift()
console.log(school.bobon);
console.log(school);

// property delete 

delete school.class;
console.log(school);