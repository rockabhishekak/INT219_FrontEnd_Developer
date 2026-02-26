window //type on consle to see all the properties & methods of window object 
window.console.log("Hello World") //to print something on console
/* DOM -> Document Object Model -> window -> Document -> HTML Elements  -> Head & Body -> All the tags in HTML are called as HTML Elements */
window.document //to access the document object
console.dir(window.document) //to see all the properties & methods of document object
console.log(document.head) //to access head element
console.log(document.body) //to access body element
// Dom manipulation -> changing the content of the document using JavaScript
// console.dir(document.body.style.backgroundColor = "red")


// select an element by its id
let headi = document.getElementById("head");
console.dir(headi);
let tag = document.getElementsByTagName("h1");
console.dir(tag);

// if id does not exist, it will return null

// select a element by its class 
let headings = document.getElementsByClassName("heading-class");
console.log(headings);
console.dir(headings);

let firstele = document.querySelector("p"); //it will select the first element with the tag name "p"
console.log(firstele);

let allclasses = document.querySelectorAll(".heading-class"); //it will select all the elements with the class name "heading-class"
console.log(allclasses);