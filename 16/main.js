var guestList = ["Akram", "Saima", "Shamim", "Nazia"]; // create a array  of guest's.
var DontCome = guestList[0]; // Assigns "akram" to DontCome variable
console.log(DontCome, "Nahi aa sakta."); // Prints "akram Nahi aa sakta."
guestList.splice(0, 1, "Shahzaib"); // Replaces "Akram" with "Shahzaib" in the guestList array.
// massage print for bigger dinner.
console.log("Good news ! We have found a bigger table of Dinner.");
// adding a new guest in the starting index of array.
guestList.unshift("Ali");
// adding a new guest in the ending index of array.
guestList.push("Areeba");
// get a middle index of our guest list  array.
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest in the middle index of array.
guestList.splice(middleIndex, 0, "darakshshan");
//print massage updated guest list
console.log("updated list of our guest.");
//sending a invitation massage of guest list one by one. 
guestList.forEach(function (guest) { return console.log("Asalam o alaikum ".concat(guest, ", would you like to have dinner with me?")); });
