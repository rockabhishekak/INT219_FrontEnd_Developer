/* Functions - block of code that performs a specific task, can be invoked whenever needed.
               redundant code - code that is repeated multiple times in a program, can be avoided by using functions. */
           
function myFunction() //Function definition
{
    console.log("Welcome!");
    console.log("We are learning JS")
}
myFunction(); //Function call
myFunction(); //Function call  


function myFunction1(msg) //Function definition with parameter
{
    console.log(msg);
}
myFunction1("I love JS"); //Function call with argument/parameter


//sum of two numbers using function
function sum(a, b) 
{
   console.log(a + b);
}
sum(5, 10);


//sum of two numbers using function with return value
function sum1(x, y)
{
    //Local variable s 
    let s = x + y;
    return s; //after return statement, the function will exit and any code after return will not be executed.
}
let val = sum1(5, 10);
console.log(val);

//Function Parameters ->  are like local variables of function and they have block scope.


//Arrow Functions -> compact way of writing a function
let arrowMul = (x1, y1) => //arrowMul is the name of the function, (x1, y1) are the parameters and => is the arrow function syntax
{
    console.log(x1 * y1);
}
arrowMul(5, 10);


let arrowSum = (a1, b1) =>
{
    return a1 + b1;
}
console.log(arrowSum(5, 10)); 


let printHello = () => console.log("Hello!"); //if there is only one statement in the function, we can omit the curly braces and the return keyword.
printHello();


// Question 1:
// Create a function that takes a string as an argument and returns
// the number of vowels in the string. Use arrow function to perform this task.

let countvowels = (str)=>{
    let count =0;
    let char = str[i].toLowerCase();
    for(let i =0;i<str.length();i++){
        if(char ==='a' || char ==="e" || char ==="i" ||char ==="o" || char==="u"){
            count++;
        }
    }
    return count;
}
console.log(countvowels("helloworld"));


