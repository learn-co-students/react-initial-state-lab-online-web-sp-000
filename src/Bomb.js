// your Bomb code here!

import React from 'react';

export default class Bomb extends React.component {
  constructor(props) {
  super()
  this.state = {
    secondsLeft: prop.initialCount
  }
}


  render() {
    const response = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
      return (
        <div>{response}</div>
      );
    }
}
