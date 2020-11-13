// your Bomb code here!
import React, { Component } from 'react'

export class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    render() {
        let msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!` ;
        return (
        <div>{msg}</div>    
        )
    }
}

export default Bomb
