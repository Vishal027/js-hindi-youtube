console.log(f2());
//when this is used before the actual function definition then it still would be executed
function f2(){
    console.log("B");
}

//However, the following is again a function but it is seen as an expression and hence using f1 before 
//defining it would be incorrect.
const f1 = function(){
    console.log("A");
}
console.log(f1());




