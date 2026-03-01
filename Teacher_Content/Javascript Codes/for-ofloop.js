/* For-of loop: works on strings and array variables
for(let val of strVar)
{
}  */

let str = "Riya";

let size = 0;
for(let i of str) //iterator -> characters
{
    console.log("i=", i);
    size++;
}
console.log("string size = ", size);
