
const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('table-body');
let rowCount = 0;


function renderExpense(expense)   {
    const table = document.getElementById('table-body');
    const tableRow = document.createElement('tr');
    const id = 'row' + rowCount; 
// create row
// display date
    tableRow.setAttribute('id', id);
    const dateTableData = document.createElement('td');
    dateTableData.textContent = expense.date;
    tableRow.append(dateTableData);
    rowCount++;
    
// display category
    const categoryTableData = document.createElement('td');
    categoryTableData.textContent = expense.category;
    tableRow.append(categoryTableData);
    
// display expense proper
    const expenseTableData = document.createElement('td');
    expenseTableData.textContent = expense.expense;
    tableRow.append(expenseTableData);
    
// display currency
    const currencyTableData = document.createElement('td');
    currencyTableData.textContent = expense.currency;
    tableRow.append(currencyTableData);
    
// display amount
    const amountTableData = document.createElement('td');
    amountTableData.textContent = expense.amount;
    tableRow.append(amountTableData);
    
// display delete button
    let deleteExpenseBtn = document.createElement('button');
    deleteExpenseBtn.addEventListener('click', () => deleteFunction(id));
    deleteExpenseBtn.className = 'deleteExpenseBtn';
    deleteExpenseBtn.appendChild(document.createTextNode('x'));
    amountTableData.appendChild(deleteExpenseBtn);
    // de qué se tratan éstos?
    tableRow.append(amountTableData);
    table.append(tableRow);   

}


// call this when delete button is clicked:
function deleteFunction(id) {
    let tableRow = document.getElementById(id);
    tableRow.remove();
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

    renderExpense(usersExpense);

})






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

// STEP 2: Ensure user can add new expenses.
// DONE

// STEP 3: Ensure user can delete both individual entries and complete table.
// in progress...





