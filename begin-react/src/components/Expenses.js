import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ data }) {
  return (
    <div className="expenses">
      {data.map(((e) => <ExpenseItem date={e.date} title={e.title} amount={e.amount} />))}
    </div>
  );
}
