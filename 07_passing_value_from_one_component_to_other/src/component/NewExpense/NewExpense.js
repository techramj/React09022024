import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const saveExpenseHandler = (newExpenseData)=>{
        console.log('NewExpense component.newExpenseData=', newExpenseData);
        props.onDataAdded(newExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;