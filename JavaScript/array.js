let marks = [97,82,75,64,36];
console.log(marks);
console.log(marks.length)//property
typeof marks; // object type
console.log(marks[0]);
console.log(marks[2]);
console.log(marks[5]); // undefined
marks[2] = 76;
let heroes = ["iroman","thor","hulk","spiderman","antman"];
for(let i=0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}
// for of loop
for(let hero of heroes)
{
    console.log(hero);
}
// For a given array with marks of students
let students = [85,97,44,37,76,60];
let avg = 0;
for(let i=0;i<6;i++)
{
    avg+=students[i];
}
console.log(avg/students.length);

// for a given array with prices of 6 items 
let items = [240,645,300,900,50];
for(let i=0;i<items.length-1;i++)
{
    items[i] = items[i]-(0.1*items[i]);
}
console.log(items);

