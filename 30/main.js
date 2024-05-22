//creating a array
var userName = ["Ali", "Admin", "Bilal", "osman", "rashid"];
//using forEach loop on array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report.?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging again."));
    }
});
