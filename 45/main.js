//define a function through create a car object with options
function Create_Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = Create_Car("Toyota", "Corolla", "color: Black", "Sunroof: true", "year:2024");
// print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
