const jUser = {
    0: 21,
    name: "Vishal",
    email: "vii2.sharma@gmail.com",
    age: 29
}

//We can access the properties in both the following ways because
//the object saves the keys in " " format.
/*console.log(jUser.name);
console.log(jUser["age"]);
console.log(jUser["0"]);
*/
jUser.greeting = function() {
    console.log("This is the greeting function of the javascript User.");
}

//the jUser.greeting contains the reference of the function memory where the function resides in the heap
//but the jUser.greeting() will execute that function.
/*console.log(jUser.greeting());
console.log(jUser.greeting);
*/
//The above method of object creation is object literals.




