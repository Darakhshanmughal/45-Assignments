//making of array countries and print in original order.
let countriesVisit: string[] = ["Iran","England","london","Turkey","America"];

console.log("original order", countriesVisit);


//print the array alphabetical order without modifying actual array of list/ 
console.log("Alphabetical order",[...countriesVisit].sort());

//show that the array still in original order. /
console.log("still in original order",countriesVisit);

//print the array in reverse order without modifying actual array of list/
console.log("reverse order",[... countriesVisit].reverse());

//show that the array still in original order. /
console.log("still in original order",countriesVisit);

//we have change to array in original order/
console.log("original order reverse",[... countriesVisit.reverse()]);

//print the array to show that its back to original order/
console.log("Back to original order",countriesVisit.reverse());

//print the array to show that its order has been change to alphabetical array now/
console.log("sorted in alphabetical",countriesVisit.sort());
 
//we have change again to array in original order/
console.log("original order again",[... countriesVisit.reverse()]);