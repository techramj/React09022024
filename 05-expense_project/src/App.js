import ExpenseItem from "./component/ExpenseItem";

function App() {
  const date = new Date(2023,2,14);
  const name = "Car";
  const amount = 54420.20;

  const expenses = [];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem name={name} amount={amount} date={date}></ExpenseItem>
      <ExpenseItem name={'Bike'} amount={8000} date={new Date(2023,2,14)}></ExpenseItem>
      <ExpenseItem name={'car Insurance'} amount={200.15} date={date}></ExpenseItem>
    
    </div>
  );
}

export default App;
