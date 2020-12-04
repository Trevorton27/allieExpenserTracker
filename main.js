
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
    
    const category = document.createElement('td');
    category.textContent = expense.category;

    const expense = document.createElement('td');
    expense.textContent = expense.expense;

    const currency = document.createElement('td');
    expense.textContent = expense.currency;

    const amount = document.createElement('td');
    expense.textContent = expense.amount;

    const expenseTable = document.createElement('td');
    

    // tr.textContent = 
    //     <td></td>
   

    // submit-btn.addEventListener('click', function(e) {
    //     row.appendChild
    // });
    
}


class expenseDisplay  {

    renderExpense(expense)  {
        const tr = document.createElement('tr');
        const currencySymbol = this.verifyCurrency(expense);
        generateExpense(expense, currencySymbol, tr);
        tr.id = expense.id;
        expenseTable.appendChild(tr);
    }

    verifyCurrency(expense) {
        let currencySymbol = expense.currency;

        switch(currencySymbol)  {
            case 'usDollar':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'peso':
                currencySymbol = 'fas fa-peso-sign';
                break;
            case 'pound':
                currencySymbol = 'fas fa-pound-sign';
                break;
            case 'euro':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'rand':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'canadianDollar':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'lira':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'real':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            case 'kuwaitiDinar':
                currencySymbol = 'fas fa-dollar-sign';
                break;
            default:
                currencySymbol = 'question';
                break;
        
        return currencySymbol;
        
        }
    }
}

// submit an expense
document.querySelector('form').addEventListener('submit', function(e)   {
    const usersExpense = new expense(date.value, category.value, expense.value, currency.value, amount.value)

    const expenseDisplay = new expenseDisplay();
    expenseDisplay.setDateForToday();

})




// PROJECT PLAN:

// STEP 0: Create 4 input fields: date, expense, amount, entity. 
// DONE

// STEP 1: Get these inputs displaying in an HTML table.
// in progress...
// break this step down into parts! ! ! ! ! ! (see handwritten notes)

// STEP 2: Ensure user can add new expenses, as in your todo app.

// STEP 3: Ensure user can delete both individual entries and complete table.

// - - - - - 

// STEP 4: Get data persisting properly.

// STEP 5: Create a slider (btn) for toggling between dark/light modes.

// STEP 6: Add currencies you use in XE [GBP, EUR, USD, ZAR, MXN, CAD, TRY, BRL, KWD].

// STEP 7: Add categories [business, personal, household, leisure, invested, other].
// Leave merchant out. It's covered in expense description if user wants to.

// STEP 8: Add the type of change used [cash, credit]. Actually, DON'T. Just have it be
// 'Method of Payment' and allow user to create these into a drop list. Cuz I'd personally
// want to combine both my bank and MOP, for example: WF CC / HSBC Debit / US AMEX.

// STEP 9: Add a pie chart that depicts where you put your money.

// STEP 10: Add a language slide button to toggle between EN & SP.

// STEP 11: Make sure to call the trash, "rubbish".

// STEP 12: Add to the copyright "with minimal help from Amitay" (or similar).

// STEP 13: Include one extra column that displays a country flag icon to left of currencySymbol.