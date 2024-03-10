import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  render() {
    console.log('a=',this.props.a);
    return <li className={classes.user}>{this.props.name} - {this.props.a}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
