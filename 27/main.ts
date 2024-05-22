// define variable// 

let alienColor = "green";
 // first version

 // using is and else-if statement
if(alienColor === "green"){

    console.log(" (version 1) You shot down green alien, you have earned 5 points. ");
}

else if(alienColor === "yellow"){
    console.log("You shot down yellow alien, you have earned 10 points. ");
}

else if(alienColor === "red"){
    console.log("You shot down red alien, you have earned 15 points. ");
}
//  second version

let alienColor2 = "yellow";

if(alienColor2 === "green"){
    console.log("You shot down green alien, you have earned 5 points. ");
}
else if (alienColor2 ==="yellow"){
    console.log("(version 2) You shot down yellow alien, you have earned 10 points. ");
}
else if (alienColor2 ==="red"){
    console.log("You shot down red alien, you have earned 15 points. ");
} 

//version three

let alienColor3 ="red";

if(alienColor3 ==="green"){
    console.log("you shot green alien, you have earned 5 points.");
}
else if(alienColor3 ==="yellow"){
    console.log("you shot down yellow alien, you have earned 10 points.");
}
else if (alienColor3 ==="red"){
    console.log("(version 3)you shot down red alien, you have earned 15 points.");
}