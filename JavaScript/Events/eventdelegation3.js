let form1 = document.querySelector('#f1');
let addinput1 = document.querySelector('#addtask');
let tasklist1 = document.querySelector('#tasklist');
form1.addEventListener("submit",(evt)=>{
    evt.preventDefault();//method that stops the browser's default behavior for an event. In this case, it prevents the form from being submitted and the page from reloading.
    let tasktext = addinput1.value.trim();
    if(tasktext == ''){
        alert("please enter a task");
        return;
    }
    let elementlist = document.createElement("li");
    elementlist.textContent = tasktext;
    addinput1.value = '';//clears the input box;
    let elementdelete = document.createElement("button");
    elementdelete.innerHTML = "Delete";
    elementdelete.className = "deletebtn";
    elementlist.appendChild(elementdelete);
    tasklist1.appendChild(elementlist);
});

tasklist1.addEventListener("click",(evt)=>{
    if(evt.target.classList.contains("deletebtn")){
        let elementlist = evt.target.parentElement;
        tasklist1.removeChild(elementlist);
    }
});

