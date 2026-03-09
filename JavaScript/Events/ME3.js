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
