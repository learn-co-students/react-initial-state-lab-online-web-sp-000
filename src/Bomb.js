// your Bomb code here!
import React, { Component} from 'react';

export default class Bomb extends Component {


constructor(props) {
  super()
  this.state = {
    secondsLeft: props.initialCount,

  }
}

  displaySecondsLeft() {
    // let message;
    // if (this.state.secondsLeft === 0) {
    //   message = <p>Boom!</p>
    // } else {
    //   message = <p>{this.state.secondsLeft} seconds left before I go xxxbooooom!</p>
    // }
    //
    // return message


    if (this.state.secondsLeft === 0) {
      return <div>Boom!</div>
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }


  }




  render() {
    return (<div>{this.displaySecondsLeft()}</div>)
  }

}
