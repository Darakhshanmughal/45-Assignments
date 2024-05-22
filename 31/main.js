var userName = ["Osman", "Ali", "Admin", "Rashid", "Bilal"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array is an empty, we need to find some users!.");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ",would you like to see a status report.?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging again."));
        }
    });
}
