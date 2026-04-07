// constructor() method is:
//special method that is automatically invoked by new keyword
// initialize the object
class Toyota{
    constructor(brand,mileage){

        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("car is starting");
    }
    stop(){
        console.log("car is stopping");
    }
}

let fortuner = new Toyota("fortuner",10);//constructor will invoke and create new object
let lexus = new Toyota();//constructor will invoke lexus
lexus.brand = "lexus";
//lexus
console.log(fortuner);
console.log(lexus);
