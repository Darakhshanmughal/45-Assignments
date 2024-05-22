//define a function to print each magician from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define an array containing  magician names
var magician_names = ["Harry porter", "zain", "darakhshan"];
//call the function to print each magician name
show_magicians(magician_names);
