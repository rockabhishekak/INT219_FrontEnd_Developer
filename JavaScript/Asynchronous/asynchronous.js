// Sync in Js- >
// Synchronous: Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits fo rthe previous instruction to complete its execution.
// Asynchronous: Due to synchronous programming, sometimes imp instructions get blocked 
// due to some previous instructions, which causes a delay in the Ui.
// Aysnchrounous code execution allows to execute next instruction immediately and doesn't block the flow.

//Asynchronous Programming->
console.log("one");
console.log("two");
// SetTime is a built-in funciton in javaScript that allows you to execute a funtion 
// setTimeOut(callback, delay) takes two parameters, a callback function and a delay in milliseconds.
setTimeout(() => {
    console.log("hello");
}, 4000);//timeout:4s = 4000ms
console.log("three");
console.log("four");

