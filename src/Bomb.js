import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    handleSeconds = (seconds) => {
        if (seconds === 0) {
            return (<p>Boom!</p>)
        } else {
            return (<p>{seconds} seconds left before I go boom!</p>)
        }
    }

    render() {
        return (
            <div>
                {this.handleSeconds(this.state.secondsLeft)}
            </div>
        )
    }
}