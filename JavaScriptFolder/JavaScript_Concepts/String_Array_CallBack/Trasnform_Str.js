let str = " Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());
/* str.trimStart();
str.trimEnd(); */

let msg = "Test:Fail. Retry:Fail.";
console.log(msg.replace("Fail","Pass"));
console.log(msg.replaceAll("Fail","Pass"));

let url = "https://app.vwo.com?app=pramod";
console.log(url.replace("pramod","abhishek"));

let r = "pass, fail, skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(",");
console.log(rr);

let part = ["2024", "06","07"];
let date = part.join("/");
console.log(date);
