// Module Export-> used to make functions/variables available to other files

// Named Export:
// Allow multiple functions/variables to be exported.
// Must imprt with same names
export function add(a, b) {
    return a + b;
}   
export function subtract(a, b) {
    return a - b;
}


export const name = 'John';

export function greet() {
    console.log('Hello!');
}


// Default Export(Optional):
// A module can have only one default export.
//can imort with any name.
// uncomment below if you want to export everything as default

// export default {add, subtract};

// A namespace object is an object that contains all exports of a 
// module and is created using import  *as name.
// Multiple name exports
export function toUpperCase(str) {
    return str.toUpperCase();
}

export function toLowerCase(str) {
    return str.toLowerCase();
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
