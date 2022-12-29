import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses({ data }: { data: ExpenseDate[] }) {
  return (
    <Card className="expenses">
      {data.map(((e) => (
        <ExpenseItem
          key={e.id}
          date={e.date}
          title={e.title}
          amount={e.amount}
        />
      )))}
    </Card>
  );
}
