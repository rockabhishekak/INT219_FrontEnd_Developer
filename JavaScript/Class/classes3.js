//Inheritance is an OOPs concept of passing down properties and methods
// Fro parent class to child class.
// It uses prototype internally, used for code resuse and hierarchy.



class Person {
    eat() {
        console.log("Eating...");
    }
    sleep() {
        console.log("Sleeping...");
    }

}
class Engineer extends Person {
    work() {
        console.log("Working...");
    }
}
let riaobj = new Engineer();
// riaobj.eat();
// riaobj.sleep();
// riaobj.work();
// riaobj;


// If child & parent have same method,
// Child's method will be used .[Method Overriding]
class Person1 {
    eating() {
        console.log("Eating...");
    }
    sleeping() {
        console.log("Sleeping...");
    }
    working() {
        console.log("Working...");
    }
}

class Engineer1 extends Person1 {
    working() {
        console.log("Coding...");
    }
}

let riaobj1 = new Engineer1();
riaobj1.eating();
riaobj1.sleeping();
riaobj1.working();

// If we want to call parent class method in child class, we can use super keyword.
class Person2 {
    eating() {
        console.log("Eating...");
    }
    sleeping() {
        console.log("Sleeping...");
    }
    working() {
        console.log("Working...");
    }
}

class Engineer2 extends Person2 {
    working() {
        super.working();
        console.log("Coding...");
    }
}
let riaobj2 = new Engineer2();
riaobj2.eating();
riaobj2.sleeping();
riaobj2.working();