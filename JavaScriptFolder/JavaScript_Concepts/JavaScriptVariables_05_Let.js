let l = 10;
console.log(l);
function printHello() {
    console.log("Hello funciton");
    let l = 20;
    console.log(l);
    if(true) {
        let l = 30;
        console.log(l);
    }
    console.log("F --> " + l);

}
console.log("G --> " + l);
printHello();