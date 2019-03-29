// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const state = this.state.secondsLeft
    
    if ( state === 0) {
      return <div>Boom!</div>
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }
    
  }
}