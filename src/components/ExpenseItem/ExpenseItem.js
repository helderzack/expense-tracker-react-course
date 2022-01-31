import './ExpenseItem.css';

function ExpenseItem() {
  return(
    <div className='expense-item'>
      <div className='expense-date'>
        <p className='small-text'>
          <strong>March</strong>
        </p>
        <p className='small-text'>2021</p>
        <p>
          <strong>15</strong>
        </p>
      </div>
      <span>Expense Title</span>
      <span>Value</span>
    </div>
  );
}

export default ExpenseItem;