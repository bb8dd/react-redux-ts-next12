import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

export default function ExpenseItem(props: ExpenseItemProps) {
  const { date, title, amount } = props;

  const [updateTitle, setTitle] = useState(title);

  const onClick = () => {
    setTitle('Update Title');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{updateTitle}</h2>
        <div className="expense-item__price">
          $
          {amount}
        </div>
      </div>
      <button type="button" onClick={onClick}>Change Title</button>
    </Card>
  );
}
