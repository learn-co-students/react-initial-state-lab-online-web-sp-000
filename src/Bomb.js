import React, { Component } from 'react';

export class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  bombStatus = () => {
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>
        {this.bombStatus()}
      </div>
    );
  }
}

export default Bomb;
