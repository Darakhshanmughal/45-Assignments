//creating a array
let userName = ["Ali","Admin","Bilal","osman","rashid"];

//using forEach loop on array

userName.forEach(oneUser =>{
    if (oneUser === "Admin"){
       console.log(`Hello ${oneUser},would you like to see a status report.?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging again.`)
    }
})
    