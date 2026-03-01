/* Loops are used to execute a piece of code again and again */

/* For loop */

//print 1 to 5
for(let count=1; count<=5; count++)
{
    console.log(count);
}

//calculate sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++)
{
    sum += i;
}
console.log("sum = ", sum);

//block scope variable(let)
for(let x=1; x<=5; x++)
{
    console.log("x = ", x);
}
console.log(x); //x=6 but it throws error that x is undefined


/* Infinite loop: A loop that never ends */
// for(let x=1; x>=5; x++)
// {
//     console.log("x = ", x);
// }
// console.log(i);








