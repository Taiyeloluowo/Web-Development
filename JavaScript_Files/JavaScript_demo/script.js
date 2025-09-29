
// This is your very first JavaScript code!
console.log("Hello, World!");


// **What just happened?**
// - `console.log()` is a function that displays messages in the console
// - The text inside quotes is called a "string"
// - This line ends with a semicolon (`;`) - this is good practice in JavaScript

// **Try these variations in your console:**


console.log("Welcome to JavaScript!");
console.log("My name is [Your Name]");
console.log("Today I'm learning to code!");

console.log("This is a regular message");

// Warning message (appears in yellow)
console.warn("This is a warning message");

// Error message (appears in red)
console.error("This is an error message");

// Information message (appears with info icon)
console.info("This is an info message");

// Creating variables with let (values can change)
let studentName = "Alice";
let studentAge = 20;

// Creating variables with const (values cannot change)
const schoolName = "JavaScript Academy";
const currentYear = 2024;

// Display the variables
console.log(studentName);
console.log(studentAge);
console.log(schoolName);
console.log(currentYear);
console.log(studentName);

// Good variable names - descriptive and follow conventions

let isActive = true;
let totalAmount = 99.99;


console.log("Active Status:", isActive);
console.log("Total Amount:", totalAmount);

// Strings - text data enclosed in quotes
let message1 = "Hello World";           // Double quotes
let message2 = 'JavaScript is fun';     // Single quotes
let message3 = `Learning to code`;      // Backticks (template literals)

// Strings can contain numbers, but they're treated as text
let zipCode = "12345";
let phoneNumber = "555-1234";

// Display the strings
console.log(message1);
console.log(message2);
console.log(message3);
console.log("Zip Code:", zipCode);
console.log("Phone:", phoneNumber);

// Check the type
console.log("Type of message1:", typeof message1);
console.log("Type of zipCode:", typeof zipCode);

let age = 25;
let price = 19.99;
let temperature = -5;
let distance = 1000;
let pi = 3.14159;

// Very large or small numbers
let bigNumber = 1000000;
let scientificNotation = 2.5e6;  // Same as 2,500,000

// Display the numbers
console.log("Age:", age);
console.log("Price:", price);
console.log("Temperature:", temperature);
console.log("Distance:", distance);
console.log("Pi:", pi);
console.log("Big Number:", bigNumber);
console.log("Scientific:", scientificNotation);

// Check the types
console.log("Type of age:", typeof age);
console.log("Type of price:", typeof price);
console.log("Type of scientific calculation:", typeof scientificNotation)

let isStudent = true;
let hasLicense = false;
let isOnline = true;
let isComplete = false;

// Display the booleans
console.log("Is Student:", isStudent);
console.log("Has License:", hasLicense);
console.log("Is Online:", isOnline);
console.log("Is Complete:", isComplete);

// Check the types
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of hasLicense:", typeof hasLicense);

// Booleans are often the result of comparisons
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);
console.log("Type of comparison result:", typeof isAdult);

// Undefined - declared but not assigned
let firstName;
let lastName;

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("Type of firstName:", typeof firstName);

// Null - intentionally empty
let middleName = null;
let nickname = null;

console.log("middleName:", middleName);
console.log("nickname:", nickname);
console.log("Type of middleName:", typeof middleName);  // This shows "object" - a JavaScript quirk!

// Assigning values later
firstName = "John";
lastName = "Doe";

console.log("After assignment:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);

