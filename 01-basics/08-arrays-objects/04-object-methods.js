// Objects and Methods
// ===================

const student = {

    name: "Adhi",

    age: 20,

    course: "Computer Science",

    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    },

    introduce: function () {
        console.log(
            `I am ${this.age} years old and studying ${this.course}.`
        );
    }
};


// Calling methods

student.greet();

student.introduce();


// Object.keys()

console.log(Object.keys(student));


// Object.values()

console.log(Object.values(student));


// Object.entries()

console.log(Object.entries(student));
