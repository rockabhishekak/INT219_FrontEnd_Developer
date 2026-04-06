// A javaScript object is an entity having state and behavior. (properties and methods).
// JS objects have a  special internal hidden property called prototype.
// It is a reference to an object.
// Prototype is the actual mechanism in javascript that makes inheritance possible.
// It enables inheritance, meaning one object can use properties and methods of another object.
// Objects can access properties from their prototype.
// We can set prototype using __proto__ 
const student = {
    fullName : "riya sharma",
    marks: 94.4,
    printMarks: function(){
        console.log("marks = ",this.marks);//this refer to the current object , student
    },

};


const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const karan = {
    salary: 5000,
};
const karan1 = {
    salary : 40000,
};
karan._proto_ = employee; //set the prototype
// karan
// karan.calcTax(); //accessing method from prototype
// karan1._proto_ = employee;

// If object & prototype have same method, then object's method will be used.
const employee1 = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const karan2 = {
    salary: 5000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};
karan2._proto_ = employee1;
karan2.calcTax(); // tax rate is 20% because karan2 has its own method calcTax, it will use that instead of prototype's method.
