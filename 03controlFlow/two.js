const arr = [1,2,1,4,5];
const str = "Rohit Sharma";
/*
for (const char of str) {
    console.log("The character: ",char);
}

const map = new Map();
map.set("A", "Vishal");
map.set("B", "Bavuma");
map.set("C", "De-Cock");

for (const [key, value] of map) {
    console.log(key, ":", value);
} 

const myObj = {
    A: "Vishal",
    B: "Bavuma"
}

for (const key in myObj) {
    console.log(key, ":", myObj[key]);    
}
*/

// const prog_Lang = ["C","C++", "Python", "nodejs", "Ruby"];

// prog_Lang.forEach(element => {
//     console.log(element);
// });


/*
So basically, what we can learn from this is that
    *With arrays: we can use For, Foreach, Forof, Forin loops to iterate them
    *With objects: we can use Forin loop to iterate them
    *With map: we can use Forof loop to iterate them
*/

const array = [1,2,3,4,5,6,7];
array.forEach((item)=>{
    console.log(item*2);
})