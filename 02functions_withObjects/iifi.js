//here we are going to study about the immediately invoked functions.

(function chai() {
    console.log("Vishal");
})();
//It is very esential to put the semi-colon here because that would end the context of the above function
// and let the compiler know that it has ended.
(() => {
    console.log("Vishal in an iffi arrow function.");
})();
//we can even provide the parameters to it
((name) => {
    console.log("Vishal in an iffi arrow function: ", name);
})("Parameter wala")
//chai();