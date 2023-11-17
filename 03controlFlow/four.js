//filter operation

const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.filter((num) =>{
//     if(num > 4)
//         return num;
// })
const nums = [];
myNums.forEach((item) => {
    if(item > 4)
        nums.push(item);
})
console.log(nums);

//so there are multiple methods to do the same work.
