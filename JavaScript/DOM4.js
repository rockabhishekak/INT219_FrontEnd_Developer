//create a new element and set the position

// Insert element
// 1) Create Element
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

// 2) Append Method:
// node.append(el) - adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, append() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).
let div = document.querySelector("div");
div.append(newBtn); // this will add the button to the div

// 3) Prepend Method :
// node.prepend(el)- adds a node to the beginning of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, prepend() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before prepending it to some other node).
// let div = document.querySelector("div");
// div.prepend(newBtn);

// 4) Before and After Method :
// node.before(el) - inserts a node before the reference node as a child of the current node's parent.
// node.after(el) - inserts a node after the reference node as a child of the current node's parent.
// div.before(newBtn);
// div.after(newBtn);

// apendChild()- adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).
// div.removeChild(newBtn);
div.appendChild(newBtn); // this will add the button to the div
// difference between append and appendChild is that append can take string as well as node but appendChild can only take node. Also append can take multiple arguments but appendChild can only take one argument.


// Q1: Create a new button element . Give it a text "click me" , background color as red
// & text color as white.
// Insert the button as the first element inside the body tag.
let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.body.prepend(btn);

// Q2 : Create a <p> tag in html, give it a class & some styling . Now create a new 
// Class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwite the class name when you add a new one?
// Solve thi sproblem using classList property.
let p = document.querySelector("p");
// p.className = "newClass1";
p.classList.add("newClass");
console.log(p.className);
