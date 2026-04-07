//class is a program-code temple for creating objects.
// Those objects will have some state(variables ) & behavior(functions). inside it.
// Class MyClass{
    // constructor(){..}
    // method1(){..}
    // method2(){..}

// }
//let obj = new MyClass();

class Toyota{
    start(){
        console.log("car is starting");
    }
    stop(){
        console.log("car is stopping");
    }
    setBrand(brand){
        this.brand = brand;//brand with this keyword is called instance variable(property) of the class Toyota
        // brand after  = is the variable that is passed as parameter to the method
    }
}
let car1 = new Toyota();
car1.start();
car1.setBrand("corolla");
console.log(car1.brand);
console.log(car1);