// Check if something is an array

/* let result =Array.isArray([1, 2, 3]); // true
console.log(result);
let result2 = Array.isArray("hello"); // false
console.log(result2);

//every and sonme

let a = [80, 90, 100].every(score => score >= 80); // true
console.log(a); 
let b = [80, 70, 100].every(score => score >= 80); // false
console.log(b); */

// playwright
//[200, 201, 202].every(statusCode => statusCode > 200) // false

let r = [180, 90, 100, 120].some(score => score >100); // true
console.log(r);
let s = [180, 90, 100, 120].some(score => score < 90); // false
console.log(s);
