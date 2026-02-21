// /* array methods - >
let foodItems = ["potato","apple","litchi","tomato"];
foodItems.push("Chips","burger");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted",deletedItem);
let arr1=[1,2,3,4,5,6,7];
// add element
arr1.splice(2,0,201,202);
console.log(arr1);
arr1.splice(3,1);
console.log(arr1);

// Questios :
// Create an array to store companies- 
// ["Google","Facebook", "Amazon","Apple","Microsoft","Netflix"]
// a) Remove the first company from the array
// b) Remove "Amazon" and add "Razorpay" in its place
// c) Add "Tesla" to the end of the array


let arr = ["Google","Facebook","Amazon","Apple","Microsoft","Netflix"];
arr.splice(0,1);
