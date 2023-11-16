const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${user.username} , Welcome to the website.`);
        //console.log(this);
    }
}
//user.welcomeMessage();
//console.log("The outside this keyword:", this);

// function chai(){
//     console.log(this);
// }

const chai = () => {
    console.log(this);
}

chai();