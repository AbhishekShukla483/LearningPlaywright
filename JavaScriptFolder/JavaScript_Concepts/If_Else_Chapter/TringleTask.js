let a = 30;
let b = 60;
let c = 30;

if(a === b && b === c && a === c)
{
    console.log("It is an equilateral tringle");
}
else if (a === c && b !== c && a === c)
{
  console.log("It is isosceles tringle");
}
else
{
    console.log("It is a scalene tringle");
}