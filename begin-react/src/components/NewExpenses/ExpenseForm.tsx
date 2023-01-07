// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAmount, setenteredAmount] = useState('');
  const [enteredDate, setenteredDate] = useState('');

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setenteredTitle(event.target.value);
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setenteredAmount(event.target.value);
    console.log(enteredAmount);
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setenteredDate(`${event.target.value}`);
    console.log(enteredDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="0" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div>
        <button className="new-expense__button" type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
