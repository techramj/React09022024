import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // document.getElementById().addEventListener((event)=>{});
  /*
  const [title, setTitle] =useState('');
  const [amount, setAmount] =useState('');
  const [date, setDate] =useState('');
  */

  const [expense, setExpense] = useState({'title':'', amount:'', date:''});

  const titleHandler = (event) => {
    console.log(event.target.value);
    //title = event.target.value;
    //setTitle(event.target.value);
    //setExpense({'title': event.target.value, amount:expense.amount, date:expense.date});
     // setExpense({...expense,title:event.target.value});
     setExpense((prev)=>{ 
      //console.log('prev',prev);
      return {...prev, title:event.target.value} });
  }

  const amountHandler = (event) => {
    console.log(event.target.value);
    //setAmount(event.target.value);
    //setExpense({'title': expense.title, amount:event.target.value, date:expense.date});
    setExpense({...expense,amount:event.target.value});
  }

  const dateHandler = (event) => {
    console.log(event.target.value);
    //setDate(event.target.value);
    //setExpense({'title': expense.title, amount:expense.amount, date:event.target.value});
    setExpense({...expense,date:event.target.value});
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min=".01" step="0.01" onChange={amountHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2020-01-01' max="2024-03-31" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add New Expense</button>
      </div>
      <p>{expense.title}</p>
      <p>{expense.amount}</p>
      <p>{expense.date}</p>
    </form>
    
  );
}

export default ExpenseForm;
