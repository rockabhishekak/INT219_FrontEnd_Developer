/* Array Methods ->
push() : add to end
pop() : delete from end and return
toString() : converts array to string
concat() : joins multiple arrays and return the result
unshift(): adds to beginning of an array and returns the new length of the array
shift() : removes element from the beginning of an array and returns it 
slice() : returns a portion of an array 
splice() : adds/removes elements from an array at a specific index */


let foodItems = ["potato", "apple","litchi","tomato"];
foodItems.push("chips","burger","cheese"); 
console.log(foodItems);
let deletedItem = foodItems.pop(); 
console.log(foodItems);
console.log("deleted", deletedItem);


let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"]; 
console.log(cities);
console.log(cities.toString());
console.log(cities); //toString() does not change the original array, it returns a new string representation of the array.


let marvel_heroes = ["thor","spiderman","ironman"];
let dc_heroes = ["superman","batman"];
let indianHeroes = ["shaktiman","krish"];
let heroes = marvel_heroes.concat(dc_heroes, indianHeroes);
console.log(heroes);


let numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers);
let val = numbers.shift();
console.log("deleted", val);
console.log(numbers);


let fruits = ["apple", "banana", "cherry", "date", "fig"];
console.log(fruits.slice(1, 4));
console.log(fruits); // original array remains unchanged


let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102); // starting at index 2, remove 2 elements and add 101 and 102
console.log(arr);


let arr1 = [1, 2, 3, 4, 5, 6, 7];
// Add element
arr1.splice(2, 0, 201, 202);  // starting at index 2, remove 0 elements and add 201 and 202
console.log(arr1);
// Delete element
arr1.splice(3, 1); // starting at index 3, remove 1 element
console.log(arr1);
// Replace element
arr1.splice(3,1,101); // starting at index 3, remove 1 element and add 101
console.log(arr1);
arr1.splice(4); // starting at index 4, remove all elements to the end
console.log(arr1);
arr1.splice(); // without arguments, it does nothing
console.log(arr1);


// Question 1:
// Create an array to store companies -
// ["Google", "Facebook", "Amazon", "Apple", "Microsoft", "Netflix"]
// a) Remove the first company from the array
// b) Remove "Amazon" and add "Razorpay"in its place
// c) Add "Tesla" to the end of the array


