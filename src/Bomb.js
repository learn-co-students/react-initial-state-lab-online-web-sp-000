// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    handleSeconds = () => {
        if (this.state.secondsLeft === 0) {
            return "Boom!"
        } else {
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }
    render() {
        return this.handleSeconds()
    }
}

export default Bomb