let firstName = "Abhishek Shukla";
let fullName = `Hi ${firstName} You are a millionare now!`;
console.log(fullName);

//real life example of template literals

let enviroment = "Production";
let userId = '#@Prod&^copy#$1234';
let apiUrl = `https://api.${enviroment}.tekeon.com/users/${userId}`;
console.log(apiUrl);


/*const rowIndex = 5;
const columnName = "email";
await page.locator(`[data-row-index="${rowIndex}'] [data-column-name="${columnName}"]`).click(); */

/* const testCase = "Checkout_flow";
const timeStamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timeStamp}.png` }); */

const name = "Diksha Rane";
const role = "Senior QA Engineer";
const payload = `[{"user":"${name}","role":"${role}"}]`;
console.log(payload);
