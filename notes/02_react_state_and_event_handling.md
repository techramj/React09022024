# Handling event
# State in react


## Handle event in react

### method1
    <div>
        <button onClick={function(){console.log('button clicked')}}>Click Here</button>
    </div>

    <div>
        <button onClick={() =>{
            console.log('button clicked');
            
            }}>Click Here</button>
    </div>

### method2

    const buttonClickHandler = () =>{
        title = 'new Expense value';
        console.log('button clicked', title);
    }

    <div>
        <button onClick={buttonClickHandler}>Click Here</button>
    </div>


### updating Data via state
1. By Default react doesn't care about the changes of variable inside the component.
2. what is our expectation => on the change of the value, react reevaluate the JSX
3. for JSX reevaluation, react introduce the state


### one way binding vs two way binding
    one-way-binding
    -------------
    <input type="text"
          onChange={(event)=>inputChangeHander('title', event.target.value)} />
    </div>

    two-way binding
    ---------------
    <input type="text"  value={title}
          onChange={(event)=>inputChangeHander('title', event.target.value)} />
    </div>



