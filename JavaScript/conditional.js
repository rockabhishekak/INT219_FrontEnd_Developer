let age = 18;
if(age >= 18)
{
    console.log("you can vote");
}
else{
    console,log("Yor can't vote");
}

let mode = "light";
let color;
if(mode === "dark")
{
    color = "black";
}
else if(mode === "blue"){
    color = "blue";
}
else{
    color = "white";
}
console.log(color);
// Ternary operators 
result = age >=18 ? "adult":"not adult";
console.log(result);
age >= 18 ? console.log("adult"):console.log("not adult");

// Switch case
let day=2;
switch(day){
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
    default:
        console.log("Weekend");
        break;
}
