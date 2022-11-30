import React from 'react';
import './ExpenseItem.css';

export default function ExpenseItem({ data }) {
  return (
    <div className="expense-item">
      <div>{data.title}</div>
      <div className="expense-item__description">
        <h2>{data.date}</h2>
        <div className="expense-item__price">
          $
          {data.mount}
        </div>
      </div>
    </div>
  );
}
