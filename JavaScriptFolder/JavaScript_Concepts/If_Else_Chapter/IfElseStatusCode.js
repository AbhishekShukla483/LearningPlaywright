// Using function with 'return'

function testResult(actual, expected)
{
    if(actual === expected)
    {
        console.log("Test is passed");
        console.log("actual:" ,actual);
        console.log("Expected:" ,expected);

        return true;
    }
    else
    {
        console.log("Test is failed");
        console.log("actual:" ,actual);
        console.log("expected:" ,expected);

        return false;
    }
}


//let actual1 = 5;
//let expected1 = 8;

testResult(5, 5);




//Without using function

/*let actual = 10;
let expected = 10;

if(actual === expected)
{
    console.log("Test is passed");
    console.log("Actual result: ", actual);
    console.log("Expected result: ", expected);
}
else
{
    console.log("Test is failed");
    console.log("Actual result: " ,actual);
    console.log("Expected result: " ,expected); 
} */
