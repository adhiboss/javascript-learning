// JavaScript Functions
// ====================

// Basic function
function greet() {
    console.log("Hello, JavaScript!");
}

greet();


// Function with parameters
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Adhi");
greetUser("Developer");


// Function returning a value
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log("Result:", result);


// Another example
function calculateAge(birthYear) {
    const currentYear = 2026;

    return currentYear - birthYear;
}

const age = calculateAge(2006);

console.log("Age:", age);


// Arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// Short arrow function
const square = number => number * number;

console.log("Square:", square(5));
