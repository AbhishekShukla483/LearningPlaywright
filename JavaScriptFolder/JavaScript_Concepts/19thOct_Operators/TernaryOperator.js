let Rajkumar_age = 18; 
let result = Rajkumar_age >=18 ? "Rajkumar is eligible for voting" : "Rajkumar is not eligible for voting";
console.log(result); 

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "Test Passed" : "Test Failed";
console.log(testResult);

let enviroment = "staging";
let baseUrl = enviroment === "production" ? "https://www.production.com" : "https://www.staging.com";
console.log(baseUrl);

let isCI = true;
let buildStatus = isCI ? "Running in CI enviroment" : "Running in local enviroment";
console.log("Build is " + buildStatus);

let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <=sla ? "SLA met" : "SLA not met";
console.log(`Response time: ${responseTime}ms - ${slaStatus}`);


let condition = true;
let isArihantDubeyisFreeloader = condition ? "true" : "false";
console.log(isArihantDubeyisFreeloader);

/*let age = 18;
let meWatchMovie = age >= 18 ? "You can watch the movie" : "You cannot watch the Movie";
console.log(meWatchMovie); */

let amount = 99999;
let buyPs6 = amount >= 50000 ? "You can buy Ps6" : "You cannot buy Ps6";
console.log(buyPs6);


let age = 18;

let is_pramod_goa = age > 18
  ? "Yes, he will go"
  : "else he will not go";

console.log(is_pramod_goa);

let Aman_age = 29;
let AmanWantsToGoTotheParty = Aman_age > 18 ?(Aman_age >26 ? "Drink" : "No Drink") : "No Party";
console.log(AmanWantsToGoTotheParty);

let statusCode = 201;
let category = statusCode < 300 ? "Success" : 
                  statusCode < 400 ? "Redirection" 
                  : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status code: ${statusCode} : ${category}`);

let temp = 10;
let feel = temp >=40 ? "Very hot"
: temp >= 30 ? "Hot"
: temp >= 20 ? "Warm"
: temp >= 10 ? "Cool" : "Cold";
//console.log(`Temperature: ${temp}°C - It feels ${feel}`);
//console.log("Temperature: " + temp + "°C - It feels " + feel);
console.log("Temperature: " , temp , " | Feels: ", feel);
