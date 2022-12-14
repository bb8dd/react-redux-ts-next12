// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
import './ExpenseForm.css';

interface FormData {
  title: string;
  amount: number;
  date: Date;
}

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = event.target;
    switch (type) {
      case 'text':
        setUserInput((e) => ({ ...e, enteredTitle: event.target.value }));
        break;
      case 'number':
        setUserInput((e) => ({ ...e, enteredAmount: event.target.value }));
        break;
      case 'date':
        setUserInput((e) => ({ ...e, enteredDate: `${event.target.value}` }));
        break;
      default:
        break;
    }
  };
  const submitHandler = (evnet: React.FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();

    const expenseData: FormData = {
      title: userInput.enteredTitle,
      amount: Number(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    };
    setUserInput((e) => ({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    }));

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeHandler} value={userInput.enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="0" onChange={changeHandler} value={userInput.enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" onChange={changeHandler} value={userInput.enteredDate} />
        </div>
      </div>
      <div>
        <button className="new-expense__button" type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
