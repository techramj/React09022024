import "./ExpenseItem.css";
import ExpneseDate from './ExpenseDate';

function ExpenseItem({date, name, amount}) {
    return (
        <div className="expense-item">
            <ExpneseDate date={date}></ExpneseDate>
            <div className="expense-item__description">
                <h2>{name}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>    
    );
}

export default ExpenseItem;