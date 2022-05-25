import React, {useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AddNewExpense from "./components/NewExpense/AddNewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenseData, setExpenseData] = useState(expenses);
  const [showNewExpense, setShowNewExpense] = useState(false);

  const saveExpenseData = expense => {
    setExpenseData(prevState => {
      return [expense, ...prevState];
    });
  }
  const addExpenseHandler = () => {
      setShowNewExpense(!showNewExpense);
  }

  return (
    <div>
      {showNewExpense ? <NewExpense onSaveExpenseData = { saveExpenseData } 
                        onAddExpense = { addExpenseHandler } /> : 
                        <AddNewExpense onAddExpense = { addExpenseHandler }
                        />}  
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
