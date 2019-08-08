import React, {Component} from 'react';

export default class Bomb extends Component {
constructor(props){
  super(props);
  this.state = {
    secondsLeft: this.props.initialCount
  };
}
  render(){
    let msg = '';
    if(this.state.secondsLeft){
      msg = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      msg = <p>Boom!</p>
    }
    return(msg)
  }
}
