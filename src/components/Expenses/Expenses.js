import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2022');
  const filterChangeHandler = year => {
    setFilterYear(year);
  }
  const filterExpenses = props.items.filter(item => item.date.getFullYear().toString() == filterYear);

  let expenseItemContent = filterExpenses.length == 0 && <p className='expense__item-fail'>Item Not Found</p>;

  if(filterExpenses.length > 0) {
    expenseItemContent = filterExpenses.map(item => 
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected = { filterYear } 
          onChangeFilter = { filterChangeHandler }
      />


      <ExpenseChart expenses = { filterExpenses }/>


      {
        expenseItemContent
      }
    </Card>
  );
}

export default Expenses;
