var v = 10;
console.log(v); //Global scope
function printHello() {
    console.log("The testing academy playwright course");
    var v = 20; //local scope
    console.log(v);
}
printHello();
if (true) {
    var v = 30; //local varialbe
    console.log(v);
}