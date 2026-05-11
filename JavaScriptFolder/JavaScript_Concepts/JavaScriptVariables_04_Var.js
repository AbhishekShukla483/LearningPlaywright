var v = 10;
console.log(v);
function printHello() {
    console.log("Hello function");
    var v = 20;
    console.log(v);
    if(true) {
        var v = 30;
        console.log(v);
        }
        console.log("F --> " + v);
}
printHello();
