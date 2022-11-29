import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 29);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">
          $
          {expenseAmount}
        </div>
      </div>
    </div>
  );
}