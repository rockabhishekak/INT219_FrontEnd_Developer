let div = document.querySelector("div");
console.log(div);
div.innerText //only text content;
// div.innerText = "New Heading"; //change text content
console.log(div.innerHTML); //text content + html tags;
// div.innerHTML = "<h1>inner div</h1>"; //change text content + html tags;

let heading = document.querySelector("h1");
console.log(heading.textContent); //only text content;
heading.textContent = "New Heading"; //change text content;


// Q1:
// Create a h2 heading element with text - "Hello".
// Append "We are learing JS" to this text using javaScript.
let h2 = document.createElement("h2");
h2.textContent = "Hello";
h2.textContent += " We are learning JS";
document.body.appendChild(h2);