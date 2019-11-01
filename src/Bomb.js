// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  } //end of constructor

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  } //end of render
}

export default Bomb;
