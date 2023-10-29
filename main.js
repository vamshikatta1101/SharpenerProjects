let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

document.getElementById('expenseForm').addEventListener('submit', addExpense);


// Displaying
function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const expenseItem = `
            <div class="card " style="width: 20rem;">
            <h5 class="card-header">${expense.name}</h5>
                <div class="card-body">
                    <p class="card-text"><b>Amount :</b> ${expense.amount}</p>
                    <p class="card-text">${expense.description}</p>
                    <button type="button" onclick="editExpense(${index})" class="btn btn-primary mr-2">Edit</button>
                    <button type="button" onclick="deleteExpense(${index})" class="btn btn-danger">Delete</button>
                </div>
            </div>
        `;
        expenseList.innerHTML += expenseItem;
    });
    localStorage.setItem('expenses', JSON.stringify(expenses));
}



// Adding Expenses
function addExpense(event) {
    event.preventDefault();
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('description').value;
    const expense = { name: expenseName, amount: expenseAmount,description:description };
    expenses.push(expense);
    displayExpenses();
    document.getElementById('expenseForm').reset();
}

// Edit Expenses
function editExpense(index) {
    const newName = prompt('Enter Category of the Expense :\n 1.Movie\n 2.Shopping\n 3.Picnic\n 4.Dinner\n 5.Others');
    const newAmount = prompt('Enter new amount for the expense:');
    const newDescription = prompt('Enter Description');
    expenses[index].name = newName;
    expenses[index].amount = newAmount;
    expenses[index].description = newDescription;
    displayExpenses();
}


// Delete Expenses
function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}

document.getElementById('expenseForm').addEventListener('submit', addExpense);

displayExpenses();
