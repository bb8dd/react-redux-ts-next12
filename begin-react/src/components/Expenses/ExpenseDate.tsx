import React from 'react';
import './ExpenseDate.css';

function ExpenseDate({ date }: { date:Date }) {
  const year = date.getFullYear();
  const month = date.toLocaleString('ko-KR', { month: 'long' });
  const day = date.toLocaleString('ko-KR', { day: '2-digit' });

  return (
    <div className="expense-date">
      <span className="expense-date__year">{year}</span>
      <span className="expense-date__month">{month}</span>
      <span className="expense-date__day">{day}</span>
    </div>
  );
}

export default ExpenseDate;
