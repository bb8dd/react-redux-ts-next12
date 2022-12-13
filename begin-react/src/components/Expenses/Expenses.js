import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ data }) {
  return (
    <Card className="expenses">
      {data.map(((e) => <ExpenseItem date={e.date} title={e.title} amount={e.amount} />))}
    </Card>
  );
}
