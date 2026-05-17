console.log(0 == ""); // ==> loose comparision
console.log(0 == "0"); // ===> loose comparision
console.log(0 === "0"); // ===> strict comparision
console.log("" == "0"); // ==> loose comparision (transitivity broken!)
console.log(0 == false); // ==> loose comparision
console.log(null == 0); // ==> loose comparision
console.log(null == undefined); // == loose comparision
console.log(null === undefined); // ==> strict comparision
console.log(5 != "5"); // ==> loose comparision
console.log(5 !== "5"); // ==> strict comparision






