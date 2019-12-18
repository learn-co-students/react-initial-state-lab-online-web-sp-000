import React, { Component } from 'react'

export class Bomb extends Component {
    
    state = {
        secondsLeft: 120
    }
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        let zeroSeconds = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>
                {zeroSeconds}
            </div>
        )
    }
}

export default Bomb
