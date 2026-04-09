// Question 1 
// You are creating a website for your college. Create a class User with 2 properties name and email.
// It has a method called ViewData() that allows user to view website data.
// create a new class called admin which inherits from User.
// Add a new method called editData() to admin that allows it to 
// edit website data.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    ViewData() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log(`Admin ${this.name} is editing data...`);

    }
}

// Example usage:
const user1 = new User("John Doe", "john.doe@example.com");
user1.ViewData();

const admin1 = new Admin("Jane Smith", "jane.smith@example.com");
admin1.ViewData();
admin1.editData();

