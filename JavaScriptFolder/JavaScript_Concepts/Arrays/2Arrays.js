//creating Array // Array literal(preferred)
let browsers = ["chrome", "firefox", "safari"];

//Array constructor
let scores = new Array(3);
scores[0] = 1;
scores[1] = 1; 
scores[2] = 1; 
let scores1 = new Array(1,2);
let scores2 = new Array(1,2,3);
console.log(scores);
console.log(scores1);
console.log(scores2);

let numbers = new Array(10,20,30,40,50);
console.log(numbers);

//Array.of
let test = Array.of(100,200,300,400,500);
console.log(test);

//Array.from

let char = Array.from("hello");
console.log(char);

let numbers1 = Array.from("123456789");
console.log(numbers1);