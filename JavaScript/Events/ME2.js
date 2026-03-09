// Js event handling
// node.event = (function)=>{})
// 1)inline event handling
// 2)event handler as a property of an element
// 3)event listener using addEventListener() method

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("button was clicked");
    let a = 25;
    a++;
    console.log(a);//26
}; //event handler as a property of an element

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("mouse is over the div");
}

// if we have done inline event handling and event handler as well as js evenet handling both together,
// then the event handler as a property of an element will override the inline event handling and only the event handler as a property of an element will work.
// if we have used any event suppose onclick event used oncuechange, the you cannot use it again 
// if you want to again then the new one will overwite.

let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX);
    console.log(evt.clientY);
};

