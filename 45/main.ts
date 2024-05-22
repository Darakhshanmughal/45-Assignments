//define a function through create a car object with options

function Create_Car(manufacturer, model, ...options){
    //initialize a car object with manufacturer and model
    let car ={
       manufacturer :manufacturer,
       model : model,

    };
    //Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;
}
// call the function to create a car object
let my_car = Create_Car("Toyota","Corolla","color: Black","Sunroof: true","year:2024");

// print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);