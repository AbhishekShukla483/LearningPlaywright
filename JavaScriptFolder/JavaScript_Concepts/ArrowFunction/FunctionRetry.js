/* function retry(testName, maxRetries=1, delay=500)
{
    console.log(`Retrying ${testName} up to ${maxRetries} times with ${delay} ms delay`);
}
retry("Login Test");
retry("Registration Test",2,1000); */


/* function runTest(name, status, duration)
{
    return `${name}: --> ${status} (${duration}ms)`;
}
const r = runTest("Login", "Pass", "320");
console.log(r); */

/*function logResult(suitName, ...results) {
    console.log(suitName);
    console.log(results);
}
logResult("Login Test",1 ,2 ,3,"Abhishek Shukla", "Diksha Rane"); 
 logResult("Ok", "Server-error"); */

 function logTest(name) {
    console.log(`Running: ${name}`);
    
 }
  let result = logTest("Abhishek Diksha");
  console.log(result);



