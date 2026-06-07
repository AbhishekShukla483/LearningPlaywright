//Normal function

/*const validateStatusCode = function(status) {
    if(status >= 200 && status <=300) {
        console.log("This request is fine");
    }
    else {
        console.log("This request is not fine");
    }
    
} */


//Function with expression

/* const validateStatusCode2 = function(status) {
    if(status >= 200 && status <=300) {
        console.log("This request is correct");
    }
    else {
        console.log("This request is not correct");
    }
}
validateStatusCode2(400);
validateStatusCode2(200); */

//Arrow function

const validateStatusCode3 = (status) => {
    if(status >= 200 && status <=300) {
        console.log("This is valid response");
    }
    else {
        console.log("This is invalid response");
    }
}
validateStatusCode3(200);
validateStatusCode3(400);