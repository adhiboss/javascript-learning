// JavaScript Objects
// ==================

const student = {
    name: "Adhi",
    age: 20,
    university: "Jain University",
    course: "Computer Science",
    skills: [
        "JavaScript",
        "HTML",
        "CSS"
    ]
};

console.log(student);


// Accessing properties

console.log(student.name);
console.log(student.age);
console.log(student.university);


// Bracket notation

console.log(student["course"]);


// Changing a property

student.age = 21;

console.log(student.age);


// Adding a new property

student.github = "adhiboss";

console.log(student);


// Deleting a property

delete student.github;

console.log(student);


// Accessing array inside object

console.log(student.skills[0]);
