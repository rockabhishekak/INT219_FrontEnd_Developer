/* String Methods(Functions): built-in functions to manipulate a string 
Strings are immutable. */

/* str.toUpperCase() */

let str = "Hello world";
let newStr = str.toUpperCase(); /* write on console */
console.log(str); /* original string it prints */
console.log(newStr); /* new string it prints */


/* str.toLowerCase() */


/* str.trim(): to remove whitespaces from starting and ending only */

let str2 = "      Hi all    ";
console.log(str2.trim());


/* str.slice(start,end): returns part of string and end index is non-inclusive. */

let str3 = "hello";
console.log(str3.slice(0,3));
console.log(str3.slice(1));


/* str1.concat(str2): joins str2 with str1 */

let stri = "hello";
let stri2 = "world";

let res = stri.concat(stri2);
console.log(res);
let res1 = stri2.concat(stri);
console.log(res1);

let res2 = stri + stri2; /* concatenation operator */
console.log(res2);


/* str.replace(searchVal, newVal) */

let stri3 = "hello";
console.log(stri3.replace("l", "m"));
console.log(stri3.replaceAll("lo", "p"));


/* str.charAt(idx); */

let stri4 = "IloveJS";
console.log(stri4.charAt(4));

