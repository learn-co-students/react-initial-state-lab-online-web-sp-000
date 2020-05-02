// your Bomb code here!
import React from 'react';
export default class Bomb extends React.Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

//should set the `secondsLeft` to the value of the `initialCount` prop:
//It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

  render() {
    if (this.state.secondsLeft > 0) {
      return (
        <div>{this.state.secondsLeft} seconds left before I go boom!</div>
      )
    }
    if (this.state.secondsLeft === 0) {
      return (
        <div>Boom!</div>
      )
    }
  }

}
