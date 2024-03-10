import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
      a:'apple',
      b:'ball'
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers , a:curState.a+'s'};
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} a={this.state.a} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);
//const [a, setA] = useState('apple');
//const [b, setB] = useState('Ball');
//const [state, setState] = useState({ showUsers: true,more: 'Test', a:'apple', b:'ball'});

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
      // setState((prev)=> {return {showUsers: !prev.showUsers, more:prev.more, a:prev.a+'s', b:prev.b}});
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
