// Importing Named Exports
// loaded qt the beginning (compile time) using import... from
import{ add, subtract, name, greet } from './module1.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3));
console.log(name); // Output: John
greet(); // Output: Hello!

// Namespace import (Best for grouping all exports):groups everything under a single namespace object
// That object is named StringUtils.

import * as StringUtils from './module1.js';
console.log(StringUtils.toUpperCase('hello')); // Output: HELLO
console.log(StringUtils.toLowerCase('WORLD')); // Output: world
console.log(StringUtils.capitalize('javascript')); // Output: Javascript
