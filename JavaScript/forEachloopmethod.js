let arr = [1, 2, 3, 4, 5];
arr.forEach(function priVal(val)//each value at each index is passed to the function as an argument
{
    console.log(val);
})
//Output: 1 2 3 4 5
// or we can also write the above code using arrow function as follows:
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(val => console.log(val));
//Output: 1 2 3 4 5
let arr2 = ["pune", "mumbai", "nashik", "nagpur"];
arr2.forEach((val,idx,arr2) => {
    console.log(val.toLocaleUpperCase(),idx,arr2);
})
// Higher Order Fuction/Methode -> A fuction / method which takes another function as an argument/parameter or returns a function is called higher order function/method. forEach is a higher order method because it takes a function as an argument.


// Q1 for a given array of numbers, print square of each value using forEach loop.
let arr3 = [1, 2, 3, 4, 5];
arr3.forEach(val => console.log(val*val));
