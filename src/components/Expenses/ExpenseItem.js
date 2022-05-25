import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  let [title, setTittle] = useState(props.title);
  const clickHandler = () => {
    setTittle('Updated!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button className='btn' onClick={clickHandler}>Click Here</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
