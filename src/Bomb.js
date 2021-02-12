import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        let remaining = this.state.secondsLeft
        if (remaining > 0) {
            return <div className="bomb">{remaining} seconds left before I go boom!</div>
        } else {
            return <div className="bomb">Boom!</div>
        }
    }   
}