import { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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

function App() {
 
  let [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) =>{
    //console.log("App component. newExpense=>", newExpense);
    //expenses.push({...newExpense, id:'e' +Math.round(Math.random()*10 +5)});
    //console.log('expenes', expenses);
    setExpenses((prev)=>{
      return [{ id:'e' +Math.round(Math.random()*10 +5), ...newExpense}, ...prev];
    })
  }
  return (
    <div>
      <NewExpense  onDataAdded={addExpenseHandler}></NewExpense>
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
