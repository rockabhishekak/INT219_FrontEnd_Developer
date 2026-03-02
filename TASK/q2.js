let h2 = document.querySelector('h2');
h2.innerText = h2.innerText+"We are learning JavaScript";
let divs = document.querySelectorAll('.box');
let c = 0;
for(let element of divs){
    element.innerText = `Box ${++c}`;
}