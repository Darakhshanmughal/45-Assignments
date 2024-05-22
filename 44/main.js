//define a function with a rest parameter that accept items representing our sandwich 
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich!");
}
// call the function three times with three different numbers of arguments
make_sandwich("Chicken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Chicken", "Bread", "Mayo", "Egg", "Cheese", "tomato", "Cucumber", "chilli ketchup");
