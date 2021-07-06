import React, { Component } from 'react'

class Bomb extends React.Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    notZero = () => {
        return `${this.state.secondsLeft} seconds left before I go boom!`
    }

    isZero = () => {
        return "Boom!"
    }

    render() {
        const message = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (<div>{message}</div>)
        

    }

}

export default Bomb
