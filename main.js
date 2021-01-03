
const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('table-body');


function displayExpense(expense)   {
    const table = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
// display date
    const dateTableData = document.createElement('td');
    dateTableData.textContent = expense.date;
    tableRow.append(dateTableData);
    table.append(tableRow);
// display category
    const categoryTableData = document.createElement('td');
    categoryTableData.textContent = expense.category;
    tableRow.append(categoryTableData);
    table.append(tableRow);
// display expense proper
    const expenseTableData = document.createElement('td');
    expenseTableData.textContent = expense.expense;
    tableRow.append(expenseTableData);
    table.append(tableRow);
// display currency
    const currencyTableData = document.createElement('td');
    currencyTableData.textContent = expense.currency;
    tableRow.append(currencyTableData);
    table.append(tableRow);
// display amount
    const amountTableData = document.createElement('td');
    amountTableData.textContent = expense.amount;
    tableRow.append(amountTableData);
    table.append(tableRow);


    // GET <tbody>
    // CREATE <tr> & <td>    
    // ADD INFO to <td>
    // APPEND <td> to <tr>
    // APPEND <tr> to <tbody>

}


// submit an expense
document.querySelector('form').addEventListener('submit', function(e)   {
    e.preventDefault();

    const date = document.getElementById('date');
    const category = document.getElementById('category');
    const expense = document.getElementById('expense');
    const currency = document.getElementById('currency');
    const amount = document.getElementById('amount');

    const usersExpense = {
        date: date.value, 
        category: category.value, 
        expense: expense.value, 
        currency: currency.value, 
        amount: amount.value
    }

    displayExpense(usersExpense);

})

// Delete ONE expense
// (adapted from my todo list app)
function deleteExpense() {
    const deleteExpenseBtn = document.createElement("button");
    deleteExpenseBtn.className = "deleteExpenseBtn";
    deleteExpenseBtn.appendChild(document.createTextNode("x"));
    deleteExpenseBtn.addEventListener("click", function(e) {       
        // deleteSingleTaskFromLocalStorage(task.text);
        ul.removeChild(li);
    });

    li.appendChild(deleteExpenseBtn);    
}










// save for later:

// clearFields() {
//     description.value = ''
//     amount.value = ''
//   }
//   setDateForToday() {
//     let today = new Date().toISOString().substr(0, 10);
//     document.getElementById('date').value = today;
//   }





// PROJECT PLAN:

// STEP 0: Create 4 input fields: date, expense, amount, entity. 
// DONE

// STEP 1: Get these inputs displaying in an HTML table.
// DONE

// STEP 2: Ensure user can add new expenses, as in your todo app.
// DONE

// STEP 3: Ensure user can delete both individual entries and complete table.
// in progress...
