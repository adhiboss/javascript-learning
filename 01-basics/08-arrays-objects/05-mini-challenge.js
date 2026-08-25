// student
│
├── name
├── age
├── course
├── marks → array
└── methods
     ├── getAverage()
     ├── getHighestMark()
     └── isPassed()
//

//code//
const student = {
    name: "Adhi",
    age: 20,
    course: "Computer Science",

    marks: [85, 78, 92, 88, 76],

    getAverage: function () {
        // Your code
    },

    getHighestMark: function () {
        // Your code
    },

    isPassed: function () {
        // Your code
    }
};

console.log("Name:", student.name);
console.log("Average:", student.getAverage());
console.log("Highest:", student.getHighestMark());
console.log("Passed:", student.isPassed());
