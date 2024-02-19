import React from 'react';
import "./NewExpense.css";

const NewExpense = () =>{
    return (
        <form>
            <div>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Amount</label>
                    <input type="number"  minValue=".01"  ></input>
                </div>

                <div>
                    <label>Date</label>
                    <input type="date" />
                </div>

            </div>
            <button type="submit">Add New Expense</button>
            </div>
        </form>
    );
}

export default NewExpense;