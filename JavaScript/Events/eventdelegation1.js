// Event delegation is a javaScript technique where you attach a single 
// event listerner to a paraent element
// instead of adding event listeners to multiple child elements.
// 
// It works becouse of event bubbling - When an event happens on a child
// elememnt, it "bubbles up" to its parent.


document.getElementById("grandparent").addEventListener("click", (event)=>{
    if(event.target.id === "child"){
        console.log("Child button clicked!");
    } else if(event.target.id === "parent"){
        console.log("Parent div clicked!");
    } else if(event.target.id === "grandparent"){
        console.log("Grandparent div clicked!");
    }
});