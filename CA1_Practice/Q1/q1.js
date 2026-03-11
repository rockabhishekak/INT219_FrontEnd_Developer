// Write a javaScript program that defines a function to check wehther a given number is a prime number or not.
function isprime(num)
{
    if(num <= 1)
    {
        return "Not a prime number";
    }
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
        {
            return "not prime number";
        }
    }
    return "Prime number"
}


console.log(isprime(2));

let palindrome = (str)=>{

let reverse = str.split("").reverse().join("");

return str === reverse;

}



console.log(palindrome("madam"));



// even odd
let arr = [2,5,4,7,9,3,7]
let even = arr.filter(num=>num % 2 === 0);
console.log(even);