// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      initialCount: props.value,
      secondsLeft: props.initialCount

    }
  }

  render () {
    let message
    if (this.state.secondsLeft !== 0)
     message = `${this.state.secondsLeft} seconds left before I go boom!`
    else
      message = "Boom!"
    return (
      <div>{message}</div>
    )
  }
}
