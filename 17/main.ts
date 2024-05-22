// create a array  of guest's.
let guestList = ["Akram", "Saima", "Shamim", "Nazia"];

// Assigns "akram" to DontCome variable.
let DontCome = guestList[0]; 

// Prints "akram Nahi aa sakta."
console.log(DontCome, "Nahi aa sakta.");

// Replaces "Akram" with "Shahzaib" in the guestList array.
guestList.splice(0, 1, "Shahzaib");


// massage print for bigger dinner.
console.log("Good news ! We have found a bigger table of Dinner.");

// adding a new guest in the starting index of array.
guestList.unshift("Ali");


// adding a new guest in the ending index of array.
guestList.push("Areeba");

// get a middle index of our guest list  array.
let middleIndex : number = Math.floor(guestList.length / 2);

// adding a new guest in the middle index of array.
guestList.splice(middleIndex,0, "darakshshan");

//print massage updated guest list
console.log("updated list of our guest.");

//sending a invitation massage of guest list one by one. 
guestList.forEach(guest => console.log(`Asalam o alaikum ${guest}, would you like to have dinner with me?`));

//inform that only two guest invited for dinner.
console.log("unfortunately,The new dinner table wont arrive on time. so, i can invite only two guest  to dinner with me");

//using while loop tp removing two guest from the guest list until only two name remain.
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`sorry, ${removeGuest} I cant invite you for dinner`);

}

//sending a invitation massage to the last two guests.
console.log("invitation to  the last 2 guest");
guestList.forEach(lastTwo =>console.log(` luckily, ${lastTwo} you are still invited to dinner. `));

//removing the last two guest from the guest list.
guestList.pop();
guestList.pop();

console.log("empty",guestList);