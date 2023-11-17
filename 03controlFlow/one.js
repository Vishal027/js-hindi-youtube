let variable = 1;
let a = 2;

//this === is a strict equality comparator
if(a === variable){
    console.log("Done");
}else{
    console.log("not done:");
}

/* 
    //this == is a loose equality comparator which performs type coercion before 
    performaing the comparison between both operands
    if(a == variable){
        console.log("Done");
    }else{
        console.log("not done:");
    }
*/