import React  from 'react';
import Button from '../UI/Button';
function CompA(){
    return(
        <React.Fragment>
            <h2>Hi Jack!!!</h2>
            <h3>Hello</h3>
            <Button type="submit">Add User</Button>
            <button type="submit">Add Student</button>
        </React.Fragment>  
    );
}

export default CompA;