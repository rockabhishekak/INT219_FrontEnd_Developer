/* filter method ->
creates a new array of elements that give true for a condition/filter. */

// eg: all even elements from the array
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) =>
{
    return val % 2 == 0;
});
console.log(evenArr);
console.log(arr); //original array is not changed


//Question 1:
//We are given array of marks of students. Filter out the marks of students 
// that scored greater than 90 %.
// marks =[97, 64, 32, 49, 99, 96, 86];



