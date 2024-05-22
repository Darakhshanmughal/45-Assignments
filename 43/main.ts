function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
// function make to make magician great through map() will modify array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}

//define an array containing  magician names
let magician_names=["Harry porter","zain","darakhshan"]

// making a copy of original array through .slice() function

let copy_magician_names = magician_names.slice();

//modify the copied array to include "the great" with there name
let copy_great_magician = make_great(copy_magician_names);

//show both arrays original and copied

//original
console.log("original array\n");


show_magicians(magician_names);

//copied
console.log ("\ncopied array\n");

show_magicians(copy_great_magician);
