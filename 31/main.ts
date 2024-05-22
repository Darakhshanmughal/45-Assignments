let userName = ["Osman","Ali","Admin","Rashid","Bilal"];

userName = []

if (userName.length === 0){
    console.log("Your Array is an empty, we need to find some users!.");

}else{
    userName.forEach(oneUser =>{
        if (oneUser === "Admin"){
           console.log(`Hello ${oneUser},would you like to see a status report.?`)
        }else{
            console.log(`Hello ${oneUser}, Thank you for logging again.`)
        }
    })
}