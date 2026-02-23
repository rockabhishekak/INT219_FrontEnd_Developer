// eg: all even elements in an array
let arr = [1, 2, 3, 4, 5];
let evenArr = arr.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);
//Output: [2, 4]
// Q1 using filter method, print above 90 % marks from the given array of marks.
let marks = [80, 90, 95, 85, 92];
let above90Marks = marks.filter(val => val>90);
console.log(above90Marks);
//Output: [95, 92]