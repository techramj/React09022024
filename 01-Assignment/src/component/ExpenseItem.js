import React, {useState} from 'react';
import "./ExpenseItem.css";

function ExpenseItem(props) {
    //let title = props.expense.name;
    const[title, setTitle] = useState(props.expense.name);
    const clickHandler = ()=>{
        console.log('button clicked!!!!');
        //title = 'New '+title;
        //console.log(title);
        //setTitle('New '+title);
        setTitle((prev)=>{ return 'new '+ prev});
    }

    
    return (
        <div className="expense-item">
            <div>{props.expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
            {/* <button onClick={function(){ console.log('button clicked')}}>Click Here</button> */}
            {/* <button onClick={() => { console.log('button clicked!!')}}>Click Here</button> */}
            <button onClick={clickHandler}>Click Here</button>
        </div>    
    );
}

export default ExpenseItem;