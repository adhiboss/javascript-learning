// JavaScript Array Methods
// ========================

const numbers = [1, 2, 3, 4, 5];


// forEach()
// Runs a function for every element

numbers.forEach(function (number) {
    console.log("Number:", number);
});


// map()
// Creates a NEW array

const doubled = numbers.map(function (number) {
    return number * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);


// filter()
// Keeps elements that satisfy a condition

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log("Even:", evenNumbers);


// find()
// Finds the first matching element

const result = numbers.find(function (number) {
    return number > 3;
});

console.log("Found:", result);


// includes()
// Checks whether an element exists

console.log(numbers.includes(3));
console.log(numbers.includes(10));


// reduce()
// Combines all values into one result

const total = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log("Total:", total);
