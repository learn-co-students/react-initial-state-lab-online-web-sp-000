// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!";
  }

}

export default Bomb