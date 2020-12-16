
const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('table-body');


function displayExpense(expense)   {

    console.log('Display expense: ', expense);

    // const tr = document.createElement('tr');
    // expenseTable.appendChild(tr);

    // const currencySymbol = assignCurrency(expense);
    
    // const date = document.createElement('td');
    // date.textContent = expense.date;
    
    // const category = document.createElement('td');
    // category.textContent = expense.category;

    // const expense = document.createElement('td');
    // expense.textContent = expense.expense;

    // const currency = document.createElement('td');
    // expense.textContent = currencySymbol;

    // const amount = document.createElement('td');
    // expense.textContent = expense.amount;

}


function assignCurrency(expense) {

    let currencySymbol = expense.currency;

    switch(currencySymbol)  {
        case 'usDollar':
            currencySymbol = 'fas fa-dollar-sign';
            break;
        case 'peso':
            currencySymbol = 'fas fa-dollar-sign';
            break;
        case 'pound':
            currencySymbol = 'fas fa-pound-sign';
            break;
        case 'euro':
            currencySymbol = 'fas fa-euro-sign';
            break;
        case 'canadianDollar':
            currencySymbol = 'fas fa-dollar-sign';
            break;
        case 'japaneseYen':
            currencySymbol = 'fas fa-yen-sign';
            break;
        case 'indianRupee':
            currencySymbol = 'fas fa-rupee-sign';
            break;
        default:
            currencySymbol = 'question';
            break;
    
    return currencySymbol;
    
    }
}


// submit an expense
document.querySelector('form').addEventListener('submit', function(e)   {
    e.preventDefault();

    const date = document.getElementById('date');
    const category = document.getElementById('category');
    const expense = document.getElementById('expense');
    const currency = document.getElementById('currency');
    const amount = document.getElementById('amount');
    const expenseTable = document.getElementById('table-body');

    const usersExpense = {
        date: date.value, 
        category: category.value, 
        expense: expense.value, 
        currency: currency.value, 
        amount: amount.value
    }

    displayExpense(usersExpense);

})




// use below to render the table once you've generated it

// let table = document.createElement("table");

//     for (let i = 0; i < 10; i++) {
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         tr.appendChild(td);
//         table.appendChild(tr);
//     }
//     target.appendChild(table);







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