
const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('expense-list');


class expense   {
    constructor(date, category, expense, currency, amount, id)  {
        this.date = date;
        this.category = category;
        this.expense = expense;
        this.currency = currency;
        this.amount = amount;
        this.id = id;
    }
}


function generateExpense   {

    const date = document.createElement('td');
    date.textContent = expense.date;
    
    const category = document.getElementById('td');
    category.textContent = expense.category;

    const expense = document.getElementById('td');
    expense.textContent = expense.expense;

    const currency = document.getElementById('td');
    expense.textContent = expense.currency;

    const amount = document.getElementById('td');
    expense.textContent = expense.amount;

    const expenseTable = document.getElementById('td');
    
    // const row = document.createElement('tr');
    // const currencySymbol= this.verifyCurrencySymbol(expense);
    // createExpense(expense, currencySymbol, tr);


    // tr.textContent = 
    //     <td></td>
    //     <td></td>

    // submit-btn.addEventListener('click', function(e) {
    //     row.appendChild
    // });
    
}








// PROJECT PLAN:

// STEP 0: Create 4 input fields: date, expense, amount, entity. 
// DONE

// STEP 1: Get these inputs displaying in an HTML table.
// in progress...

// STEP 2: Ensure user can add new expenses, as in your todo app.

// STEP 3: Ensure user can delete both individual entries and complete table.

// - - - - - 

// STEP 4: Get data persisting properly.

// STEP 5: Create a slider (btn) for toggling between dark/light modes.

// STEP 6: Add currencies you use in XE app.

// STEP 7: Add categories [work, personal, household, leisure, invested, other].

// STEP 8: Add the type of change used [cash, credit].

// STEP 9: Add a pie chart that depicts where you put your money.

// STEP 10: Add a language slide button to toggle between EN & SP.

// STEP 11: Make sure to call the trash, "rubbish".