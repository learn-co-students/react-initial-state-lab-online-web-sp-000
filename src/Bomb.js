// your Bomb code here!

import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    const timeLeft = this.state.secondsLeft
    if(timeLeft > 0){
      return <p>{timeLeft} seconds left before I go boom!</p>
    }
    else {
      return <h1>Boom!</h1>
    }
  }
}
