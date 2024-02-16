import "./ExpenseItem.css";
import ExpneseDate from './ExpenseDate';
import Card from "./../Card";

function ExpenseItem({date, name, amount}) {
    return (
        <Card className="expense-item">
            <ExpneseDate date={date}></ExpneseDate>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </Card>    
    );
}

export default ExpenseItem;