/* Variables are containers for data. */

fullName = "Riya Sharma";
console.log(fullName);
// console.log("fullName");

age = 24;
console.log(age);

price = 99.99;
console.log(price);

x = null; /* value is known that it is null */
console.log(x);

y=undefined; /* value is not known it is undefined */
console.log(y);

isfollow = false; /* boolean - true or false */
console.log(isfollow);

fullName = 25; /* Dynamically Typed */


/* Variable Rules :
1)Variable names are case sensitive; i.e. "a" & "A" is different.
2)Only letters, digits, underscore and $ is allowed. (not even space).
3)Only a letter, underscore or $ should be 1st character.
4)Reserved words cannot be variable names. */


/* Keywords used to declare variables :
1)var: variable can be re-declared & updated. A global scope variable. Old method not good to use, now ,let and const used.
2)let: variable cannot be re-declared but can be updated. A block scope variable.
3)const: variable cannot be re-declared or updated. A block scope variable. */

let name = "Ritu";
console.log(name);
name = "Tina"
console.log(name);

let a;
console.log(a); /*By default if no value is assigned to the let variable it is declared as undefined */

const PI = 3.14;
console.log(PI);

//const b; throws error bcoz const variable has to be initialized with value always




