// JavaScript Arrays
// =================

// Creating an array
const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++"
];

console.log(languages);

// Accessing elements
console.log(languages[0]);
console.log(languages[2]);

// Number of elements
console.log("Length:", languages.length);

// Changing an element
languages[1] = "TypeScript";

console.log(languages);

// Adding to the end
languages.push("Go");

console.log(languages);

// Removing from the end
languages.pop();

console.log(languages);

// Adding to the beginning
languages.unshift("HTML");

console.log(languages);

// Removing from the beginning
languages.shift();

console.log(languages);
