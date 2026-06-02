
/* function categorizedStatusCode(code)
{
    if (code >=200 && code <=299)
    {
        console.log("Success");
    }
    else if (code >=300 && code <=399)
    {
        console.log("Redierction");
    }
    else if (code >=400 && code <=499)
    {
        console.log("Client Error");
    }
    else if (code >=500 && code <=599)
    {
        console.log("Server Error");
    }
    else
    {
        console.log("Invalid Status Code");
    }
}
categorizedStatusCode(600); */

function categorizedStatusCode(code)
{
    if (code >=200 && code <=299)
    {
        return "Success";
    }
    else if (code >=300 && code <=399)
    {
        return "Redirection";
    }
    else if (code >=400 && code <=499)
    {
        return "Client Error";
    }
    else if (code >=500 && code <=599)
    {
        return "Server Error";
    }
    else
    {
        return "Invalid Status Code";
    }
}
let result = categorizedStatusCode(500);
console.log(result);