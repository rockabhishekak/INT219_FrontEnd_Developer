/* forEach Loop method in Arrays -> 
it is a method because method is binded/associated with any data structure.
arr.forEach( callBackFunction )
Callback Function : Here, it is a function to execute for each element in the array
A call back function is passed as an argument/parameter to another function. */

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) //each value at each index is passed to the call back function as an argument and we can print it in the call back function
{
   console.log(val);
});

//or we can also write it as
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => console.log(val)); //using arrow function


let arr2 = ["pune", "delhi", "mumbai"];
arr2.forEach((val1, idx, arr2) => 
    {
        console.log(val1.toUpperCase(), idx, arr2);
    });

/* Higher Order Function/Method -> A function/method that takes another function as an argument/parameter or returns a function is called Higher Order Function.
Here, forEach is a higher order method because it takes a call back function as an argument/parameter. */


//Question 1:
//For a given array of numbers, print the factorial of each value using the forEach loop.
