// your Bomb code here!
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        let noTimeLeft = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
            <div>
                {noTimeLeft}
            </div>
            )
    }
}