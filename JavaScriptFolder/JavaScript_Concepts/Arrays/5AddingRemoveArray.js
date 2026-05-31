let arr = [1,2,3];
arr.push(4,5,6);
console.log(arr);
//arr = [1,2,3,4,5,6]
//index:  0,1,2,3,4,5
arr.splice(2,1);
console.log(arr);
//arr = [1,2,4,5,6]
//index: 0,1,2,3,4
arr.splice(2,0,55);
console.log(arr);
//arr= [1,2,55,4,5,6]
//index:0,1,2,3,4,5
arr.splice(2,1,110); 
console.log(arr);
//arr= [1,2,110,4,5,6]
//index:0,1,2,3,4,5,
arr.splice(3,2,10,20)
console.log(arr);