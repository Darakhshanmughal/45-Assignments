var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making of array countries and print in original order.
var countriesVisit = ["Iran", "England", "london", "Turkey", "America"];
console.log("original order", countriesVisit);
//print the array alphabetical order without modifying actual array of list/ 
console.log("Alphabetical order", __spreadArray([], countriesVisit, true).sort());
//show that the array still in original order. /
console.log("still in original order", countriesVisit);
//print the array in reverse order without modifying actual array of list/
console.log("reverse order", __spreadArray([], countriesVisit, true).reverse());
//show that the array still in original order. /
console.log("still in original order", countriesVisit);
//we have change to array in original order/
console.log("original order reverse", __spreadArray([], countriesVisit.reverse(), true));
//print the array to show that its back to original order/
console.log("Back to original order", countriesVisit.reverse());
//print the array to show that its order has been change to alphabetical array now/
console.log("sorted in alphabetical", countriesVisit.sort());
//we have change again to array in original order/
console.log("original order again", __spreadArray([], countriesVisit.reverse(), true));
