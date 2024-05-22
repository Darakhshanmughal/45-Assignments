function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// function make to make magician great through map() will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array containing  magician names
var magician_names = ["Harry porter", "zain", "darakhshan"];
//call make great functions to modify magician name
var great_magicians = make_great(magician_names);
//call show magician that modify list of magician
show_magicians(great_magicians);
