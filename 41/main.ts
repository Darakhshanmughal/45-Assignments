//define a function to print each magician from an array

function show_magicians(magician:string[]){
     magician.forEach(name => console.log(name));
}

//define an array containing  magician names
let magician_names=["Harry porter","zain","darakhshan"]

//call the function to print each magician name
show_magicians(magician_names);

