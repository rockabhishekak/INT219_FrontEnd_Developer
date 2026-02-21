function myFuntion()//Function definition
{
    console.log("Welcome!");
    console.log("We are learning JS");

}
myFuntion();
myFuntion();

function myfun(msg)
{
    console.log(msg);
}
myfun("I love JS");

function sum(a,b)
{
    console.log(a+b);
}
sum(5,10);
function sum1(x,y)
{
    return x+y;
}
let summ = sum1(5,9);
console.log(summ);
let arrowMul = (X1,Y1) =>
{
    console.log(X1*Y1);
}
arrowMul(5,10);
let arrowsum = (a,b) =>{
    return a+b;
}
console.log(arrowsum(5,6));

let printHello = () => console.log("Hello!");
printHello();
// Questions 1:
// Create a function that takes a string as an argument and returns
// The number of vowels in the string. Use arrow function to perform this task.
let count = 0;
let hello = (str) =>
{
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
        {
            count++;
        }
    }
    return count;
    
}
console.log(hello("Hello World"));