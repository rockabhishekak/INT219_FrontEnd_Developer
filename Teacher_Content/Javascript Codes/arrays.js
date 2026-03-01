/* Arrays - collection of items. Stores items in linear form.
Arrays are mutable. */

let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length); //property - value
typeof marks; //object type
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[5]);//undefined
marks[2] = 76;
console.log(marks);


let heroes = ["ironman","thor","hulk","spiderman","antman","captain america"];
//Print all elements of an array 
for(let i=0; i<heroes.length; i++)
    {
        console.log(heroes[i]);
    }
//for of loop
for(let hero of heroes)
{
    console.log(hero);
}


//for of loop
let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}


// Question 1:
// For a given array with marks of students ->
// [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

// Question 2:
// For a given array with prices of 5 items ->
// [240, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them.
// Change the array to store final price after applying offer.
