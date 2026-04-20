//microtask and macrotask
console.log("Start");
setTimeout(()=>{
    console.log("Timeout");//Macrotask
},0);

Promise.resolve().then(()=>{
    console.log("Promise");//microtask
});

console.log("End");

// Start - > runs immediately
// SetTimeout-> goes to Macrotask queue
// Promise. then-> goes to microtask queue
// End-> runs

// Event loop:
// First -> Execute All Microtasks
// Then -> Execute ONE Macrotask


// After the current synchronous code finishes:
// First empty Microtask Queue -> Then start Macrotasks

//After each marotask execution:
// Execution