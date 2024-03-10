import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  console.log('Expenses component: ',props.data);
  return (
    <Card className="expenses">
       <ExpenseFilter/>
        {props.data.map(exp=>
          <ExpenseItem
          key = {exp.id}
          name={exp.title}
          amount={exp.amount}
          date={exp.date}
        ></ExpenseItem>
        )}
    </Card>
  );
};

export default Expenses;
