// Student Marks Analyzer
// ======================


// Get HTML elements

const nameInput = document.getElementById("studentName");
const courseInput = document.getElementById("course");

const markInputs = [
    document.getElementById("mark1"),
    document.getElementById("mark2"),
    document.getElementById("mark3"),
    document.getElementById("mark4"),
    document.getElementById("mark5")
];

const analyzeButton = document.getElementById("analyzeButton");

const result = document.getElementById("result");


// Button event

analyzeButton.addEventListener("click", analyzeStudent);


// Main function

function analyzeStudent() {

    const name = nameInput.value;
    const course = courseInput.value;


    // Convert input values into numbers

    const marks = markInputs.map(input => {
        return Number(input.value);
    });


    // Validation

    if (
        name === "" ||
        course === "" ||
        marks.some(mark => mark === 0)
    ) {
        result.innerHTML = `
            <h2>Please fill all fields.</h2>
        `;

        return;
    }


    // Calculate total

    const total = marks.reduce((sum, mark) => {
        return sum + mark;
    }, 0);


    // Calculate average

    const average = total / marks.length;


    // Highest mark

    const highest = Math.max(...marks);


    // Lowest mark

    const lowest = Math.min(...marks);


    // Marks above 80

    const highMarks = marks.filter(mark => {
        return mark >= 80;
    });


    // Determine result

    const status = average >= 40
        ? "PASSED"
        : "FAILED";


    // Display result

    result.innerHTML = `
        <h2>Student Report</h2>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Course:</strong>
            ${course}
        </p>

        <p>
            <strong>Marks:</strong>
            ${marks.join(", ")}
        </p>

        <p>
            <strong>Total:</strong>
            ${total}
        </p>

        <p>
            <strong>Average:</strong>
            ${average.toFixed(2)}
        </p>

        <p>
            <strong>Highest:</strong>
            ${highest}
        </p>

        <p>
            <strong>Lowest:</strong>
            ${lowest}
        </p>

        <p>
            <strong>Marks ≥ 80:</strong>
            ${highMarks.join(", ") || "None"}
        </p>

        <p>
            <strong>Status:</strong>
            ${status}
        </p>
    `;
}
