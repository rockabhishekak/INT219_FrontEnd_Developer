/* map method -> 
creates a new array with the results of some operation. The value its callback returns 
are used to form a new array.
arr.map( callBackFnx(value, idx, array) ) */

let nums = [67, 52, 39];
let newArr = nums.map((val)=>
{
    return val;
});
console.log(newArr); 
console.log(nums);


let nums2 = [67, 52, 39];
let newArr2 = nums.map(val => val*val);
console.log(newArr2);
console.log(nums2); // original array is not changed by map method. It creates a new array.

