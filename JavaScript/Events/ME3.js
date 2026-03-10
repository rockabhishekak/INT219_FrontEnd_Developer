/* Event listener -> allows multiple events handlers for the same event.
node.addEventListener(event, callback)  //call back is the event handler
// node.removeEventListener(event, callback) 
// Note: The callback reference should be same to remove*/

let btn1 = document.getElementById("btn1");//if using querySelector,use #btn1
btn1.addEventListener("click",(evt)=>{
    console.log("Button 1 clicked handler1");
})
btn1.addEventListener("click",()=>{
    console.log("Button 1 clicked handler2");
})
const handler3 = ()=>{
    console.log("Button 1 clicked handler3");
}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
    console.log("Button 1 clicked handler4");
})
// btn1.removeEventListener("click",()=>{  //This will not work because the reference of the callback is different
//     console.log("Button 1 clicked handler4");
// });
btn1.removeEventListener("click",handler3); //This will work because the reference of the callback is same

// Q1 :
// Create a toggle button that changes the screen to dark- mode then
// clicked & light - mode when clicked again. (Hint: use classList.toggle() method)
// let toggleBtn = document.getElementById("toggleBtn");
// toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     // Conditional statement to change the button text based on the current mode
//     // if (document.body.classList.contains("dark-mode")) {
//     //     toggleBtn.textContent = "Switch to Light Mode";
//     // } else {
//     //     toggleBtn.textContent = "Switch to Dark Mode";
//     // }

// });

// Methode 2
let toggleBtn2 = document.getElementById("toggleBtn");
let count = 0;
toggleBtn2.addEventListener("click", () => {
    if (count % 2 == 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        count++;
    } else {
        document.body.style.backgroundColor = "white";
        count++;
        document.body.style.color = "black";
    }
});


