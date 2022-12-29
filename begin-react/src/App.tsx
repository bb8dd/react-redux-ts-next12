import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {
  const ExpenseData: ExpenseDate[] = [
    {
      id: 1,
      title: 'Car',
      amount: 300,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: 'Phone',
      amount: 100,
      date: new Date(2022, 12, 1),
    },
    {
      id: 3,
      title: 'Watch',
      amount: 200,
      date: new Date(2021, 3, 29),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses data={ExpenseData} />
    </div>
  );
}

export default App;
