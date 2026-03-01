/* Operators are used to perform operations on data.

Arithmetic Operators:
+, -, *, /    
Modulus - %
Exponential - **
Increment(unary operator ++)
Decrement(unary operator --)   */

let a = 5;
let b = 2;
let c = a + b;
console.log("a = ", a, "& b = ", b)
console.log("a + b = ", a + b );
//console.log("a + b = ", c);
console.log("a - b = ", a - b );
console.log("a * b = ", a * b );
console.log("a / b = ", a / b );
console.log("a % b = ", a % b );
console.log("a ** b = ", a ** b );

//pre increment
console.log("++a = ", ++a);
//post increment
console.log("a++ = ", a++)
console.log("a = ", a);

//pre decrement
console.log("--a = ", --a);
//post decrement
console.log("a-- = ", a--);
console.log("a = ", a); 


/* Assignment Operators(right to left):
=, +=, -=, *=, %=, **=  */

a += 4; //a = a + 4
console.log("a = ", a);


/* Comparison Operators: returns boolean
Equal to(checks value)- ==
Not equal to - !=
Equal to & type(checks value and datatype both) - ===
Not equal to & type - !==  
>, >=, <, <=  */

let x = 5; //number
let y = "5"; //string -> number in JS
console.log("x == y", x == y); //true
console.log("x === y", x === y); //false
console.log("x != y", x != y); //false
console.log("x !== y", x !== y); //true
let x1 = 5;
let y1 = 3;
console.log("5 > 3", x1 > y1); //true
console.log("5 < 3", x1 < y1); //false


/* Logical Operators: returns boolean
&&, ||, !  */
let x2 = 5;
let y2 = 3;

let cond1 = x2 > y2; //true
let cond2 = x2 === 6; //false
console.log("cond1 && cond2 = ", cond1 && cond2); //false
console.log("cond1 || cond2 = ", cond1 || cond2); //true
//console.log("cond1 || cond2 = ", x2 > y2 || x2 === 6); //true
console.log("!(5<3) = ", !(x2 < y2)); //true










 



