import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            secondsLeft: prop.initialCount
        }
    }

    callBoom() {
        if (this.state.secondsLeft === 0) {
            return 'Boom!';
        }else {
            return `${this.state.secondsLeft} seconds left before I go boom!`;
        }
    }

    render() {
        return (
            <div>
                {callBoom.bind(this)}
            </div>
        )
    }
}

