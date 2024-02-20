import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../Card";

function ExpenseItem(props) {
    //document.getElementById().addEventListener((event)=>{});
    //let title = props.name;
    let [title, setTitle] = useState(props.name);


    const buttonClickHandler = () =>{
        setTitle('value changed!!');
        //title = 'value changed!!';
        console.log('button clicked', title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date= {props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <div>
                <button onClick={buttonClickHandler}>Click Here</button>
            </div>
        </Card>    
    );
}

export default ExpenseItem;