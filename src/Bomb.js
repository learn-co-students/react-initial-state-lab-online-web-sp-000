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
        let countConditional = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>
                {countConditional}
            </div>
        )
    }
}

export default Bomb
