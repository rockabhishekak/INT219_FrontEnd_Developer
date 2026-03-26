// 1. Bubbling phase :- Events propagate from the target element up to the root of the DOM tree
// 2. Capturing phase :- Events propagate from the root of the DOM tree down to the target element
// 3. Target phase :- Events are handled at the target element
// Example of event propagation
// addeventListener(click, function, false) // false for bubbling phase, true for capturing phase

// Bubbling phase
// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("Grandparent clicked");
// });

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("Parent clicked");
// }, false);

// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("Child clicked");
//     // e.stopPropagation(); // Stop the event from propagating to parent elements
// }, false);

// Capturing phase-
// document.getElementById("grandparent").addEventListener("click",(e)=>{
//     console.log("Grandparent clicked");
//     // e.stopImmediatePropagation();
// }, true);

// document.getElementById("parent").addEventListener("click",(e)=>{
//     console.log("Parent clicked");
//     // e.stopImmediatePropagation();
// }, true);

// document.getElementById("child").addEventListener("click",(e)=>{
//     console.log("Child clicked");
//     // e.stopPropagation(); // Stop the event from propagating to parent elements
//     // e.stopImmediatePropagation();
// }, true);

// Flow of event propogation - Capturing -> Target -> Bubbling
document.getElementById("grandparent").addEventListener("click",(e)=>{
    console.log("Grandparent clicked");
}, true);
document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("Parent clicked");
}, false);
document.getElementById("child").addEventListener("click",(e)=>{
    console.log("Child clicked");
}, true);



