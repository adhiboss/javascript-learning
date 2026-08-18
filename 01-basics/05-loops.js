// JavaScript Loops
// ===============

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// while loop
let number = 1;

while (number <= 5) {
    console.log("While:", number);
    number++;
}

// Loop through an array
const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++"
];

for (let i = 0; i < languages.length; i++) {
    console.log("Language:", languages[i]);
}

// for...of
for (const language of languages) {
    console.log("Learning:", language);
}
