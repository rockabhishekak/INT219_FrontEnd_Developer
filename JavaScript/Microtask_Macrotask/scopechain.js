// This code shows how nested fucntion can access variables from:

//Their own scope 
// Their parent function's scope
// The global scope 

let globalvar = "I'm global";
function outer() {
    let outerVar = "I' m outerr";

    // console.log(innerVar); //Error(outer cannot access inner's variables
    // scope chain only goes upward, not downward)
    function inner() {
        let inner()
        {
            let innerVar = "I'm inner";
            console.log(innerVar);//own scope (found immediately)
            console.log(outerVar);//outer scope (found in parent)
            console.log(globalvar);//global scope (found in global)
        }
        inner();
    }
}

outer();
//Scope chain for inner();
// inner's Variable Enviroment - > outer's Variable Environment - > Global Varialbe Environment
// The scope chain is the chain of lexical envirom=nments used to resolve variables.

// When a variable is used, JavaScript searches in this order:
// 1. In the current(local) scope
// 2. Then in the outer(parent) scope
// 3. Then ini the global scope

//Lexical scope-
// Means scope is decided by where code is written, not where it is called.

//Each funtion creates its own scope-
//And has access to its outer (parent) scope.

// Scope chain works upward only, not downwards.

// Access Rules-
//