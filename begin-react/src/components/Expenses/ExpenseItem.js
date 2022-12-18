import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

export default function ExpenseItem({ date, title, amount }) {
  const onClick = () => { console.log('Clicked'); };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          $
          {amount}
        </div>
      </div>
      <button type="button" onClick={onClick}>Change Title</button>
    </Card>
  );
}
