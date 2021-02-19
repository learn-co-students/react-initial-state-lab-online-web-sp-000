// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(prop) {
    super()
    this.state = {
      secondsLeft: prop.initialCount
    }
  }

  decrement = () => {
    const newCount = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newCount
    })
  }


  render() {
    return(
      <p onClick={this.decrement}>
        {this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}</p>
    )
  }
}
