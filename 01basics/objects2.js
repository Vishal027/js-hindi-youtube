//Here, we will see the singleton object creation using the new keyword
const users = [
    {
        userID: '1',
        name: "V"
    },
    {
        userID: '2',
        name: "A"
    },
    {
        userID: '3',
        name: "B"
    }
]

//For any object the keys are it's basic key values.
console.log(Object.keys(users[0]));
//But for an array it's keys are it's indices only.
console.log(Object.keys(users[0]));

//similarly we can calculate the values as well
console.log(Object.values(users))
