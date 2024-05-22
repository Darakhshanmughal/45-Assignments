//array of current users
let Current_user =["Usama","zain","Naimat","Hadia","Fahad"];

//array of New-users names
let New_user =["zahid","fehroz","fatima","hadia","zain"];

//loop through new users to check for users name availability
New_user.forEach(new_one_user => { 
    //making a condition for user name already exists & save in our condition va
    let our_Condition =Current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase() )
// using if-else statement
    if(our_Condition){
      console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is available.`)
    }
})