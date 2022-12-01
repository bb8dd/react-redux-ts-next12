import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const data = [
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
      <ExpenseItem data={data[0]} />
      <ExpenseItem data={data[1]} />
      <ExpenseItem data={data[2]} />
    </div>
  );
}

export default App;
