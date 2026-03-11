// Remove duplicate elements using filter
let arr = [1,2,3,2,4,5,3,6];
let newarr = arr.filter((Val, index , arr)=>{
    return arr.indexOf(Val) === index;
});
console.log(newarr);