// Question-> 
// Create a function that simulates a user session tracker.
// Each user should have their own private login counter that 
// increases every time they access the sesssion.
// Function to create a user session with a private login counter

function createUserSession(username) {
    // Initialize the private login counter
    let loginCounter = 0;
    // Return an inner function (closure)
    return function() {
        loginCounter++;
        console.log(`${username} has logged in ${loginCounter} times.`);
    }
}   

//Call create Session and stroe the retuned function (closure ) in user1
// user1 now has access to its own private loginCounter and username
// user1 now holds that function with its own private memory.
const user1 = createUserSession('Alice');

// Each call updates the same preserved loginCount value
// The value persists because of closure.
user1(); // Output: Alice has logged in 1 times.
user1(); // Output: Alice has logged in 2 times.


// Displays internal details of the function, including its closure variables
// Helps to understand how closures work by showing the preserved state of loginCounter
console.dir(user1);

//Think like this:
// createSession("Abhishek") = creating a personal account
//user1 = your ATM card
// Calling user1() = using the card

// The balance (loginCounter) is rememberd!

// Question 1 
// Create a fucntion that returns a closure- based conter function
//Which, when called  repeatedly, increments and remembers the count privately accoss calls.

//Question 2
//Create a function createBankAccount that uses closures to keep
//a private balance and provides deposit (amount) , withodraw(amount) ,
// and getBalance() methods to manage it.


// Answer 1
function createCounter() {
    let count = 0; // Private variable to hold the count
    return function() { // Return a closure that increments and returns the count
        count++;
        return count;
    }
}
const counter = createCounter(); // Create a counter instance
console.log(counter());
console.log(counter());
console.log(counter());

// Answer 2
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable to hold the balance
    return {
        deposit: function(amount) { // Method to deposit money
            balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${balance}`);
        },
        withdraw: function(amount) { // Method to withdraw money
            if (amount > balance) {
                console.log('Insufficient funds');
            } else {
                balance -= amount;
                console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
            }
        },
        getBalance: function() { // Method to get the current balance
            return balance;
        }
    }
}
const myAccount = createBankAccount(100); // Create a bank account with an initial balance
myAccount.deposit(50); // Deposit money
myAccount.withdraw(30);
console.log(`Current Balance: $${myAccount.getBalance()}`); // Get current balance

