# copy the project no 2
# modify the project
   Add Expenses component
    display the multiple ExpenseItem as per the array passed


## App.js
    const expenses = const expenses = [
        {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        },
        {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        },
    ];

    <Expneses expenses={expenses}>


## add component ExpenseDate and call it in ExpenseItem

    function ExpenseItem(props) {
        return (
            <div className="expense-item">
                <ExpenseDate date = {props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{name}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </div>    
        );
    }

## add the card component which is used as a compostion
   <Card>
        <ExpenseItem></ExpenseItem>
   </Card>

   <Card>
        <Expenses></Expenses>
   </Card>

