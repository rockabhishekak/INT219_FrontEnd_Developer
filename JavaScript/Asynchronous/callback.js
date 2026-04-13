// Callbacks-> A callback is a function passed an argument to another function.




// Synchronous Callback->
function sum(a, b) {
    return a + b;
}
function calculate(a, b, sumcallback) {
    return sumcallback(a, b);
}
const result = calculate(5, 10, sum);//sum is the callback function here always passed without parenthises
// because we don't want to execute it immediately, we want to pass the reference of
// the function to the calculator funtion
// or callback function with arrow funtion can also be used.
const hello = ()=>{
    console.log("hello");
}
setTimeout(hello, 2000);//hello is the callback function here
console.log(result);


// Asynchronous Callback->

// function getData(dataid){
//     setTimeout(() => {
//         console.log("data", dataid);
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);


// All three getdata() calls are executed  immediately, one after another.
// Each call sets a setTimeout of 2 sec.
// Since they all start at almost the same time, their timers run in parallel.
// start all-> wait -> all execute together.

// If you want sequential output(1->2->3 with delay)
// Wait -> date1 -> wait -> data2 -> wait -> data3
// Then we use nested callbacks.

// Callback Hell->
// Nested callbacks stacked below one another forming a pyramid structure.()


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        getNextData();
    }, 2000);
}

getData(1, () => {
    console.log("data 1 received");
    getData(2, () => {
        console.log("data 2 received");
        getData(3, () => {
            console.log("data 3 received");
            getData(4);
        });
    });
});


//Promises->
// Promises is for "eventual" completion of task. It is an object in js.
// It is a solution to callback hell. It allows us to write asynchronous code in a more synchronous way.
// let promise = new Promise(resove,reject) => {...}
// resolve-> when the promise is fulfilled successfully
// reject-> when the promise is rejected with an error
// 3 states of promise-> pending, fulfilled(resolve), rejected
let promise = new Promise((resolve, reject) => {
    // console.log("promise started");//pending state
    // resolve("promise resolved successfully");//fulfilled state
    // reject("promise rejected with an error");//rejected state
});


// .then() & .catch() methods->
//promis.then(res)=>{....}) runs when the promise is fulfilled(resolved)
// promise.catch(err)=>{....}) runs when the promise is rejected with an error

// promise chainning->
//technique where we can chain multiple .then() methods together
// to handle the result of a promise in a squential manner.
// Each .then() method returns a new promise, allowing us to perform additional 
// operations on the result oof the previous promise.

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dataId === 3){
                reject("error: data not found");
            }else{
                console.log("data", dataId);
                resolve();
            }
        }, 3000);
    });
}
getData(1)
    .then(() => {
        console.log("data 1 received"); 
        return getData(2);
    })
    .then(() => {
        console.log("data 2 received");
        return getData(3);
    })
    .then(() => {
        console.log("data 3 received");
    })
    .catch((error) => {
        console.error(error);
    });

