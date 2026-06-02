let fruits = ["banana", "apple", "orange", "guava"];
fruits.sort();
console.log(fruits);

let numbers = [3 ,1, 4];
numbers.sort();
console.log(numbers);

let nums = [3, 1, 4, 20, 10];
//nums.sort();
//console.log(nums);

nums.sort((a,b) => a - b); //ascending order
console.log(nums);
nums.sort((a,b) => b -a); //descending order
console.log(nums);