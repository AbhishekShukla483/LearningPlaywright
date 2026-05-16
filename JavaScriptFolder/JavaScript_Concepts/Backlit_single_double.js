// Single quote string
const singleQuote = 'Hello, World!';

// Double quote string
const doubleQuote = "Hello, World!";

// Backtick (template literal) string
const name = 'World';
const backtick = `Hello, ${name}!`;

console.log(singleQuote); // Hello, World!
console.log(doubleQuote); // Hello, World!
console.log(backtick);    // Hello, World!

// Backticks also support multi-line strings
const multiLine = `This is
a multi-line
string.`;

console.log(multiLine);
