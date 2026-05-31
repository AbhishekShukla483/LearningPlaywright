let results = ["pass","fail","pass","error","fail"];
results.indexOf("fail"); //1
results.indexOf("skip"); //-1

results.includes("pass"); //true
results.includes("skip"); //false

//return first matching element
let nums = [10,25,30,45]
let r= nums.find(x=>x>10); //25,30,45
console.log(r);
//return fist matching index
let s= nums.findIndex(n=>n>20);
console.log(s);

//return last matching element 
let t= nums.findLast(n=>n>20);
console.log(t);

//return last matching index
let u= nums.findLastIndex(n=>n>20);
console.log(u);

