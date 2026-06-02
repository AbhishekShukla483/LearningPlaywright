const greet = function(name) {
    return "Hello " +name;
}
let result = greet("Abhishek Shukla");
console.log(result);

const greet2 = (name) => "Hello " +name;
let result2 = greet2("Diksha Rane");
console.log(result2);

/* const doubleIt = (num) => num*2;
let result3 = doubleIt(5); 
console.log(result3); */

const doubleIt = num => num*2;
console.log(doubleIt(5));

const printIt = name => console.log(name);
printIt("Shukla Constructions");


