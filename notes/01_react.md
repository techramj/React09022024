# prerequiste:
    Basic web dev(HTML + CSS) & basic Javascript knowledge

# what is react & why we use it
    A JS library for building user interface.

    Before react, we use JS to build user interface.

    React  => Declartive UI programming

# why not JS
1. It quickly become complexity
2. quickly become error-prone


# Component-Driven User Interface
    React core syntax and JSX


## Rules
1. write the component of similar type in a directory
2. for every component, create a new file
3. create function and name it in initcap. Eg: ExpenseItem
4. return the function which contain jsx code using default
5. don't return multiple element in a function
        
        //wrong
        function ExpenseItem() {
            return (
                <h2>Hello</h2>
                <h3>Hii</h3>    //not allowed 
            );
        }

        //correct
        function ExpenseItem() {
            return (
                <div>
                    <h2>Hello</h2>
                    <h3>Hii</h3>
                </div>   
            );
        }

6. pass the value using {} and don't pass object inside {}

        function ExpenseItem() {
            const expenseDate = new Date(2023,2,10);
            const expenseTitle = "Teddy Bear";
            const expenseAmount = 420.20;
            return (
                <div className="expense-item">
                    <div>{expenseDate}</div>            //error
                    <div className="expense-item__description">
                        <h2>{expenseTitle}</h2>
                        <div className="expense-item__price">${expenseAmount}</div>
                    </div>
                </div>    
            );
        }


7. we can pass variable or expression  inside {}

        {1+1}
        {Math.round(100.0334,2)}

## props
    props are the attributes

    App.js
    -----
     <ExpenseItem name={name} amount={amount} date={date}></ExpenseItem>

    ExpenseItem.js
    ---------------
    function ExpenseItem(props) {
        console.log(props);
        const expenseDate = props.date;
        const expenseTitle = props.name;
        const expenseAmount = props.amount;
       
        return (
            <div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </div>    
        );
    }
-----------------------------------------------------------------------------------
    App.js
    -----
     <ExpenseItem name={name} amount={amount} date={date}></ExpenseItem>

    ExpenseItem.js
    ---------------
    function ExpenseItem(props) {
        return (
            <div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.name}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </div>    
        );
    }

----------------------------------------------------------------------
    App.js
    -----
     <ExpenseItem name={name} amount={amount} date={date}></ExpenseItem>

    props ={name:'TV', amout:300, date:new Date()}
    ExpenseItem.js
    --------------
    function ExpenseItem({date, name, amount}) {
        return (
            <div className="expense-item">
                <div>{date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{name}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </div>    
        );
    }


-----------------------------------------------
App.js
    Expenses.js => array of expenses
        ExpenseItem.js  => expense
            ExpenseDate.js

        ExpenseItem.js  => expense
           ExpensDate.js

        ExpenseItem.js  => expense
            ExpenseDate.js
        ..
        ..

