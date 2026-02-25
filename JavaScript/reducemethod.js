/* reduce methode -> performs some operations & reduces it to a single value */
// eg : sum of all the elements in an array
let arr = [1, 2, 3, 4, 5];
const output = arr.reduce((acc, val) => {
    return acc + val;// acc is the accumulated value which is returned by the function in each iteration and val is the current value at each index of the array. The second argument 0 is the initial value of acc. If we don't provide the initial value, then the first element of the array will be taken as the initial value of acc and the iteration will start from the second element of the array.
});
console.log(output);
//Output: 15
// eg fine the maximum value in an array
let arr1 = [1, 2, 3, 4, 5];
const max = arr1.reduce((acc, val) => {
    return acc > val ? acc : val;// acc is the maximum value which is returned by the function in each iteration and val is the current value at each index of the array. The second argument 0 is the initial value of acc. If we don't provide the initial value, then the first element of the array will be taken as the initial value of acc and the iteration will start from the second element of the array.
});
console.log(max);

// Q1 take a number n as input from the user . Create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate the product of all numbers(means factorial) in the array.
let n = prompt("Enter a number: ");
let arr2 = [];
for(let i=1; i<=n; i++){
    arr2.push(i);
}  
const sum = arr2.reduce((acc, val) => {
    return acc + val;
});
console.log("Sum of all numbers from 1 to " + n + " is: " + sum);
const product = arr2.reduce((acc, val) => {
    return acc * val;
});
console.log("Product of all numbers from 1 to " + n + " is: " + product);
