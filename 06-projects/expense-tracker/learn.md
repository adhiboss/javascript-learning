Understand these four parts:

1. Array of objects
let expenses = [];

Then:

const expense = {
    id: Date.now(),
    description: description,
    amount: amount,
    category: category
};
2. Add
expenses.push(expense);
3. Delete
expenses = expenses.filter(function (expense) {
    return expense.id !== id;
});
4. Calculate total
const total = expenses.reduce(
    function (sum, expense) {
        return sum + expense.amount;
    },
    0
);


