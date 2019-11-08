// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    state ={
        secondsLeft: this.props.initialCount
    }

    render () {
        return (
            this.state.secondsLeft > 0 ? <p>{this.state.secondsLeft} seconds left before I go boom!</p> : <p>Boom!</p>
        )
    }
}
export default Bomb