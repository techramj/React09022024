import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./../Card";

const Expenses = (props) => {
  console.log(props.data);
  return (
    <Card className="expenses">
      <ExpenseItem
        name={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></ExpenseItem>

      <ExpenseItem
        name={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></ExpenseItem>

      <ExpenseItem
        name={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></ExpenseItem>

      <ExpenseItem
        name={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
