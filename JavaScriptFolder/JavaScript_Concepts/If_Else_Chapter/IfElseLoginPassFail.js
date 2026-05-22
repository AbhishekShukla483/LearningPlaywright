/*let userName = "abc@gmail.com";
let passWord = "12345";

if(userName === "abc@gmail.com" && passWord === "1235")
{
    console.log("Login is successful");
}
else
{
    console.log("Either username or password is invalid");

} */

// Using function

function login(username, password)
{
    if(username === "abc@gmail.com" && password === 12345)
    {
        console.log("Login is successful");
        
    }
    else
    {
        console.log("Either username or password incorrect");
    }
}
login("abc@gmail.com", 12345);