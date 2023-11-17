//Here we will read about the reduce method

const myNums = [1,2,3,4,5];

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(acc," Current: ", currval);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0);
console.log(myTotal);