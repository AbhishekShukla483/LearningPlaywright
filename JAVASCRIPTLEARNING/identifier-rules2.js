// ============================================================
// JavaScript Identifier Naming Conventions (Cases)
// ============================================================

// ------------------------------------------------------------
// 1. camelCase
// First word lowercase, each subsequent word capitalized.
// Most common in JavaScript for variables and functions.
// ------------------------------------------------------------

let userName = "Alice";
let totalPrice = 99.99;
let isAvailable = true;
let getUserData = function() { return userName; };
let updateTotalPrice = function(amount) { return totalPrice + amount; };

console.log("camelCase examples:", userName, totalPrice, isAvailable);

// ------------------------------------------------------------
// 2. PascalCase (UpperCamelCase)
// Every word starts with a capital letter.
// Used for class names, constructor functions, and React components.
// ------------------------------------------------------------

class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

class ProductDetails {
    constructor(price) {
        this.price = price;
    }
}

function CreateElement() {
    return { type: "div" };
}

const userAccount = new UserAccount("Alice");
const productDetails = new ProductDetails(49.99);

console.log("PascalCase examples:", userAccount.name, productDetails.price);

// ------------------------------------------------------------
// 3. snake_case
// All lowercase with underscores between words.
// Common in Python; sometimes used in JavaScript for constants or config keys.
// ------------------------------------------------------------

let user_name = "Bob";
let total_price = 49.50;
let is_available = false;
let fetch_user_data = function() { return user_name; };

console.log("snake_case examples:", user_name, total_price, is_available);

// ------------------------------------------------------------
// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE)
// All uppercase with underscores between words.
// Convention for constants and environment variables.
// ------------------------------------------------------------

const MAX_RETRY_COUNT = 5;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 3000;
const ENVIRONMENT_MODE = "production";

console.log("SCREAMING_SNAKE_CASE examples:", MAX_RETRY_COUNT, API_BASE_URL);

// ------------------------------------------------------------
// 5. kebab-case (dash-case)
// All lowercase with hyphens between words.
// NOT valid for JavaScript identifiers (variables/functions).
// Used in HTML attributes, CSS class names, and URLs.
// ------------------------------------------------------------

// let user-name = "invalid";     // ERROR: hyphen is interpreted as subtraction operator

// Valid usage outside JS identifiers:
// HTML: <div data-user-name="Alice"></div>
// CSS:  .my-class-name { color: red; }
// URL:  /user-profile/settings

// To demonstrate in strings/object keys:
const cssClassName = "user-profile-card";
const htmlAttribute = "data-user-name";
const routePath = "/order-history/details";

console.log("kebab-case examples:", cssClassName, htmlAttribute, routePath);

// ------------------------------------------------------------
// 6. Hungarian Notation
// Prefix indicates the variable type or purpose.
// Mostly outdated in modern JavaScript but seen in older codebases.
// ------------------------------------------------------------

let strName = "Alice";           // str = string
let nCount = 10;                 // n = number
let bIsActive = true;            // b = boolean
let arrUsers = ["Alice", "Bob"]; // arr = array
let objConfig = { timeout: 5000 };// obj = object
let elButton = null;             // el = DOM element

console.log("Hungarian Notation examples:", strName, nCount, bIsActive);

// ------------------------------------------------------------
// Summary Table
// ------------------------------------------------------------

const namingConventions = [
    { name: "camelCase",             example: "userName",           usage: "Variables, Functions" },
    { name: "PascalCase",            example: "UserAccount",        usage: "Classes, Constructors, Components" },
    { name: "snake_case",            example: "user_name",          usage: "Variables, Functions (less common)" },
    { name: "SCREAMING_SNAKE_CASE",  example: "MAX_COUNT",          usage: "Constants" },
    { name: "kebab-case",            example: "user-name",          usage: "HTML, CSS, URLs (not JS identifiers)" },
    { name: "Hungarian Notation",    example: "strName",            usage: "Legacy / Type hints in name" }
];

console.log("\nNaming Conventions Summary:");
namingConventions.forEach(conv => {
    console.log(`  ${conv.name.padEnd(24)} | ${conv.example.padEnd(20)} | ${conv.usage}`);
});
