
function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
// function make to make magician great through map() will modify array
function make_great(magicians:string[]){
   return magicians.map(name => `The Great ${name}`);
}

//define an array containing  magician names
let magician_names=["Harry porter","zain","darakhshan"]



//call make great functions to modify magician name
let great_magicians = make_great(magician_names);

//call show magician that modify list of magician
show_magicians(great_magicians);