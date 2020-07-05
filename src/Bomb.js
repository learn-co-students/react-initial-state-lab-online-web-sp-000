// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super()

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} until BOOM!`;
    
    return (
      <div>{message}</div>
    )
  }

}

export default Bomb;