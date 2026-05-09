// ============================================================
// JavaScript Identifiers - Complete Examples
// ============================================================

// ------------------------------------------------------------
// Rule 1: Identifiers can contain letters, digits, underscores, and dollar signs
// ------------------------------------------------------------

let userName = "Alice";          // letters only
let userName123 = "Bob";         // letters and digits
let _private = "secret";         // starts with underscore
let $jquery = "library";         // starts with dollar sign
let _temp_var = 42;              // underscores in middle
let price$usd = 100;             // dollar sign in middle
let version_2_0 = "stable";      // multiple underscores and digits

// ------------------------------------------------------------
// Rule 2: Identifiers must NOT start with a digit
// ------------------------------------------------------------

let item1 = "valid";             // starts with letter, digit at end is OK
let _1stPlace = "gold";          // starts with underscore, digit inside is OK
let $2dollar = 2;                // starts with dollar sign, digit inside is OK

// The following are INVALID (commented out to prevent syntax errors):
// let 1stPlace = "gold";        // ERROR: starts with digit
// let 2ndItem = "silver";       // ERROR: starts with digit
// let 3dCube = "cube";          // ERROR: starts with digit

// ------------------------------------------------------------
// Rule 3: Identifiers cannot be reserved keywords
// ------------------------------------------------------------

// The following are INVALID because they are reserved keywords:
// let var = 1;                  // ERROR: 'var' is a keyword
// let function = 2;             // ERROR: 'function' is a keyword
// let class = 3;                // ERROR: 'class' is a keyword
// let return = 4;               // ERROR: 'return' is a keyword
// let if = 5;                   // ERROR: 'if' is a keyword
// let else = 6;                 // ERROR: 'else' is a keyword
// let while = 7;                // ERROR: 'while' is a keyword
// let for = 8;                  // ERROR: 'for' is a keyword
// let const = 9;                // ERROR: 'const' is a keyword
// let let = 10;                 // ERROR: 'let' is a keyword (in strict mode)

// Workarounds: add a prefix or suffix to avoid the keyword
let myVar = 1;
let myFunction = 2;
let myClass = 3;
let _return = 4;
let ifAllowed = 5;
let elseCase = 6;
let whileLoop = 7;
let forLoop = 8;
let constValue = 9;

// ------------------------------------------------------------
// Rule 4: Identifiers are case-sensitive
// ------------------------------------------------------------

let username = "lowercase";
let Username = "Capitalized";
let UserName = "CamelCase";
let USERNAME = "UPPERCASE";

console.log(username);   // "lowercase"
console.log(Username);   // "Capitalized"
console.log(UserName);   // "CamelCase"
console.log(USERNAME);   // "UPPERCASE"

// These are four completely different variables!

// ------------------------------------------------------------
// Rule 5: Identifiers may contain Unicode characters and escape sequences
// ------------------------------------------------------------

let ユーザー = "Japanese";       // Unicode letters are valid
let имена = "Russian";          // Cyrillic letters are valid
let μετρητής = "Greek";         // Greek letters are valid
let 变量 = "Chinese";           // Chinese characters are valid
let A = "escape A";        // \u0041 is Unicode escape for 'A' (so this variable is 'A')
let _value = "escape";      // \u005F is '_' (so this variable is '_value')

// ------------------------------------------------------------
// Summary Table
// ------------------------------------------------------------

const examples = {
  valid: [
    "name",          // letters only
    "name123",       // letters + digits
    "_name",         // underscore prefix
    "$name",         // dollar sign prefix
    "first_name",    // snake_case
    "$",             // lone dollar sign
    "_",             // lone underscore
    "αβγ",           // Greek letters
    "名",            // Chinese character
  ],
  invalid: [
    "123name",       // starts with digit
    "my-name",       // hyphens not allowed (becomes subtraction)
    "my name",       // spaces not allowed
    "var",           // reserved keyword
    "function",      // reserved keyword
    "class",         // reserved keyword
  ]
};

console.log("Valid examples:", examples.valid);
console.log("Invalid examples:", examples.invalid);
