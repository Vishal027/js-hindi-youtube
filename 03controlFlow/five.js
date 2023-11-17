let myNumbers = [1,2,3,4,5,6,7];

myNumbers = myNumbers
            .map((num) => num + 10)
            .map((num) => num + 1)
            .filter((num) => num > 40);

//the {} after the => suggests that block has been initiated and now we must use return keyword
//if nothing then it will automatically assume that the above is doing the default return job

//we can combine combinations of multiple map and filter methods
//console.log(myNumbers);