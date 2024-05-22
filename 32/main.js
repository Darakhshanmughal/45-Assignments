//array of current users
var Current_user = ["Usama", "zain", "Naimat", "Hadia", "Fahad"];
//array of New-users names
var New_user = ["zahid", "fehroz", "fatima", "hadia", "zain"];
//loop through new users to check for users name availability
New_user.forEach(function (new_one_user) {
    //making a condition for user name already exists & save in our condition va
    var our_Condition = Current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    // using if-else statement
    if (our_Condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available."));
    }
});
