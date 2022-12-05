import React from 'react';
import './ExpenseDate.css';

function ExpenseDate({ date }) {
  console.log(date);
  const year = date.getFullYear();
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  const day = date.toLocaleString('ko-KR', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expens-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>

  );
}

export default ExpenseDate;
