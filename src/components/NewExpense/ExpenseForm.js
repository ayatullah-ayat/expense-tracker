
import { React, useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    let titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    let amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    let dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    let submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpense(expenseData);
    }
    const cancelHandler = () => props.onAddExpenseCancel();

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={ enteredTitle } onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={ enteredAmount } min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={ enteredDate } min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={ cancelHandler }>Cancel</button>
                <button>Add Expense</button>

            </div>
        </form>
    );
}

export default ExpenseForm;