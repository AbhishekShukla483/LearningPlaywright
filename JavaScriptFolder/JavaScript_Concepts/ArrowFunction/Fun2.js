/* function add(a, b, c)
{
    return a+b+c;
}
let num = [1, 2, 3];
console.log(add(...num)); */

let env = "staing"; // global scope 
function setupConfig() {
    let timeout = 3000; // local scope 
    //console.log(env); // can access global 
    //console.log(timeout); // can acess local 
   
}
setupConfig();
console.log(env);
console.log(timeout);
