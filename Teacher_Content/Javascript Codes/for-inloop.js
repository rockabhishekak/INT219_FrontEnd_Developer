/* For-in loop: returns keys from key-value pair, works on objects */

let student =
{
    name: "Rahul kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student)
{
    console.log("key=",key, "value=", student[key]);
}

