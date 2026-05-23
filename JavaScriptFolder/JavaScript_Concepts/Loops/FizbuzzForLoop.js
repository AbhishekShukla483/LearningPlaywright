//FizzBuzz with using function
/*let a = 15; 
function fizzBuzz(num)
{
    for(i = 1; i <= num; i ++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log(i + "is FizzBuzz");
        }
        else if (i % 3 === 0)
        {
            console.log(i + "is Fizz");
        }
        else if (i % 5 === 0)
        {
            console.log(i + "is Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}
fizzBuzz(a); */


// FizzBuzz using witout using function

let a = 15; 

for (let i =1; i <= 15; i ++)
{
 if(i % 3 === 0 && i % 5 === 0)
 {
    console.log(i + "is  FizzBuzz");
 }
 else if (i % 3 === 0)
 {
    console.log(i+ "is Fizz");
 }
 else if(i % 5 === 0)
 {
    console.log(i + "is Buzz");
 }
 else
 {
    console.log(i);
 }
}