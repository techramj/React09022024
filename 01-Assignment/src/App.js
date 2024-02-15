import Greet from "./Greet";
import ExpenseItem from './component/ExpenseItem';
function App() {
  let expense1 = {date:new Date(2023,2,14), name:'car', amount:54420.20};
  let expense2 = {date:new Date(2023,2,14), name:'Bike', amount:8000.20};
  let expense3 = {date:new Date(2023,2,14), name:'car Insurance', amount:200.15};
  return (
    <div>
      <h2>Let's get started!</h2>
      <Greet name="Jack"></Greet>
      <Greet name="John"></Greet>
      <Greet name="Jessica"></Greet>

      <hr></hr>
      <ExpenseItem expense={expense1}></ExpenseItem>
      <ExpenseItem expense={expense2}></ExpenseItem>
      <ExpenseItem expense={expense3}></ExpenseItem>
    </div>
  );
}

export default App;
