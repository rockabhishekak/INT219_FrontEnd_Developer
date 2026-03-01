/* Primitive Datatypes(7): built-in data types, represent single values and are not mutable.
Number,String,Boolean,Undefined, Null,BigInt, Symbol */

let age = 24;
typeof age; /* number type */
console.log(typeof age); 
let price = 100.5;
typeof price; /* number type */

let fullName = "Riya Sharma"
typeof fullName; /* string type */

isFollow = true;
typeof isFollow; /* boolean type */

let x;
typeof x; /* undefined type */

let y=null;
typeof y; /* null type */

let z= BigInt("123")
typeof z; /* bigint type */

let a = Symbol("Hello!!");
typeof a; /* symbol type */


/* Non-Primitive Datatypes: reference types, and are mutable.
Objects(Arrays,Functions) 

Object - collection of values(key : value pair) */

const student = {
    fullName : "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
};
typeof student; /* object type */
console.log(student.age);
// console.log(student["age"]);
student["age"] = student["age"] + 1; /* for const object keys you are able to update the value, for normal const variables you can't update */
console.log(student["age"]);
student.cgpa = 10;
console.log(student.cgpa);


