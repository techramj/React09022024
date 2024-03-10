import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../Card";

function ExpenseItem(props) {
    //let [title, setTitle] = useState(props.name);

    return (
        <Card className="expense-item">
            <ExpenseDate date= {props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>    
    );
}

export default ExpenseItem;