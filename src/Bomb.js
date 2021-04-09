// your Bomb code here!

import React from "react";

export default class Bomb extends React.Component{

    state = {
        secondsLeft: this.props.initialCount
    }

    render() { 
        const timeLeft = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>{timeLeft}</div>
        )
    }
}