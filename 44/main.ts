//define a function with a rest parameter that accept items representing our sandwich 
function make_sandwich(...items: string[]){
    console.log("\nmaking a sandwich with the following items: \n")
     
    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich!");

}

// call the function three times with three different numbers of arguments
make_sandwich("Chicken","Cheese","Mayo","Egg");

make_sandwich("Bread","Butter");

make_sandwich("Chicken","Bread","Mayo","Egg","Cheese","tomato","Cucumber","chilli ketchup");