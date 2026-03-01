/*Template Literals: use back-ticks (``) rather than the quotes ("") to define a string, 
with strings you can create variables also */

let obj = 
{
    item: "pen",
    price: 10,
};
/* String interpolation - to create strings by doing substitution of placeholders. */
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//console.log("The cost of", obj.item, "is", obj.price, "rupees");
//console.log(output);


let specialString = `This is a template literal`;
console.log(typeof specialString);


/* Escape Characters: \n(new line), \t(tab space)  */