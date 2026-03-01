/* reduce method ->
performs some operations & reduces the array to a single value.
It returns the single value that results from the reduction. */

// //eg: sum of all the elements in an array
let arr = [1, 2, 3, 4];
const output = arr.reduce((prev, curr) => //prev is the accumulator, curr is the current value
{
    return prev + curr; //prev is the accumulated value, curr is the current value being processed
});
console.log(output);


// //eg: find the maximum value in an array
let arr2 = [1, 2, 3, 4];
const max = arr2.reduce((prev, curr) => 
    {
    return prev > curr ? prev : curr; 
});
console.log(max);


//Question 1:
//Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate the product of all numbers(means factorial) in
//the array.


