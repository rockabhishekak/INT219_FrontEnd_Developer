const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');
// use call back function to update the greeting message as the user types in the input field
nameInput.addEventListener('input', ()=>{    
    greeting.textContent = `Hello, ${nameInput.value}!`;
});