let isLoggedIn = true; 

let userRole = "Admin";

if (isLoggedIn)
{
    if(userRole === "Admin")
    {
        console.log("Can do everything except access take access from other roles");
    }
    else if(userRole === "Editor")
    {
        console.log("Can edit and view");
    }
    else if(userRole === "Viewer")
    {
        console.log("Can only view")
    }
    else{
        console.log("SuperAdmin: --> Can do everything including take access from other user even from admin");

    }
}
else
{
    console.log("You are not logged in");
}