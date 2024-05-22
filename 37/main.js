// making a function
function make_shirt(size, printMassage) {
    if (size === void 0) { size = "Large"; }
    if (printMassage === void 0) { printMassage = "I love typescript"; }
    console.log("Creating a ".concat(size, " size with the ").concat(printMassage, " prints on shirt."));
}
// calling a function by default for large shirt 
make_shirt();
// making a function by default for medium shirt
make_shirt("medium");
//making a function by default for small size different massage
make_shirt("small", "I love javascript");
