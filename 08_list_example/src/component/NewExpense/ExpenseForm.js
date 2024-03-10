import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //let title = 'NA';
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

   const inputChangeHander = (identifier, value) => {
      if(identifier === 'title'){
        setTitle(value);
      }else if(identifier === 'amount'){
        setAmount(value);
      }else{
        setDate(value);
      }
   }

   const submitHandler = (event) =>{
    event.preventDefault(); //remove the default behaviour

    const expenseTobeAdded ={'title':title, 'amount':amount,'date':new Date(date)};
    
    setTitle('');
    setAmount('');
    setDate('');

    props.onSaveExpenseData(expenseTobeAdded);
   }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value={title}
          onChange={(event)=>inputChangeHander('title', event.target.value)} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min=".01" step="0.01" value={amount}
          onChange={(event)=>inputChangeHander('amount', event.target.value)}></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2020-01-01' max="2024-03-31"  value={date}
          onChange={(event)=>inputChangeHander('date', event.target.value)}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{date}</p>
    </form>
    
    
  );
}

export default ExpenseForm;
