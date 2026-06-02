function greetByName(name) {
    console.log("Hello", name);
}
greetByName("Amit");
let result = greetByName("Abhishek");
console.log(result); // Output: undefined

// Amit and Abhishek are printed but result is undefined    

function begger(money) {
    console.log("Thanks", money);
}
let giveMeMoney =begger(100000000000);
console.log(giveMeMoney); // output: undefined

//Thanks and 100000000000 are printed but giveMeMoreMoney is undefined


