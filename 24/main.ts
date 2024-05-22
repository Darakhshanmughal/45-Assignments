//define variable
let Apple = "Apple";
let uppercaseApple ="APPLE";
let Ten = 10;
let Twenty = 20;
let fruits = ["apple","banana","guava","orange"];

//test  for equality & inequality with string.
console.log("is Apple is equal to Apple?");
console.log(Apple == "Apple");

console.log("\nis Apple is not equal to Apple?");
console.log(Apple != "Apple");
 
//test using lowercase function

console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numerical tests

//equal to.
console.log("\nis Ten is equal to Twenty?");
console.log(Ten == Twenty);

//not equal to/.
console.log("\nis Ten is not equal to Twenty?");
console.log(Ten != Twenty);

//greater than
console.log("\nis Ten is greater than zero?");
console.log(Ten > 0);

//less than
console.log("\nis Twenty is less than Ten?");
console.log(Twenty < Ten);

//greater than or equal to.
console.log("\nis Twenty is greater than or equal to Ten?");
console.log(Twenty >= Ten);

//less than or equal to.
console.log("\nis Twenty is less than or equal to 10?");
console.log(Twenty <= 10);

//test in using and & or.\
//using &&
console.log("\nis Twenty is  not equal to 10, Twenty is greater than 10");
console.log(Twenty != 10 && Twenty > 10);

console.log("\nis Twenty is  not equal to 10, Twenty is greater than 30");
console.log(Twenty != 10 && Twenty > 30);

//using or

console.log("\n 20 is greater than 50 OR Twenty is equal to 20");
console.log(20 > 50 || 20 ==20);

console.log("\n 20 is greater than 50 OR Twenty is not equal to 20");
console.log(20 > 50 || 20 !=20);

//test weather an item is include in array
console.log("\n is orange include in my fruits array?");
console.log(fruits.includes("orange"));
// not include
console.log("\n is orang is not include in my array ");
console.log(!fruits.includes("orange"));

