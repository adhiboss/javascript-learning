// Expense Tracker
// ===============


// Store expenses

let expenses = [];


// Get HTML elements

const expenseForm = document.getElementById("expenseForm");

const descriptionInput =
    document.getElementById("description");

const amountInput =
    document.getElementById("amount");

const categoryInput =
    document.getElementById("category");

const expenseList =
    document.getElementById("expenseList");

const totalElement =
    document.getElementById("total");

const countElement =
    document.getElementById("count");


// Add expense

expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const description = descriptionInput.value;

    const amount = Number(amountInput.value);

    const category = categoryInput.value;


    // Create expense object

    const expense = {

        id: Date.now(),

        description: description,

        amount: amount,

        category: category

    };


    // Add object to array

    expenses.push(expense);


    // Clear form

    expenseForm.reset();


    // Update UI

    displayExpenses();

    updateSummary();

});


// Display expenses

function displayExpenses() {

    expenseList.innerHTML = "";


    if (expenses.length === 0) {

        expenseList.innerHTML = `
            <p class="empty">
                No expenses added yet.
            </p>
        `;

        return;
    }


    expenses.forEach(function (expense) {

        const expenseElement =
            document.createElement("div");

        expenseElement.className = "expense";


        expenseElement.innerHTML = `

            <div class="expense-info">

                <h3>
                    ${expense.description}
                </h3>

                <p>
                    ${expense.category}
                </p>

            </div>

            <strong>
                ₹${expense.amount}
            </strong>

            <button
                class="delete-button"
                onclick="deleteExpense(${expense.id})"
            >
                Delete
            </button>

        `;


        expenseList.appendChild(expenseElement);

    });

}


// Delete expense

function deleteExpense(id) {

    expenses = expenses.filter(function (expense) {

        return expense.id !== id;

    });


    displayExpenses();

    updateSummary();

}


// Update total and count

function updateSummary() {

    const total = expenses.reduce(
        function (sum, expense) {

            return sum + expense.amount;

        },
        0
    );


    totalElement.textContent =
        `₹${total}`;

    countElement.textContent =
        expenses.length;
}
