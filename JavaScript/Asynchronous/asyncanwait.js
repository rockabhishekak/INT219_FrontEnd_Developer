// Async-await=>
    // Async functions always return a promise.


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(dataId === 3){
                reject("error: data not found"+dataId);
            }else{
                console.log("data", dataId);
                resolve();  
            }
        }, 3000);
    });
}
async function fetchData() {
    try {
        await getData(1);
        console.log("data 1 received");
        await getData(2);
        console.log("data 2 received");
        await getData(3);
        console.log("data 3 received");
        await getData(4);
    }
    catch (error) {
        console.error(error);
    }
}
fetchData();// call the function to start



function getData(dataId) {
    return new Promise((resolve, reject) => {});
}
async function fetchData() {
    await getData(1);
    console.log("data 1 received");
    await getData(2);
    console.log("data 2 received");
    await getData(3);
    console.log("data 3 received");
    await getData(4);
} 
fetchData(); // call the function to start
// Each await getData(id) .catch(...) handles its own error.
// Prevents the function from stopping and 
//Exicution continoues even if one step fails.





// Question1 
// In a weather forecasting appllication, demonstrate asynchronous execution
// Using setTimeout , promises , and async/await to simulate
// fetching weather data , processing the data, and displaying the weather report.



// Question2
// In a ride booking application (like cab service), demonstrate asynchronous execution using
// setTimeout, Promises, and asysnc/await to simulate driver search,
// ride confirmation, and trip completion.


