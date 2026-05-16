let userName;
console.log(userName); //Output: undefined
console.log(typeof userName); //Output: undefined


function greet() {
    //No return statement, so it returns undefined by default
}

   console.log(greet()); //Output: undefined

   let profilePicture = null;
   console.log(profilePicture); //Output: null
   console.log(typeof profilePicture); //Output: object

   let score = 100;
   score = null; //score is now null
   console.log(score); //Output: null

