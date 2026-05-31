let tests = ["login","checkout","search"];
//Iterate-- go from one to another
for(let i=0; i<tests.length; i++)
{
   console.log(tests[i]);
}

console.log("-----");

//Cleanest way

for(test of tests)
{
    console.log(test);
}

tests.forEach((test,index)=>{console.log(test,index)});