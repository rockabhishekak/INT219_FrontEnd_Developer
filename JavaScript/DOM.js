/*


*/


window //type on consle to see all the properties & methods of window object 
window.console.log("Hello World") //to print something on console
/* DOM -> Document Object Model -> window -> Document -> HTML Elements  -> Head & Body -> All the tags in HTML are called as HTML Elements */
window.document //to access the document object
console.dir(window.document) //to see all the properties & methods of document object
console.log(document.head) //to access head element
console.log(document.body) //to access body element
console.log(document.title) //to access title of the document
// Dom manipulation -> changing the content of the document using JavaScript
// console.dir(document.body.style.backgroundColor = "red")


// select an element by its id
document.getElementById("heading");
console.dir(heading);
document.getElementById("chinmay");
console.dir();
// if id does not exist, it will return null

// select a element by its class 

// document.getElementsByClassName("heading-class");
// console.dir(heading-Class);