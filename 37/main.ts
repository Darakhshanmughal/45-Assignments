// making a function
function make_shirt(size :string = "Large", printMassage : string = "I love typescript"){
    console.log(`Creating a ${size} size with the ${printMassage} prints on shirt.`);
}
// calling a function by default for large shirt 
make_shirt();

// making a function by default for medium shirt

make_shirt("medium");
//making a function by default for small size different massage

make_shirt("small", "I love javascript");
