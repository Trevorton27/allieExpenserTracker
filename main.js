const date = document.getElementById('date');
const category = document.getElementById('category');
const expense = document.getElementById('expense');
const currency = document.getElementById('currency');
const amount = document.getElementById('amount');
const expenseTable = document.getElementById('table-body');
let rowCount = 0;

const table = document.getElementById('table-body');

// submit an expense
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
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
  };

  renderExpense(usersExpense);
  form.reset();
});

function renderExpense(expense) {
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
  const deleteBtnCell = document.createElement('td');
  tableRow.append(deleteBtnCell);
  let deleteExpenseBtn = document.createElement('button');
  deleteExpenseBtn.addEventListener('click', () => deleteFunction(id));
  deleteExpenseBtn.className = 'deleteExpenseBtn';
  deleteExpenseBtn.appendChild(document.createTextNode('x'));
  deleteBtnCell.appendChild(deleteExpenseBtn);
  // de qué se tratan éstos?

  table.append(tableRow);
}

const deleteAllBtn = document.getElementById('delete-all');
deleteAllBtn.addEventListener('click', deleteAllRows);
// call this when delete button is clicked:
function deleteFunction(id) {
  let tableRow = document.getElementById(id);
  tableRow.remove();
}

function deleteAllRows() {
  table.remove();
  document.location.reload();
}
