import { React } from 'react';

import './AddNewExpense.css';

const AddNewExpense = (props) => {

    const addNewExpenseHandler = (event) => props.onAddExpense();
    return (
        <div className="add-new-expense">
            <button onClick={ addNewExpenseHandler }>Add New Expense</button>
        </div>
    );
}

export default AddNewExpense;