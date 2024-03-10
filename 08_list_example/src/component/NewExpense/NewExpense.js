import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const saveExpenseHandler = (newExpenseData)=>{
        props.onDataAdded(newExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;