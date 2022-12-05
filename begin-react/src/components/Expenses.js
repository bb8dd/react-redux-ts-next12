import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ data }) {
  return (
    <div className="expenses">
      <ExpenseItem date={data[0].date} title={data[0].title} amount={data[0].amount} />
      <ExpenseItem date={data[1].date} title={data[1].title} amount={data[1].amount} />
      <ExpenseItem date={data[2].date} title={data[2].title} amount={data[2].amount} />
    </div>
  );
}
