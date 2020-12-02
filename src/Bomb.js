import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            secondsLeft: prop.initialCount
        }
    }

    render() {

        const callBoom = this.state.secondsLeft === 0 ?
        'Boom!' :
        `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>
                {callBoom}
            </div>
        )
    }
}

