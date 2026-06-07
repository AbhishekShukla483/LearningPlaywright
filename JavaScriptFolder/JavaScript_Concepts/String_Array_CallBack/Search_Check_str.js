//searching and checking
let url = "https://staging.vwo.com/api/login?retry=true";
//includes
console.log(url.includes("staging"));
console.log(url.includes("production"));
//starts-with
url.startsWith("https");//true
url.startsWith("https");//false
url.endsWith("true");//true

//index of /LastIndex of
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.search("login"));
console.log(url.search("vwo"));



