// eslint-disable-next-line import/no-unresolved
import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  // 구조분해 할당 할 때 props를 먼저 받고 할당하는 게 좋은 지
  // props를 아예 구조분해 할당으로 받는 게 좋을 지

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="0" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" />
        </div>
      </div>
      <div>
        <button className="new-expense__button" type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
