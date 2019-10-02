// your Bomb code here!
import React from "react"

class Bomb extends React.Component {
  state = { secondsLeft: this.props.initialCount }

  bombTimer = () => {
    if (this.state.secondsLeft === 0) {
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
  render() {
    return <div>{this.bombTimer()}</div>
  }
}

export default Bomb
