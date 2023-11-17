const myCoding = [
    {
        project: "Expense management",
        language: ".NET"
    },
    {
        project: "Klik",
        language: ".NET Production and Support"
    },
    {
        project: "IT Request Handling",
        language: "Ruby on Rails"
    },
    {
        project: "Image Encryption",
        language: "C++"
    },
    {
        project: "Sudoku",
        language: "Python"
    }
]

myCoding.forEach((elemObj) =>{
    //console.log(elemObj);    
    for (const key in elemObj) {
        console.log("Key is: ", key, " And Value is: ", elemObj[key]);
   }
});