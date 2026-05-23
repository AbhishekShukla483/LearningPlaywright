let testScore = 99;

switch(true)
{
    case(testScore >= 95):
    console.log("Outstanding Performance");
    break;

    case(testScore >=90):
    console.log("Excellent Performance");
    break;

    case(testScore >=85):
    console.log("Good Performance");
    break;

    case(testScore >=80):
    console.log("Meets expectation");
    break;

    case(testScore >75):
    console.log("Needs improvment");
    break;
    
    default:
        console.log("Unsatisfactory performance");
}