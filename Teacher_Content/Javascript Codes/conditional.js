/* Conditional Statements */

/* if statement */
let age = 20;
if(age >= 18)
{
    console.log("you can vote");
}
if(age < 18)
{
    console.log("you can't vote");
}


/* if-else statement */
let mode = "blue";
let color;

if(mode === "dark")
{
    color = "black";
}
else
{
    color = "white"
}
console.log(color);


/* if-else-if-else statement */
if (mode === "dark")
{
    color = "black";
}
else if (mode === "blue")
{
    color = "blue";
}
else if (mode === "pink")
{
    color = "pink";
}
else
{
    color = "white";
}
console.log(color);


/* Ternary Operators(simpler, compact if-else): works on 3 operands
condition? true output: false output */

result = age >= 18 ? "adult" : "not adult";
console.log(result);
age >= 18 ? console.log("adult") : console.log("not adult");


/* Switch Case */

let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}





