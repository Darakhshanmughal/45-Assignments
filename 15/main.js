var guestList = ["Akram", "Saima", "Shamim", "Nazia"];
var DontCome = guestList[0]; // Assigns "akram" to DontCome variable
console.log(DontCome, "Nahi aa sakta."); // Prints "akram Nahi aa sakta."
guestList.splice(0, 1, "Shahzaib"); // Replaces "Akram" with "Shahzaib" in the guestList array
guestList.forEach(function (guest) { return console.log("Asalam o alaikum ".concat(guest, ", would you like to have dinner with me?")); });
