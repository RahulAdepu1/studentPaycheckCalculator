// Select the form and the table
const form = document.querySelector('#details form');
const table = document.querySelector('#salary-table tbody');

// Add event listener to the form submit button
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the default form submission behavior
  
  // Get the form values
  const dateFrom = this.querySelector('#date-from').value;
  const dateTo = this.querySelector('#date-to').value;
  const salaryAmount = this.querySelector('#salary-amount').value;
  const taxAmount = this.querySelector('#tax-amount').value;
  
  // Create a new row in the table
  const newRow = document.createElement('tr');
  
  // Create the cells for the row
  const dateFromCell = document.createElement('td');
  const dateToCell = document.createElement('td');
  const salaryAmountCell = document.createElement('td');
  const taxAmountCell = document.createElement('td');
  const editButtonCell = document.createElement('td');
  
  // Add the cell content
  dateFromCell.textContent = dateFrom;
  dateToCell.textContent = dateTo;
  salaryAmountCell.textContent = salaryAmount;
  taxAmountCell.textContent = taxAmount;
  editButtonCell.innerHTML = '<button>Edit</button>';
  
  // Add the cells to the row
  newRow.appendChild(dateFromCell);
  newRow.appendChild(dateToCell);
  newRow.appendChild(salaryAmountCell);
  newRow.appendChild(taxAmountCell);
  newRow.appendChild(editButtonCell);
  
  // Add the row to the table
  table.appendChild(newRow);
  
  // Reset the form
  this.reset();
});
