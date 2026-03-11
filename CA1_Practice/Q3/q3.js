let arr = [2,5,7,5];
let newarr = arr.reduce((pre,curr)=>{
    return pre*curr;
});

console.log(newarr);