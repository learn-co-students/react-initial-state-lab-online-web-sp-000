import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  increment = () => {
    const currentCount = this.state.currentSlideIndex - 1
    this.setState({
      secondsLeft: currentCount
    })
  }

  render() {
    const SECONDS_LEFT = this.state.secondsLeft
    let response;
    if (SECONDS_LEFT === 0) {
       response = 'Boom!'
    } else {
      response = (SECONDS_LEFT + ' seconds left before I go boom!')
    }
    return (
      response
    )
  }
}
