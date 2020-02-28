// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  // countdownTime = () => {
  //   if (this.state.secondsLeft === 0) {
  //     return 'Boom!'
  //   } else {
  //     return `${this.state.secondsLeft} seconds left before I go boom!`
  //   }
  // }

  render() {

    const countdownTime = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    
    return (
      <h1>{countdownTime}</h1>
    )
  }
}

export default Bomb