/* map metho-> 
creates a new array with the results of calling a provided function on every element in the calling array. */
let nums = [1, 2, 3, 4, 5];
let newArr = nums.map((val)=> {
    return val;
});
console.log(newArr);
//Output: [1, 2, 3, 4, 5]
// or we can also write the above code using arrow function as follows:
// Q1 for a given array of numbers, print square of each value using map method.
let nums1 = [1, 2, 3, 4, 5];
let newArr1 = nums1.map(val => val*val);
console.log(newArr1);
console.log(nums1);
//Output: [1, 4, 9, 16, 25]
// Q2 for a given array of strings, print the length of each string using map method.
let strArr = ["pune", "mumbai", "nashik", "nagpur"];
let newStrArr = strArr.map(val => val.length);
console.log(newStrArr);
//Output: [4, 6, 6, 6]