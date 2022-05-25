import { React } from "react";
import ExpenseForm from './ExpenseForm';

import "./NewExpense.css";

const NewExpense = (props) => {
    
    const expenseSubmitHandler = (expense) => {
        props.onSaveExpenseData({...expense, id: Math.floor(Math.random() * 200) + 1});
    }
    const AddExpenseCancelHandler = () => {
        props.onAddExpense()
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense = { expenseSubmitHandler } onAddExpenseCancel = { AddExpenseCancelHandler }/>
        </div>
    );
}

export default NewExpense;